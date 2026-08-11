import Link from "next/link";
import styles from "./SectionPageLink.module.css";

export function SectionPageLink({ href, label = "عرض كل المحتوى" }: { href: string; label?: string }) {
  return <Link className={styles.link} href={href}>{label}<span aria-hidden="true">←</span></Link>;
}
