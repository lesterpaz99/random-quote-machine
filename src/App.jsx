import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { Twitter, Instagram } from '@mui/icons-material';
import './App.css'
import axios from 'axios';

function App() {
  const [quotes, setQuotes] = useState([]);
  const [currentQuote, setCurrentQuote] = useState(null);

  // logic here ...
  useEffect(() => {
    const controller = new AbortController();
    axios({
      signal: controller.signal,
      method: 'get',
      url: 'https://type.fit/api/quotes'
    }).then((response) => {
      setQuotes(response.data);

      // set initial quote
      getNewQuote();
    });

    return () => controller.abort();
  }, []);

  const getNewQuote = () => {
    const randomNumber = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomNumber]);
  }

  return (
    <div className='cardContainer'>
      <div className='quote'>
        <h1><span><FormatQuoteIcon style={{rotate: '180deg'}} /></span>{' '}{currentQuote.text}</h1>
        <p className='author'>- {currentQuote.author}</p>
      </div>
      <div className='buttons'>
        <div className='socialButtons'>
          <Button variant='contained' href=''>
            <Twitter />
          </Button>
          <Button variant='contained' href=''>
            <Instagram />
          </Button>
        </div>
        <div>
          <Button onClick={getNewQuote} variant='contained' style={{textTransform: 'capitalize'}}>
            New Quote
          </Button>
        </div>
      </div>
    </div>
  )
}

export default App
