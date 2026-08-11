import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionPageLink } from "@/components/ui/SectionPageLink/SectionPageLink";
import styles from "./VideosSection.module.css";

const videos = [
  { title: "كيف تبدأ رحلتك الدراسية بثقة؟", duration: "04:18", image: "/students-hero-boys.png" },
  { title: "لقطات من ملتقى الطلاب الوافدين", duration: "06:42", image: "/students-hero.png" },
  { title: "خدمات الجمعية في دقيقة", duration: "01:35", image: "/students-hero-boys.png" },
  { title: "يوم من أنشطة أصدقاء الطالب الوافد", duration: "03:27", image: "/students-hero.png" },
  { title: "دليل الطالب الوافد في مصر", duration: "05:16", image: "/students-hero-boys.png" },
  { title: "فعاليات ثقافية تجمع طلاب العالم", duration: "07:08", image: "/students-hero.png" },
  { title: "خطوات الاستفادة من خدمات الجمعية", duration: "02:54", image: "/students-hero-boys.png" },
  { title: "حكايات نجاح لطلاب وافدين", duration: "04:49", image: "/students-hero.png" },
];

const videoLoop = [...videos, ...videos];

export function VideosSection() {
  return (
    <section className={styles.section} aria-labelledby="videos-title">
      <Container>
        <header className={styles.heading}>
          <div><span>شاهد الآن</span><h2 id="videos-title">جديد الفيديوهات</h2></div>
          <SectionPageLink href="/videos" label="كل الفيديوهات" />
        </header>

        <div className={styles.viewport}>
          <div className={styles.screens}>
            {videoLoop.map((video, index) => {
              const isClone = index >= videos.length;
              return (
                <a
                  className={styles.screen}
                  href="https://www.youtube.com/@isfsegypt"
                  target="_blank"
                  rel="noreferrer"
                  key={`${video.title}-${index}`}
                  aria-hidden={isClone || undefined}
                  tabIndex={isClone ? -1 : undefined}
                >
                  <div className={styles.display}>
                    <Image src={video.image} alt={isClone ? "" : video.title} fill sizes="(max-width: 820px) 82vw, 28vw" />
                    <span className={styles.overlay} />
                    <span className={styles.play}><svg viewBox="0 0 24 24"><path d="m9 7 8 5-8 5V7Z" /></svg></span>
                    <small>{video.duration}</small>
                  </div>
                  <div className={styles.caption}><span>0{(index % videos.length) + 1}</span><h3>{video.title}</h3></div>
                  <div className={styles.stand} aria-hidden="true" />
                </a>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
