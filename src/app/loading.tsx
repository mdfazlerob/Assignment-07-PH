import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductSkeleton from "@/components/ProductSkeleton";

export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 font-sans">
      <Suspense
        fallback={<div className="h-[88px] border-b border-slate-200 bg-white" />}
      >
        <Navbar />
      </Suspense>
      <div className="h-11 w-full animate-pulse border-y border-emerald-100 bg-emerald-50/70" />
      <main className="flex-1">
        <div className="mx-auto max-w-7xl space-y-10 px-4 py-8 sm:px-6 lg:px-8">
          <div className="h-56 animate-pulse rounded-3xl bg-slate-200" />
          <div className="space-y-4">
            <div className="h-7 w-48 animate-pulse rounded-lg bg-slate-200" />
            <ProductSkeleton count={6} />
          </div>
          <div className="space-y-4">
            <div className="h-7 w-48 animate-pulse rounded-lg bg-slate-200" />
            <ProductSkeleton count={6} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
