import React, { Component } from 'react';
import Producto from './Producto';

class Productos extends Component {
   render() {
      return (
         <div className="container">
            <div className="row">
               <div className="col-md-12 text-center">
                  <h2>Listado de Productos</h2>
                  { Object.keys(this.props.productos).map(key => (
                     <Producto key={key} producto={this.props.productos[key]}/>
                  )) }
               </div>
            </div>
         </div>
      )
   }
}

export default Productos;