import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

interface HeaderProps {
  activeSection: string;
}

const Header = ({ activeSection }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [t, i18n] = useTranslation("global");
  console.log("Joriy til:", i18n.language);

  const handleChangeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log("Tanlangan til:", event.target.value);
    i18n.changeLanguage(event.target.value);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: t("header.home") },
    { id: "services", label: t("header.services") },
    { id: "pricing", label: t("header.pricing") },
    { id: "additional-services", label: t("header.additional-services") },
    { id: "testimonials", label: t("header.testimonials") },
    { id: "faq", label: t("header.faq") },
    { id: "contact", label: t("header.contact") },
  ];

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white py-2 shadow-md" : "bg-primary py-4 text-white"
      }`}
    >
      <div className="flex items-center justify-between px-8">
        <a
          href="#home"
          className="flex items-center transition-transform hover:scale-105 hover:transform"
        >
          <div className="flex items-center text-3xl font-bold">
            <span className={`text-4xl ${isScrolled ? "text-primary" : "text-white"}`}>D</span>
            <span
              className={`${isScrolled ? "text-primary" : "text-white"} ml-1 hidden font-semibold md:block`}
            >
              Dedit Accounting
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 space-x-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`pb-1 text-sm font-medium transition-all duration-300 ${
                activeSection === item.id
                  ? isScrolled
                    ? "border-b-2 border-primary text-primary"
                    : "border-b-2 border-white text-white"
                  : isScrolled
                    ? "text-secondary hover:border-b-2 hover:border-primary-light hover:text-primary"
                    : "text-white/80 hover:border-b-2 hover:border-white/50 hover:text-white"
              } `}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <select
            value={i18n.language}
            onChange={handleChangeLanguage}
            className={`hidden rounded-lg border-gray-300 px-2 py-2 focus:border-blue-500 focus:ring-blue-500 md:block ${
              isScrolled
                ? "bg-primary text-white hover:bg-primary-light"
                : "bg-white text-primary hover:bg-light hover:text-primary-dark"
            }`}
          >
            <option value="uz">Uzb</option>
            <option value="ru">Rus</option>
          </select>
          <a
            href="tel:+998331339333"
            className={`ml-4 hidden transform rounded-full px-5 py-2 font-medium shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md md:block ${
              isScrolled
                ? "bg-primary text-white hover:bg-primary-light"
                : "bg-white text-primary hover:bg-light hover:text-primary-dark"
            } `}
          >
            +998 33 133 93 33
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="focus:outline-none md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6 transition-colors ${isScrolled ? "text-primary" : "text-white"}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden bg-white shadow-lg transition-all duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container mx-auto px-4 py-3">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`border-l-4 py-2 pl-3 text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? "border-primary font-semibold text-primary"
                    : "border-transparent text-secondary hover:border-primary-light hover:text-primary"
                } `}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="tel:+11234567890"
              className="flex items-center py-2 font-medium text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 h-5 w-5 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              +1 (123) 456-7890
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
