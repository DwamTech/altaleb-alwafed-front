import type { Metadata } from "next";
import "@fontsource-variable/cairo/wght.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "جمعية أصدقاء الطالب الوافد",
  description: "نرعى الطالب الوافد ونسانده ليصنع مستقبله بثقة في مصر.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
