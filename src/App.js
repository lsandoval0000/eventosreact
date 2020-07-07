import React, { Component } from 'react';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';
import Libros from './componentes/Libros';

class App extends Component {

  token = 'AIzaSyBIndELXce3gTwDHbktnRAw_t2ITcFAPxs_jKjdHDLFnf8';

  constructor(props){
    super(props);
    this.state = {
      libros : []
    };
  }

  obtenerLibros = async (busqueda) =>{
    let url = `https://www.googleapis.com/books/v1/volumes?q=${busqueda.nombre}&key=${this.token}`;

    await fetch(url).then(respuesta =>{
      return respuesta.json();
    }).then(libros =>{
      this.setState({
        libros : libros.items
      });
    });
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <div className="uk-container">
          <Formulario
            obtenerLibros  = {this.obtenerLibros}
          />
          <Libros
            libros = {this.state.libros}
          />
        </div>
      </div>
    );
  }
}

export default App;