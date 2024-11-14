import mainSkills from '../assets/habilidadesPrincipales.svg';
import secondarySkills from '../assets/habilidadesSecundarias.svg';
import js from '../assets/icon_lenguages/js_color.webp';
import react from '../assets/icon_lenguages/react_color.webp';
import git from '../assets/icon_lenguages/git_color.webp';
import emotion from '../assets/icon_lenguages/emotion_color.webp';
import nodejs from '../assets/icon_lenguages/nodejs_color.webp';
import github from '../assets/icon_lenguages/github_color.webp';
import mongo from '../assets/icon_lenguages/mongo_color.webp';
import php from '../assets/icon_lenguages/php_color.webp';
import postman from '../assets/icon_lenguages/postman_color.webp';

import python from '../assets/icon_lenguages/python_color.webp';
import sql from '../assets/icon_lenguages/sql_sever_color.webp';
import mysql from '../assets/icon_lenguages/mysql_color.webp';
import css from '../assets/icon_lenguages/css_color.webp';
import bootstrap from '../assets/icon_lenguages/bootstrap_color.webp';
import materialui from '../assets/icon_lenguages/materialui_color.webp';
import vuejs from '../assets/icon_lenguages/vuejs-color.webp';
import vuetify from '../assets/icon_lenguages/vuetify-color.webp';

import illustrator from '../assets/icon_lenguages/ai_color.webp';
import photoshop from '../assets/icon_lenguages/ps_color.webp';
import afterEffects from '../assets/icon_lenguages/ae_color.webp';
import Indesing from '../assets/icon_lenguages/id_color.webp';
import figma from '../assets/icon_lenguages/figma_color.webp';

import windows from '../assets/icon_lenguages/windows_color.webp';
import linux from '../assets/icon_lenguages/linux_color.webp';
import macos from '../assets/icon_lenguages/macos_color.webp';

const Skills = () => {
    return (
        <div id='skills' className='skills'>
            <div className='skills__left'>
                <div className="skills__spacemenu">
                </div>
                <div className='skills__title'>
                    <img src={mainSkills} />
                    <div className='skills__top skills__top--left '>
                        <h1>TECNOLOGIAS</h1>
                        <div className='skills__block skills__block--lefttop'>
                            <div className='skills__element'>
                                <img src={js} />
                                <span>JavaScript</span>
                            </div>
                            <div className='skills__element'>
                                <img src={react} />
                                <span>React Js</span>
                            </div>
                            <div className='skills__element'>
                                <img src={git} />
                                <span>Git</span>
                            </div>
                            <div className='skills__element'>
                                <img src={emotion} />
                                <span>Emotion</span>
                            </div>
                            <div className='skills__element skills__element--sizenode'>
                                <img src={nodejs} />
                                <span>Node Js</span>
                            </div>
                            <div className='skills__element'>
                                <img src={github} />
                                <span>Github</span>
                            </div>
                            <div className='skills__element skills__element--sizemongo'>
                                <img src={mongo} />
                                <span>Mongo DB</span>
                            </div>
                            <div className='skills__element skills__element--sizephp'>
                                <img src={php} />
                                <span>PHP</span>
                            </div>
                            <div className='skills__element'>
                                <img src={postman} />
                                <span>Postman</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='skills__bottom skills__bottom--design'>
                    <h1>DISEÑO</h1>
                    <div className='skills__block skills__block--leftbottom'>
                        <div className='skills__element'>
                            <img src={illustrator} />
                            <span>Illustrator</span>
                        </div>
                        <div className='skills__element'>
                            <img src={photoshop} />
                            <span>Photoshop</span>
                        </div>
                        <div className='skills__element'>
                            <img src={afterEffects} />
                            <span>After Effects</span>
                        </div>
                        <div className='skills__element'>
                            <img src={Indesing} />
                            <span>Indesing</span>
                        </div>
                        <div className='skills__element'>
                            <img src={figma} />
                            <span>Figma</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='skills__right'>
                <div className='skills__title'>
                    <div className="skills__spacemenu">
                    </div>
                    <img src={secondarySkills} />
                    <div className='skills__top skills__top--right'>
                        <h1>TECNOLOGIAS</h1>
                        <div className='skills__block skills__block--righttop'>
                            <div className='skills__element'>
                                <img src={python} />
                                <span>Python</span>
                            </div>
                            <div className='skills__element'>
                                <img src={sql} />
                                <span>Sql Server</span>
                            </div>
                            <div className='skills__element'>
                                <img src={mysql} />
                                <span>MySQL</span>
                            </div>
                            <div className='skills__element'>
                                <img src={css} />
                                <span>CSS</span>
                            </div>
                            <div className='skills__element'>
                                <img src={bootstrap} />
                                <span>Bootstrap</span>
                            </div>
                            <div className='skills__element'>
                                <img src={materialui} />
                                <span>Material UI</span>
                            </div>
                            <div className='skills__element'>
                                <img src={vuejs} />
                                <span>Vue Js</span>
                            </div>
                            <div className='skills__element'>
                                <img src={vuetify} />
                                <span>Vuetify</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='skills__bottom skills__bottom--opsy'>
                    <h1>SISTEMAS OPERATIVOS</h1>
                    <div className='skills__block skills__block--rightbottom'>
                        <div className='skills__element skills__element--sizedesign'>
                            <img src={windows} />
                            <span>Windows</span>
                        </div>
                        <div className='skills__element skills__element--sizedesign'>
                            <img src={linux} />
                            <span>Linux</span>
                        </div>
                        <div className='skills__element skills__element--sizedesign'>
                            <img src={macos} />
                            <span>MacOS</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;