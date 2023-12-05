import React from 'react'

const List = ({people}) => {
  return (
    <div className='card'>

        {people.map(({id,name,age,image})=>(
            <div key={id} className='person'>
                <img src={image} alt={name} />
                <div className='title'>
                    <h4>{name}</h4>
                    <p>{age}</p>
                </div>
            </div>
        ))}
    </div>
  )
}

export default List