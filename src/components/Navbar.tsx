interface NavBarProps {
    logoSrc: string;
}

const NavBar = ({ logoSrc }: NavBarProps) => (
    <nav className="fixed top-0 left-0 right-0 z-50 ">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">

            <a href="#" className="flex-shrink-0">
                <img src={logoSrc} alt="Iluz Logo" className="w-18 md:w-28" />
            </a>

            <div className="flex space-x-4 md:space-x-6">

                <a
                    href="#servicos"
                    className="font-[ranade] text-lg font-medium text-black hover:text-yellow-600 transition duration-500 px-3 py-2 rounded-lg"
                >
                    Serviços
                </a>

                <a
                    href="#contato"
                    className="font-[ranade] text-lg font-medium text-black  px-4 py-2 rounded-lg hover:text-yellow-600 transition duration-500"
                >
                    Contato
                </a>
            </div>
        </div>
    </nav>
);

export default NavBar;