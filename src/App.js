import React, {useEffect, useState} from 'react';
import './App.css';
import people from './data';
import {AiFillLeftSquare, AiFillRightSquare} from 'react-icons/ai';
import { FaQuoteRight } from 'react-icons/fa';
import { Button } from 'reactstrap';

function App() {
  const [index, setIndex] = useState(0);
  const [sliderData, setSliderData] = useState(people[index]);

  const checkNumber = (number)=> 
  {
    if(number < 0)
    {
      return people.length-1;
    }
    if(number > people.length -1 )
    {
      return 0;
    }

    return number;
  }
  const prevPerson = () => 
  {
    setIndex((index)=> {
      let newIndex = checkNumber(index - 1);
      setSliderData(people[newIndex]);
      return checkNumber(newIndex);
    });

  }

  useEffect(()=> 
  {
    setInterval(()=>{
      setIndex(index+1);
    }, 3000);
  }, [index]);


  const nextPerson = () => 
  {
    setIndex((index)=> {
      let newIndex = checkNumber(index + 1);
      setSliderData(people[newIndex]);
      return checkNumber(newIndex);
    });
  }
  return (
    <div className="App">
        <h1 className='text-center mt-5 p-5'>/ Reviews</h1>
        <div className='main-container'>
          {
              <div className='sub-container'>
                    <div><Button onClick={()=>prevPerson()}><AiFillLeftSquare /></Button></div>
                    <div><img src={sliderData.image} alt="image" className='slider-image' width="100" height="100" /></div>
                    <div><h5 className='text-uppercase'> {sliderData.name}</h5></div>
                    <div><h6 className='text-capitalize'> {sliderData.title}</h6></div>
                    <div><p>{sliderData.quote}</p></div>
                  <div><Button onClick={()=>nextPerson()}><AiFillRightSquare /></Button></div>
                  <div><FaQuoteRight /></div>
              </div>
            
           }
        </div>
    </div>
  );
}

export default App;
