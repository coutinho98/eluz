import { motion } from 'motion/react';
import { Target, Award, BookOpen, Zap, MapPin } from 'lucide-react';
import ContactSection from '../components/ContactSection';
import { ComposableMap, Geographies, Geography, ZoomableGroup } from '@vnedyalk0v/react19-simple-maps';
import { useMemo, useState, useEffect } from 'react';

const GEO_URL = "https://raw.githubusercontent.com/codeforamerica/click_that_hood/master/public/data/brazil-states.geojson";

const AboutPage = () => {
    const statesData = {
        direct: ["Bahia", "Sergipe", "Alagoas"],
        partners: ["Pernambuco", "Paraíba", "Pará", "Amazonas", "Espírito Santo", "São Paulo", "Rio de Janeiro"]
    };

    const COLOR_DIRECT = "#eab308";
    const COLOR_PARTNERS = "#fef08a";
    const COLOR_DEFAULT = "#D6D6DA";
    const COLOR_HOVER = "#ca8a04";

    const [geoData, setGeoData] = useState<any>(null);
    const [tooltipContent, setTooltipContent] = useState("");

    const directStatesSet = useMemo(() => new Set(statesData.direct), []);
    const partnersStatesSet = useMemo(() => new Set(statesData.partners), []);

    useEffect(() => {
        fetch(GEO_URL)
            .then(response => response.json())
            .then(data => setGeoData(data))
            .catch(error => console.error("Erro ao carregar o mapa:", error));
    }, []);

    const handleMouseEnter = (geo: any) => {
        const stateName = geo.properties.name;
        if (directStatesSet.has(stateName)) {
            setTooltipContent(`${stateName} - Atuação Direta`);
        } else if (partnersStatesSet.has(stateName)) {
            setTooltipContent(`${stateName} - Parceiro Estratégico`);
        } else {
            setTooltipContent(`${stateName}`);
        }
    };

    const handleMouseLeave = () => setTooltipContent("");

    const getFillColor = (stateName: string): string => {
        if (directStatesSet.has(stateName)) return COLOR_DIRECT;
        if (partnersStatesSet.has(stateName)) return COLOR_PARTNERS;
        return COLOR_DEFAULT;
    };

    return (
        <div className="min-h-screen bg-[#F7F5F2]">
            <section className="pt-32 pb-20 px-4 bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto text-center">
                 
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl text-left md:text-center md:text-7xl font-[ranade] font-bold text-gray-900 mb-6"
                    >
                        Nossa História e <br />
                       Compromisso Técnico
                    </motion.h1>
                    <p className="text-xl md:text-center text-left text-gray-500 max-w-2xl mx-auto font-light">
                      Desvendando os segredos da eficiência energética para transformar a realidade de custos da sua empresa.
                    </p>
                </div>
            </section>

            {/* História e Missão */}
            <section className="py-24 px-4 md:px-8">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-sm text-left font-bold text-yellow-600 uppercase tracking-widest mb-2">Trajetória</h2>
                            <h3 className="text-4xl font-[ranade] font-bold text-gray-900 mb-6 text-left">Fundada na Experiência</h3>
                            <p className="text-lg text-gray-600 leading-relaxed text-left">
                                A <strong>Éluz</strong> foi fundada em 2020 pelo técnico responsável <strong>Alan Gonçalves</strong>. Nossa base sólida vem de mais de 10 anos de atuação como consultor técnico e professor na área de tecnologias elétricas.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm text-left">
                                <BookOpen className="text-yellow-500 mb-4" />
                                <h4 className="font-bold text-gray-900">Educação Técnica</h4>
                                <p className="text-sm text-gray-500">Experiência docente em tecnologias elétricas e formação profissional.</p>
                            </div>
                            <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm text-left">
                                <Award className="text-yellow-500 mb-4" />
                                <h4 className="font-bold text-gray-900">Consultoria Industrial</h4>
                                <p className="text-sm text-gray-500">Histórico de atuação em grandes empresas e complexos industriais.</p>
                            </div>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="bg-gray-900 text-white p-10 md:p-14 rounded-[2.5rem] shadow-2xl relative overflow-hidden"
                    >
                        <div className="relative z-10 text-left">
                            <h3 className="text-3xl font-[ranade] font-bold mb-6">Nossa Missão</h3>
                            <p className="text-xl text-gray-300 mb-8 leading-relaxed font-light italic">
                                "Identificar as irregularidades nas faturas de energia através de auditoria elétrica, oferecendo soluções para reduzir o valor mensal tanto no mercado cativo quanto no livre".
                            </p>
                        </div>
                        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl"></div>
                    </motion.div>
                </div>
            </section>

            {/* Suporte Direto e Mapa */}
            <section className="py-24 bg-white px-4 md:px-8 overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6 text-left">
                            <div className="inline-flex items-center space-x-2 px-3 py-1 text-black">
                                <MapPin size={14} />
                                <span className="text-xs font-bold uppercase tracking-wider">Suporte Direto</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-[ranade] font-bold text-gray-900 leading-tight">
                                Equipe própria, <br />
                                atendimento real.
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Com nossa equipe técnica e de suporte sediada no Brasil (BA, SE e AL), você nunca precisará se preocupar em ficar preso em menus telefônicos intermináveis ou ser transferido para diferentes pessoas que não entendem seu problema.
                            </p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="relative p-4  shadow-inner min-h-[500px] flex flex-col items-center justify-center"
                        >
                            <div className="w-full h-full">
                                {geoData ? (
                                    <ComposableMap
                                        projection="geoMercator"
                                        projectionConfig={{
                                            scale: 800,
                                            center: [-54, -15] as any
                                        }}
                                        style={{ width: "100%", height: "100%" }}
                                    >
                                        <ZoomableGroup zoom={1}>
                                            <Geographies geography={geoData}>
                                                {({ geographies }) =>
                                                    geographies.map((geo, index) => {
                                                        const fillColor = geo.properties ? getFillColor(geo.properties.name) : COLOR_DEFAULT;
                                                        return (
                                                            <Geography
                                                                key={geo.properties?.name || index}
                                                                geography={geo}
                                                                onMouseEnter={() => handleMouseEnter(geo)}
                                                                onMouseLeave={handleMouseLeave}
                                                                style={{
                                                                    default: { fill: fillColor, stroke: "#FFF", strokeWidth: 0.5, outline: "none" },
                                                                    hover: { fill: COLOR_HOVER, stroke: "#333", strokeWidth: 1, outline: "none" },
                                                                    pressed: { fill: COLOR_DIRECT, outline: "none" }
                                                                }}
                                                            />
                                                        );
                                                    })
                                                }
                                            </Geographies>
                                        </ZoomableGroup>
                                    </ComposableMap>
                                ) : (
                                    <p className="text-gray-400 font-[ranade]">Carregando mapa interativo...</p>
                                )}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <ContactSection />
        </div>
    );
};

export default AboutPage;