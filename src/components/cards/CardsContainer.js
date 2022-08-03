import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function CardsContainer({value:{name,price,duration,expiry,src}}) {
  
  const navigate =useNavigate();
const handleClick =()=>{

  navigate("/cart");
}


    return (
        <div className="card-div">
          <h1 className="name">{name}</h1>
          <h2 className="price">{price}</h2>
          <h3 className="duration">{duration}</h3>
          <h4 className="expiry">{expiry}</h4>
          <button className="btn" onClick={handleClick} >
            add to cart
          </button>
    
          <img src={src} alt="img" />
        </div>
      
  );
}
