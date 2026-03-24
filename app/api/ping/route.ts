export async function GET() {
  const url = "https://amahogar-marketplaces.vercel.app/";

  const res = await fetch(url);

  return Response.json({
    status: res.status,
    ok: res.ok,
    pinged: url,
    timestamp: new Date().toISOString(),
  });
}
