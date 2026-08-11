"use client";

import { useEffect, useMemo, useState } from "react";
import { Container } from "@/components/ui/Container";
import { useHomeTabs } from "@/components/home/HomeTabsContext";
import type { HomeTabId } from "@/components/home/homeTabs";
import styles from "./PortalContent.module.css";

type ContentItem = { title: string; text: string; meta: string };

const content: Record<HomeTabId, { eyebrow: string; title: string; intro: string; items: ContentItem[] }> = {
  home: {
    eyebrow: "بوابتك إلى الجمعية",
    title: "أهم الخدمات والمستجدات في مكان واحد",
    intro: "اكتشف أحدث ما تقدمه الجمعية للطلاب الوافدين من معرفة وخدمات وفرص للتواصل والمشاركة.",
    items: [
      { title: "دليل الطالب الوافد", text: "كل ما تحتاج إلى معرفته منذ الوصول وحتى الاستقرار وبدء الدراسة.", meta: "دليل شامل" },
      { title: "خدمات الدعم والإرشاد", text: "مساندة أكاديمية واجتماعية وإجابات عملية عن أسئلتك اليومية.", meta: "خدمات الجمعية" },
      { title: "مجتمع يجمعنا", text: "مساحة للتعارف وتبادل الخبرات وبناء صداقات تتجاوز الحدود.", meta: "مجتمع الوافدين" },
    ],
  },
  news: {
    eyebrow: "أخبار الوافدين",
    title: "آخر الأخبار التي تهم الطالب الوافد",
    intro: "متابعة مستمرة للمستجدات والقرارات والفرص المرتبطة بالدراسة والحياة الجامعية.",
    items: [
      { title: "مستجدات القبول والتسجيل", text: "تنبيهات ومعلومات تساعدك على متابعة إجراءاتك في الوقت المناسب.", meta: "أحدث الأخبار" },
      { title: "فرص ومنح للطلاب", text: "تعرف على البرامج والفرص المتاحة للطلاب الوافدين في مختلف التخصصات.", meta: "فرص تعليمية" },
      { title: "أخبار المجتمع الجامعي", text: "تغطية لأبرز المبادرات واللقاءات داخل الجامعات المصرية.", meta: "الحياة الجامعية" },
    ],
  },
  activities: {
    eyebrow: "أنشطة الجمعية",
    title: "فعاليات تصنع تجربة لا تُنسى",
    intro: "برامج ثقافية واجتماعية وتعليمية تقرّبك من مجتمعك الجديد وتفتح لك آفاقًا أوسع.",
    items: [
      { title: "الملتقيات الثقافية", text: "لقاءات متنوعة للاحتفاء بثقافات الطلاب وتبادل التجارب.", meta: "فعاليات ثقافية" },
      { title: "الرحلات والزيارات", text: "جولات ترفيهية ومعرفية لاكتشاف مصر وصناعة ذكريات جميلة.", meta: "رحلات طلابية" },
      { title: "ورش التطوير", text: "ورش عملية لتنمية المهارات الشخصية والأكاديمية والمهنية.", meta: "تطوير المهارات" },
    ],
  },
  articles: {
    eyebrow: "مقالات وإبداعات",
    title: "أفكار وتجارب بأقلام طلابنا",
    intro: "مساحة حرة للمقالات والقصص والإبداعات التي تعبّر عن رحلة الطالب الوافد.",
    items: [
      { title: "حكايات من رحلة الاغتراب", text: "تجارب ملهمة يشاركها الطلاب بكل ما فيها من تحديات ونجاحات.", meta: "تجارب طلابية" },
      { title: "إبداعات بلا حدود", text: "مختارات من الكتابات والفنون والمشروعات الإبداعية للطلاب.", meta: "إبداع وفنون" },
      { title: "نصائح للحياة الجامعية", text: "أفكار عملية تساعدك على تنظيم وقتك وتحقيق أقصى استفادة من دراستك.", meta: "مقالات معرفية" },
    ],
  },
  videos: {
    eyebrow: "فيديوهات",
    title: "شاهد وتعرّف وتعلّم",
    intro: "محتوى مرئي يوثق أنشطة الجمعية ويقدم المعرفة والنصائح بصورة مبسطة.",
    items: [
      { title: "من قلب فعالياتنا", text: "مشاهد ولقطات من أبرز الأنشطة والملتقيات الطلابية.", meta: "تغطيات مصورة" },
      { title: "دقيقة للطالب الوافد", text: "نصائح سريعة ومعلومات مهمة تساعدك خلال رحلتك الدراسية.", meta: "فيديوهات قصيرة" },
      { title: "قصص نجاح", text: "لقاءات مع طلاب صنعوا تجارب مميزة وحققوا أهدافهم.", meta: "تجارب ملهمة" },
    ],
  },
  library: {
    eyebrow: "المكتبة العامة",
    title: "مصادر معرفية تدعم رحلتك",
    intro: "مجموعة منتقاة من الأدلة والكتب والمواد التي يحتاجها الطالب الوافد.",
    items: [
      { title: "أدلة وإرشادات", text: "ملفات عملية تشرح الإجراءات والخدمات الأساسية خطوة بخطوة.", meta: "ملفات للتحميل" },
      { title: "كتب ومراجع", text: "مصادر متنوعة للقراءة والتعلم وتوسيع المعرفة.", meta: "مكتبة رقمية" },
      { title: "نماذج واستمارات", text: "الوصول السريع إلى أهم النماذج التي يحتاجها الطالب.", meta: "خدمات إلكترونية" },
    ],
  },
  arabic: {
    eyebrow: "تعلم العربية",
    title: "العربية أقرب وأسهل معك",
    intro: "دروس ومواد مبسطة تساعدك على التواصل بثقة في الدراسة والحياة اليومية.",
    items: [
      { title: "العربية للمبتدئين", text: "ابدأ بالحروف والكلمات الأساسية من خلال محتوى بسيط ومتدرج.", meta: "المستوى الأول" },
      { title: "مواقف من الحياة اليومية", text: "تعلم العبارات التي تحتاجها في الجامعة والسكن والمواصلات.", meta: "محادثة عملية" },
      { title: "تطوير مهارات اللغة", text: "مواد للقراءة والاستماع والكتابة تساعدك على التقدم بثبات.", meta: "تعلم مستمر" },
    ],
  },
};

const sidebarItems = [
  "القائمة الرئيسة",
  "حمل الاستمارة الآن",
  "خدمات الأجانب",
  "معادلة الدرجة العلمية الآن",
  "خدمات طلابية",
  "خدمات الجمعية",
  "الزوار",
  "مجلة قراءات أفريقية",
];

export function PortalContent() {
  const { activeTab } = useHomeTabs();
  const [query, setQuery] = useState("");
  const selectedContent = content[activeTab];

  useEffect(() => {
    const handleSearch = (event: Event) => setQuery((event as CustomEvent<string>).detail.trim());
    window.addEventListener("site-search", handleSearch);
    return () => window.removeEventListener("site-search", handleSearch);
  }, []);

  const items = useMemo(() => {
    if (!query) return selectedContent.items;
    const normalizedQuery = query.toLocaleLowerCase("ar");
    return selectedContent.items.filter((item) => `${item.title} ${item.text} ${item.meta}`.toLocaleLowerCase("ar").includes(normalizedQuery));
  }, [query, selectedContent]);

  return (
    <section className={styles.section} id="portal-content" aria-live="polite">
      <Container className={styles.layout}>
        <aside className={styles.sidebar} aria-label="روابط الخدمات">
          <div className={styles.sidebarHeading}><span>دليل الوصول السريع</span><strong>خدمات تهمك</strong></div>
          <div className={styles.sidebarCards}>
            {sidebarItems.map((item, index) => <a href={index === 1 ? "#contact" : "#portal-content"} className={styles.sidebarCard} key={item}><span>{String(index + 1).padStart(2, "0")}</span><strong>{item}</strong><b aria-hidden="true">←</b></a>)}
          </div>
        </aside>

        <div className={styles.content}>
          <div className={styles.heading}>
            <span>{selectedContent.eyebrow}</span><h2>{selectedContent.title}</h2><p>{selectedContent.intro}</p>
            {query && <small>نتائج البحث عن: <strong>«{query}»</strong></small>}
          </div>
          {items.length > 0 ? (
            <div className={styles.contentGrid}>
              {items.map((item, index) => <article className={styles.contentCard} key={item.title}><div className={styles.cardTop}><span>{item.meta}</span><b>0{index + 1}</b></div><h3>{item.title}</h3><p>{item.text}</p><a href="#contact">اعرف المزيد <span>←</span></a></article>)}
            </div>
          ) : <div className={styles.emptyState}><strong>لا توجد نتائج مطابقة</strong><p>جرّب كلمة بحث أخرى أو انتقل إلى تبويب مختلف.</p></div>}
        </div>
      </Container>
    </section>
  );
}
