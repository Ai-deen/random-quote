import React, { useState } from 'react';
import './App.css';
import JsonData from './quotes.json';

function App() {
  const colors = ['#7469B6', '#B06161', '#2F4F4F', '#F9B572', '#FF8080', '#C6A969', '#3A98B9', '#2F4F4F', '#008080','#A9907E'];

  const [quoteData, setQuoteData] = useState(getRandomQuote());

  const initialRandomColor = colors[Math.floor(Math.random() * colors.length)];
  document.documentElement.style.setProperty('--background-color', initialRandomColor);

  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random()* JsonData.length);
    return JsonData[randomIndex];
  }
  
  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random()* colors.length);
    const newColor = colors[randomIndex];
    document.documentElement.style.setProperty('--background-color',newColor);
  };

  const handleNewQuote = () => {
    const newQuote = getRandomQuote();
    setQuoteData(newQuote);
    getRandomColor();
  };

  return (
    <div className="background">
      <div id="quote-box" className="quote-box" style={{ height: `${quoteData.quote.length < 15 ? '15rem' : '17rem'}` }}>
        <p id="text" className="text">{quoteData.quote}</p>
        <p id="author" className="author">- {quoteData.author}</p>
        <div className='card'>
          <a id="tweet-quote" className='tweet-quote' href='https://twitter.com/intent/tweet?text=Your%20quote%20here'><img
              src="/twitter.svg"
              alt="Twitter Icon"
              width="24"
              height="24"
            /></a>
          <button id="new-quote" className='new-quote' onClick={handleNewQuote}>New Quote</button>
        </div>
      </div>
      <div>
        <p className='me'>- Tallapaka Lahari Sreeja</p>
      </div>
    </div>
  );
}

export default App;
