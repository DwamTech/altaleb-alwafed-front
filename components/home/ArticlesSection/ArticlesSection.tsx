import { Container } from "@/components/ui/Container";
import styles from "./ArticlesSection.module.css";

const articles = [
  { category: "تجارب طلابية", title: "كيف تصنع من الغربة فرصة جديدة؟", text: "أفكار عملية تساعد الطالب على بناء علاقات إيجابية والاستفادة من تجربته الجديدة.", author: "فريق التحرير" },
  { category: "تطوير الذات", title: "خمس عادات لطالب جامعي أكثر نجاحًا", text: "خطوات بسيطة لتنظيم الوقت والموازنة بين الدراسة والحياة اليومية.", author: "مجتمع الطلاب" },
  { category: "الثقافة والمعرفة", title: "التنوع الثقافي داخل الجامعة", text: "لماذا يجعل اختلاف الثقافات التجربة الجامعية أكثر ثراءً وإنسانية؟", author: "أصدقاء الوافد" },
  { category: "دليل الطالب", title: "أهم ما تحتاج إليه في أسبوعك الأول", text: "قائمة مختصرة تساعدك على الاستقرار والتعرف على الخدمات من حولك.", author: "قسم الإرشاد" },
  { category: "مهارات دراسية", title: "كيف تستعد للاختبارات دون توتر؟", text: "أساليب عملية للمراجعة وتنظيم المهام تساعدك على الاستعداد بثقة وهدوء.", author: "فريق الإرشاد الأكاديمي" },
  { category: "الحياة في مصر", title: "دليلك للتعامل مع تفاصيل الحياة اليومية", text: "نصائح مختصرة حول المواصلات والخدمات والتواصل والاندماج في المجتمع.", author: "مجتمع الوافدين" },
  { category: "تعلم العربية", title: "طرق بسيطة لتطوير المحادثة بالعربية", text: "تدريبات يومية ومواقف واقعية تساعدك على اكتساب المفردات والتحدث بطلاقة.", author: "قسم اللغة العربية" },
  { category: "قصص ملهمة", title: "من بداية جديدة إلى تجربة مليئة بالنجاح", text: "قصة طالب استطاع تجاوز تحديات الغربة وبناء شبكة قوية من الأصدقاء.", author: "فريق التحرير" },
];

const articleLoop = [...articles, ...articles];

export function ArticlesSection() {
  return (
    <section className={styles.section} aria-labelledby="articles-title">
      <Container>
        <header className={styles.heading}><span>اقرأ واكتشف</span><h2 id="articles-title">جديد المقـــــالات</h2></header>
        <div className={styles.viewport}>
          <div className={styles.track}>
            {articleLoop.map((article, index) => {
              const originalIndex = index % articles.length;
              const isClone = index >= articles.length;
              return (
                <article
                  className={`${styles.card} ${originalIndex === 0 ? styles.featured : ""}`}
                  key={`${article.title}-${index}`}
                  aria-hidden={isClone || undefined}
                >
                  <div className={styles.number}>0{originalIndex + 1}</div>
                  <span>{article.category}</span>
                  <h3>{article.title}</h3>
                  <p>{article.text}</p>
                  <footer>
                    <small>بقلم: {article.author}</small>
                    <a href="#home-content" aria-label={`قراءة ${article.title}`} tabIndex={isClone ? -1 : undefined}>←</a>
                  </footer>
                </article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
