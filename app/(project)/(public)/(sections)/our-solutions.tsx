'use client'

import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import AOS from "aos";
import "aos/dist/aos.css";

const OutSolutions = () => {
    const { ref, inView } = useInView({ triggerOnce: true });

    useEffect(() => {
        AOS.init({ duration: 1000, easing: "ease-out" });
    }, []);

    return (
        <section
            ref={ref}
            data-aos="fade-up"
            id="our-solution"
            className={`mt-16 w-full px-6 md:px-12 bg-gray-50 py-12 rounded-lg ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
        >
            <h2 className="text-3xl font-bold text-center text-slate-700">Por que escolher nossa solução?</h2>
            <div className="mt-8 grid md:grid-cols-2 gap-8">
                <div className="flex items-center space-x-4">
                    <div className="min-w-12 min-h-12 bg-slate-600 text-white flex items-center justify-center rounded-full">
                        <span className="text-xl font-bold">1</span>
                    </div>
                    <p className="text-slate-600">Tecnologia de ponta desenvolvida para atender às necessidades do mercado atual.</p>
                </div>
                <div className="flex items-center space-x-4">
                    <div className="min-w-12 min-h-12 bg-slate-600 text-white flex items-center justify-center rounded-full">
                        <span className="text-xl font-bold">2</span>
                    </div>
                    <p className="text-slate-600">Equipe especializada em inteligência artificial e desenvolvimento de SaaS.</p>
                </div>
                <div className="flex items-center space-x-4">
                    <div className="min-w-12 min-h-12 bg-slate-600 text-white flex items-center justify-center rounded-full">
                        <span className="text-xl font-bold">3</span>
                    </div>
                    <p className="text-slate-600">Soluções personalizadas para maximizar os resultados do seu negócio.</p>
                </div>
                <div className="flex items-center space-x-4">
                    <div className="min-w-12 min-h-12 bg-slate-600 text-white flex items-center justify-center rounded-full">
                        <span className="text-xl font-bold">4</span>
                    </div>
                    <p className="text-slate-600">Suporte contínuo para garantir o sucesso da sua implementação.</p>
                </div>
            </div>
        </section>
    );
};

export default OutSolutions;