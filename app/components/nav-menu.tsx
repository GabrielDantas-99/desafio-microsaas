'use client'

import Link from "next/link";
import Logo from "./logo";
import { useState } from "react";

const NavMenu = () => {
    const [activeSection, setActiveSection] = useState<string>("home");

    const handleNavigation = (sectionId: string) => {
        setActiveSection(sectionId);
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    const handleActiveSection = (section: string) => {
        return activeSection === section
            ? "before:content-[''] before:absolute before:-bottom-4 before:left-0 before:w-full before:h-[5px] before:bg-slate-700 text-slate-700 before:rounded-full"
            : "text-slate-500"
    };
    return (
        <nav className="h-16 flex items-center justify-between px-12 fixed top-0 w-full z-50 bg-white/10 backdrop-blur-sm">
            <Logo />
            <ul>
                <li className="inline-block">
                    <button
                        className={`nav-link ${handleActiveSection("home")}`}
                        onClick={() => handleNavigation("home")}
                    >
                        Início
                    </button>
                </li>
                <li className="inline-block ml-6">
                    <button
                        className={`nav-link ${handleActiveSection("benefits")}`}
                        onClick={() => handleNavigation("benefits")}
                    >
                        Benefícios
                    </button>
                </li>
                <li className="inline-block ml-6">
                    <button
                        className={`nav-link  ${handleActiveSection("our-solution")}`}
                        onClick={() => handleNavigation("our-solution")}
                    >
                        Nossa Solução
                    </button>
                </li>
                <li className="inline-block ml-6">
                    <button
                        className={`nav-link  ${handleActiveSection("contact")}`}
                        onClick={() => handleNavigation("contact")}
                    >
                        Contato
                    </button>
                </li>
            </ul>
            <Link className=" text-white rounded-md px-4 py-2 bg-slate-600 hover:bg-slate-700 transition ease-in-out" href='login'>Login</Link>
        </nav>
    );
}

export default NavMenu;