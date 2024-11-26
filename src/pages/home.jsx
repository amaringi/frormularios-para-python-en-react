import Footer from "./footer";

export default function Home() {
  return (
    <div className="content">
      <h1>GESTION DE PRESUPUESTO</h1>
      <div>
        <ul className="home">
          <li>
            <a href="usuario">USUARIO</a>
          </li>
          <li>
            <a href="categoria">CATEGORIA</a>
          </li>
          <li>
            <a href="gasto">GASTOS</a>
          </li>
          <li>
            <a href="ingreso">INGRESOS</a>
          </li>
          <li>
            <a href="login">SALIR</a>
          </li>
        </ul>
      </div>
      <Footer/>
    </div>
  );
}
