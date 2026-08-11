export const HOME_TABS = [
  { id: "home", label: "الرئيسية", href: "/" },
  { id: "news", label: "أخبار الوافدين", href: "/news" },
  { id: "activities", label: "أنشطة الجمعية", href: "/activities" },
  { id: "articles", label: "مقالات وإبداعات", href: "/articles" },
  { id: "videos", label: "فيديوهات", href: "/videos" },
  { id: "library", label: "المكتبة العامة", href: "/library" },
  { id: "arabic", label: "تعلم العربية", href: "/learn-arabic" },
] as const;

export type HomeTabId = (typeof HOME_TABS)[number]["id"];
