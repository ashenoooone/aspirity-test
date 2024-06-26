import { UserProfile, UserType } from '@/entities/user';

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
  const profile = await getProfileFromServer({
    id: params.id,
  });
  return (
    <div>
      <UserProfile user={profile.profile} />
    </div>
  );
}
