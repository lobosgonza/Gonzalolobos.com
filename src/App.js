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


import GLPortrait from "./img/GonzaloLobosPortrait.jpg";
import { Container } from "react-bootstrap";

import MainBck from "./img/Background.jpg";
// Imagenes
// 1903x257 -> Main Banner
// 450 x 450 -> Retrato

function App() {
  return (
    <div className="App">
      {/* <Nav/> */}
      <Hero background={MainBck}/>


      
      <ImgText
        sideImg="right"
        subtitle="Sobre Mí"
        text1="Me llamo Gonzalo (él). Ingeniero Comercial con Magister en Psicología Organizacional UAI. Fotógrafo Publicitario Arcos, con experiencia en campañas comunicacionales y desarrollo Web. Mi experiencia aborda diferentes areas que integran el diseño, los negocios y el desarrollo Web. Esto me permite poder generar piezas visuales que trasciendan la estética y puedan tener una funcionalidad orientada tanto a una óptima experiencia de usuario como el logro de objetivos del equipo."
      text2="Mi experiencia aborda diferentes areas que integran el diseño, los negocios y el desarrollo Web. Esto me permite poder generar piezas visuales que trasciendan la estética y puedan tener una funcionalidad orientada tanto a una óptima experiencia de usuario como el logro de objetivos del equipo."
      src={GLPortrait}
      alt="Gonzalo Lobos Ux Designer"
      />



      <Cards data={HabDurasDATA} subtitle="Conocimientos Técnicos" />
      <Cards data={HabBlandasDATA} subtitle="Habilidades Adaptativas" />

      <List data={StudiesDATA} subtitle="Estudios" />
      <List data={EmployDATA} subtitle="Empleos" />


      <Usp subtitle="Conversemos" />
      <Copyright />
    </div>
  );
}

export default App;
