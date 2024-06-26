import profile from './profile.json';

export async function GET() {
  console.log(profile);
  return Response.json({ profile }, {});
}
