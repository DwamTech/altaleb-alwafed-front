"use client";

import Image from "next/image";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { PersistentSidebar } from "@/components/home/PersistentSidebar/PersistentSidebar";
import styles from "./SidebarPageContent.module.css";

export type SidebarPageId = "about" | "reports" | "gallery" | "arabicLibrary" | "texts" | "audio" | "apps" | "join";

const pageInfo: Record<SidebarPageId, { eyebrow: string; title: string; description: string }> = {
  about: { eyebrow: "البيانات الرسمية", title: "نبذة عن الجمعية", description: "البيانات التعريفية الرسمية ومعلومات التواصل الخاصة بجمعية أصدقاء الطالب الوافد." },
  reports: { eyebrow: "توثيق العمل والإنجاز", title: "تقارير الجمعية", description: "عرض منظم للتقارير السنوية التي توثق أنشطة الجمعية وبرامجها وخدماتها." },
  gallery: { eyebrow: "لحظات من مجتمعنا", title: "معرض الصور", description: "مشاهد مختارة من اللقاءات والأنشطة والرحلات التي جمعت الطلاب الوافدين." },
  arabicLibrary: { eyebrow: "كتب ومراجع مختارة", title: "تعلم العربية", description: "مكتبة معرفية تساعد غير الناطقين بالعربية على تطوير القراءة والكتابة والفهم." },
  texts: { eyebrow: "حفظ وفهم ومراجعة", title: "متون ومنظومات", description: "مجموعة تعليمية من المتون والمنظومات مرتبة حسب المجال والمستوى." },
  audio: { eyebrow: "استمع وتعلم", title: "دروس صوتية", description: "دروس وعبارات صوتية قصيرة تساعد الطالب على التعلم والمراجعة في أي وقت." },
  apps: { eyebrow: "أدوات نافعة على هاتفك", title: "تطبيقات أندرويد", description: "تطبيقات مختارة للغة والمعرفة والقرآن والمحتوى الإسلامي." },
  join: { eyebrow: "كن جزءًا من مجتمعنا", title: "التحق بالجمعية", description: "خطوات واضحة والمستندات المطلوبة للانضمام والاستفادة من خدمات الجمعية." },
};

const reports = [2019, 2018, 2017, 2016];
const books = [
  ["العربية بين يديك", "مؤسسة العربية للجميع"],
  ["طرائق تعليم القرآن الكريم للأعاجم في الميزان", "د. عبد الرحمن بن إبراهيم الفوزان"],
  ["مواد البيان", "علي بن خلف الكاتب"],
  ["ما اتفق لفظه واختلف معناه", "إبراهيم بن أبي محمد اليزيدي"],
  ["أدب الطلب ومنتهى الأرب", "محمد بن علي الشوكاني"],
  ["سبل السلام الموصلة إلى بلوغ المرام", "محمد بن إسماعيل الأمير الصنعاني"],
  ["أضواء البيان في إيضاح القرآن بالقرآن", "عطية محمد سالم"],
  ["الموجز في قواعد اللغة العربية", "مرجع لغوي مبسط"],
];
const texts = [
  ["متن الآجرومية", "النحو", "مبتدئ"], ["تحفة الأطفال", "التجويد", "مبتدئ"],
  ["المقدمة الجزرية", "التجويد", "متوسط"], ["ألفية ابن مالك", "النحو والصرف", "متقدم"],
  ["المنظومة البيقونية", "مصطلح الحديث", "متوسط"], ["متن الرحبية", "علم الفرائض", "متوسط"],
];
const audioLessons = [
  ["التحية والتعارف", "مرحبًا، يسعدني التعرف إليك", "03:12"], ["في الجامعة", "أين تقع قاعة المحاضرات؟", "04:05"],
  ["السؤال عن الاتجاهات", "كيف أذهب إلى محطة الحافلات؟", "03:48"], ["في المكتبة", "أريد استعارة هذا الكتاب", "05:20"],
  ["حوار في المطعم", "أريد قائمة الطعام من فضلك", "04:33"], ["التسوق والأسعار", "كم سعر هذا المنتج؟", "04:12"],
];
const apps = [
  ["ألف سنة في اليوم والليلة", "الأذكار بلغات متعددة", "٢١٥٩ زائر"], ["Learn Islam", "محتوى تعريفي مبسط", "٢٠٨٦ زائر"],
  ["بيان الإسلام", "الرد على الشبهات", "٢٤٥٥ زائر"], ["تعليم النحو العربي", "قواعد وتمارين لغوية", "٢٢٣٣ زائر"],
  ["Learn Arabic", "تعلم العربية للمبتدئين", "٢٢٦٥ زائر"], ["المكتبة الشاملة", "مكتبة معرفية موسعة", "٢٥٦٢ زائر"],
  ["آيات", "المصحف الإلكتروني", "٢٨٢١ زائر"], ["الفانوس", "الباحث في القرآن", "٢٥٩٣ زائر"],
];

export function SidebarPageContent({ page }: { page: SidebarPageId }) {
  const info = pageInfo[page];
  const [playing, setPlaying] = useState<string | null>(null);

  const playAudio = (title: string, phrase: string) => {
    window.speechSynthesis.cancel();
    if (playing === title) { setPlaying(null); return; }
    const speech = new SpeechSynthesisUtterance(phrase);
    speech.lang = "ar-EG";
    speech.rate = .82;
    speech.onend = () => setPlaying(null);
    setPlaying(title);
    window.speechSynthesis.speak(speech);
  };

  return (
    <section className={styles.shell} id="home-content">
      <Container className={styles.layout}>
        <PersistentSidebar />
        <article className={styles.contentPanel}>
          <header className={styles.pageHeader}><span>{info.eyebrow}</span><h1>{info.title}</h1><p>{info.description}</p></header>

          {page === "about" && <div className={styles.officialAbout}>
            <section><span>جمعية أصدقاء الطالب الوافد</span><h2>بيانات الجمعية</h2><p>المشهرة برقم <strong>2004/5823</strong></p><p>عضو المجلس الإسلامي العالمي للدعوة والإغاثة.</p></section>
            <div className={styles.officialDetails}>
              <div><b>01</b><span>العنوان</span><p>قطعة (1) – بلوك (38) – المنطقة العاشرة – مدينة نصر – القاهرة – جمهورية مصر العربية.</p></div>
              <div><b>02</b><span>الهاتف</span><p dir="ltr">0020223572190<br />002023572191</p></div>
              <div><b>03</b><span>البريد الإلكتروني</span><a href="mailto:info@isfsegypt.com">info@isfsegypt.com</a></div>
            </div>
          </div>}

          {page === "reports" && <div className={styles.reportGrid}>{reports.map((year, index) => <article key={year}><span>تقرير سنوي</span><strong>{year}</strong><p>ملخص لأنشطة الجمعية وبرامجها وخدماتها المقدمة للطلاب الوافدين خلال العام.</p><div><small>PDF</small><a href="#contact">استعرض التقرير ←</a></div><b>0{index + 1}</b></article>)}</div>}

          {page === "gallery" && <div className={styles.gallery}>{Array.from({ length: 8 }, (_, index) => <figure key={index}><Image src={index % 2 ? "/students-hero.png" : "/students-hero-boys.png"} alt={`صورة من أنشطة الجمعية ${index + 1}`} fill sizes="(max-width:620px) 90vw, 28vw" /><figcaption><span>0{index + 1}</span><strong>{index % 2 ? "لقاءات الطلاب الوافدين" : "أنشطة أصدقاء الجمعية"}</strong></figcaption></figure>)}</div>}

          {page === "arabicLibrary" && <div className={styles.bookGrid}>{books.map(([title, author], index) => <article key={title}><div className={styles.book}><small>مكتبة تعلم العربية</small><strong>{title}</strong><span>{author}</span></div><div><b>0{index + 1}</b><a href="#contact">استعرض الكتاب ←</a></div></article>)}</div>}

          {page === "texts" && <div className={styles.textsGrid}>{texts.map(([title, category, level], index) => <article key={title}><div><span>{category}</span><b>0{index + 1}</b></div><h2>{title}</h2><p>نص تعليمي منظم للحفظ والمراجعة، مناسب لطلاب المستوى {level}.</p><footer><small>{level}</small><a href="#contact">عرض المتن ←</a></footer></article>)}</div>}

          {page === "audio" && <div className={styles.audioList}>{audioLessons.map(([title, phrase, duration]) => <article key={title}><button type="button" onClick={() => playAudio(title, phrase)} aria-label={`${playing === title ? "إيقاف" : "تشغيل"} ${title}`}>{playing === title ? "Ⅱ" : "▶"}</button><div><h2>{title}</h2><p>{phrase}</p></div><time>{duration}</time><span className={styles.wave} aria-hidden="true">{Array.from({ length: 12 }, (_, i) => <i key={i} />)}</span></article>)}</div>}

          {page === "apps" && <div className={styles.appsGrid}>{apps.map(([title, text, visitors], index) => <article key={title}><div className={styles.appIcon}><span>◉</span><b>{String(index + 1).padStart(2, "0")}</b></div><div><small>تطبيق أندرويد</small><h2>{title}</h2><p>{text}</p><footer><span>{visitors}</span><a href="#contact">تفاصيل التطبيق ←</a></footer></div></article>)}</div>}

          {page === "join" && <div className={styles.joinContent}>
            <section><span>إلتحق بنا</span><h2>كيف يلتحق الطالب الوافد بجمعية أصدقاء الطالب الوافد.</h2><ol><li><b>01</b><span>إملاء إستماره بيانات طالب (منشورة ).</span></li><li><b>02</b><span>تقدم لاختبارات المستوي.</span></li><li><b>03</b><span>إملاء إقرار السكن والتعهد ( منشور ) وعلي الطالب الوافد الالتزام بكل دقه بالشروط الواردة فيه.</span></li><li><b>04</b><span>وقع استلام عهدة السكن ( منشورة ).</span></li></ol></section>
            <aside><span>المستندات المطلوبة</span><h2>المستندات المطلوبة</h2><ul><li>صورة جواز السفر يحمل تأشيرة الإقامة سارية المفعول.</li><li>التصديق الدراسي.</li><li>الإقامة الدراسية.</li><li>تحليل دم.</li><li>عدد2 صورة شخصية حديثة.</li></ul><a href="#contact">ابدأ طلب الالتحاق ←</a></aside>
          </div>}
        </article>
      </Container>
    </section>
  );
}
