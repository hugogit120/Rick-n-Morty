import React from 'react';


const Card = ({name, status, id, handleDelete}) => {
    return (
        <div className='bg-light-green dib br3 pa3 ma2 '>
            <img alt='stuff' key={id} src={`https://rickandmortyapi.com/api/character/avatar/${id}.jpeg?200x200`} />
            <h2>{name}</h2>
            <p>{status}</p>
            <button onClick={() => handleDelete(id)}>Delete</button>
        </div>
    )
}

export default Card;

//grow