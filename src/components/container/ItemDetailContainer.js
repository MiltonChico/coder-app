import React, { useState,useEffect } from 'react'

import Item from './../common/Item'

const ItemDetailContainer = () => {

     const [ item , setItem ] = useState()

     useEffect(() => {      
          function fetchData(){
               fetch("https://mocki.io/v1/b87f427a-40b3-48d3-b5ea-26051137f98c")
                    .then((response) => response.json())
                    .then((data) => {
                         setItem(data[0])
                    })      
          }
          fetchData() 
     },[])

     return (
          <Item data={item} />
     )
}

export default ItemDetailContainer
