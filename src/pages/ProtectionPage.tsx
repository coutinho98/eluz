import { CloudLightning, Zap, Shield, Globe, TrendingUp, DollarSign } from 'lucide-react';
import ContactSection from '../components/ContactSection';

const PURPLE_STRONG = "text-violet-700";

interface ConceptCardProps {
    title: string;
    icon: React.ElementType;
    children: React.ReactNode;
}

const ConceptCard: React.FC<ConceptCardProps> = ({ title, icon: Icon, children }) => (
    <div className="p-6 bg-white rounded-xl shadow-lg border border-violet-100/50 hover:shadow-xl transition-shadow duration-300 h-full">
        <Icon className="w-8 h-8 text-black mr-4" />
        <h4 className="text-xl font-bold text-gray-900 font-[ranade]">{title}</h4>
        <div className="text-gray-700 space-y-3 text-base">
            {children}
        </div>
    </div>
);


const ProtectionPage = () => {
    return (
        <div className="w-full relative overflow-x-hidden min-h-screen">

            <header className="py-32 px-4 md:px-8 text-black bg-[#F7F5F2] w-full">
                <div className="max-w-7xl mx-auto text-center">
                    <CloudLightning className="w-20 h-20 text-yellow-500 mx-auto mb-4" />
                    <h1 className="font-[ranade] text-black text-6xl md:text-7xl font-bold mb-4">
                        Proteção Elétrica Total
                    </h1>
                    <p className="text-2xl font-light max-w-3xl mx-auto">
                        Seu alvo mais importante contra raios, surtos e danos. SPDA, MPS. Aterramento e gerenciamento de risco.
                    </p>
                    <a
                        href="#contato"
                        className="mt-8 inline-block px-10 py-4 bg-yellow-500 text-gray-900 text-xl font-bold  hover:bg-yellow-400 transition transform "
                    >
                        Solicitar Orçamento
                    </a>
                </div>
            </header>

            <section className="py-16 bg-white px-4 md:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className={`font-[ranade] text-4xl font-bold text-gray-900 mb-12`}>
                        Por que investir em nossa Solução PDA/MPS?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-6 text-left">
                            <Shield className="w-8 h-8 mb-3" />
                            <h4 className="text-xl font-bold text-gray-900 mb-2">Segurança Máxima</h4>
                            <p className="text-gray-600">Proteção de vidas e da continuidade operacional do seu negócio.</p>
                        </div>
                        <div className="p-6 text-left">
                            <DollarSign className="w-8 h-8 mb-3" />
                            <h4 className="text-xl font-bold text-gray-900 mb-2">Conformidade Legal</h4>
                            <p className="text-gray-600">Emissão de laudos obrigatórios (NBR 5419) e prevenção de multas onerosas.</p>
                        </div>
                        <div className="p-6 text-left">
                            <TrendingUp className="w-8 h-8 mb-3" />
                            <h4 className="text-xl font-bold text-gray-900 mb-2">Valorização do Ativo</h4>
                            <p className="text-gray-600">Redução de riscos e aumento da confiabilidade dos sistemas e equipamentos.</p>
                        </div>
                    </div>
                </div>
            </section>


            <section id="detalhes" className="w-full bg-gray-50 py-24 px-4 md:px-8">
                <div className="max-w-7xl mx-auto text-left">

                    <h3 className="font-[ranade] text-5xl font-bold text-gray-900 mb-4">
                        Nossos Pilares de Proteção
                    </h3>
                    <p className="text-xl text-gray-600 max-w-3xl mb-16">
                        Análise de Risco, Manutenção Preditiva e Conformidade com as normas NBR 5419.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8 text-left">

                        <ConceptCard title="SPDA (Para-raios)" icon={Zap}>
                            <p>O Sistema de Proteção Contra Descargas Atmosféricas é o para-raios que recebe e direciona a energia dos raios de forma segura para o solo.</p>
                            <p>Fazemos a inspeção e manutenção anual obrigatória, emitindo os laudos para garantir a segurança da edificação e evitar multas onerosas.</p>
                        </ConceptCard>

                        <ConceptCard title="MPS e DPS" icon={Shield}>
                            <p>O MPS (Medidas de Proteção Contra Surtos) utiliza o DPS (Dispositivo de Proteção Contra Surtos) para proteger sua rede contra picos de tensão e corrente.</p>
                            <p>Surtos danificam eletrônicos e são causados por raios distantes ou manobras da concessionária. A instalação de DPS é crucial em todas as edificações.</p>
                        </ConceptCard>

                        <ConceptCard title="Aterramento Elétrico" icon={Globe}>
                            <p>Fornece um caminho seguro para correntes elétricas indesejadas fluírem para a terra.</p>
                            <p>É vital para a proteção de pessoas contra choques e a preservação de equipamentos, funcionando como uma "válvula de segurança" para correntes de fuga e curtos-circuitos.</p>
                        </ConceptCard>

                        <ConceptCard title="Gerenciamento de Risco (Laudo)" icon={Shield}>
                            <p>Realizamos o estudo de Gerenciamento de Risco de SPDA para determinar o Nível de Proteção necessário, seguindo a NBR 5419:2015.</p>
                            <p>Este estudo é a base para a implementação do sistema e garante que a proteção esteja dimensionada corretamente para o seu tipo de edificação e atividade.</p>
                        </ConceptCard>

                    </div>
                </div>
            </section>
            {/* CONTATO (Reutilizando a seção da Home) */}
            <div className="relative z-10 bg-transparent">
                <ContactSection />
            </div>

        </div>
    );
};

export default ProtectionPage;