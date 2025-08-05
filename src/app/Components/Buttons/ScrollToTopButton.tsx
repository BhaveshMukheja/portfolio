// components/ScrollToTopButton.tsx
'use client';

import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTopButton() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 bg-gray-700 hover:bg-gray-600 text-white p-3 rounded-full shadow-lg"
      aria-label="Scroll to top"
    >
      <FaArrowUp />
    </button>
  );
}
