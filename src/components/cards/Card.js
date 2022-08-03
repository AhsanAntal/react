import React from 'react'
import CardsContainer from './CardsContainer';
import { Data } from './Data';


export default function Card() {
  
    return Data.map((value) => {
        return (
          <>
            <CardsContainer value={value} />
          </>
        );
      });
    
    
  
}
