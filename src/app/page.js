"use client";

import React from "react";
import { trackEvent } from "../../lib/analytics";

export default function Home() {
  const trackButtonClick = () => {
    trackEvent("buttonClick", { buttonName: "Example Button" });
  };

  return (
    <div>
      <h1>Some Page</h1>
      <button onClick={trackButtonClick}>Click Me</button>
    </div>
  );
}
