function Login(){
    return (
        <div className="Login bg-slate-500">
            <form action="form">
                <label htmlFor=""></label>
                <input type="text" />
                <label htmlFor=""></label>
                <input type="text" />
                <label htmlFor=""></label>
                <input type="text" />
                <button>Enviar</button>
            </form>
            <div className="bg-black w-10 h-6">
                <a  href="#">nuevo usuario</a>
            </div>
        </div>
    )
}
export default Login