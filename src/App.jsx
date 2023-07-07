import { useState, useEffect } from 'react';
import { Quote } from './Quote';
import axios from 'axios';
import './App.css'

function App() {
  const [quotes, setQuotes] = useState([]);
  const [currentQuote, setCurrentQuote] = useState(null);
  const [color, setColor] = useState('black');

  // logic here ...
  useEffect(() => {
    const controller = new AbortController();

    const fetchQuotes = async () => {
      try {
        const response = await axios.get('https://type.fit/api/quotes', {
        signal: controller.signal
      });
      setQuotes(response.data);

      // set initial quote
      const randomNumber = Math.floor(Math.random() * response.data.length);
      setCurrentQuote(response.data[randomNumber]);


    } catch (err) {
        console.log(err);
      }
    }

    fetchQuotes();

    return () => {
      controller.abort();
    };
  }, []);


  const getNewQuote = () => {
    const randomNumber = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomNumber]);

    // generate a random color string
    const randomColor = '#'+(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6);
    setColor(randomColor);
  }

  // function getRandomColor() {
  //   const letters = '0123456789ABCDEF';
  //   let color = '#';
  //   for (let i = 0; i < 6; i++) {
  //     color += letters[Math.floor(Math.random() * 16)];
  //   }
  //   return color;
  // }

  if (!currentQuote) return <h1>Loading...</h1>;

  return <Quote currentQuote={currentQuote} getNewQuote={getNewQuote} color={color} />;
}

export default App
