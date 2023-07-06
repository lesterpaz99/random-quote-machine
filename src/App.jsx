import { useState, useEffect } from 'react';
import { Quote } from './Quote';
import axios from 'axios';
import './App.css'

function App() {
  const [quotes, setQuotes] = useState([]);
  const [currentQuote, setCurrentQuote] = useState(null);

  // logic here ...
  useEffect(() => {
    // const controller = new AbortController();

    const fetchQuotes = async () => {
      try {
        const response = await axios.get('https://type.fit/api/quotes', {
        // signal: controller.signal
      });
      setQuotes(response.data);

    } catch (err) {
        console.log(err);
      }
    }

    fetchQuotes();

    // set initial quote
    getNewQuote();
    // return () => {
    //   controller.abort();
    // };
  }, []);

  const getNewQuote = () => {
    const randomNumber = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomNumber]);
  }

  if (quotes.length === 0 && currentQuote === null) return <h1>Loading...</h1>;

  return <Quote currentQuote={currentQuote} getNewQuote={getNewQuote} />;
}

export default App
