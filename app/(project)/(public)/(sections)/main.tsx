import Image from "next/image";

const MainSection = () => {
    return (
        <section id="home" className="relative max-w-[620px] text-center text-slate-600 flex flex-col space-y-6 justify-center items-center  mb-26">
            <h1 className="text-4xl font-bold mx-auto">Revolução impulsionada pela IA no desenvolvimento de micro-SaaS</h1>
            <p className="font-medium">Desbloqueie o potencial do seu negócio com soluções de SaaS inteligentes, impulsionadas por Inteligência Artificial.</p>
            <Image
                className="z-20 rounded-lg"
                src={'/dashboard.png'}
                alt="Imagem de dashboard com IA"
                width={500}
                height={500}
            />
            <Image
                className="absolute top-44 md:top-20 -right-52 z-10 rounded-lg"
                src={'/circuits.png'}
                alt="Imagem de cirtuito"
                width={300}
                height={200}
            />
            <Image
                className="absolute -bottom-24 -left-52 z-10 rounded-lg rotate-180"
                src={'/circuits.png'}
                alt="Imagem de cirtuito"
                width={300}
                height={200}
            />
            <div className="absolute top-52 sm:-left-10 -left-6 z-20 bg-black/10 backdrop-blur-xs rounded-lg p-4 shadow-md text-white font-semibold">
                <h1 className="text-4xl drop-shadow-sm">+72%</h1>
                <p className="drop-shadow-sm">Produtividade</p>
            </div>
            <div className="absolute  bottom-10 z-20  -right-4 bg-black/10 backdrop-blur-xs rounded-lg p-4 shadow-md text-white font-semibold">
                <h1 className="text-4xl drop-shadow-sm">-50%</h1>
                <p className="drop-shadow-sm">Custos</p>
            </div>

            <button
                className="absolute -bottom-28 z-40 flex flex-col justify-center space-x-2 text-slate-600 hover:text-slate-800 animate-bounce"
                onClick={() => document.getElementById('next-section')?.scrollIntoView({ behavior: 'smooth' })}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevrons-down-icon lucide-chevrons-down"><path d="m7 6 5 5 5-5" /><path d="m7 13 5 5 5-5" /></svg>
            </button>
        </section>
    );
}

export default MainSection;