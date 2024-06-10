import Link from "next/link";
import { type ArticleProps } from "../_types/Articles";

export function FeaturedArticleCard(props: ArticleProps) {
  return (
    <div className="relative px-10 md:p-0 transform duration-500 rounded-md overflow-hidden hover:-translate-y-1 ">
      <img className="xl:max-w-6xl" src={props.image_url} alt={props.title} />
      <div className="bg-white p-4 pt-8 md:p-12 pb-12 lg:max-w-lg w-full rounded-md lg:absolute top-44 right-5">
        <div className="flex justify-between font-bold text-sm">
          <p className="text-neutral-900">{props.news_site}</p>
          {props.published_at && (
            <p className="text-neutral-500">
              {new Date(props.published_at).toLocaleDateString(undefined, {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          )}
        </div>
        <h2 className="text-md sm:text-xl md:text-2xl text-neutral-900 font-semibold mt-4 md:mt-10">
          {props.title}
        </h2>
        <p className="my-3 text-sm md:text-base font-medium text-gray-700 leading-relaxed">
          {props.summary}
        </p>
        <Link href={`/articles/${props.id}`}>
          <button className="mt-2 md:mt-5 bg-neutral-900 rounded-md px-4 py-2 hover:bg-neutral-800 transition-colors font-medium">
            Read More
          </button>
        </Link>
      </div>
    </div>
  );
}
