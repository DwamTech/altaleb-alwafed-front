import { Container } from "@/components/ui/Container";
import styles from "./NewsTicker.module.css";

const latestNews = [
  "فتح باب التسجيل في أنشطة الجمعية للطلاب الوافدين",
  "دليل جديد لأهم الخدمات والإجراءات التي يحتاجها الطالب الوافد",
  "الإعلان عن برنامج تعلم العربية للمستوى المبتدئ",
  "انضم إلى مجتمعنا وتعرّف على أحدث الفعاليات والفرص الطلابية",
];

function NewsItems({ hidden = false }: { hidden?: boolean }) {
  return (
    <div className={styles.newsGroup} aria-hidden={hidden || undefined}>
      {latestNews.map((item, index) => (
        <a href="#home-content" className={styles.newsItem} key={`${hidden ? "copy" : "main"}-${item}`}>
          <span className={styles.dot} aria-hidden="true" />
          <strong>{item}</strong>
          <small>{index === 0 ? "الآن" : "جديد"}</small>
        </a>
      ))}
    </div>
  );
}

export function NewsTicker() {
  return (
    <section className={styles.ticker} aria-label="جديد الموقع">
      <Container className={styles.inner}>
        <div className={styles.label}>
          <span className={styles.icon} aria-hidden="true">
            <svg viewBox="0 0 24 24"><path d="m4 13 2 5h3l-1.5-5M5 8v5h4l7 4V4L9 8H5ZM19 8c1 1 1 3 0 4" /></svg>
            <span className={styles.pulse} />
          </span>
          <span className={styles.labelText}><small>آخر التحديثات</small><strong>جديد الموقع</strong></span>
        </div>
        <div className={styles.viewport}>
          <div className={styles.track}>
            <NewsItems />
            <NewsItems hidden />
          </div>
        </div>
        <a className={styles.allNews} href="#home-content">كل الأخبار <span aria-hidden="true">←</span></a>
      </Container>
    </section>
  );
}
