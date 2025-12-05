import CountUpMetric from "./CountUpMetric";

const HeroMetrics = () => (
    <div className=" relative z-10 flex flex-col md:flex-row justify-center 
                    space-y-8 md:space-y-0 md:space-x-12 mt-20 px-6">

        <CountUpMetric
            end={40}
            suffix="%"
            label="Redução na fatura mensal"
        />
        <div className=" md:block w-px h-24 "></div>

        <CountUpMetric
            end={25}
            suffix="%"
            label="Créditos de impostos recuperáveis"
        />
        <div className="md:block w-px h-24 "></div>


        <CountUpMetric
            end={10}
            suffix="+"
            label="Anos de experiência técnica"
        />

    </div>
);

export default HeroMetrics;