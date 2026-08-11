import { Container } from "@/components/ui/Container";
import { SectionPageLink } from "@/components/ui/SectionPageLink/SectionPageLink";
import styles from "./ArabicBooksSection.module.css";

const books = [
  { title: "العربية بين يديك", level: "المستوى الأول", color: "blue" },
  { title: "أساسيات النحو", level: "دليل مبسط", color: "green" },
  { title: "قاموس الطالب", level: "عربي مصوّر", color: "gold" },
  { title: "القراءة السهلة", level: "نصوص وتمارين", color: "red" },
  { title: "مفردات يومية", level: "للمحادثة", color: "cyan" },
  { title: "اكتب بالعربية", level: "مهارات الكتابة", color: "navy" },
];

const bookLoop = [...books, ...books];

export function ArabicBooksSection() {
  return (
    <section className={styles.section} aria-labelledby="books-title">
      <Container>
        <header className={styles.heading}><span>مكتبتك التعليمية</span><h2 id="books-title">كتب في اللغة العربية</h2><p>مجموعة مختارة تساعدك على تطوير القراءة والكتابة والمحادثة خطوة بخطوة.</p><SectionPageLink href="/arabic-library" label="كل الكتب" /></header>
        <div className={styles.viewport}>
          <div className={styles.track}>
            {bookLoop.map((book, index) => {
              const isClone = index >= books.length;
              return <article className={styles.bookCard} key={`${book.title}-${index}`} aria-hidden={isClone || undefined}><div className={`${styles.book} ${styles[book.color]}`}><div className={styles.spine} /><div className={styles.cover}><span>سلسلة تعلم العربية</span><strong>{book.title}</strong><small>{book.level}</small><b>العربية</b></div><div className={styles.pages} /></div><div className={styles.bookMeta}><span>0{(index % books.length) + 1}</span><a href="#contact" tabIndex={isClone ? -1 : undefined}>استعرض الكتاب ←</a></div></article>;
            })}
          </div>
        </div>
        <div className={styles.hint}><span>اسحب لاستعراض المزيد</span><b>←</b></div>
      </Container>
    </section>
  );
}
