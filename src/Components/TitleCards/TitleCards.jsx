import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data.js'

const TitleCards = ({title, category}) => {

  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYTI5ZjZiZjc1YTE4MDRjZWY1NTIxMzU4MGIzZjM0OCIsIm5iZiI6MTcyNjI1Njg1NC4wNzQ2Miwic3ViIjoiNjZlNDk0YzYwMDAwMDAwMDAwYjlkMWU0Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.HmA4OFPrF83SBPaRAoyBijldi-z60AEhWTowlstvuLI'
    }
  };
  
  
  
const handleWheel =(event)=>{
  event.preventEvent();
  cardsRef.current.scrollLeft += event.deltaY;
}
useEffect(()=>{

  fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results))
    .catch(err => console.error(err));

  cardsRef.current.addEventListener('wheel', handleWheel)
}, []) 

  return (
    <div className='title-cards'>
      <h2>{title?title:"Popular on Netflix"}</h2>
  
      <div className="card_list" ref={cardsRef}>
        {apiData.map((card, index)=>{
          return <div className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
            <p>{card.original_title}</p>
          </div>
        })}
      </div>
    </div>
  )
}

export default TitleCards