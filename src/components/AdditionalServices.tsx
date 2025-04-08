import { useEffect, useRef } from "react";
import { useTranslation } from "next-i18next";

interface AdditionalServicesProps {
  setActiveSection: (section: string) => void;
}

const AdditionalServices = ({ setActiveSection }: AdditionalServicesProps) => {
  const [t, i18n] = useTranslation("global");

  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection("additional-services");
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

  const additionalServices = [
    {
      name: t("additional_services.service1"),
      unit: t("additional_services.unit_once"),
      price: 550,
    },
    {
      name: t("additional_services.service2"),
      unit: t("additional_services.unit_once"),
      price: 150,
    },
    {
      name: t("additional_services.service3"),
      unit: t("additional_services.unit_monthly"),
      price: 500,
    },
    {
      name: t("additional_services.service4"),
      unit: t("additional_services.unit_per_document"),
      price: 9,
    },
    {
      name: t("additional_services.service5"),
      unit: t("additional_services.unit_per_document"),
      price: 30,
    },
    {
      name: t("additional_services.service6"),
      unit: t("additional_services.unit_per_document"),
      price: 20,
    },
    {
      name: t("additional_services.service7"),
      unit: t("additional_services.unit_per_document"),
      price: 8,
    },
    {
      name: t("additional_services.service8"),
      unit: t("additional_services.unit_per_document"),
      price: 75,
    },
    {
      name: t("additional_services.service9"),
      unit: t("additional_services.unit_per_document"),
      price: 90,
    },
    {
      name: t("additional_services.service10"),
      unit: t("additional_services.unit_per_employee"),
      price: 90,
    },
    {
      name: t("additional_services.service11"),
      unit: t("additional_services.unit_per_document"),
      price: 1200,
    },
    {
      name: t("additional_services.service12"),
      unit: t("additional_services.unit_session"),
      price: 150,
    },
  ];

  return (
    <div ref={sectionRef} className="bg-light py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-primary md:text-4xl">
            {t("additional_services.title")}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-secondary">
            {t("additional_services.subtitle")}
          </p>
        </div>

        <div className="overflow-hidden rounded-xl bg-white shadow-card">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">{t("Service Name")}</th>
                  <th className="px-6 py-4 text-center font-semibold">{t("Unit")}</th>
                  <th className="px-6 py-4 text-right font-semibold">{t("Price (so'm)")}</th>
                </tr>
              </thead>
              <tbody>
                {additionalServices.map((service, index) => (
                  <tr
                    key={index}
                    className={`border-b border-gray-100 transition-colors duration-150 hover:bg-light hover:bg-opacity-50 ${
                      index % 2 === 0 ? "bg-white" : "bg-light bg-opacity-30"
                    }`}
                  >
                    <td className="px-6 py-4 text-secondary">{service.name}</td>
                    <td className="px-6 py-4 text-center text-secondary">{service.unit}</td>
                    <td className="px-6 py-4 text-right font-medium text-primary">
                      {service.price.toLocaleString()} 000 so'm
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="mb-6 text-secondary">{t("additional_services.custom_service_note")}</p>
          <a
            href="#contact"
            className="inline-block transform rounded-full bg-primary px-8 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-primary-light hover:shadow-lg"
          >
            {t("additional_services.contact_us")}
          </a>
        </div>
      </div>
    </div>
  );
};

export default AdditionalServices;
