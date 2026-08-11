"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import type { FormEvent } from "react";
import { Container } from "@/components/ui/Container";
import { ArrowLeftIcon } from "@/components/ui/Icons";
import styles from "./Hero.module.css";

export function Hero() {
  const router = useRouter();

  const submitSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const query = String(formData.get("search") ?? "");
    const normalizedQuery = query.trim();
    let destination = "/#home-content";
    if (/خبر|وافد/.test(normalizedQuery)) destination = "/news#home-content";
    else if (/نشاط|فعالية/.test(normalizedQuery)) destination = "/activities#home-content";
    else if (/مقال|إبداع/.test(normalizedQuery)) destination = "/articles#home-content";
    else if (/فيديو|شاهد/.test(normalizedQuery)) destination = "/videos#home-content";
    else if (/كتاب|مكتبة/.test(normalizedQuery)) destination = "/library#home-content";
    else if (/عربي|درس|صوت/.test(normalizedQuery)) destination = "/learn-arabic#home-content";
    router.push(destination);
  };

  return (
    <section className={styles.hero} id="home">
      <Image className={styles.heroImage} src="/students-hero-boys.png" alt="مجموعة من الطلاب الوافدين في الحرم الجامعي" fill priority sizes="100vw" />
      <div className={styles.heroShade} />
      <div className={styles.heroPattern} aria-hidden="true" />
      <Container className={styles.heroInner}>
        <div className={styles.heroContent}>
          {/* <Image className={styles.heroLogo} src="/logo1.png" alt="جمعية أصدقاء الطالب الوافد" width={501} height={300} priority /> */}
          <h1>لست وحدك<br />في <span>رحلتك</span></h1>
          <p>نرافق الطالب الوافد منذ لحظة وصوله، ونمنحه الدعم والمعرفة والمجتمع الذي يحتاجه ليصنع تجربة دراسية ناجحة ومستقبلًا واعدًا.</p>
          <form className={styles.searchBox} role="search" onSubmit={submitSearch}>
            <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7" /><path d="m16 16 5 5" /></svg>
            <input name="search" type="search" placeholder="ابحث في الأخبار والخدمات والمكتبة..." aria-label="ابحث في الموقع" />
            <button type="submit">بحث</button>
          </form>
          {/* <div className={styles.heroActions}>
            <a className={styles.primaryButton} href="#services">اكتشف خدماتنا <ArrowLeftIcon /></a>
            <a className={styles.textButton} href="#about"><span className={styles.play}>▶</span> تعرّف علينا</a>
          </div> */}
        </div>
      </Container>
      <a href="#home-content" className={styles.scrollHint} aria-label="انتقل إلى محتوى الصفحة"><span>⌄</span></a>
    </section>
  );
}
