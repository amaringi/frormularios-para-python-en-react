import Footer from "./footer";

export default function Categoria() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto formulario-container">
            <h1 className="text-center">CATEGORIA</h1>
            <form id="signupForm">
              <div className="form-group">
                <label htmlFor="nombre">Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  id="nombre"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="descripcion">Descripcion</label>
                <input
                  type="text"
                  className="form-control"
                  id="descripcion"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="foto">Foto categoria</label>
                <input
                  type="text"
                  className="form-control"
                  id="foto"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="fecha">Fecha</label>
                <input
                  type="date"
                  className="form-control"
                  id="fecha"
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary btn-block mt-3">
                Enviar Datos
              </button>
            </form>
          </div>
          <Footer/>
        </div>
      </div>
    </div>
  );
}
