import logo from "./assets/images/logo.png"
import HeroMetrics from "./components/HeroMetrics"
import NavBar from "./components/Navbar"
import Services from "./components/Services"
import TerritoryOfOperation from "./components/TerritoryOfOperation"

function App() {
  return (
    < div className="w-full relative overflow-x-hidden text-center" >

      < div
        className="absolute inset-0 z-0 h-full"
        style={{
          backgroundImage: `
        radial-gradient(125% 125% at 50% 10%, #ffffff 40%, #f59e0b 100%)
      `,
        }
        }
      />

      < NavBar logoSrc={logo} />

      < div className="h-screen w-full flex flex-col justify-center items-center relative z-10" >
        <div className="relative z-10 max-w-7xl px-4 md:px-8" >
          <img
            src={logo}
            alt="Logo éluz - Gestão de Energia"
            className="w-64 md:w-96 mx-auto mb-4"
          />
          <h1 className="font-[ranade] text-black font-bold text-5xl md:text-6xl py-2 md:py-4">
            Gestão de energia <br></br> e soluções elétricas
          </h1>
          <h2 className="font-[ranade] text-black max-w-2xl text-xl md:text-2xl mx-auto">
            Desvende os segredos da eficiência energética: um guia transformador para reduzir seus custos.
          </h2>
        </div >
      </div >

      {/* 🟢 METRICS: Adicionado bg-transparent */}
      < div className="w-full py-5 md:py-5 relative z-10 bg-transparent" >
        <HeroMetrics />
      </div >

      {/* 🟢 SERVICES: Adicionado bg-transparent */}
      < div className="relative z-10 bg-transparent" >
        <Services />
      </div >

      {/* 🟢 TERRITORY: Adicionado bg-transparent */}
      < div className="relative z-10 bg-transparent" >
        <TerritoryOfOperation />
      </div >
    </div >
  )
}

export default App