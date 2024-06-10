export function HeroSection() {
  return (
    <div className="h-[40vh content-center lg:h-[60vh] text-center">
      <h1 className="text-5xl mb-4 font-bold">Ready for the next launch? 🚀</h1>
      <h2>Read the latest news on science, technology and spacetravels</h2>
      <a href="#news-feed">
        <button className="mt-6 md:mt-5 bg-neutral-100 rounded-md px-4 py-2 hover:bg-neutral-300 transition-colors text-neutral-900 font-medium">
          Read the news
        </button>
      </a>
    </div>
  );
}
