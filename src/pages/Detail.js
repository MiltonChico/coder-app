import React from 'react'

import { useParams } from 'react-router-dom'

const Detail = (props) => {

     const { id }  = useParams();

     return (
          <h1>Pagina de producto {id}</h1>
     )
}

export default Detail