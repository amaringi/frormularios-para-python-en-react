import Footer from "./footer";

export default function Usuario() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 formulario-container">
            <h1 className="text-center">USUARIO</h1>
            <form id="signupForm">
              <div className="form-group">
                <label htmlFor="nombres">Nombres</label>
                <input
                  type="text"
                  className="form-control"
                  id="nombres"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="fecha">Fecha de nacimiento</label>
                <input
                  type="text"
                  className="form-control"
                  id="fecha"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="lugar">Lugar de nacimiento</label>
                <input
                  type="text"
                  className="form-control"
                  id="lugar"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="metaAhorro">Meta de ahorro</label>
                <input
                  type="text"
                  className="form-control"
                  id="metaAhorro"
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary btn-block mt-3">
                Enviar Datos
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
