import React from 'react'

const Item = ({ data }) => {
     
     if(!data) return <h1>Loading</h1>
     
     return (
          <div>
               <h1>{data.title}</h1>
               <h2>{data.price}</h2>
          </div>
     )
}

export default Item