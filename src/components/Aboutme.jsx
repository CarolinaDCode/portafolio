
const Aboutme = () => {
    return (
        <div id='aboutme' className="aboutme">
            <div className="aboutme__spacemenu">
            </div>
            <div className="aboutme__title">
                {/* <img src={title} /> */}
                <span>Disfruto creando 
                      experiencias digitales,
                      accesibles, atractivas
                      y funcionales. 😊</span>
                <div className="aboutme__space">
                </div>
            </div>
            <div className="aboutme__review">
                <div className="aboutme__paragraphs">
                    <ol>
                        <li className="aboutme__block">
                            <div className="aboutme__date">
                                <p>Septiembre - 2024</p>
                            </div>
                            <div className="aboutme__positionCompany">
                                <h3>Desarrollador Web · GRUPO RPP S.A.C.</h3>
                                <p>
                                    <ul>
                                        <li>● Consumo de APIs, implementación de nuevas funcionalidades en los ambientes de desarrollo y preproducción para posteriormente realizar su despliegue a producción.</li>
                                        <li>● SEO: modificaciónes realizadas en el código fuente (backend) e implementación de schemas (datos estructurados) para que los motores de búsqueda puedan comprender el contenido de las páginas y asi mejorar el posicionamiento de los sitios.</li>
                                        <li>● Maquetación e implementación de nuevos módulos para las sitios musicales y otros sitios.</li>
                                        <li>● Migración de versión del framework Phalcon de php utilizado en los sitios musicales.</li>
                                        <li>● Transformación aplicaciones web a aplicaciones web progresivas (PWA).</li>
                                    </ul>
                                </p>
                                <ul className="aboutme__tag">
                                    <li><div>PHP</div></li>
                                    <li><div>JavaScript</div></li>
                                    <li><div>React</div></li>
                                    <li><div>Sass</div></li>
                                    <li><div>AWS</div></li>
                                </ul>
                            </div>
                        </li>
                        <li className="aboutme__block">
                            <div className="aboutme__date">
                                <p>Octubre — 2023</p>
                            </div>
                            <div className="aboutme__positionCompany">
                                <h3>Analista Programador · DEISTER SOFTWARE PERU S.A.C.</h3>
                                <p>
                                    <ul>
                                        <li>● Transcripción y refactorización de código, entre lenguajes como xsql y JavaScript. </li>
                                        <li>● Migración de Objetos, tablas, scripts entre distintas bases de datos. </li>
                                        <li>● Análisis de requerimientos,  nuevas funcionalidaes para algunos proyectos. </li>
                                        <li>● Desarrollo de un flujo de trabajo para un proyecto de transporte.</li>
                                    </ul>
                                </p>
                                <ul className="aboutme__tag">
                                    <li><div>SQL</div></li>
                                    <li><div>HTML</div></li>
                                    <li><div>JavaScript</div></li>
                                </ul>
                            </div>
                        </li>

                        <li className="aboutme__block">
                            <div className="aboutme__date">
                                <p>Diciembre — 2022</p>
                            </div>
                            <div className="aboutme__positionCompany">
                                <h3>Desarrollo de Aplicaciones · DEISTER SOFTWARE PERU S.A.C.</h3>
                                <p>
                                    <ul>
                                        <li>● Creación de apis en el ERP, pruebas con postman y consumo de APIS con Axios.</li>
                                        <li>● Gestión y modelado de datos utilizando el patrón de diseño MVC</li>
                                        <li>● Creación y maquetación de interfaces de Usuario con algunas funcionalidades. </li>
                                        <li>● Gestión de data, creación de disparadores, procedimiento almacenados para validar y aplicar reglas de negocio. </li>
                                    </ul>
                                </p>
                                <ul className="aboutme__tag">
                                    <li><div>SQL</div></li>
                                    <li><div>JavaScript</div></li>
                                    <li><div>Vue</div></li>
                                    <li><div>Vuetify</div></li>
                                </ul>
                            </div>
                        </li>

                        <li className="aboutme__block">
                            <div className="aboutme__date">
                                <p>Abril — 2022</p>
                            </div>
                            <div className="aboutme__positionCompany">
                                <h3>Front End - Trainee · SIDERPERU </h3>
                                <p>
                                    Módulo de Inventario 
                                    <ul>
                                        <li>
                                        Descripción: Desarrollo del módulo de un Portal de TI, para la gestión del suministro de equipos que se le designa a cada empleado.
                                        </li>
                                        <li>Funciones:</li>
                                        <li>
                                            <ul>
                                                <li>● Análisis de requerimientos, creación de mockups en baja fidelidad de cada pantalla.</li>
                                                <li>● Maquetación y desarrollo de funcionalidades.</li>
                                                <li>● Scrum, para el desarrollo de tareas, creación de épicas, historias y tareas,utilizamos planning poker, para definir el orden de cada tarea según su dificultad.</li>
                                                <li>● Base de Datos: SQL Server</li>
                                                <li>● Base de Datos: SQL Server</li>
                                                <li>● Front end: HTML, CSS (Material UI), JS (React).</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </p>
                                <ul className="aboutme__tag">
                                    <li><div>React</div></li>
                                    <li><div>Figma</div></li>
                                    <li><div>SQL Server</div></li>
                                    <li><div>Material-UI</div></li>
                                    <li><div>Scrum</div></li>
                                </ul>
                            </div>
                        </li>

                    </ol>
                </div>
                {/* <div className="aboutme__photo">
                    <img src={photo}/>
                </div> */}
            </div>
        </div>
    );
}

export default Aboutme;