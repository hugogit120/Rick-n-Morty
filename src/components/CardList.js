import React from 'react'
import Card from './Card'

function CardList({characters, handleDelete}) {
    return (
        <div>
            {
                characters.map((info, i) => {
        return (
            <Card
              handleDelete={handleDelete}
              key={i}
              id={info.id}
              name={info.name}
              status={info.status}  
            />
        )            
                })
            }
        </div>
    )
}

export default CardList

