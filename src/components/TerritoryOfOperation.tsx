import { useState, useEffect, useMemo } from 'react';
import { ComposableMap, ZoomableGroup, Geographies, Geography } from '@vnedyalk0v/react19-simple-maps';

const GEO_URL = "https://raw.githubusercontent.com/codeforamerica/click_that_hood/master/public/data/brazil-states.geojson";

const statesData = {
    direct: ["Bahia", "Sergipe", "Alagoas"],
    partners: ["Pernambuco", "Paraíba", "Pará", "Amazonas", "Espírito Santo", "São Paulo", "Rio de Janeiro"]
};

const COLOR_DIRECT = "#5b21b6";
const COLOR_PARTNERS = "#d8b4fe";
const COLOR_DEFAULT = "#D6D6DA";
const COLOR_HOVER = "#8b5cf6";

const TerritoryOfOperation = () => {
    const [geoData, setGeoData] = useState<any>(null);
    const [tooltipContent, setTooltipContent] = useState("");

    const directStatesSet = useMemo(() => new Set(statesData.direct), []);
    const partnersStatesSet = useMemo(() => new Set(statesData.partners), []);

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
            });
    }, []);

    const getFillColor = (stateName: string): string => {
        if (directStatesSet.has(stateName)) {
            return COLOR_DIRECT;
        }
        if (partnersStatesSet.has(stateName)) {
            return COLOR_PARTNERS;
        }
        return COLOR_DEFAULT;
    };

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

    const handleMouseLeave = () => {
        setTooltipContent("");
    };

    return (
        <div id="territorio" className="w-full bg-white py-20 px-4 md:px-8">
            <div className="max-w-7xl mx-auto text-center">

                <h3 className="text-5xl font-bold text-gray-900 mb-4 font-[ranade]">
                    Território de Atuação
                </h3>

                <p className="text-2xl text-gray-600 max-w-3xl mx-auto mb-5 font-[ranade]">
                    Atuação direta na Bahia, Sergipe e Alagoas, com parceiros estratégicos que nos permitem abranger quase toda a região Norte, Nordeste e Sudeste.
                </p>

                <div
                    id="map-tooltip"
                    className={`
                        text-xl font-bold text-gray-800 p-3 mb-8 
                        min-h-[50px] transition-opacity duration-300
                        ${tooltipContent ? 'opacity-100' : 'opacity-0'}
                    `}
                >
                    {tooltipContent || "Passe o mouse sobre um estado"}
                </div>

                <div className="w-full flex justify-center">
                    <div className="w-full max-w-4xl rounded-2xl border border-gray-300 h-[400px] md:h-[600px] overflow-hidden flex items-center justify-center">

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
                                    <Geographies geography={geoData}>
                                        {({ geographies }) =>
                                            geographies.map((geo, index) => {
                                                const fillColor = geo.properties ? getFillColor(geo.properties.name) : COLOR_DEFAULT;
                                                return (
                                                    <Geography
                                                        key={geo.properties?.name || index}
                                                        geography={geo}
                                                        fill={fillColor}
                                                        onMouseEnter={() => handleMouseEnter(geo)}
                                                        onMouseLeave={handleMouseLeave}
                                                        style={{
                                                            default: {
                                                                fill: fillColor,
                                                                stroke: "#FFF",
                                                                strokeWidth: 0.5,
                                                                outline: "none"
                                                            },
                                                            hover: {
                                                                fill: COLOR_HOVER, 
                                                                stroke: "#333",
                                                                strokeWidth: 1,
                                                                outline: "none"
                                                            },
                                                            pressed: {
                                                                fill: COLOR_DIRECT, 
                                                                outline: "none"
                                                            }
                                                        }}
                                                    />
                                                );
                                            })
                                        }
                                    </Geographies>
                                </ZoomableGroup>
                            </ComposableMap>
                        ) : (
                            <p className="text-xl text-gray-500">Carregando Mapa do Brasil...</p>
                        )}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default TerritoryOfOperation;