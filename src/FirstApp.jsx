import { useState } from "react";
import PropTypes from 'prop-types'

export const FirstApp = ({valor, titulo}) => {

    const [inicio, setInicio] = useState(valor);

    const saludar = () => {
        setInicio(valor);
        setInicio(inicio + ' Boton1');
    };

    const saludar2 = () => {
        limpiar();
        setInicio(inicio + ' Boton2');
    };

    const limpiar = () => { setInicio(valor) };

  return (
    <>
        <h1>{titulo}</h1>
        <h3>quiero que al presionar cada boton, aparezca el mensaje Hola Boton1 o Hola Boton2</h3>
        <h2>{inicio}</h2>
        <button onClick={saludar}>Boton1</button>
        <button onClick={saludar2}>Boton2</button>
        <button onClick={limpiar}>limpiar</button>
    </>
  )
};

FirstApp.propTypes = {
    valor: PropTypes.string.isRequired,
    titulo: PropTypes.string.isRequired
}