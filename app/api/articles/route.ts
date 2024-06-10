import { type NextRequest } from "next/server";

const ONE_HOUR_IN_SECONDS = 3600;

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const limit = searchParams.get("limit");
  const offset = searchParams.get("offset");

  const res = await fetch(
    `https://api.spaceflightnewsapi.net/v4/articles/?limit=${limit}&offset=${offset}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: ONE_HOUR_IN_SECONDS },
    }
  );
  if (!res.ok) {
    throw new Error('Falha ao buscar as notícias. Tente novamente mais tarde')
  }

  const data = await res.json();
  return Response.json({ data }, { status: 200 });
}
