import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

interface PricingProps {
  setActiveSection: (section: string) => void;
}

const Pricing = ({ setActiveSection }: PricingProps) => {
  const [t, i18n] = useTranslation("global");
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection("pricing");
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

  const pricingTiers = [
    {
      id: "economy",
      name: t("pricing.plan1_title"),
      description: t("pricing.plan1_desc"),
      price: t("pricing.plan1_price"),
      limit: t("pricing.plan1_turnover"),
      features: [t("pricing.feature1"), t("pricing.feature2"), t("pricing.feature3")],
      notIncluded: [t("pricing.feature4"), t("pricing.feature5"), t("pricing.feature6")],
      popular: false,
    },
    {
      id: "standard",
      name: t("pricing.plan2_title"),
      description: t("pricing.plan2_desc"),
      price: t("pricing.plan2_price"),
      limit: t("pricing.plan2_turnover"),
      features: [
        t("pricing.feature1"),
        t("pricing.feature2"),
        t("pricing.feature3"),
        `${t("pricing.feature4")} (up to 50)`,
        `${t("pricing.feature5")} (up to 30)`,
      ],
      notIncluded: [t("pricing.feature6")],
      popular: true,
    },
    {
      id: "standard-plus",
      name: t("pricing.plan3_title"),
      description: t("pricing.plan3_desc"),
      price: t("pricing.plan3_price"),
      limit: t("pricing.plan3_turnover"),
      features: [
        t("pricing.feature1"),
        t("pricing.feature2"),
        t("pricing.feature3"),
        `${t("pricing.feature4")} (up to 100)`,
        `${t("pricing.feature5")} (up to 50)`,
        t("pricing.feature6"),
      ],
      notIncluded: [],
      popular: false,
    },
  ];

  const renderIcon = (included: boolean) => {
    return (
      <div className="flex justify-center">
        {included ? (
          <svg
            className="h-5 w-5 text-green-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        ) : (
          <svg
            className="h-5 w-5 text-red-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        )}
      </div>
    );
  };

  return (
    <div ref={sectionRef} className="bg-white py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-primary md:text-4xl">
            {t("pricing.pricing1")}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-secondary">{t("pricing.pricing2")}</p>
        </div>

        <div className="mb-12 flex flex-col justify-center space-y-8 lg:flex-row lg:space-x-6 lg:space-y-0">
          {pricingTiers.map((tier) => (
            <div
              key={tier.id}
              className={`flex w-full flex-col lg:w-1/3 ${tier.popular ? "relative z-10 scale-105 transform" : ""}`}
            >
              <div
                className={`flex h-full flex-col rounded-2xl border p-8 ${tier.popular ? "border-primary bg-white shadow-pricing" : "border-gray-200 bg-white shadow-card"}`}
              >
                {tier.popular && (
                  <div className="absolute right-0 top-0 rounded-bl-lg rounded-tr-xl bg-primary px-3 py-1 text-sm font-medium text-white">
                    {t("pricing.popular")}
                  </div>
                )}
                <h3 className="mb-2 text-2xl font-bold text-primary">{tier.name}</h3>
                <p className="mb-5 text-secondary">{tier.description}</p>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-primary">{tier.price}</span>
                  <span className="text-secondary">so'm/oy</span>
                </div>
                <p className="mb-6 text-sm italic text-secondary">{tier.limit}</p>

                <div className="flex-grow">
                  <ul className="mb-8 space-y-3">
                    {tier.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        {renderIcon(true)}
                        <span className="ml-3 text-secondary">{feature}</span>
                      </li>
                    ))}
                    {tier.notIncluded.map((feature, index) => (
                      <li key={`not-${index}`} className="flex items-start opacity-70">
                        {renderIcon(false)}
                        <span className="ml-3 text-secondary">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  className={`w-full rounded-full py-3 font-semibold transition-all duration-300 ${tier.popular ? "transform bg-primary text-white shadow-md hover:-translate-y-1 hover:bg-primary-light hover:shadow-lg" : "transform bg-light text-primary hover:-translate-y-1 hover:bg-secondary-light hover:shadow-md"}`}
                >
                  {t("pricing.select")}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-xl bg-primary p-6 text-center text-white">
          <h3 className="mb-2 text-xl font-semibold">{t("pricing.discount_banner")}</h3>
          <p className="text-secondary-light">{t("pricing.discount_note")}</p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
