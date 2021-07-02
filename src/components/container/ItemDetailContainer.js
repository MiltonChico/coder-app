import React, { useState, useEffect } from 'react'

import { useParams } from 'react-router-dom'

import Item from './../common/Item'

const ItemDetailContainer = () => {
     
     const [ producto, setProductos ] = useState([])

     const { id }  = useParams();

     useEffect(() => {      
          function fetchData(){
               fetch("https://mocki.io/v1/b87f427a-40b3-48d3-b5ea-26051137f98c")
                    .then((response) => response.json())
                    .then((data) => {
                         setProductos(data)
                    })      
          }
          fetchData() 
     },[])
     const item = producto.filter(item => item.id === +id)


     return (
          <Item data={item} />
     )
}

export default ItemDetailContainer
