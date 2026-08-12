import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContentArchive, type ContentSectionId } from "@/components/content/ContentArchive/ContentArchive";
import { SidebarPageContent, type SidebarPageId } from "@/components/content/SidebarPageContent/SidebarPageContent";
import { ServicePageContent, type ServicePageId } from "@/components/content/ServicePageContent/ServicePageContent";
import { SpecialPageContent, type SpecialPageId } from "@/components/content/SpecialPageContent/SpecialPageContent";
import { LegalPageContent, type LegalPageId } from "@/components/content/LegalPageContent/LegalPageContent";
import { Hero } from "@/components/home/Hero/Hero";
import { NewsTicker } from "@/components/home/NewsTicker/NewsTicker";
import { Footer } from "@/components/layout/Footer/Footer";
import { Header } from "@/components/layout/Header/Header";
import { ScrollToTop } from "@/components/ui/ScrollToTop/ScrollToTop";

type SectionConfig = { title: string; contentId?: ContentSectionId; sidebarId?: SidebarPageId; serviceId?: ServicePageId; specialId?: SpecialPageId; legalId?: LegalPageId };

const sectionBySlug: Record<string, SectionConfig> = {
  news: { contentId: "news", title: "أخبار الوافدين" },
  activities: { contentId: "activities", title: "أنشطة الجمعية" },
  articles: { contentId: "articles", title: "مقالات وإبداعات" },
  videos: { contentId: "videos", title: "الفيديوهات" },
  library: { serviceId: "publicLibrary", title: "المكتبة العامة" },
  "learn-arabic": { contentId: "arabic", title: "تعلم العربية" },
  "about-association": { sidebarId: "about", title: "نبذة عن الجمعية" },
  "association-reports": { sidebarId: "reports", title: "تقارير الجمعية" },
  "photo-gallery": { sidebarId: "gallery", title: "معرض الصور" },
  "arabic-library": { sidebarId: "arabicLibrary", title: "تعلم العربية" },
  "texts-and-poems": { sidebarId: "texts", title: "متون ومنظومات" },
  "audio-lessons": { sidebarId: "audio", title: "دروس صوتية" },
  "android-apps": { sidebarId: "apps", title: "تطبيقات أندرويد" },
  "join-association": { sidebarId: "join", title: "التحق بالجمعية" },
  "institutes-guide": { serviceId: "institutes", title: "دليل معاهد البعوث" },
  "university-admission": { serviceId: "universityAdmission", title: "الإلتحاق بالجامعات" },
  "international-female-students": { serviceId: "femaleStudents", title: "الطالبات الوافدات" },
  "postgraduate-admission": { serviceId: "postgraduate", title: "التقدم للدراسات العليا" },
  "university-results": { serviceId: "results", title: "نتائج الجامعات والشهادات" },
  "forms-and-applications": { serviceId: "forms", title: "نماذج استمارات وطلبات" },
  "embassies-guide": { serviceId: "embassies", title: "دليل السفارات" },
  "passport-offices-guide": { serviceId: "passportOffices", title: "دليل مكاتب الجوازات" },
  "specialized-courses": { serviceId: "courses", title: "الدورات المتخصصة" },
  "medical-center": { serviceId: "medical", title: "المركز الطبي" },
  "student-housing": { serviceId: "housing", title: "السكن الطلابي" },
  "haramain-center": { serviceId: "haramain", title: "مركز الحرمين" },
  "quran-circles": { serviceId: "quran", title: "حلقات التحفيظ" },
  "seminars-lectures": { serviceId: "seminars", title: "ندوات ومحاضرات" },
  camps: { serviceId: "camps", title: "مخيمات ومعسكرات" },
  "iftar-project": { serviceId: "iftar", title: "إفطار الصائم" },
  "qurbani-project": { serviceId: "qurbani", title: "مشروع الأضاحي" },
  donate: { specialId: "donate", title: "تبرع الآن" },
  contact: { specialId: "contact", title: "اتصل بنا" },
  "terms-and-conditions": { legalId: "terms", title: "الشروط والأحكام" },
  "privacy-policy": { legalId: "privacy", title: "سياسة الخصوصية" },
};

export function generateStaticParams() {
  return Object.keys(sectionBySlug).map((section) => ({ section }));
}

export async function generateMetadata({ params }: { params: Promise<{ section: string }> }): Promise<Metadata> {
  const { section } = await params;
  const current = sectionBySlug[section];
  return { title: current ? `${current.title} | جمعية أصدقاء الطالب الوافد` : "الصفحة غير موجودة" };
}

export default async function SectionPage({ params }: { params: Promise<{ section: string }> }) {
  const { section } = await params;
  const current = sectionBySlug[section];
  if (!current) notFound();

  return (
    <main>
      <Header />
      <Hero />
      <NewsTicker />
      {current.sidebarId
        ? <SidebarPageContent page={current.sidebarId} />
        : current.serviceId
          ? <ServicePageContent page={current.serviceId} />
          : current.specialId
            ? <SpecialPageContent page={current.specialId} />
            : current.legalId
              ? <LegalPageContent page={current.legalId} />
              : <ContentArchive section={current.contentId!} />}
      <Footer />
      <ScrollToTop />
    </main>
  );
}
