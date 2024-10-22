import { Link } from "react-router-dom"
import './../App.css'



export default function Navigate(){

    return(
        <div className="enlaces">
            <Link to="/">Home</Link>
            <Link to="/usuario">Usuario</Link>
            <Link to="/categoria">Categoria</Link>
            <Link to="/gasto">Gasto</Link>
            <Link to="/ingreso">Ingreso</Link>
        </div>
    )
}
