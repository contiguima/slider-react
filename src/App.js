import Proyecto from "./components/Proyecto";
import Slider from "./components/Slider";
import "./styles.css";

const proyectosArr = [
  <Proyecto
    nombre="Vita"
    stack="React - Firebase"
    texto="MVP web que busca conectar pacientes y médicos y unificar espacio de consultas, historia clínica y sistema de turnos"
    repo="https://github.com/contiguima/Vita"
    deploy="https://vitaditella.netlify.app/"
    imagen="https://i.pinimg.com/564x/d3/7a/c0/d37ac005bf1bbb1f9952c5ad71272533.jpg"
  />,
  <Proyecto
    nombre="Calculadora masa molar"
    stack="HTML- CSS - JavaScript"
    texto="Web para calcular la masa molar de compuestos químicos. "
    repo="https://github.com/contiguima/MasaMolecular"
    deploy="https://calculadoraquimica.netlify.app/"
    imagen="https://i.pinimg.com/564x/89/d7/a6/89d7a67c21670110ecab1d82793d7be6.jpg"
  />,
  <Proyecto
    nombre="LegalVerse"
    stack="React - Firebase"
    texto="Web que conecta abogados y clientes. Landing page y análisis de documentos"
    repo="https://github.com/contiguima/LegalVerseVf"
    deploy="https://legalverse.ar/"
    imagen="https://i.pinimg.com/564x/78/4e/b0/784eb01df305e91f1eecccab2581627d.jpg"
  />
];

export default function App() {
  return (
    <div className="App">
      <h1>Slider en React</h1>
      <Slider proyectos={proyectosArr} />
    </div>
  );
}
