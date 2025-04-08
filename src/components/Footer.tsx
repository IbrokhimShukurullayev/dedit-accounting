import { useTranslation } from "react-i18next";

const Footer = () => {
  const [t, i18n] = useTranslation("global");
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { name: t("header.home"), href: "#home" },
    { name: t("header.services"), href: "#services" },
    { name: t("header.pricing"), href: "#pricing" },
    { name: t("header.additional-services"), href: "#additional-services" },
    { name: t("header.testimonials"), href: "#testimonials" },
    { name: t("header.faq"), href: "#faq" },
    { name: t("header.contact"), href: "#contact" },
  ];

  const serviceLinks = [
    { name: t("servicess.tax"), href: "#services" },
    { name: t("servicess.financial"), href: "#services" },
    { name: t("servicess.payroll"), href: "#services" },
    { name: t("servicess.consulting"), href: "#services" },
    { name: t("servicess.bookkeeping"), href: "#services" },
  ];

  const legalLinks = [
    { name: t("footer.footer4"), href: "#" },
    { name: t("footer.footer5"), href: "#" },
    { name: t("footer.footer6"), href: "#" },
  ];

  return (
    <footer className="bg-primary text-white">
      {/* Wave shape divider */}
      <div className="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 100"
          className="h-auto w-full rotate-180"
          preserveAspectRatio="none"
          style={{ marginBottom: -1 }}
        >
          <path
            fill="#f5f6f9"
            fillOpacity="1"
            d="M0,32L80,42.7C160,53,320,75,480,74.7C640,75,800,53,960,53.3C1120,53,1280,75,1360,85.3L1440,96L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"
          ></path>
        </svg>
      </div>

      <div className="pb-16 pt-8">
        <div className="container mx-auto px-4">
          <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-12">
            {/* Brand and description */}
            <div className="lg:col-span-5">
              <div className="mb-4 flex items-center">
                <span className="text-4xl font-bold">D</span>
                <span className="ml-1 text-lg font-semibold text-white">Dedit Accounting</span>
              </div>
              <p className="mb-6 max-w-md text-secondary-light">{t("footer.footer1")}</p>
              <div className="flex space-x-4">
                <a
                  href="@dedituz"
                  target="_blank"
                  className="transform rounded-full bg-white/10 p-2 transition-colors duration-300 hover:scale-110 hover:bg-white/20"
                  aria-label="Facebook"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9.96 16.57l-.39 4.14c.56 0 .8-.24 1.1-.53l2.64-2.5 5.48 4.02c1.01.56 1.73.26 1.99-.94l3.62-17.04c.34-1.58-.58-2.2-1.6-1.84L1.74 9.3c-1.55.6-1.53 1.47-.27 1.86l4.9 1.52L18.42 5.63c.58-.38 1.12-.17.68.2L9.96 16.57z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/dedit.uz/"
                  className="transform rounded-full bg-white/10 p-2 transition-colors duration-300 hover:scale-110 hover:bg-white/20"
                  aria-label="Twitter"
                  target="_blank"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7.75 2h8.5C19.55 2 22 4.45 22 7.75v8.5C22 19.55 19.55 22 16.25 22h-8.5C4.45 22 2 19.55 2 16.25v-8.5C2 4.45 4.45 2 7.75 2zm0 2C5.68 4 4 5.68 4 7.75v8.5C4 18.32 5.68 20 7.75 20h8.5C18.32 20 20 18.32 20 16.25v-8.5C20 5.68 18.32 4 16.25 4h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6zm4.75-2a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="lg:col-span-2">
              <h4 className="mb-4 text-lg font-semibold text-white">{t("footer.footer2")}</h4>
              <ul className="space-y-2">
                {navigationLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="inline-block text-secondary-light transition-colors duration-200 hover:translate-x-1 hover:text-white"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Links */}
            <div className="lg:col-span-2">
              <h4 className="mb-4 text-lg font-semibold text-white">{t("servicess.services1")}</h4>
              <ul className="space-y-2">
                {serviceLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="inline-block text-secondary-light transition-colors duration-200 hover:translate-x-1 hover:text-white"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-3">
              <h4 className="mb-4 text-lg font-semibold text-white">{t("hero.home2")}</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg
                    className="mr-3 mt-0.5 h-5 w-5 text-secondary-light"
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
                  <a
                    href="tel:+998331339333"
                    className="text-secondary-light transition-colors hover:text-white"
                  >
                    +998 33 133 93 33
                  </a>
                </li>
                <li className="flex items-start">
                  <svg
                    className="mr-3 mt-0.5 h-5 w-5 text-secondary-light"
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
                  <a
                    href="mailto:info@deditaccounting.com"
                    className="text-secondary-light transition-colors hover:text-white"
                  >
                    info@dedit.uz
                  </a>
                </li>
                <li className="flex items-start">
                  <svg
                    className="mr-3 mt-0.5 h-5 w-5 text-secondary-light"
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
                  <span className="text-secondary-light">
                    Toshkent shahar, Olmazor tumani
                    <br />
                    Langar ko'chasi, 76A
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col items-center justify-between md:flex-row">
              <p className="mb-4 text-sm text-secondary-light md:mb-0">
                &copy; {currentYear} {t("footer.footer3")}
              </p>
              <ul className="flex flex-wrap space-x-6 text-sm text-secondary-light">
                {legalLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="transition-colors duration-200 hover:text-white">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
