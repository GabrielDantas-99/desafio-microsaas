'use client';

import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactSection = () => {
    const { ref, inView } = useInView({ triggerOnce: true });

    useEffect(() => {
        AOS.init({ duration: 1000, easing: "ease-out" });
    }, []);

    return (
        <section
            ref={ref}
            data-aos="fade-up"
            id="contact"
            className={`mt-8 w-full px-6 md:px-12 py-12 bg-slate-100 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
        >
            <h2 className="text-3xl font-bold text-center text-slate-700">Entre em Contato</h2>
            <p className="mt-4 text-center text-slate-600">
                Estamos prontos para ajudar você a transformar seu negócio com inteligência artificial.
            </p>
            <form className="mt-8 max-w-xl mx-auto space-y-6">
                <div>
                    <label className="block text-slate-600 font-semibold" htmlFor="name">Nome</label>
                    <input
                        className="w-full mt-2 p-3 border border-gray-300 rounded-lg"
                        type="text"
                        id="name"
                        placeholder="Seu nome"
                    />
                </div>
                <div>
                    <label className="block text-slate-600 font-semibold" htmlFor="email">Email</label>
                    <input
                        className="w-full mt-2 p-3 border border-gray-300 rounded-lg"
                        type="email"
                        id="email"
                        placeholder="Seu email"
                    />
                </div>
                <div>
                    <label className="block text-slate-600 font-semibold" htmlFor="message">Mensagem</label>
                    <textarea
                        className="w-full mt-2 p-3 border border-gray-300 rounded-lg"
                        id="message"
                        rows={4}
                        placeholder="Sua mensagem"
                    ></textarea>
                </div>
                <button
                    className="w-full bg-slate-600 text-white py-3 rounded-lg hover:bg-slate-700 transition ease-in-out"
                    type="submit"
                >
                    Enviar
                </button>
            </form>
        </section>
    );
};

export default ContactSection;