import { useState, useEffect } from "react";

const Footer = () => {

    return (
        <div id='footer' className='footer'>
            <div className='footer__redes'>
                <ul className="footer__redes--items">
                    <li>
                        <a href="https://github.com/CarolinaDCode" className="social__button social__github"><ion-icon name="logo-github"></ion-icon></a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/diana-carhuamanta-824742165/" className="social__button social__linkedin"><ion-icon name="logo-linkedin"></ion-icon></a>
                    </li>
                    <li>
                        <a href="https://medium.com/@dianacarhuamanta" className="social__button social__medium"><ion-icon name="logo-medium"></ion-icon></a>
                    </li>
                    <li>
                        <a href="https://www.behance.net/dianacarhuamanta" className="social__button social__instagram"><ion-icon name="logo-behance"></ion-icon></a>
                    </li>
                </ul>
            </div>
            <p>Creado por:</p>
            <span>© Carolina Carhuamanta 2025</span>
        </div>
    );
}

export default Footer;