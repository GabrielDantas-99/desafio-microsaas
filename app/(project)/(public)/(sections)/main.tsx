import Image from "next/image";

const MainSection = () => {
    return (
        <section id="home" className="relative max-w-[620px] text-center text-slate-600 flex flex-col space-y-6 justify-center items-center">
            <h1 className="text-4xl font-bold mx-auto">Revolução impulsionada pela IA no desenvolvimento de micro-SaaS</h1>
            <p>Desbloqueie o potencial do seu negócio com soluções de SaaS inteligentes, impulsionadas por Inteligência Artificial.</p>
            <Image className="z-20 rounded-lg" src={'/dashboard.png'} alt="Imagem de dashboard com IA" width={500} height={500} />
            <Image className="absolute top-20 -right-52 z-10 rounded-lg" src={'/circuits.png'} alt="Imagem de cirtuito" width={300} height={200} />
            <Image className="absolute -bottom-16 -left-52 z-10 rounded-lg rotate-180" src={'/circuits.png'} alt="Imagem de cirtuito" width={300} height={200} />
            <div className="absolute top-52 -left-10 z-20 bg-black/10 backdrop-blur-xs rounded-lg p-4 shadow-md text-white font-semibold">
                <h1 className="text-4xl drop-shadow-sm">+72%</h1>
                <p className="drop-shadow-sm">Produtividade</p>
            </div>
            <div className="absolute  bottom-10 z-20  -right-4 bg-black/10 backdrop-blur-xs rounded-lg p-4 shadow-md text-white font-semibold">
                <h1 className="text-4xl drop-shadow-sm">-50%</h1>
                <p className="drop-shadow-sm">Custos</p>
            </div>
        </section>
    );
}

export default MainSection;