import "./../assets/sb-admin-2.min.css";
import { useForm } from "react-hook-form";
import Footer from "./footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const contra = watch("contrasena");
  const navigate = useNavigate();

  const onSubmited = async (data) => {
    console.log("Datos del formulario: ", data);

    try {
      let respuesta = await axios.post("http://localhost:8000/login", data);
      alert("¡Registro exitoso!");
      console.log("Respuesta del servidor:", respuesta.data);

      navigate("/home");
    } catch (error) {
      console.error("Error al registrar:", error.response?.data || error.message);

      // Mensaje de error más claro para el usuario
      if (error.response?.data?.message) {
        alert(`Error: ${error.response.data.message}`);
      } else {
        alert("Ocurrió un error al registrar. Intenta nuevamente.");
      }
    }
    

  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h2 className="text-center text-primary">REGISTER</h2>
          </div>
          <div className="col-sm-12">
            <form onSubmit={handleSubmit(onSubmited)}>
              <div>
                <input
                  type="text"
                  placeholder="Nombres"
                  {...register("nombres", { required: "Debes escribir tu nombre" })}
                  className="form-control"
                />
                {errors.nombres && <p className="text-danger">{errors.nombres.message}</p>}
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Dirección Email"
                  {...register("correo", { required: "Debes escribir un correo válido" })}
                  className="form-control"
                />
                {errors.correo && <p className="text-danger">{errors.correo.message}</p>}
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Contraseña"
                  {...register("contrasena", { required: "Debes escribir una contraseña válida" })}
                  className="form-control"
                />
                {errors.contrasena && <p className="text-danger">{errors.contrasena.message}</p>}
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Confirmar Contraseña"
                  {...register("confirmarContrasena", {
                    required: "Por favor confirma tu contraseña",
                    validate: (value) => value === contra || "Las contraseñas no coinciden",
                  })}
                  className="form-control"
                />
                {errors.confirmarContrasena && (
                  <p className="text-danger">{errors.confirmarContrasena.message}</p>
                )}
              </div>
              <div className="botones">
                <button type="submit" className="btn btn-primary">
                  Enviar
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => navigate("/login")}
                >
                  Ir al Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
