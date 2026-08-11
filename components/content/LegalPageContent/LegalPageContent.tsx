import { Container } from "@/components/ui/Container";
import { PersistentSidebar } from "@/components/home/PersistentSidebar/PersistentSidebar";
import styles from "./LegalPageContent.module.css";

export type LegalPageId = "terms" | "privacy";

type LegalSection = { title: string; paragraphs?: string[]; points?: string[] };

const legalPages: Record<LegalPageId, { eyebrow: string; title: string; introduction: string; sections: LegalSection[] }> = {
  terms: {
    eyebrow: "ضوابط استخدام الموقع",
    title: "الشروط والأحكام",
    introduction: "توضح هذه الشروط القواعد المنظمة لاستخدام موقع جمعية أصدقاء الطالب الوافد والمحتوى والخدمات الإرشادية المتاحة من خلاله.",
    sections: [
      {
        title: "قبول الشروط",
        paragraphs: ["باستخدامك لهذا الموقع فإنك تقر بقراءة هذه الشروط والموافقة عليها. إذا كنت لا توافق على أي جزء منها، فيرجى التوقف عن استخدام الموقع."],
      },
      {
        title: "طبيعة المحتوى",
        paragraphs: ["المعلومات المنشورة ذات طابع تعريفي وإرشادي، ولا تُعد بديلًا عن القرارات أو التعليمات الرسمية الصادرة عن الجامعات أو السفارات أو الجهات الحكومية."],
        points: ["يُنصح بمراجعة الجهة المختصة قبل اتخاذ أي إجراء.", "قد تتغير المواعيد والمتطلبات والرسوم دون إشعار مسبق من الموقع."],
      },
      {
        title: "الاستخدام المقبول",
        points: ["استخدام الموقع لأغراض قانونية ومشروعة فقط.", "عدم محاولة تعطيل الموقع أو الوصول غير المصرح به إلى أنظمته.", "عدم إرسال محتوى مسيء أو مضلل أو ينتهك حقوق الآخرين.", "تقديم بيانات صحيحة عند استخدام نماذج التواصل أو التسجيل."],
      },
      {
        title: "حقوق الملكية الفكرية",
        paragraphs: ["تصميم الموقع والنصوص والشعارات والمواد المرئية المنشورة فيه مملوكة للجمعية أو مستخدمة بإذن، ولا يجوز نسخها أو إعادة نشرها تجاريًا دون موافقة مسبقة."],
      },
      {
        title: "الروابط الخارجية",
        paragraphs: ["قد يتضمن الموقع روابط إلى مواقع خارجية لتسهيل الوصول إلى المعلومات. لا تتحمل الجمعية مسؤولية محتوى تلك المواقع أو سياسات الخصوصية الخاصة بها."],
      },
      {
        title: "التبرعات والخدمات",
        paragraphs: ["يجب التأكد من بيانات الحساب البنكي المنشورة والتواصل مع الجمعية عند الحاجة إلى التحقق. عرض بيانات التبرع لا يمثل التزامًا بتقديم خدمة بعينها إلا وفق برامج الجمعية وضوابطها."],
      },
      {
        title: "تحديث الشروط والتواصل",
        paragraphs: ["يجوز تحديث هذه الشروط بما يتناسب مع تطور الموقع والخدمات. للاستفسار عنها يمكنك التواصل عبر صفحة اتصل بنا أو البريد الإلكتروني الرسمي للجمعية."],
      },
    ],
  },
  privacy: {
    eyebrow: "حماية بيانات الزوار",
    title: "سياسة الخصوصية",
    introduction: "نحترم خصوصيتك، وتوضح هذه السياسة نوع البيانات التي قد يقدمها الزائر وكيفية استخدامها وحمايتها عند التعامل مع الموقع.",
    sections: [
      {
        title: "البيانات التي تقدمها",
        paragraphs: ["قد نستقبل البيانات التي تدخلها بنفسك عند استخدام نموذج اتصل بنا أو الاشتراك في النشرة البريدية أو إرفاق ملف بطلبك."],
        points: ["الاسم وعنوان البريد الإلكتروني.", "موضوع الرسالة ومحتواها.", "الملفات التي تختار إرفاقها.", "البريد المستخدم للاشتراك في النشرة."],
      },
      {
        title: "كيف نستخدم البيانات",
        points: ["الرد على الاستفسارات والطلبات.", "توجيه الرسالة إلى القسم أو المشرف المختص.", "إرسال مستجدات الجمعية عند الاشتراك والموافقة.", "تحسين تجربة الموقع وحماية خدماته من إساءة الاستخدام."],
      },
      {
        title: "حفظ البيانات وحمايتها",
        paragraphs: ["نتخذ إجراءات مناسبة للحد من الوصول غير المصرح به إلى البيانات. ولا تُحتفظ البيانات لمدة أطول من اللازم لتحقيق الغرض الذي جُمعت من أجله، ما لم يتطلب القانون خلاف ذلك."],
      },
      {
        title: "مشاركة البيانات",
        paragraphs: ["لا نبيع بياناتك الشخصية. وقد تُشارك بالقدر الضروري مع فريق الجمعية المختص أو مقدم خدمة تقني يساعد على تشغيل الموقع، مع الالتزام بالغرض المحدد والحماية المناسبة."],
      },
      {
        title: "ملفات الارتباط والروابط الخارجية",
        paragraphs: ["قد تُستخدم تقنيات تشغيل أساسية لتحسين أداء الموقع. وعند الانتقال إلى موقع خارجي تصبح معالجة بياناتك خاضعة لسياسة ذلك الموقع."],
      },
      {
        title: "حقوقك",
        points: ["طلب معرفة البيانات التي قدمتها لنا.", "طلب تصحيح البيانات غير الدقيقة.", "طلب حذف البيانات متى لم يوجد التزام قانوني بالاحتفاظ بها.", "إلغاء الاشتراك في الرسائل البريدية."],
      },
      {
        title: "التواصل بشأن الخصوصية",
        paragraphs: ["يمكنك إرسال أي طلب متعلق ببياناتك من خلال صفحة اتصل بنا أو عبر البريد info@isfsegypt.com."],
      },
    ],
  },
};

export function LegalPageContent({ page }: { page: LegalPageId }) {
  const content = legalPages[page];

  return (
    <section className={styles.shell} id="home-content">
      <Container className={styles.layout}>
        <PersistentSidebar />
        <article className={styles.contentPanel}>
          <header className={styles.pageHeader}>
            <span>{content.eyebrow}</span>
            <h1>{content.title}</h1>
            <p>{content.introduction}</p>
            <small>آخر تحديث: 11 أغسطس 2026</small>
          </header>

          <div className={styles.sections}>
            {content.sections.map((section, index) => (
              <section key={section.title}>
                <div className={styles.sectionNumber}>{String(index + 1).padStart(2, "0")}</div>
                <div>
                  <h2>{section.title}</h2>
                  {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  {section.points && <ul>{section.points.map((point) => <li key={point}>{point}</li>)}</ul>}
                </div>
              </section>
            ))}
          </div>

          <aside className={styles.contactCard}>
            <div><span>لديك استفسار؟</span><h2>تواصل مع إدارة الجمعية</h2></div>
            <a href="/contact">اتصل بنا <b aria-hidden="true">←</b></a>
          </aside>
        </article>
      </Container>
    </section>
  );
}
