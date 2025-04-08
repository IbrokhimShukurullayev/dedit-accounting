import { useEffect, useRef, useState } from 'react';

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
          setActiveSection('testimonials');
        }
      },
      { threshold: 0.2 }
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
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      content: "Dedit Accounting transformed our financial operations. Their team's attention to detail and proactive approach has saved us both time and money. We've been able to make more informed business decisions thanks to their clear reporting and insights."
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Founder, GreenLeaf Restaurants",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      content: "Working with Dedit Accounting has been a game-changer for our restaurant chain. They've streamlined our payroll, improved our cash flow management, and helped us navigate complex tax scenarios. Their team is responsive and truly cares about our success."
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      position: "CFO, Global Retail Solutions",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      content: "I've worked with many accounting firms throughout my career, but Dedit Accounting stands out for their expertise and personalized service. They've helped us implement robust financial controls and provided strategic advice that has directly impacted our bottom line."
    },
    {
      id: 4,
      name: "David Williams",
      position: "Owner, Williams Construction LLC",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      content: "As a small business owner, I needed accounting support that understood the unique challenges of the construction industry. Dedit Accounting has delivered beyond my expectations. Their tax planning strategies alone have saved us thousands, and their bookkeeping services give me peace of mind."
    },
  ];

  const handleDotClick = (index: number) => {
    setActiveTestimonial(index);
  };

  return (
    <div
      ref={sectionRef}
      className="py-24 bg-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Clients Feedback</h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Discover what our clients say about our accounting services and how we've helped their businesses thrive
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Testimonial Slider */}
          <div className="relative bg-light rounded-2xl shadow-card p-8 md:p-10">
            {/* Quote icon */}
            <div className="absolute -top-6 left-10 bg-primary text-white p-4 rounded-full shadow-md">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16.032-.52.112-1.1.248-.73.168-1.05.3-.96.4.73.05.12.32.14.84.01.5.04 1.1.08 1.78.04.7.1 1.3.17 1.8s.17.92.28 1.33c.28 1.1.76 1.9 1.41 2.41.45.32.95.48 1.51.48.7 0 1.56-.42 2.56-1.27.97-.81 1.47-1.84 1.47-3.07zm8 0c0-.88-.23-1.618-.69-2.217-.326-.42-.77-.695-1.327-.824-.56-.132-1.07-.14-1.54-.03-.16.03-.52.11-1.1.25-.74.17-1.05.3-.96.4.73.05.12.32.14.84.01.5.04 1.1.08 1.78.04.7.1 1.3.17 1.8s.17.92.28 1.33c.28 1.1.76 1.9 1.41 2.41.45.32.95.48 1.51.48.7 0 1.56-.42 2.56-1.27.97-.81 1.47-1.84 1.47-3.07z" />
              </svg>
            </div>

            {/* Testimonial content */}
            <div className="relative overflow-hidden min-h-[280px]">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`transition-opacity duration-1000 absolute inset-0 ${
                    index === activeTestimonial ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                >
                  <p className="text-lg md:text-xl text-secondary mb-8 italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover mr-4 shadow-md"
                    />
                    <div>
                      <h4 className="font-semibold text-primary">{testimonial.name}</h4>
                      <p className="text-secondary text-sm">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeTestimonial
                      ? 'bg-primary scale-125'
                      : 'bg-secondary-light hover:bg-primary/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Client logos */}
          <div className="mt-20">
            <h3 className="text-xl font-semibold text-primary text-center mb-8">Trusted by Leading Companies</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              <div className="flex justify-center">
                <div className="w-32 h-16 bg-light rounded-lg flex items-center justify-center p-4">
                  <span className="text-lg font-bold text-primary">TechCorp</span>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-32 h-16 bg-light rounded-lg flex items-center justify-center p-4">
                  <span className="text-lg font-bold text-primary">BuildCo</span>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-32 h-16 bg-light rounded-lg flex items-center justify-center p-4">
                  <span className="text-lg font-bold text-primary">FreshMart</span>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-32 h-16 bg-light rounded-lg flex items-center justify-center p-4">
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
