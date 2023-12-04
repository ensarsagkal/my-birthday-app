import React from 'react'

const List = ({data}) => {
  return (
    <div className='card'>

        {data.map(({id,name,age,image})=>(
            <div key={id}>
                <img src={image} alt="" />
                <div>
                    <h4>{name}</h4>
                    <p>{age}</p>
                </div>
            </div>
        ))}
    </div>
  )
}

export default List