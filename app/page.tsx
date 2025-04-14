'use client'

import MainSection from "./(project)/(public)/(sections)/main";
import BenefitsSection from "./(project)/(public)/(sections)/benefits";
import OurSolutionSection from "./(project)/(public)/(sections)/our-solutions";
import ContactSection from "./(project)/(public)/(sections)/contact";
import NavMenu from "./components/nav-menu";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <NavMenu />
      <main className="md:px-12 py-12 grid place-items-center mt-16 max-w-[1100px] mx-auto px-8">
        <MainSection />
        <BenefitsSection />
        <OurSolutionSection />
        <ContactSection data-aos="fade-up" />
      </main>
      <Footer />
    </>
  );
}
