import React from 'react'

const Item = ({data}) => {
     return (
          <div>
               <ul>
                    {data.map( item =>
                         <li key={item.id}>{item.nombre}</li>
                    )}
               </ul>
          
          </div>
     )
}

export default Item