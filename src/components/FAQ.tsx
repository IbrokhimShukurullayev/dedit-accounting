import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

interface FAQProps {
  setActiveSection: (section: string) => void;
}

const FAQ = ({ setActiveSection }: FAQProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const [t, i18n] = useTranslation("global");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection("faq");
        }
      },
      { threshold: 0.2 },
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

  const faqs = [
    {
      id: 1,
      question: t("faq.faq1"),
      answer: t("faq.faqa"),
    },
    {
      id: 2,
      question: t("faq.faq2"),
      answer: t("faq.faqb"),
    },
    {
      id: 3,
      question: t("faq.faq3"),
      answer: t("faq.faqc"),
    },
    {
      id: 4,
      question: t("faq.faq4"),
      answer: t("faq.faqd"),
    },
    {
      id: 5,
      question: t("faq.faq5"),
      answer: t("faq.faqe"),
    },
    {
      id: 6,
      question: t("faq.faq6"),
      answer: t("faq.faqf"),
    },
    {
      id: 7,
      question: t("faq.faq7"),
      answer: t("faq.faqg"),
    },
    {
      id: 8,
      question: t("faq.faq8"),
      answer: t("faq.faqh"),
    },
  ];

  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    if (openItems.includes(id)) {
      setOpenItems(openItems.filter((item) => item !== id));
    } else {
      setOpenItems([...openItems, id]);
    }
  };

  return (
    <div ref={sectionRef} className="bg-light py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-primary md:text-4xl">{t("faq.faq11")}</h2>
          <p className="mx-auto max-w-2xl text-lg text-secondary">{t("faq.faq12")}</p>
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.id} className="overflow-hidden rounded-xl bg-white shadow-card">
                <button
                  className="flex w-full items-center justify-between p-6 text-left focus:outline-none"
                  onClick={() => toggleItem(faq.id)}
                >
                  <h3 className="text-lg font-semibold text-primary">{faq.question}</h3>
                  <span
                    className={`ml-4 transition-transform duration-300 ${openItems.includes(faq.id) ? "rotate-180" : ""}`}
                  >
                    <svg
                      className="h-5 w-5 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openItems.includes(faq.id) ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="p-6 pt-0">
                    <p className="text-secondary">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="mb-6 text-secondary">{t("faq.faq9")}</p>
            <a
              href="#contact"
              className="inline-block transform rounded-full bg-primary px-8 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-primary-light hover:shadow-lg"
            >
              {t("faq.faq10")}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
