import React, { useState, useEffect } from 'react'

import CardItem from '../common/CardItem'


const ItemListContainer = () => {

     const [ item , setItem ] = useState()

     useEffect(() => {      
          function fetchData(){
               fetch("https://mocki.io/v1/b87f427a-40b3-48d3-b5ea-26051137f98c")
                    .then((response) => response.json())
                    .then((data) => {
                         setItem(data)
                    })      
          }
          fetchData() 
     },[])

     return (
          <>
               <CardItem data={item}/>
          </>
     )
}

export default ItemListContainer