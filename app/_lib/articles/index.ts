import {
  APIArticleByIdResponse,
  APIGetArticlesResponse,
  GetArticlesProps,
} from "@/app/_types/Articles";
import { ONE_HOUR_IN_SECONDS } from "../constants";

export async function getArticles({
  limit = 11,
  offset = 0,
}: GetArticlesProps) {
  const response = await fetch(
    `https://api.spaceflightnewsapi.net/v4/articles/?limit=${limit}&offset=${offset}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: ONE_HOUR_IN_SECONDS },
    }
  );
  if (!response.ok) {
    throw new Error("Falha ao buscar as notícias. Tente novamente mais tarde");
  }
  const data: Awaited<APIGetArticlesResponse> = await response.json();
  return data || [];
}

export async function getArticleById({ id }: { id: number }) {
  const response = await fetch(
    `https://api.spaceflightnewsapi.net/v4/articles/${id}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: ONE_HOUR_IN_SECONDS },
    }
  );
  if (!response.ok) {
    throw new Error(
      "Falha ao buscar a notícia escolhida. Tente novamente mais tarde"
    );
  }
  const data: Awaited<APIArticleByIdResponse> = await response.json();
  return data || [];
}
