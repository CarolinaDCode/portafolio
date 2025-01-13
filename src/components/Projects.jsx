import proyectos from '../assets/proyectos.svg';
import github from '../assets/icon_github_negativo.svg';
import enlace from '../assets/icon_enlace.svg';
import siderperu from '../assets/proyects/modulo_inventarios.webp';
import ripley from '../assets/proyects/ripley_.jpg';
import prueba from '../assets/proyects/prueba.jpg';

const Projects = () => {
    return (
        <div id='projects' className='projects'>
            <div className="projects__spacemenu">
            </div>
            <span>Proyectos 💼</span>
            <div className='projects__container'>

                <div className='projects__card'>
                    <div className='projects__cardimage'>
                        <img src={siderperu} />
                    </div>
                    <div className='projects__cardinfo'>
                        <h1>Modulo de Inventarios</h1>
                        <span>Python (Flask)| React | MaterialUI </span>
                        <ul className='projects__icons'>
                            <li>
                                <a href="https://github.com/kateincoding/Inventory_module" className="social__button social__github"><ion-icon name="logo-github"></ion-icon></a>
                            </li>
                            <li>
                                <a href="https://carogeminislina.wixsite.com/inventarioti" className="social__button social__github"><ion-icon name="link-outline"></ion-icon></a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='projects__card'>
                    <div className='projects__cardimage'>
                        <img src={ripley} />
                    </div>
                    <div className='projects__cardinfo'>
                        <h1>Clon de Ripley</h1>
                        <span>SQL | Vue | Vuetify</span>
                        <ul className='projects__icons'>
                            <li>
                                <a href="https://github.com/CarolinaDCode/proyecto_ripley_vue" className="social__button social__github"><ion-icon name="logo-github"></ion-icon></a>
                            </li>
                            <li>
                                <a href="" className="social__button social__github"><ion-icon name="link-outline"></ion-icon></a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='projects__card'>
                    <div className='projects__cardimage'>
                        <img src={prueba} />
                    </div>
                    <div className='projects__cardinfo'>
                        <h1>ChatBot Telegram (Tinder)</h1>
                        <span>Java</span>
                        <ul className='projects__icons'>
                            <li>
                                <a href="https://github.com/kateincoding/Inventory_module" className="social__button social__github"><ion-icon name="logo-github"></ion-icon></a>
                            </li>
                            <li>
                                <a href="https://carogeminislina.wixsite.com/inventarioti" className="social__button social__github"><ion-icon name="link-outline"></ion-icon></a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='projects__card'>
                    <div className='projects__cardimage'>
                        <img src={prueba} />
                    </div>
                    <div className='projects__cardinfo'>
                        <h1>New Proyect</h1>
                        <span>Next | React | Emotion</span>
                        <ul className='projects__icons'>
                            <li>
                                <a href="https://github.com/kateincoding/Inventory_module" className="social__button social__github"><ion-icon name="logo-github"></ion-icon></a>
                            </li>
                            <li>
                                <a href="https://carogeminislina.wixsite.com/inventarioti" className="social__button social__github"><ion-icon name="link-outline"></ion-icon></a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='projects__card'>
                    <div className='projects__cardimage'>
                        <img src={prueba} />
                    </div>
                    <div className='projects__cardinfo'>
                        <h1>New Proyect</h1>
                        <span>Next | React | Emotion</span>
                        <ul className='projects__icons'>
                            <li>
                                <a href="https://github.com/kateincoding/Inventory_module" className="social__button social__github"><ion-icon name="logo-github"></ion-icon></a>
                            </li>
                            <li>
                                <a href="https://carogeminislina.wixsite.com/inventarioti" className="social__button social__github"><ion-icon name="link-outline"></ion-icon></a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='projects__card'>
                    <div className='projects__cardimage'>
                        <img src={prueba} />
                    </div>
                    <div className='projects__cardinfo'>
                        <h1>New Proyect</h1>
                        <span>Next | React | Emotion</span>
                        <ul className='projects__icons'>
                            <li>
                                <a href="https://github.com/kateincoding/Inventory_module" className="social__button social__github"><ion-icon name="logo-github"></ion-icon></a>
                            </li>
                            <li>
                                <a href="https://carogeminislina.wixsite.com/inventarioti" className="social__button social__github"><ion-icon name="link-outline"></ion-icon></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;