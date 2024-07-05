
import {BrowserRouter as Router, Route , Routes, Link} from 'react-router-dom'

import Inicio from '../pages/Inicio';
import Ademas from '../pages/Ademas';
import Perfil from '../pages/Perfil';
import  Notas from '../pages/Notas';
import AddNotas from '../pages/AddNotas';
import arrayImg from '../js/img';

import { useState } from 'react';

function NavMenu(){
       
    const[ estado,setEstado]=useState(true)
    return(
         <Router>
          
                <nav>
                    <div className='nav-mini-perfil'>
                        <img className='nav-img-pefil' src={arrayImg[1]} alt="" />
                        <Link to={'/perfil'}> 
                             <p>Pablo Bocanegra</p>
                        </Link>
                    </div>
                   
                        <Link to={'/notas/addNotas'}>
                            <i className='bx bxs-file-plus'></i>
                        </Link>
                 
                    <span 
                    onClick={()=>{setEstado(!estado)}} 
                    className='BarMenu'>
                        <i className='bx bx-menu'></i>
                    </span>

                    <ul className={`NavUl ${estado ? 'not-visible': 'visible'}`}>
                        <li ><Link className='nav-li' to='/'>Inicio</Link></li>
                        <li ><Link className='nav-li' to='/ademas'>Ademas</Link></li>
                        <li ><Link className='nav-li' to='/perfil'>Perfil</Link></li>
                    </ul>
                </nav>
          
            
            <Routes>    
                <Route path='/' element={<Inicio></Inicio>}/>
                <Route path='/ademas' element={<Ademas></Ademas>}/>
                <Route path='/perfil' element={<Perfil></Perfil>}/>
                <Route path='/nota/:id' element={<Notas></Notas>}/>
                <Route path='/notas/addNotas' element={<AddNotas></AddNotas>}/>
            </Routes>
        </Router>
    
    )

}

export default NavMenu;