import profile from './profile.json';
import profile1 from './profile_1.json';
import profile2 from './profile_2.json';

export async function GET(request: Request) {
  const id = request.url.split('/').reverse()[0];
  console.log(id);
  if (id === '1') {
    return Response.json({ profile: profile1 }, {});
  }
  if (id === '2') {
    return Response.json({ profile: profile2 }, {});
  }

  return Response.json({ profile }, {});
}
