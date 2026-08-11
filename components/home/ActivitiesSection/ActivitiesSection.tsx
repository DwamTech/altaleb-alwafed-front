import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionPageLink } from "@/components/ui/SectionPageLink/SectionPageLink";
import styles from "./ActivitiesSection.module.css";

const activities = [
  { title: "ملتقى الثقافات بين الطلاب الوافدين", text: "لقاء يجمع طلابًا من دول متعددة في مساحة للحوار والتعارف.", date: "١٢ أغسطس ٢٠٢٦", views: "١٬٢٤٠" },
  { title: "رحلة تعريفية إلى معالم القاهرة", text: "جولة معرفية وترفيهية تساعد الطلاب على اكتشاف مدينتهم الجديدة.", date: "٨ أغسطس ٢٠٢٦", views: "٩٨٥" },
  { title: "ورشة مهارات الاستعداد للدراسة", text: "تدريب عملي لتنظيم الوقت والتكيف مع البيئة الجامعية.", date: "٢ أغسطس ٢٠٢٦", views: "٧٦٠" },
  { title: "يوم رياضي لأصدقاء الجمعية", text: "أنشطة جماعية تعزز روح الفريق وتصنع ذكريات مشتركة.", date: "٢٨ يوليو ٢٠٢٦", views: "١٬١٠٥" },
];

export function ActivitiesSection() {
  const slides = [...activities, ...activities];
  return (
    <section className={styles.section} aria-labelledby="activities-title">
      <Container>
        <header className={styles.heading}><div><span>نصنع الذكريات معًا</span><h2 id="activities-title">أنشطــة الـجـمعــية</h2></div><p>فعاليات متنوعة تمنح الطالب الوافد فرصة للتعلم والتواصل والاندماج.</p><SectionPageLink href="/activities" label="كل الأنشطة" /></header>
        <div className={styles.viewport}>
          <div className={styles.track}>
            {slides.map((item, index) => (
              <article className={styles.card} key={`${item.title}-${index}`} aria-hidden={index >= activities.length || undefined}>
                <div className={styles.image}><Image src={index % 2 === 0 ? "/students-hero-boys.png" : "/students-hero.png"} alt="طلاب خلال أنشطة الجمعية" fill sizes="(max-width: 560px) 86vw, 380px" /></div>
                <div className={styles.body}><span className={styles.category}>أنشطة الجمعية</span><h3>{item.title}</h3><p>{item.text}</p><div className={styles.meta}><span>◉ {item.views} مشاهدة</span><time>{item.date}</time></div><a href="#contact">المزيد <b>←</b></a></div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
