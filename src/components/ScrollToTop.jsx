// ScrollToTop.jsx
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [scrollY, setScrollY] = useState(0);
  const [showButton, setShowButton] = useState(false);

  // Scroll Progress Calculation
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;
    setScrollY(progress);
    setShowButton(scrollTop > 200); // 200px scroll হলে button দেখাবে
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {showButton && (
        <motion.div
          className="fixed bottom-6 right-6 z-50 cursor-pointer"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
        >
          <div className="relative w-14 h-14 flex items-center justify-center">
            {/* Progress Circle */}
            <svg className="absolute top-0 left-0 w-14 h-14 -rotate-90">
              <circle
                cx="28"
                cy="28"
                r="25"
                stroke="#e5e7eb"
                strokeWidth="4"
                fill="none"
              />
              <circle
                cx="28"
                cy="28"
                r="25"
                stroke="#000" 
                strokeWidth="4"
                fill="none"
                strokeDasharray={2 * Math.PI * 25}
                strokeDashoffset={2 * Math.PI * 25 * (1 - scrollY / 100)}
                strokeLinecap="round"
              />
            </svg>

            {/* Arrow Icon */}
            <FaArrowUp className="text-[#000] text-xl" />
          </div>
        </motion.div>
      )}
    </>
  );
};

export default ScrollToTop;
