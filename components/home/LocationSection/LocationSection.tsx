import { Container } from "@/components/ui/Container";
import styles from "./LocationSection.module.css";

const mapUrl = "https://www.google.com/maps?q=30.0545653,31.3759106&z=16&output=embed";
const directionsUrl = "https://maps.app.goo.gl/KaxJriBDfYXvAHnh7";

export function LocationSection() {
  return (
    <section className={styles.section} aria-labelledby="location-title">
      <Container className={styles.card}>
        <div className={styles.info}><span>نسعد بزيارتكم</span><h2 id="location-title">أين نحن ؟؟</h2><p>يمكنك الوصول إلينا بالقرب من مسجد الحرمين. افتح الموقع على خرائط Google للحصول على أفضل مسار من مكانك.</p><div className={styles.coordinates}><small>الموقع</small><strong>مسجد الحرمين — القاهرة</strong><span>30.0545653, 31.3759106</span></div><a href={directionsUrl} target="_blank" rel="noreferrer">افتح الاتجاهات في خرائط Google <b>←</b></a></div>
        <div className={styles.map}><iframe src={mapUrl} title="موقع الجمعية على الخريطة" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen /><div className={styles.pin} aria-hidden="true"><span /></div></div>
      </Container>
    </section>
  );
}
