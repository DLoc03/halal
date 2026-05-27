import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={handleScrollTop}
      className={`group bg-primary hover:bg-primary/90 fixed right-5 bottom-5 z-50 flex h-14 w-14 items-center justify-center overflow-hidden rounded-full text-white shadow-[0_20px_50px_rgba(0,0,0,0.25)] transition-all duration-500 hover:-translate-y-1 ${
        visible
          ? "visible translate-y-0 opacity-100"
          : "invisible translate-y-6 opacity-0"
      }`}
    >
      {/* Glow */}
      <div className="absolute inset-0 rounded-full bg-white/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <ArrowUp
        size={24}
        className="relative transition-transform duration-300 group-hover:-translate-y-1"
      />
    </button>
  );
}

export default ScrollToTopButton;
