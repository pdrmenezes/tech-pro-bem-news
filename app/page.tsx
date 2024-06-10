import { HeroSection } from "./_components/hero";
import { NewsFeed } from "./_components/news-feed";

export default async function Home() {
  return (
    <main className="flex gap-12 sm:gap-6 min-h-screen flex-col items-center justify-between py-10 px-4 sm:px-24 sm:pb-24">
      <HeroSection />
      <NewsFeed />
    </main>
  );
}
