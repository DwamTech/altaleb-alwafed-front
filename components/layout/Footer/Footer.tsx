"use client";

import Image from "next/image";
import { useState, type FormEvent } from "react";
import { Container } from "@/components/ui/Container";
import styles from "./Footer.module.css";

const externalLinkProps = {
  target: "_blank",
  rel: "noopener noreferrer",
};

export function Footer() {
  const [subscribed, setSubscribed] = useState(false);

  const subscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubscribed(true);
    event.currentTarget.reset();
  };

  return (
    <footer className={styles.footer}>
      <Container className={styles.footerGrid}>
        <div className={styles.footerIntro}>
          <a className={styles.footerLogo} href="#home" aria-label="جمعية أصدقاء الطالب الوافد - الرئيسية">
            <Image src="/logo1.png" alt="جمعية أصدقاء الطالب الوافد" width={501} height={300} />
          </a>
          <p>
            نصنع للطالب الوافد تجربة أكثر دفئًا، ونبني معه طريقًا نحو النجاح
            والانتماء.
          </p>
        </div>

        <div className={styles.associationInfo}>
          <h3>بيانات الجمعية</h3>
          <div className={styles.infoLinks}>
            <a href="http://isfsegypt.com/pageother.php?catsmktba=15" {...externalLinkProps}>
              نبذة عن الجمعية
            </a>
            <a href="http://isfsegypt.net/pageother-46.html" {...externalLinkProps}>
              رقم الحساب 89604 بنك فيصل الإسلامي - فرع مصر الجديدة
            </a>
            <a href="http://isfsegypt.com/" {...externalLinkProps}>
              المشهرة برقم 2004/5823
            </a>
            <a href="http://www.iicdr.com/" {...externalLinkProps}>
              عضو المجلس الإسلامي العالمي للدعوة والإغاثة
            </a>
          </div>
          <address>
            قطعة (1) – بلوك (38) – المنطقة العاشرة – مدينة نصر – القاهرة –
            جمهورية مصر العربية
          </address>
          <div className={styles.contactLinks} dir="ltr">
            <a href="tel:0020223572190">0020223572190</a>
            <a href="tel:002023572191">002023572191</a>
            <a href="mailto:info@isfsegypt.com">info@isfsegypt.com</a>
          </div>
        </div>

        <div className={styles.newsletter}>
          <h3>النشرة البريدية</h3>
          <p>سجّل بريدك ليصلك جديد الأخبار والأنشطة والفرص.</p>
          <form onSubmit={subscribe}>
            <input
              type="email"
              name="email"
              placeholder="أدخل بريدك الإلكتروني"
              aria-label="البريد الإلكتروني"
              required
            />
            <button type="submit">اشتراك</button>
          </form>
          {subscribed && <small role="status">تم الاشتراك بنجاح، شكرًا لك.</small>}
        </div>
      </Container>

      <div className={styles.bottomBar}>
        <Container className={styles.footerBottom}>
          <nav className={styles.legalLinks} aria-label="الروابط القانونية">
            <a href="/terms-and-conditions">الشروط والأحكام</a>
            <a href="/privacy-policy">سياسة الخصوصية</a>
          </nav>


          <a
            className={styles.developerCredit}
            href="https://dwam-tech.com/"
            aria-label="تصميم وتطوير شركة دوام"
            {...externalLinkProps}
          >
            <span>تصميم وتطوير شركة</span>
            <span className={styles.dwamLogo}>
              <Image src="/dwam-logo-transparent.png" alt="شركة دوام" width={3474} height={3266} />
            </span>
          </a>
        </Container>
      </div>
    </footer>
  );
}
