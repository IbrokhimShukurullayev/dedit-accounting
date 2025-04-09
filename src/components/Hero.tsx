import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

interface HeroProps {
  setActiveSection: (section: string) => void;
}

const Hero = ({ setActiveSection }: HeroProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [t, i18n] = useTranslation("global");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection("home");
        }
      },
      { threshold: 0.5 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [setActiveSection]);

  return (
    <div
      ref={sectionRef}
      className="relative overflow-hidden bg-[#080833] pb-16 pt-24 text-white md:pb-24 md:pt-32"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute left-0 top-0 h-full w-full">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-primary-light opacity-20 blur-3xl md:h-64 md:w-64"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-4 text-5xl font-bold tracking-tight md:text-6xl">Dedit Accounting</h1>
          <p className="mb-10 text-xl font-light text-secondary-light md:text-2xl">
            {t("hero.home")}
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="#services"
              className="transform rounded-full bg-white px-8 py-3 font-semibold text-primary shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-secondary-light hover:shadow-lg"
            >
              {t("hero.home1")}
            </a>
            <a
              href="#contact"
              className="transform rounded-full border-2 border-white bg-transparent px-8 py-3 font-semibold transition-all duration-300 hover:-translate-y-1 hover:bg-primary-light hover:shadow-lg"
            >
              {t("hero.home2")}
            </a>
          </div>
        </div>
      </div>

      {/* Wave shape divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 100"
          className="h-auto w-full"
          preserveAspectRatio="none"
        >
          <path
            fill="#f5f6f9"
            fillOpacity="1"
            d="M0,32L80,42.7C160,53,320,75,480,74.7C640,75,800,53,960,53.3C1120,53,1280,75,1360,85.3L1440,96L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
