import Footer from "./footer";


export default function Gasto(){

    return(
        <div className="row">
            <div className="formulario-container">
                <h1 className="text-center">GASTOS</h1>
                <form id="signupForm">
                    <div className="form-group">
                        <label htmlFor="descripcion">Descripcion</label>
                        <input type="text" className="form-control" id="descripcion" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="categoria">Categoria</label>
                        <input type="text" className="form-control" id="categoria" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="valor">Valor</label>
                        <input type="number" className="form-control" id="valor" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="fecha">Fecha</label>
                        <input type="date" className="form-control" id="fecha" required/>
                    </div>

                    <button type="submit" className="btn btn-primary btn-block mt-3">Enviar Datos</button>
                </form>
            </div>
            <Footer/>
        </div>
    )
}