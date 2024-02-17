"use client";
import { initAnalytics } from "../../lib/analytics";
import React from "react";

export default function MainLayout({ children }) {
  React.useEffect(() => {
    // Initialize analytics when the layout mounts
    initAnalytics();
  }, []);

  return <div lang="en">{children}</div>;
}
