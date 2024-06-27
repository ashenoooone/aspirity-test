import { UserProfile, UserType } from '@/entities/user';
import { getAllCountries } from '@/entities/countries/api';
import { Button } from '@/shared/ui/button';
import Link from 'next/link';
import { Chevron } from '@/shared/assets/chevron';

const getProfileFromServer = async ({
  id,
}: {
  id: number;
}): Promise<{ profile: UserType }> => {
  return await fetch(
    `http://localhost:3000/profile/api/${id}`,
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
      <Button
        variant={'transparent_alternative'}
        className={'mb-2 uppercase'}
      >
        <Link
          href={'/'}
          className={'flex items-center gap-2'}
        >
          <Chevron className={'rotate-90'} />
          Вернуться к сотрудникам
        </Link>
      </Button>
      <UserProfile
        countries={countries}
        user={profile.profile}
      />
    </div>
  );
}
