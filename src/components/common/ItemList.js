import React from 'react'

import Item from './Item'

const ItemList = () =>{

     const items = [
          {
               id:1,
               nombre:'Tijeras',
               descripcion:'Tijeras muy buenas!'
          },
          {
               id:2,
               nombre:'Balde',
               descripcion:'Balde que se llena de agua!'
          },
          {
               id:3,
               nombre:'PlayStation',
               descripcion:'Playstation nueva para Jugar!'
          }
     ]

     return (
          <Item data={items}/>
     )
}

export default ItemList