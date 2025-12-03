import React, { useState, useEffect } from 'react'; // 🟢 Adicionado useState e useEffect
import { ComposableMap, ZoomableGroup, Geographies, Geography } from '@vnedyalk0v/react19-simple-maps';

// URL de exemplo do mapa dos estados do Brasil
const GEO_URL = "https://raw.githubusercontent.com/codeforamerica/click_that_hood/master/public/data/brazil-states.geojson";

const statesData = {
    direct: ["Bahia", "Sergipe", "Alagoas"],
    partners: ["Pernambuco", "Paraíba", "Pará", "Amazonas", "Espírito Santo", "São Paulo", "Rio de Janeiro"]
};

interface StateListProps {
    title: string;
    states: string[];
    color: string;
}

const StateList: React.FC<StateListProps> = ({ title, states, color }) => (
    <div className="text-left">
        <h4 className={`text-xl font-bold mb-4 ${color}`}>{title}</h4>
        <ul className="space-y-2 text-gray-700 list-none">
            {states.map(state => (
                <li key={state} className="flex items-center">
                    <span className={`inline-block w-2.5 h-2.5 rounded-full mr-3 ${color === 'text-yellow-500' ? 'bg-yellow-500' : 'bg-gray-400'}`}></span>
                    {state}
                </li>
            ))}
        </ul>
    </div>
);

const TerritoryOfOperation = () => {
    // 🟢 1. Estado para armazenar os dados geográficos
    const [geoData, setGeoData] = useState(null);

    // 🟢 2. Hook para carregar os dados geográficos
    useEffect(() => {
        fetch(GEO_URL)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro ao carregar dados geográficos');
                }
                return response.json();
            })
            .then(data => setGeoData(data))
            .catch(error => {
                console.error("Erro ao carregar os dados do mapa:", error);
                // Você pode adicionar um fallback visual aqui se quiser
            });
    }, []);


    return (
        <div id="territorio" className="w-full bg-white py-24 px-4 md:px-8">
            <div className="max-w-7xl mx-auto text-center">

                <p className="text-yellow-500 font-semibold mb-2 uppercase tracking-wider">Onde Atuamos</p>
                <h3 className="text-5xl font-bold text-gray-900 mb-16 font-[ranade]">
                    Território de <span className="text-yellow-500 text-pulse">Atuação</span>
                </h3>

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

                    {/* Área de Listagem de Estados */}
                    <div className="lg:w-1/3 w-full space-y-12">
                        <StateList
                            title="Atuação Direta (Matriz e Filiais)"
                            states={statesData.direct}
                            color="text-yellow-500"
                        />
                        <StateList
                            title="Parceiros Estratégicos (Abrangência Nacional)"
                            states={statesData.partners}
                            color="text-gray-700"
                        />
                        <p className="text-lg mt-6 text-gray-600 text-left italic">
                            Dessa forma, abrangemos quase toda a região Norte, Nordeste e Sudeste.
                        </p>
                    </div>

                    {/* Área do Mapa Interativo */}
                    <div className="lg:w-2/3 w-full rounded-xl shadow-2xl h-[400px] md:h-[600px] overflow-hidden flex items-center justify-center">

                        {/* 🟢 Renderiza o mapa SOMENTE se os dados geográficos estiverem carregados */}
                        {geoData ? (
                            <ComposableMap
                                projection="geoMercator"
                                projectionConfig={{
                                    scale: 800,
                                    center: ([-55, -15] as any)
                                }}
                                style={{ width: "100%", height: "100%" }}
                            >
                                <ZoomableGroup zoom={1}>
                                    {/* 🟢 Passa os dados de GeoJSON diretamente, não a URL */}
                                    <Geographies geography={geoData}>
                                        {({ geographies }) =>
                                            geographies.map(geo => (
                                                <Geography
                                                    key={geo.rsmKey}
                                                    geography={geo}
                                                    style={{
                                                        default: { fill: "#D6D6DA", stroke: "#FFF", strokeWidth: 0.5, outline: "none" },
                                                        hover: { fill: "#facc15", outline: "none" },
                                                        pressed: { fill: "#facc15", outline: "none" }
                                                    }}
                                                />
                                            ))
                                        }
                                    </Geographies>
                                </ZoomableGroup>
                            </ComposableMap>
                        ) : (
                            // 🟢 Mensagem de carregamento
                            <p className="text-xl text-gray-500">Carregando Mapa do Brasil...</p>
                        )}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default TerritoryOfOperation;