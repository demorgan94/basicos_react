import React, { Component } from 'react';
import Header from './Header';
import Productos from './Productos';
import Footer from './Footer';

class App extends Component {
   constructor(props) {
      super();
      this.state = {
         productos: []
      };
   }

   componentDidMount() {
      const productos = [
         {nombre: 'Libro', precio: 200},
         {nombre: 'Disco de Musica', precio: 120},
         {nombre: 'Iphone X', precio: 8500},
         {nombre: 'Gorra', precio: 420},
         {nombre: 'Guitarra', precio: 5000}
      ];

     setTimeout(() => {
      this.setState({
         productos: productos
      })
     }, 2000);
   }
   
   render() {
      return(
         <div className="app">
            <Header titulo="Tienda Virtual" />
            <Productos productos={this.state.productos} />
            <Footer />
         </div>
      );
   }
}

export default App;