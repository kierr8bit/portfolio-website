import "@/styles/about.css";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Globe2,
  Handshake,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";

const values = [
  {
    icon: <ShieldCheck size={30} />,
    title: "Integrity",
    description:
      "We operate with honesty, accountability, and professionalism in every client relationship.",
  },
  {
    icon: <Sparkles size={30} />,
    title: "Excellence",
    description:
      "We aim to deliver dependable support that helps businesses perform at a higher level.",
  },
  {
    icon: <Handshake size={30} />,
    title: "Partnership",
    description:
      "We work as an extension of your team, invested in your long-term success.",
  },
  {
    icon: <TrendingUp size={30} />,
    title: "Growth",
    description:
      "We help businesses scale smarter through flexible and reliable virtual solutions.",
  },
  {
    icon: <Globe2 size={30} />,
    title: "Global Mindset",
    description:
      "We connect businesses with skilled remote professionals ready to support modern teams.",
  },
];

const pillars = [
  {
    icon: <Target size={26} />,
    label: "Mission",
    title: "Helping businesses scale with confidence.",
    description:
      "BridgeCore exists to give growing companies access to dependable virtual professionals without the complexity of traditional hiring.",
  },
  {
    icon: <Users size={26} />,
    label: "People",
    title: "Built around skilled professionals.",
    description:
      "We focus on matching businesses with capable, reliable, and well-aligned support professionals.",
  },
  {
    icon: <BadgeCheck size={26} />,
    label: "Promise",
    title: "Reliable support. Clear communication.",
    description:
      "Our approach is centered on consistency, accountability, and creating real operational value for clients.",
  },
];

const proofPoints = [
  "Vetted remote professionals",
  "Flexible support solutions",
  "Business-focused service delivery",
  "Long-term partnership mindset",
];

export default function AboutPage() {
  return (
    <div className="about-page">
      <div className="about-bg-glow about-glow-one"></div>
      <div className="about-bg-glow about-glow-two"></div>

      {/* ================= HERO ================= */}

      <section className="about-hero">
        <div className="about-hero-container">
          <div className="about-hero-content">
            <h1>
              Briding Businesses,
              <br />
              <span>With World Class Talent.</span>
            </h1>

            <p>
              BridgeCore Virtual Solutions was built to help businesses grow
              through dependable remote professionals, streamlined support, and
              flexible virtual staffing solutions designed for modern teams.
            </p>

            <div className="about-actions">
              <Link href="/contact" className="about-primary-btn">
                Work With Us
                <ArrowRight size={18} />
              </Link>

              <Link href="/#services" className="about-secondary-btn">
                Explore Services
              </Link>
            </div>
          </div>

          <div className="about-visual-wrap">
            <div className="about-visual">
              <div className="about-brand-wall">
                <div className="about-brand-mark">B</div>

                <div>
                  <h3>BridgeCore</h3>
                  <p>Virtual Solutions</p>
                </div>
              </div>

              <div className="about-visual-panels">
                <div></div>
                <div></div>
                <div></div>
              </div>

              <div className="about-floating-card">
                <div className="about-floating-icon">
                  <Users size={22} />
                </div>

                <div>
                  <span>Helping businesses scale with</span>
                  <strong>Virtual Excellence</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= VALUES ================= */}

      <section className="about-values-section">
        <div className="about-section-heading">
          <h2>The Values That Drive Us</h2>

          <p>
            We do not just provide virtual support. We build long-term
            partnerships grounded in trust, excellence, and shared success.
          </p>
        </div>

        <div className="about-values-grid">
          {values.map((value) => (
            <div className="about-value-card" key={value.title}>
              <div className="about-value-icon">{value.icon}</div>

              <h3>{value.title}</h3>

              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= STORY ================= */}

      <section className="about-story-section">
        <div className="about-story-container">
          <div className="about-story-content">
            <span className="about-small-label">OUR STORY</span>

            <h2>
              More Than Virtual Support,
              <br />
              <span>We Are Your Growth Partner</span>
            </h2>

            <p>
              BridgeCore Virtual Solutions was created to bridge the gap between
              growing businesses and reliable professional support. We
              understand that business owners need more than task completion.
              They need people who can communicate clearly, adapt quickly, and
              help operations move forward.
            </p>

            <p>
              From executive assistance to customer experience, marketing, IT,
              accounting, and property management support, our goal is to help
              companies save time, reduce operational pressure, and focus on
              what matters most.
            </p>

            <Link href="/contact" className="about-inline-btn">
              Start a Conversation
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="about-pillars">
            {pillars.map((pillar) => (
              <div className="about-pillar-card" key={pillar.label}>
                <div className="about-pillar-icon">{pillar.icon}</div>

                <div>
                  <span>{pillar.label}</span>

                  <h3>{pillar.title}</h3>

                  <p>{pillar.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PEOPLE / TRUST ================= */}

      <section className="about-people-section">
        <div className="about-people-container">
          <div className="about-people-content">
            <span className="about-small-label">OUR APPROACH</span>

            <h2>
              Trained.
              <br />
              Vetted. Trusted.
            </h2>

            <p>
              We focus on connecting businesses with remote professionals who
              are prepared to support real business needs with care, clarity,
              and consistency.
            </p>

            <div className="about-proof-list">
              {proofPoints.map((item) => (
                <div key={item}>
                  <HeartHandshake size={20} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="about-team-panel">
            <div className="about-team-bg"></div>

            <div className="about-avatar-row">
              <div>VA</div>
              <div>CS</div>
              <div>MK</div>
              <div>IT</div>
              <div>AC</div>
              <div>PM</div>
            </div>

            <div className="about-team-card">
              <div>
                <strong>People First</strong>
                <span>We care about the clients and teams we support.</span>
              </div>

              <div>
                <strong>Growth Minded</strong>
                <span>We continuously improve how support is delivered.</span>
              </div>

              <div>
                <strong>Impact Driven</strong>
                <span>
                  We focus on outcomes that help businesses move forward.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}

      <section className="about-cta-section">
        <div className="about-cta-card">
          <h2>Ready to Build a Stronger Remote Team?</h2>

          <p>
            Let us help you find the right virtual professionals to support your
            business goals.
          </p>

          <Link href="/contact" className="about-cta-btn">
            Contact BridgeCore
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
