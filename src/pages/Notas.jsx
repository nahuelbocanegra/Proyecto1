import { useParams,Link} from "react-router-dom"
import notas from "../js/notas";


export default function Notas(){
    const {id}= useParams();
    let nuevoId=parseInt(id,10)
    let nota= notas.find((nota)=> nota.id === nuevoId)      

    return(
        <div className="contenedor-nota w-full">
            <Link className="nota-link-inicio" to={"/"}><i className='bx bx-chevron-left'></i></Link>
            <div className="nota">
                <h4>{nota.titulo}</h4>
                
                <p>{nota.contenido}</p>

            </div>
        </div>
    )
};
