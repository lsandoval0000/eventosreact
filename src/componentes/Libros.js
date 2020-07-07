import React, { Component } from 'react';
import Libro from './Libro';

class Libros extends Component {
    render() {
        return (
            <div className="uk-child-width-1-4@m" uk-grid="true">
                {Object.keys(this.props.libros).map(key =>(
                    <Libro
                        key = {key}
                        info = {this.props.libros[key]}
                    />
                ))}
            </div>
        );
    }
}

export default Libros;