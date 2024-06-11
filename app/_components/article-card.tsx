import Link from "next/link";
import { type ArticleProps } from "../_types/Articles";

export function ArticleCard(props: ArticleProps) {
  return (
    <article className="p-5 transform duration-300 hover:-translate-y-1 rounded-lg outline outline-1 outline-neutral-700 hover:shadow-2xl lg:h-full group">
      <div className="overflow-hidden">
        <img
          className="transform duration-500 rounded-sm group-hover:opacity-50 aspect-video"
          src={props.image_url || ""}
          alt={props.title || ""}
        />
      </div>
      <div className="p-4 absolute bg-gray-200 rounded-full top-10 right-10 transform duration-500 opacity-0 group-hover:opacity-100">
        <Link href={`/articles/${props.id}`}>
          <svg
            className="w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="rgba(0,0,0,0.5)"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </Link>
      </div>
      <div className="flex justify-between mt-6">
        <small className="pb-1 font-semibold text-neutral-300 border-b-2 border-green-500">
          {props.news_site}
        </small>
        {props.published_at && (
          <small className="pb-1 font-semibold text-neutral-400">
            {new Date(props.published_at).toLocaleDateString(undefined, {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </small>
        )}
      </div>
      <h3 className="mt-6 text-xl line-clamp-3 text-neutral-200">
        {props.title}
      </h3>
      <p className="mt-6 text-sm line-clamp-4 leading-relaxed text-neutral-400">
        {props.summary}
      </p>
    </article>
  );
}
