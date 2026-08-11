import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionPageLink } from "@/components/ui/SectionPageLink/SectionPageLink";
import styles from "./GallerySection.module.css";

const gallery = [
  { src: "/students-hero-boys.png", alt: "طلاب الجمعية في الحرم الجامعي" },
  { src: "/students-hero.png", alt: "مجموعة من الطلاب الوافدين" },
  { src: "/students-hero-boys.png", alt: "تواصل الطلاب خلال الأنشطة" },
  { src: "/students-hero.png", alt: "لحظات من مجتمع الطلاب" },
  { src: "/students-hero-boys.png", alt: "طلاب من ثقافات متعددة" },
];

export function GallerySection() {
  return (
    <section className={styles.section} aria-labelledby="gallery-title">
      <Container>
        <header className={styles.heading}><div><span>لحظات لا تُنسى</span><h2 id="gallery-title">صور من الجمعية</h2></div><p>مشاهد من فعالياتنا ومجتمعنا الذي يجمع الطلاب من ثقافات مختلفة.</p><SectionPageLink href="/photo-gallery" label="معرض الصور" /></header>
        <div className={styles.gallery}>{gallery.map((image, index) => <figure className={styles.item} key={`${image.alt}-${index}`}><Image src={image.src} alt={image.alt} fill sizes="(max-width: 560px) 92vw, 33vw" /><figcaption><span>0{index + 1}</span><strong>{image.alt}</strong></figcaption></figure>)}</div>
      </Container>
    </section>
  );
}
