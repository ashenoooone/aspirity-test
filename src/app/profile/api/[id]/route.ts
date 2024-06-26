import profile from './profile.json';

export async function GET() {
  return Response.json({ profile }, {});
}
