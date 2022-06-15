import React, {Component} from "react";
import "./Contador.css"

class Contador extends React.Component {

    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 5,
    }

    increment = () => {
        this.setState({
            numero: this.state.numero + this.state.passo,
        })
    }

    decrement = () => {
        this.setState({
            numero: this.state.numero - this.state.passo,
        })
    }

    setPasso = (e) => {
        this.setState({
            passo: +e.target.value,
        });
    };

    render() {
        return (
            <div className="contador">
                <h2>Contador</h2>
                <p>Valor Inicial: {this.state.numero}</p>
                <div>
                    <label htmlFor="passoInput">Passo:</label>
                    <input id="passoInput" type="number" value={this.state.passo} onChange={this.setPasso}></input>
                </div>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
            </div>
        )
    }
}

export default Contador;