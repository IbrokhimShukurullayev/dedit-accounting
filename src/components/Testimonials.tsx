import { useEffect, useRef, useState } from "react";

interface TestimonialsProps {
  setActiveSection: (section: string) => void;
}

const Testimonials = ({ setActiveSection }: TestimonialsProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection("testimonials");
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

  // Auto rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CEO, Tech Innovations Inc.",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      content:
        "Dedit Accounting transformed our financial operations. Their team's attention to detail and proactive approach has saved us both time and money. We've been able to make more informed business decisions thanks to their clear reporting and insights.",
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Founder, GreenLeaf Restaurants",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      content:
        "Working with Dedit Accounting has been a game-changer for our restaurant chain. They've streamlined our payroll, improved our cash flow management, and helped us navigate complex tax scenarios. Their team is responsive and truly cares about our success.",
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      position: "CFO, Global Retail Solutions",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      content:
        "I've worked with many accounting firms throughout my career, but Dedit Accounting stands out for their expertise and personalized service. They've helped us implement robust financial controls and provided strategic advice that has directly impacted our bottom line.",
    },
    {
      id: 4,
      name: "David Williams",
      position: "Owner, Williams Construction LLC",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      content:
        "As a small business owner, I needed accounting support that understood the unique challenges of the construction industry. Dedit Accounting has delivered beyond my expectations. Their tax planning strategies alone have saved us thousands, and their bookkeeping services give me peace of mind.",
    },
  ];

  const handleDotClick = (index: number) => {
    setActiveTestimonial(index);
  };

  return (
    <div ref={sectionRef} className="bg-white py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-primary md:text-4xl">Our Clients Feedback</h2>
          <p className="mx-auto max-w-2xl text-lg text-secondary">
            Discover what our clients say about our accounting services and how we've helped their
            businesses thrive
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          {/* Testimonial Slider */}
          <div className="relative rounded-2xl bg-light p-8 shadow-card md:p-10">
            {/* Quote icon */}
            <div className="absolute -top-6 left-10 rounded-full bg-[#080833] p-4 text-white shadow-md">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16.032-.52.112-1.1.248-.73.168-1.05.3-.96.4.73.05.12.32.14.84.01.5.04 1.1.08 1.78.04.7.1 1.3.17 1.8s.17.92.28 1.33c.28 1.1.76 1.9 1.41 2.41.45.32.95.48 1.51.48.7 0 1.56-.42 2.56-1.27.97-.81 1.47-1.84 1.47-3.07zm8 0c0-.88-.23-1.618-.69-2.217-.326-.42-.77-.695-1.327-.824-.56-.132-1.07-.14-1.54-.03-.16.03-.52.11-1.1.25-.74.17-1.05.3-.96.4.73.05.12.32.14.84.01.5.04 1.1.08 1.78.04.7.1 1.3.17 1.8s.17.92.28 1.33c.28 1.1.76 1.9 1.41 2.41.45.32.95.48 1.51.48.7 0 1.56-.42 2.56-1.27.97-.81 1.47-1.84 1.47-3.07z" />
              </svg>
            </div>

            {/* Testimonial content */}
            <div className="relative min-h-[280px] overflow-hidden">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === activeTestimonial ? "z-10 opacity-100" : "z-0 opacity-0"
                  }`}
                >
                  <p className="mb-8 text-lg italic text-secondary md:text-xl">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="mr-4 h-14 w-14 rounded-full object-cover shadow-md"
                    />
                    <div>
                      <h4 className="font-semibold text-primary">{testimonial.name}</h4>
                      <p className="text-sm text-secondary">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation dots */}
            <div className="mt-8 flex justify-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`h-3 w-3 rounded-full transition-all duration-300 ${
                    index === activeTestimonial
                      ? "scale-125 bg-[#080833]"
                      : "bg-secondary-light hover:bg-[#080833]/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Client logos */}
          <div className="mt-20">
            <h3 className="mb-8 text-center text-xl font-semibold text-primary">
              Trusted by Leading Companies
            </h3>
            <div className="grid grid-cols-2 items-center gap-8 md:grid-cols-4">
              <div className="flex justify-center">
                <div className="flex h-16 w-32 items-center justify-center rounded-lg bg-light p-4">
                  <span className="text-lg font-bold text-primary">TechCorp</span>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="flex h-16 w-32 items-center justify-center rounded-lg bg-light p-4">
                  <span className="text-lg font-bold text-primary">BuildCo</span>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="flex h-16 w-32 items-center justify-center rounded-lg bg-light p-4">
                  <span className="text-lg font-bold text-primary">FreshMart</span>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="flex h-16 w-32 items-center justify-center rounded-lg bg-light p-4">
                  <span className="text-lg font-bold text-primary">HealthPlus</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
