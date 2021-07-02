import React from 'react' 

const Item = (props) => {

     const { data } = props
     console.log(data)

     return (
          <>
          { data.map(item => (
               <div>
                    <h1>{item.title}</h1>
                    <p>{item.price}</p>
                    <img alt='test' src={item.pictureUrl} />
               </div>
                       
           ))
          }
      </>
     )
}

export default Item 