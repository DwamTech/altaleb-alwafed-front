"use client";

import { usePathname } from "next/navigation";
import styles from "./PersistentSidebar.module.css";

const sidebarItems = [
  { title: "حمل الاستمارة الآن", href: "#contact" },
  { title: "خدمات الأجانب", href: "#home-content" },
  { title: "معادلة الدرجة العلمية الآن", href: "#home-content" },
  { title: "الزوار", href: "#home-content" },
  { title: "مجلة قراءات أفريقية", href: "#home-content" },
];

const mainMenuLinks = [
  { title: "نبذة عـن الجمعية", href: "/about-association" },
  { title: "تقــــارير الجـــمعية", href: "/association-reports" },
  { title: "معـــرض الصــــور", href: "/photo-gallery" },
  { title: "تعلــــم العـــربية", href: "/arabic-library" },
  { title: "متــــون ومنـظومات", href: "/texts-and-poems" },
  { title: "دروس صوتيـــــــة", href: "/audio-lessons" },
  { title: "تطبيـــقات أندرويد", href: "/android-apps" },
  { title: "التحــــــق بالجمـــعيـــة", href: "/join-association" },
];

const studentServiceLinks = [
  { title: "أخبـــار الــوافــديـن", href: "/news" },
  { title: "دليل معــاهد البعوث", href: "/institutes-guide" },
  { title: "الإلتحاق بالجامعات", href: "/university-admission" },
  { title: "الطالبات الوافدات", href: "/international-female-students" },
  { title: "التقدم للدراسـات العليا", href: "/postgraduate-admission" },
  { title: "نتائج الجامعات والشهادات", href: "/university-results" },
  { title: "نماذج استمارات وطلبات", href: "/forms-and-applications" },
  { title: "دلـــيـــــل الســـفـــارات", href: "/embassies-guide" },
  { title: "دليـــل مكــاتب الجـوازات", href: "/passport-offices-guide" },
];

const associationServiceLinks = [
  { title: "المكتبــة الــــعامة", href: "/library" },
  { title: "الدورات المتخــصصة", href: "/specialized-courses" },
  { title: "المـــــركز الطبـــــي", href: "/medical-center" },
  { title: "الســــكن الطـــلابي", href: "/student-housing" },
  { title: "مركـــــز الحــرمـــين", href: "/haramain-center" },
  { title: "حلقـــــات التـحــفيظ", href: "/quran-circles" },
  { title: "نــــدوات ومحــاضرات", href: "/seminars-lectures" },
  { title: "مخيمات ومعسكرات", href: "/camps" },
  { title: "إفطـــــــار الصـــــائم", href: "/iftar-project" },
  { title: "مشروع الأضــــاحي", href: "/qurbani-project" },
];

function ServiceGroup({ number, title, links, pathname }: { number: string; title: string; links: typeof studentServiceLinks; pathname: string }) {
  const isActive = links.some((item) => item.href === pathname);

  return (
    <details className={`${styles.serviceGroup} ${isActive ? styles.activeGroup : ""}`} open={isActive || undefined}>
      <summary className={styles.navItem}><span>{number}</span><strong>{title}</strong><b aria-hidden="true">＋</b></summary>
      <div className={styles.submenu}>
        {links.map((item) => <a className={pathname === item.href ? styles.active : undefined} href={item.href} aria-current={pathname === item.href ? "page" : undefined} key={item.href}><span>{item.title}</span><b aria-hidden="true">←</b></a>)}
      </div>
    </details>
  );
}

export function PersistentSidebar() {
  const pathname = usePathname();
  const isMainMenuActive = mainMenuLinks.some((item) => item.href === pathname);

  return (
    <aside className={styles.rail} aria-label="القائمة الجانبية">
      <div className={styles.sticky}>
        <header><span>دليل الوصول السريع</span><h2>خدمات تهمك</h2><p>اختر الخدمة التي تريد الوصول إليها.</p></header>
        <nav>
          <details className={`${styles.mainMenuGroup} ${isMainMenuActive ? styles.activeGroup : ""}`} open={isMainMenuActive || undefined}>
            <summary className={styles.navItem}><span>01</span><strong>القائمة الرئيسة</strong><b aria-hidden="true">＋</b></summary>
            <div className={styles.submenu}>
              {mainMenuLinks.map((item) => <a className={pathname === item.href ? styles.active : undefined} href={item.href} aria-current={pathname === item.href ? "page" : undefined} key={item.title}><span>{item.title}</span><b aria-hidden="true">←</b></a>)}
            </div>
          </details>
          {sidebarItems.slice(0, 3).map((item, index) => <a className={styles.navItem} href={item.href} key={item.title}><span>{String(index + 2).padStart(2, "0")}</span><strong>{item.title}</strong><b aria-hidden="true">←</b></a>)}
          <ServiceGroup number="05" title="خدمات طلابية" links={studentServiceLinks} pathname={pathname} />
          <ServiceGroup number="06" title="خدمات الجمعية" links={associationServiceLinks} pathname={pathname} />
          {sidebarItems.slice(3).map((item, index) => <a className={styles.navItem} href={item.href} key={item.title}><span>{String(index + 7).padStart(2, "0")}</span><strong>{item.title}</strong><b aria-hidden="true">←</b></a>)}
        </nav>
        <div className={styles.help}><span>تحتاج إلى مساعدة؟</span><strong>نحن هنا من أجلك</strong><a href="/contact">تواصل معنا</a></div>
      </div>
    </aside>
  );
}
