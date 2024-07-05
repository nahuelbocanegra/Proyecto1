function AppFooter(){
    return (
        <footer className="Appfooter flexbox">
            <ul className="ul-footer-social flexbox">
                <li className="linea-footer"></li>
                <li className="li-footer"><i className='bx bxl-facebook'></i></li>
                <li className="li-footer"><i className='bx bxl-gmail'></i></li>
                <li className="li-footer"><i className='bx bxl-youtube'></i></li>
                <li className="li-footer"><i className='bx bxl-whatsapp'></i></li>
                <li className="linea-footer"></li>
            </ul>
            <div className="Copyrigth-content flexbox">
                <h4 className="title-footer">Notas</h4>
                <p className="text-copyrigth">Copyrigth@2024 Pablo.B</p>
                <span className="footer-copyrigth-links flexbox">
                    <a className="link-copyrigth-info"  href="#">Informacion Legal</a>
                    <a className="link-copyrigth-info" href="#">Politica de privacidad</a>
                </span>
            </div>
        </footer>
    )
}

export default AppFooter;
