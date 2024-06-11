import { getArticleById } from "@/app/_lib/articles";
import { Suspense } from "react";

export default async function ArticlePage({
  params,
}: {
  params: { id: number };
}) {

  const id = params.id;
  const article = await getArticleById({ id });

  return (
    <div className="px: max-w-prose mx-auto mt-10 pt-4 pb-10">
      <Suspense fallback="Loading...">
        <img
          src={article.image_url}
          alt={article.title}
          className="max-w-6xl w-full h-auto rounded-md"
        />
        <h2 className="my-4 text-3xl font-bold text-neutral-200">
          {article.title}
        </h2>
        <p className="mb-10 text-neutral-300 text-sm italic">
          {article.summary}
        </p>
        <p className="leading-relaxed tracking-wide">
          <h4 className="font-semibold text-2xl mt-2 mb-4">
            First important section
          </h4>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat sunt
          inventore nisi saepe illo corrupti ratione asperiores eveniet
          praesentium maiores dolore, distinctio ducimus consectetur porro nobis
          quibusdam nemo aspernatur mollitia beatae sapiente blanditiis?
          Aperiam, ut ullam expedita similique iste earum doloribus! Saepe rem
          facere laboriosam vitae! Nesciunt sunt quod quo quos voluptate alias
          doloremque perferendis earum blanditiis, aspernatur ratione vel
          exercitationem consectetur quaerat harum incidunt perspiciatis
          voluptatum aperiam adipisci delectus magni quisquam.
          <br />
          <br />
          <h4 className="font-semibold text-2xl mt-2 mb-4">Second Section</h4>
          Neque odio illo quis quidem sapiente, tenetur labore! Praesentium
          quasi pariatur earum at, et, delectus dolorem voluptatum quos alias
          sequi facere qui tempora neque ducimus. Numquam culpa quidem in dolore
          sapiente vitae cumque, repudiandae eum provident voluptatum alias et,
          enim ratione facere illum pariatur illo maiores delectus, nobis
          blanditiis sit animi? Reiciendis natus dolorem nesciunt cupiditate,
          animi incidunt aperiam, iusto accusantium ab numquam eligendi ipsum
          deserunt reprehenderit ut voluptatibus voluptatum amet nulla nihil
          atque quod exercitationem.
          <br />
          <br />
          <h4 className="font-semibold text-2xl mt-2 mb-4">
            Third and final section
          </h4>
          Vitae distinctio dolore impedit maiores excepturi molestiae officiis
          nemo delectus assumenda deserunt, corrupti suscipit facilis a vel!
          Quasi, doloribus voluptate? Similique eveniet aut doloribus officia,
          ab repudiandae ipsa voluptas voluptatum asperiores consectetur quod,
          veritatis esse earum nihil, molestiae ut quo quaerat.
          <br />
          <br />
        </p>
        <a
          className="pb-1 font-semibold hover:font-bold text-neutral-300 border-b-2 border-green-500"
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          read more
        </a>
      </Suspense>
    </div>
  );
}
