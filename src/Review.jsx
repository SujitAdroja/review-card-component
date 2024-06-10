import React,{ useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

import people from "./data.js"

export default function Review(){
    const [index,setIndex]=useState(1);
    const {id,image,name,job,text}=people[index];
    const checkNumber= (number)=>{
      if(number>people.length-1){
        return 0;
      }
      if(number<0){
        return people.length-1;
      }
      return number;
    }
    const prevPerson=()=>{
        setIndex((prevIndex)=>{
          let newIndex = index - 1;
          return checkNumber(newIndex);
        })
    }
    const nextPerson=()=>{
          setIndex((prevIndex)=>{
            let newIndex = index + 1;
            return checkNumber(newIndex);
          })
    }
    const randomPerson=()=>{
        let randomNo=Math.floor((Math.random() * people.length) + 1);
        if(randomNo===index){
          randomNo=randomNo+1;

        }
        setIndex(checkNumber(randomNo));
    }

    return (
        <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn' onClick={randomPerson}>
        surprise me
      </button>
    </article>
    )
}