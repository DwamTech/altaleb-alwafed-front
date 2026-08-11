"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { HOME_TABS, type HomeTabId } from "@/components/home/homeTabs";
import { useHomeTabs } from "@/components/home/HomeTabsContext";
import styles from "./Header.module.css";

function BrandLogo() {
  return (
    <a className={styles.logo} href="#home" aria-label="جمعية أصدقاء الطالب الوافد - الرئيسية">
      <Image className={styles.badgeImage} src="/bage.png" alt="" width={173} height={173} priority aria-hidden="true" />
      <Image className={styles.wordmarkImage} src="/logo12.png" alt="جمعية أصدقاء الطالب الوافد" width={435} height={90} priority />
    </a>
  );
}

function SocialIcon({ type }: { type: "facebook" | "instagram" | "youtube" | "x" }) {
  if (type === "facebook") return <svg viewBox="0 0 24 24"><path d="M14 8h3V4h-3c-3 0-5 2-5 5v3H6v4h3v5h4v-5h3l1-4h-4V9c0-.7.3-1 1-1Z" /></svg>;
  if (type === "instagram") return <svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".8" /></svg>;
  if (type === "youtube") return <svg viewBox="0 0 24 24"><path d="M21 8.2c-.2-1.3-1-2.2-2.3-2.4C17 5.5 14.5 5.5 12 5.5s-5 0-6.7.3C4 6 3.2 6.9 3 8.2c-.2 1.1-.3 2.4-.3 3.8s.1 2.7.3 3.8c.2 1.3 1 2.2 2.3 2.4 1.7.3 4.2.3 6.7.3s5 0 6.7-.3c1.3-.2 2.1-1.1 2.3-2.4.2-1.1.3-2.4.3-3.8s-.1-2.7-.3-3.8Z" /><path d="m10 9 5 3-5 3V9Z" /></svg>;
  return <svg viewBox="0 0 24 24"><path d="M5 4 19 20M19 4 5 20" /></svg>;
}

const socialLinks = [
  { href: "https://www.facebook.com/isfsegypt/", label: "فيسبوك", type: "facebook" as const },
  { href: "https://www.instagram.com/isfsegypt/", label: "إنستجرام", type: "instagram" as const },
  { href: "https://www.youtube.com/@isfsegypt", label: "يوتيوب", type: "youtube" as const },
  { href: "https://x.com/isfsegypt", label: "X", type: "x" as const },
];

export function Header() {
  const { activeTab, setActiveTab } = useHomeTabs();

  const selectTab = (tab: HomeTabId, closeMobileMenu = false) => {
    setActiveTab(tab);
    if (closeMobileMenu) document.querySelector(`.${styles.mobileMenu}`)?.removeAttribute("open");
    window.setTimeout(() => document.getElementById("home-content")?.scrollIntoView({ behavior: "smooth", block: "start" }), 0);
  };

  return (
    <>
      <div className={styles.topBar}>
        <Container className={styles.topBarInner}>
          <nav className={styles.quickLinks} aria-label="روابط سريعة">
            <a href="#home">الرئيسية</a><a href="#about">من نحن</a><a href="#contact">اتصل بنا</a>
          </nav>
          <div className={styles.socialLinks} aria-label="حسابات التواصل الاجتماعي">
            {socialLinks.map((item) => <a href={item.href} key={item.label} target="_blank" rel="noreferrer" aria-label={item.label} title={item.label}><SocialIcon type={item.type} /></a>)}
          </div>
        </Container>
      </div>

      <header className={styles.siteHeader}>
        <Container className={styles.navWrap}>
          <BrandLogo />
          <nav className={styles.desktopNav} aria-label="أقسام الموقع">
            {HOME_TABS.map((item) => <button type="button" className={activeTab === item.id ? styles.active : undefined} onClick={() => selectTab(item.id)} key={item.id}>{item.label}</button>)}
          </nav>
          <a className={`${styles.donateButton} ${styles.desktopDonate}`} href="#contact">تبرع الآن</a>
          <details className={styles.mobileMenu}>
            <summary aria-label="فتح القائمة"><span /><span /><span /></summary>
            <nav>
              {HOME_TABS.map((item) => <button type="button" className={activeTab === item.id ? styles.active : undefined} onClick={() => selectTab(item.id, true)} key={item.id}>{item.label}</button>)}
              <a className={styles.donateButton} href="#contact">تبرع الآن</a>
            </nav>
          </details>
        </Container>
      </header>
    </>
  );
}
