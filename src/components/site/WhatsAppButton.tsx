import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919999999999?text=Hi%20Skill%20Spark%20Consulting%2C%20I%27d%20like%20a%20consultation."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 group"
      aria-label="Chat on WhatsApp"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
      <span className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-elegant hover:scale-110 transition-smooth">
        <MessageCircle className="w-6 h-6" fill="currentColor" />
      </span>
    </a>
  );
}
