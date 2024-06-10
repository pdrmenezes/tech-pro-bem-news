import { type NextRequest } from "next/server";

const ONE_HOUR_IN_SECONDS = 3600;

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;

  const res = await fetch(
    `https://api.spaceflightnewsapi.net/v4/articles/${id}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: ONE_HOUR_IN_SECONDS },
    }
  );
  if (!res.ok) {
    throw new Error("Falha ao buscar a notícia escolhida. Tente novamente mais tarde");
  }
  const data = await res.json();
  return Response.json({ data }, { status: 200 });
}
