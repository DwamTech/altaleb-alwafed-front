import Image from "next/image";
import { Container } from "@/components/ui/Container";
import styles from "./IslamicSection.module.css";

export function IslamicSection() {
  return (
    <section className={styles.section} aria-labelledby="islamic-title">
      <Container className={styles.layout}>
        <div className={styles.visual}>
          <Image src="/students-hero.png" alt="Students sharing knowledge on campus" fill sizes="(max-width: 820px) 92vw, 48vw" />
          <div className={styles.visualBadge}><span>Read</span><strong>05</strong><small>MIN</small></div>
          <div className={styles.frame} aria-hidden="true" />
        </div>
        <article className={styles.copy}>
          <span className={styles.kicker}>Islamic Reflections</span>
          <h2 id="islamic-title">Faith, Knowledge and the Journey of a Student</h2>
          <p>Seeking knowledge is more than an academic pursuit; it is a path that shapes character, deepens purpose and connects people across cultures. A student who travels to learn carries both hope and responsibility.</p>
          <p>Through compassion, patience and shared values, every new place can become a welcoming home and every challenge can become an opportunity to grow.</p>
          <a href="#home-content">Read the full article <span aria-hidden="true">←</span></a>
        </article>
      </Container>
    </section>
  );
}
