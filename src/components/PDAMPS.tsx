import { CloudLightning, Zap, Shield, Globe } from 'lucide-react';

const PURPLE_STRONG = "text-violet-700";

interface ConceptCardProps {
    title: string;
    icon: React.ElementType;
    children: React.ReactNode;
}

const ConceptCard: React.FC<ConceptCardProps> = ({ title, icon: Icon, children }) => (
    <div className="p-6 bg-white rounded-xl shadow-lg border border-violet-100/50 hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center mb-4">
            <Icon className={`w-8 h-8 ${PURPLE_STRONG} mr-4`} />
            <h4 className="text-xl font-bold text-gray-900 font-[ranade]">{title}</h4>
        </div>
        <div className="text-gray-700 space-y-3 text-base">
            {children}
        </div>
    </div>
);

const PDAMPS = () => {
    return (
        <section id="pda-mps" className="w-full bg-white py-24 px-4 md:px-8">
            <div className="max-w-7xl mx-auto text-center">

                <h3 className="font-[ranade] text-5xl font-bold text-gray-900 mb-4">
                    PDA e <span className="text-violet-700">MPS</span>
                </h3>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-16">
                    Proteção completa para sua estrutura, equipamentos e pessoas contra as ameaças de descargas atmosféricas e surtos elétricos.
                </p>


                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 text-left">

                    <ConceptCard title="O que é um PDA?" icon={CloudLightning}>
                        [cite_start]<p>O **PDA** é um sistema completo de Proteção Contra Descargas Atmosféricas e Surtos Elétricos[cite: 175].</p>
                        [cite_start]<p>Ele é implantado em grandes edificações e sistemas elétricos [cite: 175] [cite_start]e é subdividido em duas partes: o **SPDA** e o **MPS**[cite: 175].</p>
                        [cite_start]<p className="mt-4 text-sm italic text-gray-500">Baseado na Norma NBR 5419:2015[cite: 177].</p>
                    </ConceptCard>

                    <ConceptCard title="SPDA (Sistema de Para-raios)" icon={Zap}>
                        [cite_start]<p>O **SPDA** significa **Sistema de Proteção Contra Descargas Atmosféricas** (popularmente conhecido como para-raios)[cite: 195].</p>
                        [cite_start]<p>Este sistema é responsável por receber e **direcionar a energia dos raios de forma segura para o solo** [cite: 196][cite_start], prevenindo danos diretos e indiretos, incêndios, prejuízos a equipamentos elétricos e protegendo a vida de pessoas e animais[cite: 196].</p>
                        [cite_start]<p>É composto pela implantação dos subsistemas de captação, descidas e aterramento, que precisam de **inspeções e manutenções anuais**[cite: 197]. [cite_start]A não realização dos laudos pode acarretar **multas onerosas** para empresas[cite: 198].</p>
                    </ConceptCard>

                    <ConceptCard title="MPS e DPS (Proteção Contra Surtos)" icon={Shield}>
                        [cite_start]<p>O **MPS** (Medidas de Proteções Contra Surtos) protege instalações elétricas e eletrônicos contra **picos de tensão e corrente**[cite: 232].</p>
                        [cite_start]<p>Esses surtos são causados por descargas atmosféricas distantes que se propagam na rede, ou por manobras de chaveamento das concessionárias[cite: 232].</p>
                        [cite_start]<p>A principal medida do MPS é o uso do **DPS** (**Dispositivo de Proteção Contra Surtos**)[cite: 233]. [cite_start]O DPS detecta sobretensões e **desvia a corrente excessiva para o aterramento** [cite: 237][cite_start], protegendo aparelhos eletrônicos[cite: 237].</p>
                        [cite_start]<p>Todas as edificações precisam ter o uso do DPS, **independentemente de ter um sistema de para-raios instalado ou não**[cite: 238, 239].</p>
                    </ConceptCard>

                    <ConceptCard title="Aterramento Elétrico" icon={Globe}>
                        [cite_start]<p>O aterramento elétrico fornece um **caminho seguro para correntes elétricas indesejadas fluírem para a terra**[cite: 258].</p>
                        [cite_start]<p>Ele atua como uma "válvula de segurança" [cite: 259][cite_start], desviando correntes de fuga, curtos-circuitos e descargas atmosféricas para o solo, o que é vital para **proteger pessoas contra choques e equipamentos contra danos**[cite: 258, 259].</p>
                    </ConceptCard>

                </div>
            </div>
        </section>
    );
};

export default PDAMPS;