"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollToContent() {
  const pathname = usePathname();

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      document.getElementById("home-content")?.scrollIntoView({ block: "start", behavior: "smooth" });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [pathname]);

  return null;
}
