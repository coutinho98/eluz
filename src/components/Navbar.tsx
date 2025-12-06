import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom'; 

interface NavBarProps {
    logoSrc: string;
}

const NavBar: React.FC<NavBarProps> = ({ logoSrc }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const navItems = [
        { name: "Sobre", href: "/#sobre", isExternalLink: false },
        { name: "Vantagens", href: "/#vantagens", isExternalLink: false },
        { name: "Serviços", href: "/#servicos", isExternalLink: false },
        { name: "Território", href: "/#territorio", isExternalLink: false },
        { name: "Contato", href: "/#contato", isExternalLink: false },
    ];

    return (
        <nav className="sticky top-0 z-50 w-full bg-white ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    
                    <div className="flex-shrink-0">
                        <Link to="/" className="flex items-center">
                            <img className="h-20 w-auto" src={logoSrc} alt="Logo É Luz" />
                        </Link>
                    </div>

                    <div className="hidden lg:ml-6 lg:flex lg:space-x-8 items-center">
                        {navItems.map(item => (
                             <a 
                                key={item.name} 
                                href={item.href} 
                                className="text-gray-600 hover:text-yellow-500 transition duration-150 ease-in-out font-medium"
                            >
                                {item.name}
                            </a>
                        ))}

                     {/*    <Link 
                            to="/protecao-eletrica" 
                            className="flex items-center px-4 py-2 text-white bg-violet-700 rounded-lg hover:bg-violet-600 transition duration-150 ease-in-out font-semibold text-lg shadow-lg"
                        >
                            <Zap className="w-5 h-5 mr-2" />
                            PDA & Proteção
                        </Link> */}
                    </div>

                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                <X className="block h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Menu className="block h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="lg:hidden absolute w-full bg-white shadow-xl" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                         {navItems.map(item => (
                             <a 
                                key={item.name} 
                                href={item.href} 
                                onClick={() => setIsOpen(false)}
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-yellow-500 hover:bg-gray-50"
                            >
                                {item.name}
                            </a>
                        ))}
                        
                         {/* <Link 
                            to="/protecao-eletrica" 
                            onClick={() => setIsOpen(false)}
                            className="flex items-center px-3 py-2 rounded-md text-base font-medium text-white bg-violet-700 hover:bg-violet-600 mt-2"
                        >
                            <Zap className="w-5 h-5 mr-2" />
                            PDA & Proteção
                        </Link> */}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default NavBar;