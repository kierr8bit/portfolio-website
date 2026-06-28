"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import "@/styles/hero.css";
import FloatingCards from "@/components/ui/FloatingCards";

export default function Hero() {
  return (
    <section className="hero">
      {/* Background Effects */}

      <div className="hero-bg"></div>
      <div className="hero-grid"></div>

      <div className="hero-container">
        {/* LEFT */}

        <div className="hero-left">
          <h1 className="hero-title">
            <span>Bridging Businesses</span>
            <span>With World Class Talent.</span>
          </h1>

          <p className="hero-description">
            BridgeCore Virtual Solutions helps businesses scale with highly
            trained Virtual Assistants, Customer Support Specialists,
            Administrative Professionals, Marketing Assistants and Operations
            Experts—allowing you to focus on growing your business.
          </p>

          <div className="hero-buttons">
            <button className="btn-primary">Send an Email</button>

            <button className="btn-secondary">
              Explore Services
              <ArrowRight size={18} />
            </button>
          </div>
          {/* 
          <div className="hero-stats">
            <div className="stat">
              <h2>24/7</h2>
              <span>Support</span>
            </div>

            <div className="stat">
              <h2>Global</h2>
              <span>Talent Pool</span>
            </div>

            <div className="stat">
              <h2>Flexible</h2>
              <span>Scaling</span>
            </div>
          </div>*/}
        </div>

        {/* RIGHT */}

        <div className="hero-right">
          {/* Floating Card */}

          <FloatingCards />

          <div className="dashboard-wrapper">
            <Image
              src="/hero-dashboard.png"
              alt="Dashboard"
              width={1200}
              height={900}
              priority
              className="dashboard-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
