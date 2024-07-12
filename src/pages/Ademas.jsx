function Ademas(){

    return(
         
        <div className="Contacto-container flex items-center justify-center w-full h-[calc(100vh-225px)] p-2">
            <form className="form-contacto bg-slate-400  flex justify-start items-start flex-col rounded-xl " action="">  
                <div className=" w-full flex flex-col items-start justify-center gap-2">
                    <label htmlFor="">Email</label>
                    <input  className="w-full h-10 rounded-xl p-2" type="text" placeholder="Email" />
                </div>
                <div className=" w-full flex flex-col items-start justify-center gap-2">
                    <label htmlFor="">Escribe un mensaje</label>
                    <textarea className="w-full h-28 bor rounded-xl p-2 " placeholder="Escribe un mensaje"></textarea>
                </div>
                <button className="w-full h-10 bg-lime-600 rounded-xl">Enviar</button>
            </form>
    </div>
    )

}
export default Ademas