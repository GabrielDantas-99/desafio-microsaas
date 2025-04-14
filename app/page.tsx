'use client'

import MainSection from "./(project)/(public)/(sections)/main";
import BenefitsSection from "./(project)/(public)/(sections)/benefits";
import OurSolutionSection from "./(project)/(public)/(sections)/our-solutions";
import ContactSection from "./(project)/(public)/(sections)/contact";
import NavMenu from "./components/nav-menu";

export default function Home() {
  return (
    <>
      <NavMenu />
      <main className="md:px-12 py-6 grid place-items-center mt-16">
        <MainSection />
        <BenefitsSection />
        <OurSolutionSection />
        <ContactSection />
      </main>
      <footer className="w-full p-8 bg-gray-800 text-white flex justify-between items-center text-sm">
        <span>© {new Date().getFullYear()} Phantom tecnologia. Todos os direitos reservados.</span>
        <span>Desenvolvido por Gabriel Dantas</span>
      </footer>
    </>
  );
}
