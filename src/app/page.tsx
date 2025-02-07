"use client";

import { Hero } from "@/components/home/Hero";
import { Club } from "@/components/home/Club"
import FeatureNine from "@/components/home/Carousel";
import { FAQ } from "@/components/home/FAQs";
import { CallToAction } from "@/components/home/CTA";
import { Footer } from "@/components/home/Footer";
import { Nav } from "@/components/home/Nav";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Club />
      <FeatureNine />
      <FAQ />
      <CallToAction />
      <Footer />
    </>
  );
}
