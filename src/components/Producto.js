import React, { Component } from 'react';

class Producto extends Component {
   render() {
      const {nombre, precio} = this.props.producto;

      return(
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <h4>{nombre}</h4>
                  <p>Precio: ${precio}</p>
               </div>
            </div>
         </div>
      )
   }
}

export default Producto;