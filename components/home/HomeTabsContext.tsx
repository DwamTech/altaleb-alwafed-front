"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import type { HomeTabId } from "./homeTabs";

type HomeTabsContextValue = {
  activeTab: HomeTabId;
  setActiveTab: (tab: HomeTabId) => void;
};

const HomeTabsContext = createContext<HomeTabsContextValue | null>(null);

export function HomeTabsProvider({ children }: { children: ReactNode }) {
  const [activeTab, setActiveTab] = useState<HomeTabId>("home");
  return <HomeTabsContext.Provider value={{ activeTab, setActiveTab }}>{children}</HomeTabsContext.Provider>;
}

export function useHomeTabs() {
  const context = useContext(HomeTabsContext);
  if (!context) throw new Error("useHomeTabs must be used within HomeTabsProvider");
  return context;
}
