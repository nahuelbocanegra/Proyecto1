import { Link } from "react-router-dom"

function Login(){
    return (
        <div className="Login">
            <form action="form" className="form">
                <div className="cont-input-login">
                    <label htmlFor="">Contraseña</label>
                    <input type="text" />
                </div>
                <div className="cont-input-login">
                    <label htmlFor="">Email</label>
                    <input type="text" />
                </div>
                <div className="cont-input-login">
                    <button className="btn-form-login">Ingresar</button>
                    <Link to={"/register"}>nuevo usuario</Link>
                </div>
            </form>
        </div>
    )
}
export default Login