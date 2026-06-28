import "@/styles/why.css";
import {
  Briefcase,
  Headset,
  Megaphone,
  Laptop,
  Calculator,
  Building2,
} from "lucide-react";

const services = [
  {
    icon: <Briefcase size={32} />,
    title: "Executive & Virtual Assistance",
    description:
      "Professional executive and administrative support to keep your business organized and efficient.",
    specialized: false,
  },

  {
    icon: <Headset size={32} />,
    title: "Customer Experience & Support",
    description:
      "Deliver exceptional service through phone, email, chat, and CRM support.",
    specialized: false,
  },

  {
    icon: <Megaphone size={32} />,
    title: "Marketing & Brand Support",
    description:
      "Grow your brand through social media, content, and marketing support.",
    specialized: false,
  },

  {
    icon: <Laptop size={32} />,
    title: "IT & Technical Support",
    description:
      "Reliable help desk, troubleshooting, and day-to-day technical assistance.",
    specialized: true,
  },

  {
    icon: <Calculator size={32} />,
    title: "Accounting & Financial Support",
    description:
      "Bookkeeping, payroll assistance, invoicing, and financial administration.",
    specialized: true,
  },

  {
    icon: <Building2 size={32} />,
    title: "Property Management",
    description:
      "Administrative and tenant support for property managers and real estate teams.",
    specialized: true,
  },
];

export default function WhyChoose() {
  return (
    <section className="services-section" id="services">
      <div className="services-container">
        <div className="services-heading">
          <span className="services-badge">WHAT WE DO</span>

          <h2>
            Strategic Virtual Solutions
            <br />
            <span>for Modern Businesses</span>
          </h2>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div
              key={service.title}
              className={`service-card ${
                service.specialized ? "specialized-card" : ""
              }`}
            >
              <div className="service-icon">{service.icon}</div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
