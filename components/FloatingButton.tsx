'use client';

import { Sparkles } from 'lucide-react';

export default function FloatingButton() {
  return (
    <a
      href="https://google.com"
      target="_blank"
      rel="noopener noreferrer"
      className="floating-button bounce-attention bg-red-600 hover:bg-red-700 text-white"
    >
      <div className="flex items-center gap-2">
        <Sparkles className="h-5 w-5" />
        <span className="font-semibold">Personalize Your Experience</span>
      </div>
    </a>
  );
}