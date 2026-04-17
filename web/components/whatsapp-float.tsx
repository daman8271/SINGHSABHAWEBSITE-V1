import { contactWhatsAppUrl } from "@/lib/site";

export default function WhatsAppFloat() {
  return (
    <a
      href={contactWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 md:bottom-7 md:right-7 z-50 h-12 w-12 md:h-14 md:w-14 rounded-full bg-ink text-cream flex items-center justify-center shadow-[0_6px_20px_rgba(26,22,19,0.25)] hover:scale-105 active:scale-95 transition-transform"
    >
      <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-7 md:h-7" fill="currentColor" aria-hidden="true">
        <path d="M19.11 4.91A9.82 9.82 0 0 0 12.05 2C6.58 2 2.13 6.45 2.13 11.92c0 1.75.46 3.45 1.33 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.47 0 9.92-4.45 9.92-9.92 0-2.65-1.03-5.14-2.86-7.01zM12.05 20.15h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.11.82.83-3.03-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.83 2.42a8.2 8.2 0 0 1 2.42 5.83c0 4.54-3.7 8.22-8.26 8.22zm4.52-6.17c-.25-.12-1.47-.72-1.7-.8-.23-.08-.4-.12-.56.12s-.64.8-.79.96c-.14.16-.29.18-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.16.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43l-.48-.01c-.16 0-.43.06-.66.31-.23.25-.87.85-.87 2.08 0 1.23.89 2.41 1.02 2.58.12.16 1.76 2.69 4.27 3.77.6.26 1.06.41 1.43.53.6.19 1.14.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28z" />
      </svg>
    </a>
  );
}
