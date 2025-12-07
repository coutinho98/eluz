import HeroMetrics from "../components/HeroMetrics";
import Services from "../components/Services";
import TerritoryOfOperation from "../components/TerritoryOfOperation";
import ContactSection from "../components/ContactSection";
import backgroundImage from '../assets/images/logo.png';
import FinalCTA from '../components/FinalCTA';
import { motion } from 'motion/react';


const Home = () => {
    return (
        <div className="w-full relative overflow-x-hidden text-center min-h-screen bg-[#F7F5F2]">
            <main>
                <div className="py-10 md:py-25 w-full flex flex-col justify-center items-center relative z-10 bg-transparent">
                    <div className="max-w-6xl px-4 md:px-8 w-full flex flex-col items-center">
                        <div className="flex flex-col md:flex-row items-center md:items-center md:space-x-16 w-full justify-center">
                            <div className="w-full md:w-7/12 text-center md:text-left order-2 md:order-1">
                                <h2 className="font-[ranade] text-left uppercase text-gray-500 font-bold text-xs md:text-xs py-2 md:py-4">
                                    A Solução Conectada para a Eficiência Elétrica
                                </h2>
                                <h1 className="font-[ranade] text-left text-black font-bold text-4xl md:text-6xl py-2 md:py-4">
                                    Gestão de energia <br></br> e soluções elétricas
                                </h1>
                                <h2 className="font-[ranade] text-left text-black max-w-2xl text-base md:text-lg">
                                    Desvende os segredos da eficiência energética: um guia transformador para reduzir seus custos.
                                </h2>
                            </div>
                            <div className="w-full md:w-5/12 flex justify-center md:justify-end order-1 md:order-2 mb-6 md:mb-0">
                                <motion.img
                                    src={backgroundImage}
                                    alt="Logo É Luz, com uma lâmpada amarela e o nome da empresa, simbolizando eficiência energética."
                                    className="w-auto h-auto max-w-full"
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{
                                        duration: 4,
                                        ease: "easeInOut",
                                        repeat: Infinity,
                                        repeatType: "loop"
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full py-10 md:py-15 relative z-10 bg-white/80">
                    <HeroMetrics />
                </div>

                <div className="relative z-10 md:py-15 bg-white/90">
                    <Services />
                </div>

                <div className="relative z-10 bg-white/90">
                    <TerritoryOfOperation />
                </div>

                <div className="relative z-10 md:py-15 bg-white/90">
                    <FinalCTA />
                </div>

                <div className="relative z-10 bg-gray-50/90">
                    <ContactSection />
                </div>
            </main>
        </div>
    );
};

export default Home;