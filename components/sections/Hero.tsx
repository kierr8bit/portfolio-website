"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import "@/styles/hero.css";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F7F9FC] pt-40 pb-24">
      {/* Background Blur */}
      <div className="absolute -top-32 -right-20 h-96 w-96 rounded-full bg-blue-100 blur-3xl opacity-50"></div>
      <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-slate-200 blur-3xl opacity-50"></div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-20 px-6 lg:flex-row">
        {/* ================= LEFT CONTENT ================= */}

        <div className="flex-1">
          <h1 className="mt-8 text-5xl font-extrabold leading-tight tracking-tight text-[#0D1B3D] md:text-6xl lg:text-1xl">
            Your Remote Team.
            <br />
            Built for Growth.
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-gray-600">
            BridgeCore Virtual Solutions connects businesses with highly skilled
            virtual professionals specializing in customer support,
            administrative assistance, lead generation, operations, marketing,
            and executive support—helping your business scale efficiently and
            cost-effectively.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">
            <button className="rounded-xl bg-[#1E5BBE] px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#174ea2] hover:shadow-xl">
              Book a Discovery Call
            </button>

            <button className="flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-8 py-4 font-semibold text-[#0D1B3D] transition-all duration-300 hover:border-[#1E5BBE] hover:text-[#1E5BBE] hover:shadow-md">
              Explore Services
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Statistics */}

          <div className="mt-16 flex flex-wrap gap-10">
            <div>
              <h2 className="text-3xl font-bold text-[#0D1B3D]">24/7</h2>

              <p className="mt-1 text-gray-500">Remote Support</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#0D1B3D]">Global</h2>

              <p className="mt-1 text-gray-500">Talent Pool</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#0D1B3D]">Flexible</h2>

              <p className="mt-1 text-gray-500">Staffing Solutions</p>
            </div>
          </div>
        </div>

        {/* ================= RIGHT IMAGE ================= */}

        <div className="flex flex-1 justify-center">
          <div className="relative">
            {/* Glow Behind Image */}

            <div className="absolute inset-0 rounded-3xl bg-blue-200 blur-3xl opacity-30"></div>

            {/* Dashboard */}

            <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-2xl">
              <Image
                src="/hero-dashboard.png"
                alt="BridgeCore Virtual Solutions Dashboard"
                width={700}
                height={650}
                priority
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
