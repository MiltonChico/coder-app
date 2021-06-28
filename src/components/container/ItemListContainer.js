import React from 'react'

import ItemList from '../common/ItemList'


const ItemListContainer = (props) => {
     return (
          <>
               <h1>{props.greeting}</h1>
               <ItemList />
          </>
     )
}

export default ItemListContainer