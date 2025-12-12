"use client";

import { useState } from "react";

export default function DemoSection() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isCalling, setIsCalling] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const formatPhoneNumber = (value: string) => {
    // Remove all non-digit characters except +
    const cleaned = value.replace(/[^\d+]/g, "");
    
    // If it doesn't start with +, assume US number and add +1
    if (cleaned && !cleaned.startsWith("+")) {
      // If it starts with 1, add +
      if (cleaned.startsWith("1")) {
        return `+${cleaned}`;
      }
      // Otherwise assume US number
      return `+1${cleaned}`;
    }
    
    return cleaned;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setPhoneNumber(formatted);
  };

  const handleDemo = async () => {
    if (!phoneNumber.trim()) {
      setMessage({ type: "error", text: "Please enter a phone number" });
      return;
    }

    setIsCalling(true);
    setMessage(null);

    try {
      const response = await fetch("/api/call-demo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phoneNumber }),
      });

      const data = await response.json();

      if (data.success) {
        setMessage({
          type: "success",
          text: "Call initiated! You should receive a call from our AI receptionist in a few moments. The AI will talk to you about the Omriq Luxury Hotel & Resort.",
        });
        setPhoneNumber("");
      } else {
        setMessage({
          type: "error",
          text: data.error || "Failed to initiate call. Please try again.",
        });
      }
    } catch (error) {
      setMessage({
        type: "error",
        text: "An error occurred. Please check your connection and try again.",
      });
    } finally {
      setIsCalling(false);
      if (message?.type === "success") {
        setTimeout(() => setMessage(null), 10000);
      } else {
        setTimeout(() => setMessage(null), 5000);
      }
    }
  };

  return (
    <section
      id="demo"
      className="py-20 md:py-32 bg-white relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Try the AI Receptionist
          </h2>
          <p className="text-xl text-gray-600 mb-2">
            Experience Real AI Voice Technology
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Enter your phone number and receive a call from our AI receptionist. 
            The AI will discuss the Omriq Luxury Hotel & Resort and answer questions 
            about amenities, services, and more—showcasing how natural and human-like 
            our AI voice technology is.
          </p>
        </div>

        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-8 md:p-12 shadow-2xl border border-indigo-100">
          <div className="max-w-md mx-auto">
            <div className="mb-6">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Enter your phone number
              </label>
              <input
                type="tel"
                id="phone"
                value={phoneNumber}
                onChange={handlePhoneChange}
                placeholder="+1 (555) 123-4567"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-900 placeholder-gray-400"
                disabled={isCalling}
              />
              <p className="mt-2 text-xs text-gray-500">
                Include country code (e.g., +1 for US/Canada)
              </p>
            </div>

            <button
              onClick={handleDemo}
              disabled={isCalling || !phoneNumber.trim()}
              className="w-full px-6 py-4 bg-indigo-600 text-white text-lg font-semibold rounded-xl hover:bg-indigo-700 transition-all transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
            >
              {isCalling ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Initiating Call...
                </>
              ) : (
                "Receive AI Call Demo"
              )}
            </button>

            {message && (
              <div
                className={`mt-6 p-4 rounded-xl animate-fade-in border ${
                  message.type === "success"
                    ? "bg-green-50 border-green-200 text-green-800"
                    : "bg-red-50 border-red-200 text-red-800"
                }`}
              >
                <div className="flex items-start">
                  <span className="text-xl mr-2">
                    {message.type === "success" ? "✓" : "✗"}
                  </span>
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            )}

            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-xl">
              <p className="text-sm text-blue-800">
                <strong>What to expect:</strong> Our AI will call you and introduce 
                the Omriq Luxury Hotel & Resort. Ask about amenities like the spa, 
                restaurants, pool, or nearby attractions to experience the natural 
                conversation flow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

