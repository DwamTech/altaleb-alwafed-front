import { IslamicSection } from "@/components/home/IslamicSection/IslamicSection";
import { ActivitiesSection } from "@/components/home/ActivitiesSection/ActivitiesSection";
import { ExpatNewsSection } from "@/components/home/ExpatNewsSection/ExpatNewsSection";
import { VideosSection } from "@/components/home/VideosSection/VideosSection";
import { ArticlesSection } from "@/components/home/ArticlesSection/ArticlesSection";
import { GallerySection } from "@/components/home/GallerySection/GallerySection";
import { ArabicBooksSection } from "@/components/home/ArabicBooksSection/ArabicBooksSection";
import { ArabicLessonsSection } from "@/components/home/ArabicLessonsSection/ArabicLessonsSection";
import { LocationSection } from "@/components/home/LocationSection/LocationSection";

export function HomePageSections() {
  return (
    <>
      <IslamicSection />
      <ActivitiesSection />
      <ExpatNewsSection />
      <VideosSection />
      <ArticlesSection />
      <GallerySection />
      <ArabicBooksSection />
      <ArabicLessonsSection />
      <LocationSection />
    </>
  );
}
