import React, {useState} from 'react';

const ItemCount  = ({stock, initial}) => {

     const [ value, setValue ] = useState( initial ); // []

     const onAdd = () => {
          if (value >= 5 ){
               alert('Superaste el stock de ' + stock)
          } else {
          setValue ( value + 1)
          }
     }

     const onRest = () => {
          if ( value <= 0){
               alert ('No podes seleccionar menor cantidad')
          } else {
          setValue ( value -1 )
          }
     }

     const addToCart = () => {
          alert('Agregado ' + value + ' al carrito ')
     }

     return (
          <>
               <h1>Carrito</h1>
               <p>{value}</p>
               <button onClick={ onRest }>-1</button>
               <button onClick={ addToCart }>Agregar al Carrito</button>
               <button onClick={ onAdd }>+1</button>
          </>
     );
}



export default ItemCount;