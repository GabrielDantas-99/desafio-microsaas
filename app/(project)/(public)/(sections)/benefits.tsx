const BenefitsSection = () => {
    return (
        <section id="benefits" className="mt-16 w-full px-6 md:px-12">
            <h2 className="text-3xl font-bold text-center text-slate-700">Benefícios da Inteligência Artificial</h2>
            <div className="mt-8 grid md:grid-cols-3 gap-8">
                <div className="p-6 bg-white rounded-lg shadow-md text-center">
                    <h3 className="text-xl font-semibold text-slate-700">Automatização de Processos</h3>
                    <p className="mt-4 text-slate-600">Reduza tarefas repetitivas e concentre-se no que realmente importa, aumentando a eficiência operacional.</p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-md text-center">
                    <h3 className="text-xl font-semibold text-slate-700">Decisões Baseadas em Dados</h3>
                    <p className="mt-4 text-slate-600">Utilize insights avançados para tomar decisões mais assertivas e estratégicas para o seu negócio.</p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-md text-center">
                    <h3 className="text-xl font-semibold text-slate-700">Personalização em Escala</h3>
                    <p className="mt-4 text-slate-600">Ofereça experiências personalizadas para seus clientes, aumentando a satisfação e fidelidade.</p>
                </div>
            </div>
        </section>
    );
}

export default BenefitsSection;