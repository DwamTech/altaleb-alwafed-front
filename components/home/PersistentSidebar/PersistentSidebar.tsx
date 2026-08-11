import styles from "./PersistentSidebar.module.css";

const sidebarItems = [
  { title: "القائمة الرئيسة", href: "#home" },
  { title: "حمل الاستمارة الآن", href: "#contact" },
  { title: "خدمات الأجانب", href: "#home-content" },
  { title: "معادلة الدرجة العلمية الآن", href: "#home-content" },
  { title: "خدمات طلابية", href: "#home-content" },
  { title: "خدمات الجمعية", href: "#home-content" },
  { title: "الزوار", href: "#home-content" },
  { title: "مجلة قراءات أفريقية", href: "#home-content" },
];

export function PersistentSidebar() {
  return (
    <aside className={styles.rail} aria-label="القائمة الجانبية">
      <div className={styles.sticky}>
        <header><span>دليل الوصول السريع</span><h2>خدمات تهمك</h2><p>اختر الخدمة التي تريد الوصول إليها.</p></header>
        <nav>
          {sidebarItems.map((item, index) => <a href={item.href} key={item.title}><span>{String(index + 1).padStart(2, "0")}</span><strong>{item.title}</strong><b aria-hidden="true">←</b></a>)}
        </nav>
        <div className={styles.help}><span>تحتاج إلى مساعدة؟</span><strong>نحن هنا من أجلك</strong><a href="#contact">تواصل معنا</a></div>
      </div>
    </aside>
  );
}
