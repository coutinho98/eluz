import { Mail, Phone } from 'lucide-react';
import logo from '../assets/images/logo.png';

const ContactSection = () => {
    return (
        <footer id="contato" className="bg-white text-gray-700 py-16 px-4 md:px-8 w-full">
            <div className="max-w-7xl mx-auto">

                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-20 text-left mb-12 border-b pb-12 border-gray-200">
                    <div className="col-span-2 md:col-span-1 space-y-2 -mt-20">
                        <img src={logo} alt="É Luz Logo" className="w-40 md:w-40 block -ml-6" />
                        <p className="text-sm">Especialistas em gestão de energia e eficiência elétrica, fundados em 2020. </p>

                        <p className="text-sm pt-2">
                            <a href="mailto:suaenergiaeluz@gmail.com" className="hover:text-yellow-500 flex items-center">
                                <Mail className="w-4 h-4 mr-2" /> suaenergiaeluz@gmail.com
                            </a>
                        </p>
                        <p className="text-sm">
                            <a href="tel:+5579996060535" className="hover:text-yellow-500 flex items-center">
                                <Phone className="w-4 h-4 mr-2" /> 79 99606.0535
                            </a>
                        </p>
                    </div>

                    <div>
                        <h5 className="font-bold text-black mb-4 uppercase text-sm">Gestão Contratual</h5>
                        <ul className="space-y-2 text-sm">
                            <li><a href="/#servicos" className="hover:text-yellow-500 transition duration-150">Migração Mercado Livre</a></li>
                            <li><a href="/#servicos" className="hover:text-yellow-500 transition duration-150">Gestão ML</a></li>
                            <li><a href="/#servicos" className="hover:text-yellow-500 transition duration-150">Recuperação de Impostos</a></li>
                            <li><a href="/#servicos" className="hover:text-yellow-500 transition duration-150">Enquadramento Tarifário</a></li>
                        </ul>
                    </div>

                    <div>
                        <h5 className="font-bold text-black mb-4 uppercase text-sm">Qualidade e Proteção</h5>
                        <ul className="space-y-2 text-sm">
                            <li><a href="/#servicos" className="hover:text-yellow-500 transition duration-150">Fator de Potência</a></li>
                            <li><a href="/protecao-eletrica" className="hover:text-violet-700 transition duration-150">PDA & Proteção (SPDA/MPS)</a></li>
                            <li><a href="/#servicos" className="hover:text-yellow-500 transition duration-150">Termografia Aplicada</a></li>
                            <li><a href="/#servicos" className="hover:text-yellow-500 transition duration-150">Montagem/Manutenção</a></li>
                        </ul>
                    </div>

                    <div>
                        <h5 className="font-bold text-black mb-4 uppercase text-sm">Recursos</h5>
                        <ul className="space-y-2 text-sm">
                            <li><a href="/#sobre" className="hover:text-yellow-500 transition duration-150">Sobre a Empresa </a></li>
                            <li><a href="/#territorio" className="hover:text-yellow-500 transition duration-150">Território de Atuação </a></li>
                            <li><a href="#contato" className="hover:text-yellow-500 transition duration-150">Solicitar Orçamento</a></li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-4 border-t border-gray-200 text-xs text-gray-500">
                    <p>© {new Date().getFullYear()} É Luz. Todos os direitos reservados.</p>
                    <div className="flex space-x-4 mt-2 md:mt-0">
                        <a href="#" className="hover:text-black">Termos de Serviço</a>
                        <span className="text-gray-300">|</span>
                        <a href="#" className="hover:text-black">Política de Privacidade</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default ContactSection;