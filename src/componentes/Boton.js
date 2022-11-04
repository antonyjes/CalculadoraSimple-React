import React from "react";
import '../styles/Boton.css';

function Boton(props){
    const esOperador = (valor) =>{
        if (isNaN(valor) && (valor !== '.') && (valor !== '=')){
            return true
        } else{
            return false
        }
    }

    return(
    <div className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}
    onClick={() => props.manejarClick(props.children)}>
        {props.children}
    </div>
    );
}

export default Boton;