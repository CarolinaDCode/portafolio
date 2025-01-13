import js from '../assets/icon_lenguages/js_grises.webp';
import react from '../assets/icon_lenguages/react_gris.webp';
import git from '../assets/icon_lenguages/git_gris.webp';
import github from '../assets/icon_lenguages/github_gris.webp';
import mongo from '../assets/icon_lenguages/mongodb_gris.webp';
import php from '../assets/icon_lenguages/php_gris.webp';
import postman from '../assets/icon_lenguages/postman_gris.webp';

import python from '../assets/icon_lenguages/python_gris.webp';
import sql from '../assets/icon_lenguages/sql_sever_gris.webp';
import mysql from '../assets/icon_lenguages/mysql_gris.webp';
import css from '../assets/icon_lenguages/css_gris.webp';
import materialui from '../assets/icon_lenguages/materialui_gris.webp';
import vuejs from '../assets/icon_lenguages/vuejs_gris.webp';
import vuetify from '../assets/icon_lenguages/vuetify_gris.webp';

import illustrator from '../assets/icon_lenguages/ai_gris.webp';
import photoshop from '../assets/icon_lenguages/ps_gris.webp';
import typeScript from '../assets/icon_lenguages/ts_gris.webp';
import figma from '../assets/icon_lenguages/figma_gris.webp';

import html from '../assets/icon_lenguages/html_gris.webp';
import sass from '../assets/icon_lenguages/sass_gris.webp';
import java from '../assets/icon_lenguages/java_gris.webp';
import docker from '../assets/icon_lenguages/docker_gris.webp';
import balsamiq from '../assets/icon_lenguages/balsamiq_gris.webp';

import { useThemeContext } from '../context/ThemeContext';

const Skills = () => {
    const {contextTheme} = useThemeContext();

    return (
        <div id='skills' className='skills'>
            <div className="skills__space"></div>
            <span>Tecnologías de Desarrollo ⚙️</span>
            <div className='skills__webDeveloper'>
                <h3>Desarrollo Web</h3>
                <div className='skills__webItems'>
                    <div className='skills__bloque'>
                        <div className='skills__bloque--icon'>
                            { contextTheme === 'Dark' ?
                                (<div className='skills__bloque--blur'></div> ):
                                (<div className='skills__bloque--blurDark'></div>)
                            }
                            <img className='skills__bloque--react' src={react} />
                        </div>
                        <h4>React</h4>
                        <span>Intermedio</span>
                        <div className='skills__grade'>
                            <div className='skills__grade--background'></div>
                            <div className='skills__grade--porcent' style={{ width: '70%' }}></div>
                        </div>
                    </div>

                    <div className='skills__bloque'>
                        <div className='skills__bloque--icon'>
                            { contextTheme === 'Dark' ?
                                (<div className='skills__bloque--blur'></div> ):
                                (<div className='skills__bloque--blurDark'></div>)
                            }
                            <img className='skills__bloque--vue' src={vuejs} />
                        </div>
                        <h4>Vue</h4>
                        <span>Intermedio</span>
                        <div className='skills__grade'>
                            <div className='skills__grade--background'></div>
                            <div className='skills__grade--porcent' style={{ width: '40%' }}></div>
                        </div>
                    </div>

                    <div className='skills__bloque'>
                        <div className='skills__bloque--icon'>
                            { contextTheme === 'Dark' ?
                                (<div className='skills__bloque--blur'></div> ):
                                (<div className='skills__bloque--blurDark'></div>)
                            }
                            <img className='skills__bloque--javaScript' src={js} />
                        </div>
                        <h4>JavaScript</h4>
                        <span>Intermedio</span>
                        <div className='skills__grade'>
                            <div className='skills__grade--background'></div>
                            <div className='skills__grade--porcent' style={{ width: '60%' }}></div>
                        </div>
                    </div>

                    <div className='skills__bloque'>
                        <div className='skills__bloque--icon'>
                            { contextTheme === 'Dark' ?
                                (<div className='skills__bloque--blur'></div> ):
                                (<div className='skills__bloque--blurDark'></div>)
                            }
                            <img className='skills__bloque--typeScript' src={typeScript} />
                        </div>
                        <h4>TypeScript</h4>
                        <span>Principiante</span>
                        <div className='skills__grade'>
                            <div className='skills__grade--background'></div>
                            <div className='skills__grade--porcent' style={{ width: '15%' }}></div>
                        </div>
                    </div>

                    <div className='skills__bloque'>
                        <div className='skills__bloque--icon'>
                            { contextTheme === 'Dark' ?
                                (<div className='skills__bloque--blur'></div> ):
                                (<div className='skills__bloque--blurDark'></div>)
                            }
                            <img className='skills__bloque--html' src={html} />
                        </div>
                        <h4>HTML</h4>
                        <span>avanzado</span>
                        <div className='skills__grade'>
                            <div className='skills__grade--background'></div>
                            <div className='skills__grade--porcent' style={{ width: '80%' }}></div>
                        </div>
                    </div>

                    <div className='skills__bloque'>
                        <div className='skills__bloque--icon'>
                            { contextTheme === 'Dark' ?
                                (<div className='skills__bloque--blur'></div> ):
                                (<div className='skills__bloque--blurDark'></div>)
                            }
                            <img className='skills__bloque--css' src={css} />
                        </div>
                        <h4>CSS</h4>
                        <span>avanzado</span>
                        <div className='skills__grade'>
                            <div className='skills__grade--background'></div>
                            <div className='skills__grade--porcent' style={{ width: '80%' }}></div>
                        </div>
                    </div>

                    <div className='skills__bloque'>
                        <div className='skills__bloque--icon'>
                            { contextTheme === 'Dark' ?
                                (<div className='skills__bloque--blur'></div> ):
                                (<div className='skills__bloque--blurDark'></div>)
                            }
                            <img className='skills__bloque--sass' src={sass} />
                        </div>
                        <h4>SASS</h4>
                        <span>Intermedio</span>
                        <div className='skills__grade'>
                            <div className='skills__grade--background'></div>
                            <div className='skills__grade--porcent' style={{ width: '50%' }}></div>
                        </div>
                    </div>

                    <div className='skills__bloque'>
                        <div className='skills__bloque--icon'>
                            { contextTheme === 'Dark' ?
                                (<div className='skills__bloque--blur'></div> ):
                                (<div className='skills__bloque--blurDark'></div>)
                            }
                            <img className='skills__bloque--vuetify' src={vuetify} />
                        </div>
                        <h4>Vuetify</h4>
                        <span>basico</span>
                        <div className='skills__grade'>
                            <div className='skills__grade--background'></div>
                            <div className='skills__grade--porcent' style={{ width: '20%' }}></div>
                        </div>
                    </div>

                    <div className='skills__bloque'>
                        <div className='skills__bloque--icon'>
                            { contextTheme === 'Dark' ?
                                (<div className='skills__bloque--blur'></div> ):
                                (<div className='skills__bloque--blurDark'></div>)
                            }
                            <img className='skills__bloque--materialui' src={materialui} />
                        </div>
                        <h4>Material UI</h4>
                        <span>basico</span>
                        <div className='skills__grade'>
                            <div className='skills__grade--background'></div>
                            <div className='skills__grade--porcent' style={{ width: '20%' }}></div>
                        </div>
                    </div>

                </div>

                <h3>Backend</h3>
                <div className='skills__webItems'>
                    <div className='skills__bloque'>
                        <div className='skills__bloque--icon'>
                            { contextTheme === 'Dark' ?
                                (<div className='skills__bloque--blur'></div> ):
                                (<div className='skills__bloque--blurDark'></div>)
                            }
                            <img className='skills__bloque--php' src={php} />
                        </div>
                        <h4>PHP</h4>
                        <span>básico</span>
                        <div className='skills__grade'>
                            <div className='skills__grade--background'></div>
                            <div className='skills__grade--porcent' style={{ width: '30%' }}></div>
                        </div>
                    </div>

                    <div className='skills__bloque'>
                        <div className='skills__bloque--icon'>
                            { contextTheme === 'Dark' ?
                                (<div className='skills__bloque--blur'></div> ):
                                (<div className='skills__bloque--blurDark'></div>)
                            }
                            <img className='skills__bloque--python' src={python} />
                        </div>
                        <h4>Python</h4>
                        <span>Básico</span>
                        <div className='skills__grade'>
                            <div className='skills__grade--background'></div>
                            <div className='skills__grade--porcent' style={{ width: '30%' }}></div>
                        </div>
                    </div>

                    <div className='skills__bloque'>
                        <div className='skills__bloque--icon'>
                            { contextTheme === 'Dark' ?
                                (<div className='skills__bloque--blur'></div> ):
                                (<div className='skills__bloque--blurDark'></div>)
                            }
                            <img className='skills__bloque--java' src={java} />
                        </div>
                        <h4>Java</h4>
                        <span>Principiante</span>
                        <div className='skills__grade'>
                            <div className='skills__grade--background'></div>
                            <div className='skills__grade--porcent' style={{ width: '15%' }}></div>
                        </div>
                    </div>

                    <div className='skills__bloque'>
                        <div className='skills__bloque--icon'>
                            { contextTheme === 'Dark' ?
                                (<div className='skills__bloque--blur'></div> ):
                                (<div className='skills__bloque--blurDark'></div>)
                            }
                            <img className='skills__bloque--sql' src={sql} />
                        </div>
                        <h4>SQL Server</h4>
                        <span>Básico</span>
                        <div className='skills__grade'>
                            <div className='skills__grade--background'></div>
                            <div className='skills__grade--porcent' style={{ width: '25%' }}></div>
                        </div>
                    </div>

                    <div className='skills__bloque'>
                        <div className='skills__bloque--icon'>
                            { contextTheme === 'Dark' ?
                                (<div className='skills__bloque--blur'></div> ):
                                (<div className='skills__bloque--blurDark'></div>)
                            }
                            <img className='skills__bloque--mysql' src={mysql} />
                        </div>
                        <h4>MySQL</h4>
                        <span>Básico</span>
                        <div className='skills__grade'>
                            <div className='skills__grade--background'></div>
                            <div className='skills__grade--porcent' style={{ width: '25%' }}></div>
                        </div>
                    </div>

                    <div className='skills__bloque'>
                        <div className='skills__bloque--icon'>
                            { contextTheme === 'Dark' ?
                                (<div className='skills__bloque--blur'></div> ):
                                (<div className='skills__bloque--blurDark'></div>)
                            }
                            <img className='skills__bloque--mongoDB' src={mongo} />
                        </div>
                        <h4>MongoDB</h4>
                        <span>Básico</span>
                        <div className='skills__grade'>
                            <div className='skills__grade--background'></div>
                            <div className='skills__grade--porcent' style={{ width: '25%' }}></div>
                        </div>
                    </div>

                    <div className='skills__bloque'>
                        <div className='skills__bloque--icon'>
                            { contextTheme === 'Dark' ?
                                (<div className='skills__bloque--blur'></div> ):
                                (<div className='skills__bloque--blurDark'></div>)
                            }
                            <img className='skills__bloque--postman' src={postman} />
                        </div>
                        <h4>Postman</h4>
                        <span>Intermedio</span>
                        <div className='skills__grade'>
                            <div className='skills__grade--background'></div>
                            <div className='skills__grade--porcent' style={{ width: '45%' }}></div>
                        </div>
                    </div>

                    <div className='skills__bloque'>
                        <div className='skills__bloque--icon'>
                            { contextTheme === 'Dark' ?
                                (<div className='skills__bloque--blur'></div> ):
                                (<div className='skills__bloque--blurDark'></div>)
                            }
                            <img className='skills__bloque--docker' src={docker} />
                        </div>
                        <h4>Docker</h4>
                        <span>Principiante</span>
                        <div className='skills__grade'>
                            <div className='skills__grade--background'></div>
                            <div className='skills__grade--porcent' style={{ width: '10%' }}></div>
                        </div>
                    </div>
                </div>

                <h3>UX/UI Design</h3>
                <div className='skills__webItems'>
                    <div className='skills__bloque'>
                        <div className='skills__bloque--icon'>
                            { contextTheme === 'Dark' ?
                                (<div className='skills__bloque--blur'></div> ):
                                (<div className='skills__bloque--blurDark'></div>)
                            }
                            <img className='skills__bloque--figma' src={figma} />
                        </div>
                        <h4>Figma</h4>
                        <span>Intermedio</span>
                        <div className='skills__grade'>
                            <div className='skills__grade--background'></div>
                            <div className='skills__grade--porcent' style={{ width: '70%' }}></div>
                        </div>
                    </div>

                    <div className='skills__bloque'>
                        <div className='skills__bloque--icon'>
                            { contextTheme === 'Dark' ?
                                (<div className='skills__bloque--blur'></div> ):
                                (<div className='skills__bloque--blurDark'></div>)
                            }
                            <img className='skills__bloque--photoshop' src={photoshop} />
                        </div>
                        <h4>Photoshop</h4>
                        <span>Intermedio</span>
                        <div className='skills__grade'>
                            <div className='skills__grade--background'></div>
                            <div className='skills__grade--porcent' style={{ width: '70%' }}></div>
                        </div>
                    </div>

                    <div className='skills__bloque'>
                        <div className='skills__bloque--icon'>
                            { contextTheme === 'Dark' ?
                                (<div className='skills__bloque--blur'></div> ):
                                (<div className='skills__bloque--blurDark'></div>)
                            }
                            <img className='skills__bloque--illustrator' src={illustrator} />
                        </div>
                        <h4>Illustrator</h4>
                        <span>Avanzado</span>
                        <div className='skills__grade'>
                            <div className='skills__grade--background'></div>
                            <div className='skills__grade--porcent' style={{ width: '90%' }}></div>
                        </div>
                    </div>

                    <div className='skills__bloque'>
                        <div className='skills__bloque--icon'>
                            { contextTheme === 'Dark' ?
                                (<div className='skills__bloque--blur'></div> ):
                                (<div className='skills__bloque--blurDark'></div>)
                            }
                            <img className='skills__bloque--balsamiq' src={balsamiq} />
                        </div>
                        <h4>Balsamiq</h4>
                        <span>Principiante</span>
                        <div className='skills__grade'>
                            <div className='skills__grade--background'></div>
                            <div className='skills__grade--porcent' style={{ width: '10%' }}></div>
                        </div>
                    </div>
                </div>
        
                <h3>Sistemas de Version</h3>
                <div className='skills__webItems'>
                    <div className='skills__bloque'>
                        <div className='skills__bloque--icon'>
                            { contextTheme === 'Dark' ?
                                (<div className='skills__bloque--blur'></div> ):
                                (<div className='skills__bloque--blurDark'></div>)
                            }
                            <img className='skills__bloque--git' src={git} />
                        </div>
                        <h4>Git</h4>
                        <span>Intermedio</span>
                        <div className='skills__grade'>
                            <div className='skills__grade--background'></div>
                            <div className='skills__grade--porcent' style={{ width: '70%' }}></div>
                        </div>
                    </div>

                    <div className='skills__bloque'>
                        <div className='skills__bloque--icon'>
                            { contextTheme === 'Dark' ?
                                (<div className='skills__bloque--blur'></div> ):
                                (<div className='skills__bloque--blurDark'></div>)
                            }
                            <img className='skills__bloque--github' src={github} />
                        </div>
                        <h4>Github</h4>
                        <span>Intermedio</span>
                        <div className='skills__grade'>
                            <div className='skills__grade--background'></div>
                            <div className='skills__grade--porcent' style={{ width: '70%' }}></div>
                        </div>
                    </div>

                    {/* <div className='skills__bloque'>
                        <div className='skills__bloque--icon'>
                            <div className='skills__bloque--blur' ></div>
                            <img className='skills__bloque--vercel' src={react} />
                        </div>
                        <h4>Vercel</h4>
                        <span>Básico</span>
                        <div className='skills__grade'>
                            <div className='skills__grade--background'></div>
                            <div className='skills__grade--porcent' style={{ width: '70%' }}></div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default Skills;