export type APIGetArticlesResponse = {
  data: {
    count: number;
    next: string;
    previous: string;
    results: APIArticleResponse[];
  };
};

export type APIArticleByIdResponse = {
  data: APIArticleResponse;
};

export type APIArticleResponse = {
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
    APIArticleResponse,
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
