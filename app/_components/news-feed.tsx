import { getArticles } from "../_lib/articles";
import { ArticleCard } from "./article-card";
import { FeaturedArticleCard } from "./featured-article-card";

export async function NewsFeed({
  limit = 11,
  offset = 0,
}: {
  limit?: number;
  offset?: number;
}) {
  
  const articlesData = await getArticles({ limit, offset });

  const featuredArticle = articlesData.results[0];
  const articles = articlesData.results.slice(1);

  return (
    <section id="news-feed" className="flex flex-col gap-16">
      <FeaturedArticleCard
        id={featuredArticle.id}
        title={featuredArticle.title}
        summary={featuredArticle.summary}
        image_url={featuredArticle.image_url}
        news_site={featuredArticle.news_site}
        published_at={featuredArticle.published_at}
      />
      <section className="p-5 md:p-0 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 items-start ">
        {articles.map((article) => (
          <ArticleCard
            key={article.id}
            id={article.id}
            title={article.title}
            summary={article.summary}
            image_url={article.image_url}
            news_site={article.news_site}
            published_at={article.published_at}
          />
        ))}
      </section>
    </section>
  );
}
