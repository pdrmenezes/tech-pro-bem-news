export type APIGetArticlesResponse = {
  count: number;
  next: string;
  previous: string;
  results: APIArticleByIdResponse[];
};

export type APIArticleByIdResponse = {
  id: number;
  title: string;
  url: string;
  image_url: string;
  news_site: string;
  summary: string;
  published_at: string;
  updated_at: string;
  featured: boolean;
  launches: [
    {
      launch_id: string;
      provider: string;
    }
  ];
  events: [
    {
      event_id: number;
      provider: string;
    }
  ];
};

export type ArticleProps = Partial<
  Pick<
    APIArticleByIdResponse,
    | "id"
    | "title"
    | "url"
    | "image_url"
    | "news_site"
    | "summary"
    | "published_at"
    | "featured"
  >
>;

export type GetArticlesProps = {
  limit?: number | undefined;
  offset?: number | undefined;
};
