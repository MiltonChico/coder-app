import React, {useState} from 'react';

const ItemCount  = ({ value }) => {

     const [ counter, setCounter ] = useState( value ); // []

     const handleAdd = () => {
          setCounter ( counter + 1)
     }

     const handleReset = () => {
          setCounter ( value )
     }

     const handleRest = () => {
          setCounter (counter - 1)
     }
     return (
          <>
               <h1>Carrito</h1>
               <p>{counter}</p>
               <button onClick={ handleRest }>-1</button>
               <button onClick={ handleReset }>Reset</button>
               <button onClick={ handleAdd }>+1</button>
          </>
     );
}



export default ItemCount;