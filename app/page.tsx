import { Hero } from "@/components/home/Hero/Hero";
import { HomeContentLayout } from "@/components/home/HomeContentLayout/HomeContentLayout";
import { NewsTicker } from "@/components/home/NewsTicker/NewsTicker";
import { Footer } from "@/components/layout/Footer/Footer";
import { Header } from "@/components/layout/Header/Header";
import { ScrollToTop } from "@/components/ui/ScrollToTop/ScrollToTop";

export default function Home() {
  return (
      <main>
        <Header />
        <Hero />
        <NewsTicker />
        <HomeContentLayout />
        <Footer />
        <ScrollToTop />
      </main>
  );
}
