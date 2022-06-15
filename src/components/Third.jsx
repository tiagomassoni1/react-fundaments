import React from "react";

export default (props) => {
    const {min, max} = props;
    const esc = parseInt(Math.random() * (max - min)) + min;
    return (
        <div>
            <h2>Valor aleatório</h2>
            <p><stron>Valor Mínimo:</stron> {min} </p>
            <p><stron>Valor Máximo:</stron> {max} </p>
            <p><stron>Valor Escolhido :</stron> {esc}</p>
        </div>
    )
}