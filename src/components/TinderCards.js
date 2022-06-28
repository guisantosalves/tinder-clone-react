import React, { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import "./css/TinderCards.css";
import {collection, query, orderBy, onSnapshot} from "firebase/firestore";
import {db} from "../firebase";

function TinderCards() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    
    const qu = query(collection(db, "people"))
    
    onSnapshot(qu, (results)=>{
        
        setPeople(results.docs.map((item, index)=>({
            id: item.id,
            data: item.data(),
        })))
        
    })

  }, [people]);

  return (
    <div>
      <div className="tinderCard__container">
        {people.map((item, index) => (
          <TinderCard
            className="swipe"
            key={item.id}
            preventSwipe={["up", "down"]}
          >
            <div
              className="card"
              style={{ backgroundImage: `url(${item.data.url})` }}
            >
              <h3>{item.data.nome}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
