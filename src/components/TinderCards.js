import React, { useState } from 'react'
import TinderCard from 'react-tinder-card';
import "./css/TinderCards.css"

function TinderCards() {

  const [people, setPeople] = useState([
    {
        name: 'Marilene',
        url: 'https://this-person-does-not-exist.com/img/avatar-5083c2951d5108f0e4f23879d424df88.jpg'
    },
    {
        name: 'guizaodozap',
        url: 'https://this-person-does-not-exist.com/img/avatar-aa2e4365a9704ac4444efff4eb765e52.jpg'
    }
  ]);

  return (
    <div>
        <div className='tinderCard__container'>

            {people.map((item, index)=>(
                <TinderCard
                    className='swipe'
                    key={item.name}
                    preventSwipe={['up', 'down']}
                >
                    <div 
                        className='card' 
                        style={{backgroundImage: `url(${item.url})`}}
                    >
                        <h3>{item.name}</h3>
                    </div>
                </TinderCard>
            ))}

        </div>
    </div>
  )
}

export default TinderCards