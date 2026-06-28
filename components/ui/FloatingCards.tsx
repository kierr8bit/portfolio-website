"use client";

import {
  BarChart3,
  Users,
  MessageCircle,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";

export default function FloatingCards() {
  return (
    <>
      {/* Analytics */}

      <div className="floating-card analytics-card">
        <div className="icon blue">
          <BarChart3 size={22} />
        </div>

        <div>
          <h4>Business Growth</h4>
          <p>+28% this month</p>
        </div>
      </div>

      {/* Team */}

      <div className="floating-card team-card">
        <div className="icon green">
          <Users size={22} />
        </div>

        <div>
          <h4>Remote Team</h4>
        </div>
      </div>

      {/* Support */}

      <div className="floating-card support-card">
        <div className="icon purple">
          <MessageCircle size={22} />
        </div>

        <div>
          <h4>24/7 Support</h4>
          <p>Always available</p>
        </div>
      </div>

      {/* Quality */}

      <div className="floating-card quality-card">
        <div className="icon orange">
          <CheckCircle2 size={22} />
        </div>

        <div>
          <h4>Quality Assured</h4>
          <p>Professional talent</p>
        </div>
      </div>

      {/* Growth */}

      <div className="floating-card growth-card">
        <TrendingUp size={18} />

        <span>Scale Faster</span>
      </div>
    </>
  );
}
