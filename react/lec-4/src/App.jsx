import React, { useState } from 'react';
import data from './data';
import Tour from './components/Tour';
import './App.css';

function App() {
  const [tours, setTours] = useState(data);


  function BtnHandler(id) {

    const newTours = tours.filter(tour => tour.id !== id) ;

    setTours(newTours) ;
  }

  return (
    <div>
      <Tour tours={tours} BtnHandler={BtnHandler}/>
    </div>
  );
}

export default App;
