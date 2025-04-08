"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

interface ContactProps {
  setActiveSection: (section: string) => void;
}

const Contact = ({ setActiveSection }: ContactProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [t, i18n] = useTranslation("global");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection("contact");
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const message = `
🔔 *Yangi xabar!*

👤 *Ism:* ${formData.name}
📧 *Email:* ${formData.email}
📱 *Telefon:* ${formData.phone || "Ko'rsatilmagan"}
💬 *Xabar:* ${formData.message}
    `;

    const botToken = "7424974828:AAEOy8CEJwLaJ3XQYxYtLk9UXmVHbvpwZhg";
    const chatId = "-4267196528";

    try {
      await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: "Markdown",
        }),
      });

      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      console.error("Xabar yuborishda xatolik:", error);
      setIsSubmitting(false);
      alert("Xabar yuborishda xatolik yuz berdi. Iltimos, keyinroq urinib ko‘ring.");
    }
  };

  return (
    <div ref={sectionRef} className="bg-white py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-primary md:text-4xl">
            {t("contact.contact1")}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-secondary">{t("contact.contact2")}</p>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div className="w-full">
            <div className="rounded-2xl bg-light p-8 shadow-card">
              <h3 className="mb-6 text-2xl font-bold text-primary">{t("contact.contact3")}</h3>

              {submitSuccess ? (
                <div className="mb-4 flex items-start rounded-lg border border-green-200 bg-green-50 px-6 py-5 text-green-700">
                  <svg
                    className="mr-2 mt-0.5 h-5 w-5 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <div>
                    <p className="font-medium">Xabar muvaffaqiyatli yuborildi!</p>
                    <p className="mt-1">Biz tez orada sizga javob qaytaramiz.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="mb-1 block font-medium text-secondary">
                      {t("contact.contact4")}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-gray-200 px-4 py-3"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-1 block font-medium text-secondary">
                      {t("contact.contact5")}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-gray-200 px-4 py-3"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="mb-1 block font-medium text-secondary">
                      {t("contact.contact6")}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-gray-200 px-4 py-3"
                      placeholder="+998 90 123 45 67"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-1 block font-medium text-secondary">
                      {t("contact.contact7")}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full rounded-lg border border-gray-200 px-4 py-3"
                      placeholder={t("contact.contact8")}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
                  >
                    {isSubmitting ? "Yuborilmoqda..." : t("contact.contact9")}
                  </button>
                </form>
              )}
            </div>
          </div>

          <div className="w-full">
            <div className="h-full rounded-2xl bg-light p-8 shadow-card">
              <h3 className="mb-6 text-2xl font-bold text-primary">{t("contact.contact10")}</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 rounded-full bg-white p-3 shadow-md">
                    <svg
                      className="h-6 w-6 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="mb-1 font-medium text-primary">{t("contact.contact11")}</h4>
                    <a
                      href="tel:+998331339333"
                      className="text-secondary transition-colors hover:text-primary"
                    >
                      +998 33 133 93 33
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 rounded-full bg-white p-3 shadow-md">
                    <svg
                      className="h-6 w-6 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="mb-1 font-medium text-primary">{t("contact.contact12")}</h4>
                    <a
                      href="info@dedit.uz"
                      className="text-secondary transition-colors hover:text-primary"
                    >
                      info@dedit.uz
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 rounded-full bg-white p-3 shadow-md">
                    <svg
                      className="h-6 w-6 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="mb-1 font-medium text-primary">{t("contact.contact13")}</h4>
                    <p className="text-secondary">Toshkent shahar, Olmazor tumani</p>
                    <p className="text-secondary">Langar ko'chasi, 76A</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 rounded-full bg-white p-3 shadow-md">
                    <svg
                      className="h-6 w-6 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="mb-1 font-medium text-primary">{t("contact.contact15")}</h4>
                    <p className="text-secondary">{t("contact.contact16")} </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 h-60 overflow-hidden rounded-lg shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.114068625035!2d69.22500037690743!3d41.328132871307446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0047010a45%3A0xe0684fb9ef634ab9!2sDedit%20Accounting!5e0!3m2!1sen!2s!4v1742930915969!5m2!1sen!2s"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
