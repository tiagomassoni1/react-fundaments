import React from "react";

export default props => {

    return(
        <div>
            <div>Filho</div>
            <button onClick={
                function (e) {
                    props.quandoClicar('Joao', 54, true)
                }
            }>Fornecer Informações no Console</button>
        </div>
    )
}