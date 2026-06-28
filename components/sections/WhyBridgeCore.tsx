"use client";

import "@/styles/whybridgecore.css";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const reasons = [
  "Highly skilled professionals",
  "Cost-effective solutions",
  "Flexible and scalable support",
  "Committed to your success",
];

export default function WhyBridgeCore() {
  return (
    <section className="transition-section">
      <div className="transition-container">
        {/* Left */}

        <div className="transition-content">
          <span className="transition-badge">WHY CHOOSE BRIDGECORE?</span>

          <h2>
            Your Success
            <span> is Our Mission</span>
          </h2>

          <p>
            We combine skilled talent, proven processes, and cutting-edge tools
            to deliver virtual solutions that save you time and drive results.
          </p>

          <ul>
            {reasons.map((item) => (
              <li key={item}>
                <CheckCircle2 size={22} />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Right */}

        <div className="transition-image">
          <Image
            src="/hero-dashboard.png"
            alt="BridgeCore"
            width={720}
            height={650}
            priority
            className="laptop"
          />
        </div>
      </div>
    </section>
  );
}
