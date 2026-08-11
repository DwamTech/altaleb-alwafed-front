export const HOME_TABS = [
  { id: "home", label: "الرئيسية" },
  { id: "news", label: "أخبار الوافدين" },
  { id: "activities", label: "أنشطة الجمعية" },
  { id: "articles", label: "مقالات وإبداعات" },
  { id: "videos", label: "فيديوهات" },
  { id: "library", label: "المكتبة العامة" },
  { id: "arabic", label: "تعلم العربية" },
] as const;

export type HomeTabId = (typeof HOME_TABS)[number]["id"];
