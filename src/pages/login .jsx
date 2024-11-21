import "./../assets/sb-admin-2.min.css";
import { useForm } from "react-hook-form";
import Footer from "./footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  
  
  let { register, handleSubmit, formState: { errors }} = useForm();
  let navigate = useNavigate()
  let irRegistrarse = () => {
    navigate("/register")
  }


  let onSubmited = async(data) => {
    console.log("datos del formulario: ");
    console.log(data);
    try {
      let respuesta = await axios.post("http://localhost:8000/login",data);
      alert("Bienvenido "+ respuesta.data.nombres);
      navigate("/home")
      console.log("respuesta del servidor python")
      console.log(respuesta);
    } catch (error) {
        console.log(errors);
    }
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h2 className="text-center text-primary">LOGIN</h2>
          </div>
          <div className="col-sm-12">
            <form onSubmit={handleSubmit(onSubmited)}>
              <div>
                <input type="text" placeholder="Nombres" {...register("nombres",{required:true})} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                { errors.nombres && <p className="text-danger">Debes escrivir tu nombre</p>}
              </div>
              <div className="3">
                <input type="email" placeholder="Direccion de Email" {...register("correo",{required:true})} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                { errors.correo && <p className="text-danger">Debes escribir un correo válido</p>}
              </div>
              <div className="mb-3">
                <input type="password" placeholder="Contraseña" {...register("contrasena",{required:true})} className="form-control" id="exampleInputPassword1"/>
                { errors.contrasena && <p className="text-danger">Debes escribir una contraseña válida</p>}
              </div>
              <div className="botones">
              <button type="submit" className="btn btn-primary">Enviar</button>
              <button className="btn btn-primary" onClick={irRegistrarse}>Ir a Registrarse</button>
              </div>

            </form>
          </div>
        </div>
      </div>
      <Footer />
  
    </>
  );
}

export default Login;
