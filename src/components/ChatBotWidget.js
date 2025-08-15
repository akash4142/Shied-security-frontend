import { useEffect } from "react";

export default function ChatbotWidget() {
  useEffect(() => {
    // Load Botpress inject script first
    const script1 = document.createElement("script");
    script1.src = "https://cdn.botpress.cloud/webchat/v3.2/inject.js";
    script1.defer = true;

    script1.onload = () => {
      // Once inject is ready, load your bot config script
      const script2 = document.createElement("script");
      script2.src = "https://files.bpcontent.cloud/2025/08/15/05/20250815055525-LGBD35XP.js";
      script2.defer = true;
      document.body.appendChild(script2);
    };

    document.body.appendChild(script1);

    return () => {
      // Cleanup scripts if needed
      const scripts = document.querySelectorAll(
        `script[src="https://cdn.botpress.cloud/webchat/v3.2/inject.js"],
         script[src="https://files.bpcontent.cloud/2025/08/15/05/20250815055525-LGBD35XP.js"]`
      );
      scripts.forEach((s) => s.remove());
    };
  }, []);

  return null;
}
