"use client";

import { useEffect, useState, type FormEvent } from "react";
import { Container } from "@/components/ui/Container";
import { PersistentSidebar } from "@/components/home/PersistentSidebar/PersistentSidebar";
import styles from "./SpecialPageContent.module.css";

export type SpecialPageId = "donate" | "contact";

function DonateContent() {
  return (
    <article className={styles.contentPanel}>
      <header className={styles.pageHeader}>
        <span>صدقة جارية وأثر ممتد</span>
        <h1>تــبــرع الآن</h1>
        <p>ساهم في دعم رسالة الجمعية وخدماتها المقدمة للطلاب الوافدين.</p>
      </header>

      <section className={styles.donateHero}>
        <span>باب من أبواب الخير</span>
        <h2>هلمــــــــــــوا إلــى فعــــل الخيــــرات</h2>
        <div className={styles.decorativeLine} aria-hidden="true"><i /><b>✦</b><i /></div>
      </section>

      <div className={styles.quotes}>
        <blockquote>
          <p>هلموا إلى ثواب يتجدد مدده ولا ينتهي أمده، كما في الحديث عَنْ سَمُرَةَ بْنِ جُنْدُبٍ، قَالَ: قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ: «مَا تَصَدَّقَ النَّاسُ بِصَدَقَةٍ مِثْلَ عِلْمٍ يُنْشَرُ».</p>
        </blockquote>
        <blockquote>
          <p>وعن أبي هريرة رضي الله عنه أن رسول الله صلى الله عليه وسلم قال: «إذا مات ابن آدم انقطع عمله إلا من ثلاث: صدقة جارية، أو علم ينتفع به، أو ولد صالح يدعو له» رواه مسلم.</p>
        </blockquote>
      </div>

      <section className={styles.bankCard}>
        <div>
          <span>جمعيــــة أصــدقــــاء الطــالـــب الـــــوافــــد</span>
          <h2>بيانات التبرع البنكي</h2>
        </div>
        <div className={styles.accountNumber}>
          <small>رقم الحساب</small>
          <strong dir="ltr">89604</strong>
        </div>
        <p>بنك فيصل الإسلامي <b>–</b> فرع مصر الجديدة</p>
      </section>
    </article>
  );
}

function ContactContent() {
  const [challenge, setChallenge] = useState<{ first: number; second: number } | null>(null);
  const [fileName, setFileName] = useState("لم يتم اختيار ملف");
  const [message, setMessage] = useState("");

  useEffect(() => {
    setChallenge({
      first: Math.floor(Math.random() * 9) + 1,
      second: Math.floor(Math.random() * 9) + 1,
    });
  }, []);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!challenge) return;
    const form = new FormData(event.currentTarget);
    const answer = Number(form.get("answer"));
    if (answer !== challenge.first + challenge.second) {
      setMessage("الناتج غير صحيح، برجاء المحاولة مرة أخرى.");
      return;
    }
    setMessage("تم تجهيز رسالتك بنجاح. سيتم ربط الإرسال المباشر عند إضافة خدمة البريد.");
    event.currentTarget.reset();
    setFileName("لم يتم اختيار ملف");
    setChallenge({
      first: Math.floor(Math.random() * 9) + 1,
      second: Math.floor(Math.random() * 9) + 1,
    });
  };

  return (
    <article className={styles.contentPanel}>
      <header className={styles.pageHeader}>
        <span>نسعد برسالتك</span>
        <h1>اتصل بنا</h1>
        <p>أرسل استفسارك أو مقترحك إلى إدارة الجمعية، وسنراجع رسالتك في أقرب وقت.</p>
      </header>

      <div className={styles.contactLayout}>
        <aside className={styles.contactIntro}>
          <span>رسالة إلى مشرف</span>
          <h2>نحن هنا من أجلك</h2>
          <p>اكتب بياناتك بوضوح وأرفق الملف المرتبط بالطلب إن وجد.</p>
          <div><small>البريد الإلكتروني</small><a href="mailto:info@isfsegypt.com">info@isfsegypt.com</a></div>
          <div><small>الهاتف</small><a href="tel:0020223572190" dir="ltr">00202 23572190</a></div>
        </aside>

        <form className={styles.contactForm} onSubmit={submit}>
          <label className={styles.fullField}>
            <span>رسالة إلى مشرف</span>
            <select name="recipient" defaultValue="administration" required>
              <option value="administration">إلى الإدارة</option>
              <option value="expat-news">رسالة إلى مشرف أخبار الوافدين</option>
              <option value="audio-lessons">رسالة إلى مشرف دروس صوتية</option>
            </select>
          </label>
          <label><span>اسمك</span><input type="text" name="name" required /></label>
          <label><span>إيميلك</span><input type="email" name="email" dir="ltr" required /></label>
          <label className={styles.fullField}><span>الموضوع</span><input type="text" name="subject" required /></label>
          <label className={styles.fullField}><span>الرسالة</span><textarea name="body" rows={6} required /></label>
          <label className={`${styles.fullField} ${styles.fileField}`}>
            <span>الملف المرفق</span>
            <input type="file" name="attachment" onChange={(event) => setFileName(event.target.files?.[0]?.name ?? "لم يتم اختيار ملف")} />
            <strong>اختر ملفًا</strong><small>{fileName}</small>
          </label>
          <label className={styles.captchaField}>
            <span>أدخل الناتج</span>
            <div><b dir="ltr">{challenge ? `${challenge.first} + ${challenge.second} =` : "…"}</b><input type="number" name="answer" inputMode="numeric" aria-label="ناتج المسألة الحسابية" required /></div>
          </label>
          <button type="submit" disabled={!challenge}>إرسال الرسالة <b aria-hidden="true">←</b></button>
          {message && <p className={styles.formMessage} role="status">{message}</p>}
        </form>
      </div>
    </article>
  );
}

export function SpecialPageContent({ page }: { page: SpecialPageId }) {
  return (
    <section className={styles.shell} id="home-content">
      <Container className={styles.layout}>
        <PersistentSidebar />
        {page === "donate" ? <DonateContent /> : <ContactContent />}
      </Container>
    </section>
  );
}
