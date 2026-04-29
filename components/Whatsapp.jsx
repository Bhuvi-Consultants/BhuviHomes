"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const Whatsapp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);

  // Dynamic marketing messages (widget UI)
  const messages = [
    "👋 Hi! Looking to design your dream home?",
    "Need construction services with full transparency?",
    "Want 3D design before building?",
    "Get expert consultation for your project today!",
  ];

  // Dynamic WhatsApp messages (sent to WA)
  const waMessages = [
    "Hi, I am interested in home design services.",
    "Hi, I want to know about construction services.",
    "Hello, I need 3D elevation/design.",
    "Hi, I want a consultation for my project.",
  ];

  // Rotate messages inside widget
  useEffect(() => {
    if (!showHint && !isOpen) {
      const timer = setTimeout(() => {
        setMessageIndex((prev) => (prev + 1) % messages.length);
      }, 2000); // small delay after popup hides

      return () => clearTimeout(timer);
    }
  }, [showHint, isOpen]);

  // Smart hint popup logic
  useEffect(() => {
    if (hasInteracted || isOpen) return;

    let interval;

    const showPopup = () => {
      setMessageIndex((prev) => (prev + 1) % messages.length);
      setShowHint(true);

      setTimeout(() => setShowHint(false), 10000);
    };
    const delay = Math.floor(Math.random() * 2000) + 8000; // 8–10 sec
    // First popup after 9 sec
    const initial = setTimeout(() => {
      showPopup();

      // Start repeating after first popup
      interval = setInterval(() => {
        showPopup();
      }, 20000); // every 20 sec
    }, delay);

    return () => {
      clearTimeout(initial);
      clearInterval(interval);
    };
  }, [hasInteracted, isOpen]);

  const handleClick = () => {
    setIsOpen(!isOpen);
    setHasInteracted(true);
  };

  const currentWaMessage = encodeURIComponent(waMessages[messageIndex]);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Box */}
      {isOpen && (
        <div className="w-80 bg-background rounded-xl shadow-2xl mb-4 overflow-hidden animate-fadeIn">
          {/* Header */}
          <div className="bg-green-500 text-white p-3 font-semibold flex justify-between items-center">
            <span>Bhuvi Homes</span>
            <button onClick={handleClick} aria-label="Close WhatsApp chat">
              ✕
            </button>
          </div>

          {/* Chat Body */}
          <div className="p-3 space-y-3 bg-gray-50">
            {/* Dynamic message */}
            <div className="bg-background p-2 rounded-lg shadow text-sm w-fit max-w-[85%] transition">
              {messages[messageIndex]}
            </div>

            <div className="bg-background p-2 rounded-lg shadow text-sm w-fit max-w-[85%]">
              Click below to chat instantly on WhatsApp.
            </div>

            {/* CTA */}
            <Link
              href={`https://wa.me/918986699600?text=${currentWaMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-green-500 text-white py-2 rounded-lg text-sm font-medium hover:bg-green-600 transition"
              aria-label="Chat with BhuviHomes on WhatsApp"
            >
              Chat on WhatsApp
            </Link>
          </div>
        </div>
      )}

      {/* Tooltip Hint */}
      {!isOpen && showHint && (
        <div className="mb-3 bg-background text-gray-800 px-4 py-2 rounded-lg shadow-lg text-sm animate-fadeIn relative max-w-[220px]">
          <span>{messages[messageIndex]}</span>
          <div className="absolute bottom-[-6px] right-4 w-3 h-3 bg-background rotate-45"></div>
        </div>
      )}

      {/* Button */}
      <button
        onClick={handleClick}
        className="relative flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition transform hover:scale-110"
        aria-label="Chat with BhuviHomes on WhatsApp"
      >
        <i className="fa fa-whatsapp text-3xl"></i>

        {!isOpen && !hasInteracted && (
          <span className="absolute top-1 right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></span>
        )}
      </button>
    </div>
  );
};

export default Whatsapp;
