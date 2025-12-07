import { ChevronRight } from 'lucide-react';

const FinalCTA = () => {
    const headline = "Desbloqueie a economia máxima e opere com risco zero.";
    const description = "É Luz é a inteligência que audita, integra seus custos e transforma sua gestão de energia em fonte contínua de lucro e segurança.";


    return (
        <section className="bg-[#F7F5F2] py-24 px-4 md:px-8">
            <div className="max-w-7xl mx-auto text-center">

                <div className="flex flex-col md:flex-row items-center md:items-center md:space-x-16 w-full justify-center text-left">
                    <div className="w-full md:w-7/12 mb-10 md:mb-0">
                        <h2 className="font-[ranade] text-black text-center font-extrabold text-4xl md:text-5xl leading-tight mb-6">
                            {headline}
                        </h2>
                        <p className="font-[ranade] text-gray-600 text-center text-lg mb-8">
                            {description}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <a
                                href="#contato"
                                className="inline-flex text-center items-center justify-center bg-amber-300 text-black font-semibold py-4 px-4 group hover:bg-yellow-500 transition-all duration-300 shadow-md"                            >
                                Entrar em contato <ChevronRight className="w-5 h-5 ml-2 transition duration-300 group-hover:translate-x-1" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FinalCTA;