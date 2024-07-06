import img from '../js/img.js'

function Perfil(){

    return(
         
        <main className='perfil'>
                <div className='perfil-content'>
                    <img className='perfil-img' src={img[1]} alt="" />
                    <div>
                        <h2>Bocanegra Pablo Nahuel</h2>
                    </div>
                </div>
                 
        </main>
    
    )

}
export default Perfil