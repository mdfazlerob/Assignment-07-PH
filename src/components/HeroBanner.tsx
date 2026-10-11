"use client";

import React, { useSyncExternalStore } from "react";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { getBengaliDate } from "@/lib/utils";

const emptySubscribe = () => () => {};

export default function HeroBanner() {
  const banglaDate = useSyncExternalStore(
    emptySubscribe,
    getBengaliDate,
    () => ""
  );

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50/60 via-slate-50 to-white pt-8 pb-12 sm:pt-12 sm:pb-16 lg:pt-16 lg:pb-20">
      <div className="pointer-events-none absolute -top-24 right-1/4 h-72 w-72 rounded-full bg-emerald-200/30 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-10 h-64 w-64 rounded-full bg-emerald-100/40 blur-2xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-8">
          {/* Left: eyebrow, heading, subtitle, CTA */}
          <div className="text-center lg:col-span-7 lg:text-left">
            <div className="inline-flex min-h-8 items-center rounded-full border border-emerald-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-emerald-800 shadow-2xs">
              {banglaDate || "\u00a0"}
            </div>

            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl lg:leading-[1.2]">
              আজকের বাজারের দাম এক নজরে
            </h1>

            <p className="mt-5 max-w-2xl text-base text-slate-600 sm:text-lg">
              চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
              বিস্তারিত, গড়, সর্বনিম্ন-সর্বোচ্চ এবং দামের পরিবর্তন এক তালিকায়।
            </p>

            <div className="mt-8 flex justify-center lg:justify-start">
              <a
                href="#সব-পণ্য"
                className="group inline-flex items-center space-x-2.5 rounded-full bg-emerald-600 px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-emerald-600/20 transition-all hover:bg-emerald-700 hover:shadow-lg active:scale-95 sm:text-base"
              >
                <span>সব পণ্য দেখুন</span>
                <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-1" />
              </a>
            </div>
          </div>

          {/* Right: banner image */}
          <div className="flex justify-center lg:col-span-5 lg:justify-end">
            <div className="relative h-64 w-64 sm:h-80 sm:w-80 lg:h-96 lg:w-96">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-emerald-100 to-emerald-50/50 blur-xl" />
              <Image
                src="/hero-basket.png"
                alt="বাজার দর গ্রোসারি বাস্কেট"
                fill
                priority
                sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, 384px"
                className="object-contain drop-shadow-xl transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
