import title from '../assets/frase1.svg';
import photo from '../assets/foto_diana.webp'

const Aboutme = () => {
    return (
        <div id='aboutme' className="aboutme">
            <div className="aboutme__spacemenu">
            </div>
            <div className="aboutme__title">
                <img src={title} />
                <div className="aboutme__space">
                </div>
            </div>
            <div className="aboutme__review">
                <div className="aboutme__paragraphs">
                    <p>
                        Con 2 años de experiencia en rubro IT, estudie el programa de Foundations of Computer Science & Software engineering en la escuela de Holberton School Perú y 
                        también estudie la carrera técnica de Diseña Gráfico, actualmente estoy estudiando el curso de UX/UI Designer en Toulouse Lautrec y como deseo continuar 
                        preparándome estudiaré la carrera de Desarrollo de Software.
                    </p>
                    <p>
                        Como profesional considero que la accesibilidad de los sitios web debería ser explorada y más practicada, no solo por considerar la inclusividad de personas 
                        con habilidades distintas, si no porque en términos generales, mejora la experiencia de todos los usuarios y esta experiencia se puede traducir en mayor 
                        relevancia del propio sitio frente a la competencia en los buscadores.
                    </p>
                    <p>
                        Así también es importante conocer todos los procesos de un producto digital, es clave entender a tu audiencia y definir claramente la propuesta de valor. 
                        Crear un prototipo y utilizar metodologías agiles te harán adaptarte rápidamente y recibir retroalimentación. Priorizar la experiencia del usuario con un 
                        diseño intuitivo y realiza pruebas constantes también es parte importante del éxito de un producto.
                    </p>
                    <p>
                        En lo personal lo que más disfruto son aquellos momentos en los que me enfoco en aprender, explorar para crear y reflexionar sobré como mejorar ciertos productos.
                    </p>
                </div>
                <div className="aboutme__photo">
                    <img src={photo}/>
                </div>
            </div>
        </div>
    );
}

export default Aboutme;