import React, { Fragment, useState, useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContex';


const NuevoProyecto = () => {

    // Obtener el state del formulario
    const proyectosContext = useContext(proyectoContext);
    const { formulario, errorformulario, mostrarFormulario, agregarProyecto, mostrarError } = proyectosContext;

    // state para proyecto
    const [proyecto, guardarProyecto] = useState({
        nombre: ''
    });

    const onChageProyecto = e =>{
        guardarProyecto({
            ...proyecto,
            [e.target.name] : e.target.value
        });
    }

    // Extraer nombre de proyecto
    const { nombre } = proyecto;

    //cuando el usario envia un proyecto
    const onSubmitProyecto = e =>{
        e.preventDefault();

        // Validar proyecto
        if(nombre === ''){
            mostrarError();
            return;
        }
        // Agragar state
        agregarProyecto(proyecto);

        // Reinicar el form
        guardarProyecto({
            nombre: ''
        });
        
    }

    return ( 
        <Fragment>
            <button
            type="button"
            className="btn btn-block btn-primario"
            onClick={() => mostrarFormulario()}
            >Nuevo Proyecto</button>

           {  formulario  ? 
               (
                <form
                className="formulario-nuevo-proyecto"
                onSubmit={onSubmitProyecto}
                >
                    <input 
                    type="text"
                    className="input-text"
                     placeholder="Nombre Proyecto"
                     name="nombre"
                     onChange={onChageProyecto}
                     value={nombre}
                    />
    
                    <input 
                    type="submit"
                    className="btn btn-primario btn-block"
                    value="Agregar Proyecto"
                    />
    
                </form>
               )

               : null }

               { errorformulario ? <p className="mensaje error">El nombre del poryecto es obligatorio</p> : null }
        </Fragment>
     );
}
 
export default NuevoProyecto;