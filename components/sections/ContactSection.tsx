"use client";

import "@/styles/contact.css";
import { Mail, Phone, Globe, Clock3, CheckCircle2 } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="contact-page">
      <div className="contact-container">
        {/* ================= HERO ================= */}
        <div className="hero-gradient hero-gradient-left"></div>
        <div className="hero-gradient hero-gradient-right"></div>
        <div className="hero-gradient hero-gradient-bottom"></div>
        <div className="contact-hero">
          <span className="contact-badge">GET IN TOUCH</span>

          <h1>
            Let&apos;s Build Something
            <br />
            <span>Great Together</span>
          </h1>

          <p>
            Whether you&apos;re looking for executive support, customer service
            professionals, or a dedicated remote team, BridgeCore is ready to
            help your business grow.
          </p>

          <div className="contact-highlights">
            <div>
              <CheckCircle2 size={20} />
              24-Hour Response
            </div>

            <div>
              <CheckCircle2 size={20} />
              Tailored Staffing Solutions
            </div>

            <div>
              <CheckCircle2 size={20} />
              No Long-Term Contracts
            </div>
          </div>
        </div>

        {/* ================= CONTENT ================= */}

        <div className="contact-content">
          {/* LEFT */}

          <div className="contact-info">
            <h2>Contact Information</h2>

            <div className="info-card">
              <Mail size={26} />
              <div>
                <h3>Email</h3>
                <p>hello@bridgecorevs.com</p>
              </div>
            </div>

            <div className="info-card">
              <Phone size={26} />
              <div>
                <h3>Phone</h3>
                <p>+1 (302) 555-1234</p>
              </div>
            </div>

            <div className="info-card">
              <Globe size={26} />
              <div>
                <h3>Location</h3>
                <p>Serving Clients Worldwide</p>
              </div>
            </div>

            <div className="info-card">
              <Clock3 size={26} />
              <div>
                <h3>Business Hours</h3>
                <p>Monday – Friday</p>
                <p>9:00 AM – 6:00 PM EST</p>
              </div>
            </div>
          </div>

          {/* RIGHT */}

          <div className="contact-form-card">
            <h2>Send Us a Message</h2>

            <form>
              <div className="two-columns">
                <input type="text" placeholder="First Name" />

                <input type="text" placeholder="Last Name" />
              </div>

              <input type="email" placeholder="Email Address" />

              <input type="text" placeholder="Company Name" />

              <select>
                <option>Service Interested In</option>

                <option>Executive Virtual Assistance</option>

                <option>Customer Experience & Support</option>

                <option>Marketing & Brand Support</option>

                <option>IT & Technical Support</option>

                <option>Accounting & Financial Support</option>

                <option>Property Management</option>

                <option>General Inquiry</option>
              </select>

              <textarea rows={6} placeholder="Tell us about your project..." />

              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
