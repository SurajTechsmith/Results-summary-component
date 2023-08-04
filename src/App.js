import React, { useState, useEffect } from 'react';
import "./App.css";

function App() {
  


  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('./data.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const colorsArray = [
    { name: 'Light red', hsl: 'hsl(0, 100%, 67%)' },
    { name: 'Orangey yellow', hsl: 'hsl(39, 100%, 56%)' },
    { name: 'Green teal', hsl: 'hsl(166, 100%, 37%)' },
    { name: 'Cobalt blue', hsl: 'hsl(234, 85%, 45%)' }
  ];
  const BGcolorsArray = [
    { name: 'Light red', hsl: 'hsl(0, 100%, 97%)' },
    { name: 'Orangey yellow', hsl: 'hsl(39, 100%, 96%)' },
    { name: 'Green teal', hsl: 'hsl(166, 100%, 97%)' },
    { name: 'Cobalt blue', hsl: 'hsl(234, 85%, 95%)' }
  ];
  return (
    <>
      <div className="container">
        <div className="part-1">
        <h4 style={{
    color: 'hsl(221, 100%, 96%)'
}}>Your Result</h4>

          <div className="circle">
          <h1>76</h1>
          <p>of 100</p>
          </div>
          <p>Great</p>
          <p className='para'>you have scored higher than 65% of the people who have taken these test.</p>

         
        </div>
        <div className="part-2">
      <h4>Summary</h4>
      {data.map((item, index) => (
        <div key={index} className='part-2-item' style={{ background: BGcolorsArray[index].hsl }}>
        <div className='part-im'>
          <img src={item.icon} alt={`${item.category} Icon`} />
          <p style={{ color: colorsArray[index].hsl }}> {item.category}</p>
          </div>
           <p>

            <span style={{ color: 'black' }}>{item.score}</span>/100
          </p>

        </div>
      ))}
      <button className='btn'>Continue</button>

    </div>

      </div>
    </>
  );
}

export default App;
