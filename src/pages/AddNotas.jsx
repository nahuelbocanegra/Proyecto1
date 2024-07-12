import notas from "../js/notas"
import { useState } from "react"


function AddNotas(){


    return(
        <div className="w-100 h-[calc(100vh-215px)] flex justify-start items-center p-3">
            <form action="" className="form-addNotas  w-full flex flex-col">
                <div className="flex flex-col justify-center items-start gap-3">
                    <label htmlFor="titulo-nota" className="font-black">Titulo</label>  
                    <input id="titulo-nota" className="w-full" type="text" placeholder="Titulo"/>
                </div>
                <div className="flex flex-col justify-center items-start gap-3">
                    <label htmlFor="textarea-nota" className="font-black">Contenido</label>
                    <textarea id="textarea-nota" className="textarea-addNotas" name=""  placeholder="Contenido"></textarea>
                </div>
                <button>subir</button>
            </form>
        </div>
    )

}

export default AddNotas