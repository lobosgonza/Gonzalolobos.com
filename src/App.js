import "./style/css/index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Nav from "./components/Nav";
import Hero from "./components/Hero";
import ImgText from "./components/ImgText";
import Usp from "./components/Usp";
import List from "./components/List/List";
import Cards from "./components/Cards/Cards";
import Copyright from "./components/Copyright";

import StudiesDATA from "./assets/studies";
import EmployDATA from "./assets/empleo";
import HabBlandasDATA from "./assets/habBlandas";
import HabDurasDATA from "./assets/habDuras";



function App() {
  return (
    <div className="App">
      {/* <Nav/> */}
      <Hero />
      <ImgText
        sideImg="none"
        subtitle="Curriculum"
        text="Me llamo Gonzalo (él). Ingeniero Comercial con Magister en Psicología Organizacional UAI. Fotógrafo Publicitario Arcos, con experiencia en campañas comunicacionales y desarrollo Web."
      />
      <ImgText
        sideImg="none"
        subtitle=""
        text="Mi experiencia aborda diferentes areas que integran el diseño, los negocios y el desarrollo Web. Esto me permite poder generar piezas visuales que trasciendan la estética y puedan tener una funcionalidad orientada tanto a una óptima experiencia de usuario como el logro de objetivos del equipo."
      />

      <List data={StudiesDATA} subtitle="Estudios" />
      <List data={EmployDATA} subtitle="Empleo" />

      <Cards data={HabBlandasDATA} subtitle="Habilidades Adaptativas" />
      <Cards data={HabDurasDATA} subtitle="Conocimientos Técnicos" />

      <Usp subtitle="Conversemos" />
      <Copyright />
    </div>
  );
}

export default App;
