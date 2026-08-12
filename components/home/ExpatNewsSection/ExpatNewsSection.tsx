import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionPageLink } from "@/components/ui/SectionPageLink/SectionPageLink";
import styles from "./ExpatNewsSection.module.css";

const news = [
  { title: "إرشادات مهمة للطلاب الجدد قبل بدء الدراسة", text: "خطوات عملية تساعدك على إنهاء الإجراءات والاستعداد للحياة الجامعية.", date: "١١ أغسطس ٢٠٢٦", views: "٢٬١٥٠" },
  { title: "فرص جديدة للمشاركة في البرامج الطلابية", text: "تعرف على البرامج المتاحة وكيفية التسجيل والاستفادة منها.", date: "٦ أغسطس ٢٠٢٦", views: "١٬٨٢٠" },
  { title: "تحديثات خدمات الطلاب الوافدين", text: "أحدث المعلومات المرتبطة بالخدمات والدعم المقدم داخل الجامعات.", date: "٣ أغسطس ٢٠٢٦", views: "١٬٤٩٠" },
];

export function ExpatNewsSection() {
  const slides = [...news, ...news];
  return (
    <section className={styles.section} aria-labelledby="expat-news-title">
      <Container>
        <header className={styles.heading}><span>متابعة مستمرة</span><h2 id="expat-news-title">أخبـــار الــوافــديـن</h2><p>كل ما يهم الطالب الوافد من أخبار ومستجدات وفرص.</p><SectionPageLink href="/news" label="كل الأخبار" /></header>
        <div className={styles.viewport}><div className={styles.track}>
          {slides.map((item, index) => <article className={styles.card} key={`${item.title}-${index}`} aria-hidden={index >= news.length || undefined}><div className={styles.image}><Image src="/students-hero-boys.png" alt="أخبار الطلاب الوافدين" fill sizes="(max-width: 560px) 88vw, 420px" /><span>خبر جديد</span></div><div className={styles.body}><div className={styles.meta}><time>{item.date}</time><span>{item.views} مشاهدة</span></div><h3>{item.title}</h3><p>{item.text}</p><a href="#home-content">اقرأ المزيد <b>←</b></a></div></article>)}
        </div></div>
      </Container>
    </section>
  );
}
