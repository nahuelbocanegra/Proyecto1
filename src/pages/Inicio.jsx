import notas from '../js/notas'
import {BrowserRouter as Router, Route , Routes, Link} from 'react-router-dom'
function Inicio(){



    return(
         
        <main className='main-inicio'>
           
                <ul className='ul-notas '>
                    {
                        notas.map((nota)=>{
                            return( 
                                <li  className="li-nota flexbox " key={nota.id} >
                                    <p className='nota-title'>{nota.titulo}</p>
                                <Link className='nota-Link flexbox' to={`/nota/${nota.id}`}>
                                    <div className='box-Link'><i className='bx bx-chevron-right'></i></div>
                                </Link>
                            </li>)
                        })
                    }
                </ul>
            
        </main >
    
    )

}

export default Inicio