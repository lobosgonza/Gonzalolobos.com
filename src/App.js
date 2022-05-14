import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import ImgText from "./components/ImgText";
import Usp from "./components/Usp";
import StudiesDATA from "./components/studies";
import EmployDATA from "./components/empleo";
import List from "./components/List";
import HabilitiesDATA from "./components/habilidades";

function App() {
  return (
    <div className="App">
      {/* <Nav/> */}
      <Hero />
      <ImgText
        sideImg="left"
        subtitle="Curriculum"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pellentesque consequat mattis. Proin mattis, dolor eget aliquet malesuada, risus ipsum vehicula nisi, in gravida ipsum lorem in nunc. Maecenas sem nisi, fermentum vel aliquet sit amet, feugiat ac nibh. Morbi congue iaculis nunc, ac pretium ante molestie quis. In justo."
       
      />
      <ImgText
        sideImg="right"
        subtitle=""
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pellentesque consequat mattis. Proin mattis, dolor eget aliquet malesuada, risus ipsum vehicula nisi, in gravida ipsum lorem in nunc. Maecenas sem nisi, fermentum vel aliquet sit amet, feugiat ac nibh. Morbi congue iaculis nunc, ac pretium ante molestie quis. In justo."
      />
      <ImgText
        sideImg="none"
        subtitle="Curriculum"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pellentesque consequat mattis. Proin mattis, dolor eget aliquet malesuada, risus ipsum vehicula nisi, in gravida ipsum lorem in nunc. Maecenas sem nisi, fermentum vel aliquet sit amet, feugiat ac nibh. Morbi congue iaculis nunc, ac pretium ante molestie quis. In justo."
      />
         <ImgText
        sideImg="right"
        subtitle=""
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pellentesque consequat mattis. Proin mattis, dolor eget aliquet malesuada, risus ipsum vehicula nisi, in gravida ipsum lorem in nunc. Maecenas sem nisi, fermentum vel aliquet sit amet, feugiat ac nibh. Morbi congue iaculis nunc, ac pretium ante molestie quis. In justo."
      />
      <List data={StudiesDATA} titleSection="Estudios" />
      <List data={EmployDATA} titleSection="Empleo" />
      <List data={HabilitiesDATA} titleSection="Habilidades" />
      <Usp/>
    </div>
  );
}

export default App;
