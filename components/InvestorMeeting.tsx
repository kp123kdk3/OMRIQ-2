"use client";

import { useEffect } from "react";
import Script from "next/script";

export default function InvestorMeeting() {
  // Get Calendly URL from environment variable or use the default
  const calendlyUrl =
    process.env.NEXT_PUBLIC_CALENDLY_URL ||
    "https://calendly.com/popovbusiness11/30min";

  useEffect(() => {
    // Initialize Calendly inline widget after script loads
    const initCalendly = () => {
      if (window.Calendly && document.getElementById("calendly-container")) {
        window.Calendly.initInlineWidget({
          url: calendlyUrl,
          parentElement: document.getElementById("calendly-container"),
        });
      }
    };

    // If Calendly is already loaded, initialize immediately
    if (window.Calendly) {
      initCalendly();
    } else {
      // Otherwise wait for it to load
      const checkCalendly = setInterval(() => {
        if (window.Calendly) {
          initCalendly();
          clearInterval(checkCalendly);
        }
      }, 100);

      // Cleanup interval after 10 seconds
      setTimeout(() => clearInterval(checkCalendly), 10000);
    }
  }, [calendlyUrl]);

  return (
    <>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
        onLoad={() => {
          if (window.Calendly && document.getElementById("calendly-container")) {
            window.Calendly.initInlineWidget({
              url: calendlyUrl,
              parentElement: document.getElementById("calendly-container"),
            });
          }
        }}
      />
      <section
        id="investor-meeting"
        className="py-20 md:py-32 bg-gradient-to-b from-indigo-50 to-white"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Book a Meeting With the Founders
            </h2>
            <p className="text-xl text-gray-600">
              Let's discuss how Omriq is transforming hospitality operations and
              the investment opportunity.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-4 md:p-8 border border-gray-100 overflow-hidden">
            <div
              id="calendly-container"
              style={{ minWidth: "320px", height: "700px" }}
            ></div>
          </div>
        </div>
      </section>
    </>
  );
}

