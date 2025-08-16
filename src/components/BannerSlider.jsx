import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import banner1 from "../assets/banner.jpg";
import banner2 from "../assets/banner2.jpg";
 import banner3 from "../assets/vanner3.jpg";

const banners = [
  {
    id: 1,
    title: "Welcome to Visa Portal",
    subtitle: "Explore your visa services easily",
    image: banner1,
  },
  {
    id: 2,
    title: "Fast & Secure Process",
    subtitle: "Track your application anytime",
    image: banner2,
  },
  {
    id: 3,
    title: "Global Opportunities",
    subtitle: "Get visa for your dream destination",
    image: banner3,
  },
];

const BannerSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Initialize AOS once
  useEffect(() => {
    AOS.init({ duration: 1200, once: false }); // once:false to animate every time
  }, []);

  // Auto change banner every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Refresh AOS on slide change
  useEffect(() => {
    AOS.refresh();
  }, [currentIndex]);

  return (
    <div className="relative h-[70vh] w-full overflow-hidden">
      {banners.map((banner, index) => (
        <div
          key={banner.id}
          className={`absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${banner.image})`,
          }}
        >
          <div className="max-w-7xl mx-auto h-full flex flex-col justify-center px-4 text-white">
            <h1
              key={`title-${currentIndex}`} // key changes per slide
              className="text-4xl md:text-6xl font-bold mb-4"
              data-aos="fade-down"
            >
              {banner.title}
            </h1>
            <p
              key={`subtitle-${currentIndex}`} // key changes per slide
              className="text-lg md:text-2xl"
              data-aos="fade-up"
            >
              {banner.subtitle}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BannerSlider;
