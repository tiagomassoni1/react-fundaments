import React from "react";
import IndiretaFilho from "./IndiretaFilho";

export default props => {

    function fornecerInformacoes(nome, idade, bool) {
        console.log(nome, idade, bool)
    }

    return(
        <div>
            <div>Pai</div>
            <IndiretaFilho quandoClicar={fornecerInformacoes} />
        </div>
    )
}