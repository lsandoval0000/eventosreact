import React, { Component } from 'react';

class Formulario extends Component {

    constructor(props){
        super(props);
        this.nombreLibroRef = React.createRef();
    }

    buscarLibro = (e)=>{
        e.preventDefault();
        const datosBusqueda = {
            nombre : this.nombreLibroRef.current.value
        }
        this.props.obtenerLibros(datosBusqueda);
    }

    render() {
        return (
            <form onSubmit={this.buscarLibro}>
                <fieldset className="uk-fieldset uk-margin">
                    <legend className="uk-legend uk-text-center">
                        Ingresa el nombre del libro a buscar
                    </legend>

                    <div className="uk-column-1-2@m uk-margin">
                        <div className="uk-margin" uk-margin="true">
                            <input className="uk-input" type="text" placeholder="Keyword para la búsqueda" ref={this.nombreLibroRef}/>
                        </div>
                        <div className="uk-margin" uk-margin="true">
                            <button className="uk-button uk-button-danger">Buscar</button>
                        </div>
                    </div>
                </fieldset>
            </form>
        );
    }
}

export default Formulario;