import { UserProfile, UserType } from '@/entities/user';
import { getAllCountries } from '@/entities/countries/api';
import { useCountriesStore } from '@/entities/countries/countries.store';

const getProfileFromServer = async ({
  id,
}: {
  id: number;
}): Promise<{ profile: UserType }> => {
  return await fetch(
    `${process.env.NEXT_URL}/profile/api/${id}`,
    {
      cache: 'no-cache',
    },
  ).then((res) => {
    if (res.ok) {
      return res.json();
    }
    throw new Error('Something went wrong');
  });
};

export default async function ProfilePage({
  params,
}: {
  params: { id: number };
}) {
  const profileData = getProfileFromServer({
    id: params.id,
  });
  const countriesData = getAllCountries();

  const [profile, countries] = await Promise.all([
    profileData,
    countriesData,
  ]);

  return (
    <div>
      <UserProfile
        countries={countries}
        user={profile.profile}
      />
    </div>
  );
}
