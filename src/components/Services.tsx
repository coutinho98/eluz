import migrationImage from '@/assets/images/free_energy_market_migration.png';
import managementImage from '@/assets/images/free_energy_market_management.png';
import taxRecoveryImage from '@/assets/images/tax_recovery.png';
import tariffFramingImage from '@/assets/images/tariff_framing.png';
import powerFactorImage from '@/assets/images/power_quality_analysis.png';
import qualityAnalysisImage from '@/assets/images/power_quality_analysis.png'; 
import thermographyImage from '@/assets/images/applied_thermography.png';
import assemblyMaintenanceImage from '@/assets/images/assembly_maintenance.png';


interface ServiceCardProps {
    title: string;
    description: string;
    details?: string;
    imageSrc: string;
    link?: string;
}

const Services = () => {
    const ServiceCard = ({ title, description, imageSrc }: ServiceCardProps) => (
        <div className="text-left group transition duration-300 ">
            <img
                src={imageSrc}
                alt={title}
                className="w-70 h-70 object-contain mx-auto block "
            />
            <h4 className="text-xl font-bold text-gray-900 mb-3 font-[ranade]">{title}</h4>
            <p className="text-gray-600 mb-4 text-base">{description}</p>
        </div>
    );

    const contractualServices: ServiceCardProps[] = [
        {
            title: "Migração para o Mercado Livre de Energia",
            description: "Permite que grandes empresas e indústrias adquiram energia a preços mais baixos, reduzindo o valor da fatura mensal em até 40%.",
            imageSrc: migrationImage,
        },
        {
            title: "Gestão do Mercado Livre de Energia",
            description: "Revisões trimestrais para evitar grandes prejuízos e garantir que a gestora cumpra com suas obrigações, já que não é raro encontrar empresas que pagam pela gestão e não têm o devido acompanhamento.",
            imageSrc: managementImage,
        },
        {
            title: "Recuperação de Impostos Pagos Indevidamente",
            description: "Análise de cobranças indevidas dos últimos 5 anos. Cerca de 25% do valor total da fatura é composta por impostos, e podemos obter créditos para abatimento mensal.",
            imageSrc: taxRecoveryImage,
        },
        {
            title: "Enquadramento Tarifário",
            description: "Análise gratuita da fatura para identificar a modalidade tarifária ideal e evitar cobranças acima do valor normal. Esse é um erro comum nas faturas de energia.",
            imageSrc: tariffFramingImage,
        },
    ];

    const qualityServices: ServiceCardProps[] = [
        {
            title: "Correção de Fator de Potência",
            description: "Solução para evitar multas mensais, instabilidades, sobreaquecimento, aumento de consumo e redução da vida útil do sistema causados por um baixo fator de potência.",
            imageSrc: powerFactorImage,
        },
        {
            title: "Análise de Grandezas Elétricas e Qualidade de Energia",
            description: "Identificação das causas de falhas, baixo rendimento e queima de equipamentos. Também é possível determinar a capacidade do transformador para novas cargas.",
            details: "Verifique a capacidade e a qualidade da sua instalação.",
            imageSrc: qualityAnalysisImage,
        },
        {
            title: "Termografia Aplicada",
            description: "Exame de imagem que visualiza anomalias térmicas em cabos e equipamentos, permitindo identificar se a instalação está funcionando de forma segura e evitando acidentes graves.",
            details: "Agende uma inspeção e certifique-se da segurança.",
            imageSrc: thermographyImage,
        },
        {
            title: "Montagem e Manutenção de Painéis e Estruturas Elétricas",
            description: "Equipe qualificada na montagem e manutenção, seguindo todas as normas de segurança mediante NR 10 e NR 12.",
            details: "Informe-nos sobre suas necessidades e solicite um orçamento.",
            imageSrc: assemblyMaintenanceImage,
        },
    ];

    return (
        <div id="servicos" className="w-full bg-transparent py-10 md:py-10 px-4 md:px-8">
            <div className="max-w-7xl mx-auto text-center">

                <h2 className="font-[ranade] text-5xl font-bold text-gray-800 mb-10 text-left">
                    Gestão Contratual de Energia
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
                    {contractualServices.map((service) => (
                        <ServiceCard key={service.title} {...service} />
                    ))}
                </div>

                <h2 className="font-[ranade] text-5xl font-bold text-gray-800 mb-10 text-left">
                    Gestão de Qualidade de Energia
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {qualityServices.map((service) => (
                        <ServiceCard key={service.title} {...service} />
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Services;