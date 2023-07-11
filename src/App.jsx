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

  /* The `useEffect` hook is used to perform side effects in a React component. In this case, the
  effect is triggered whenever the `color` state variable changes. */
  useEffect(() => {
    document.getElementById('body').style.backgroundColor = color;
  }, [color]);


  /**
   * The function `getNewQuote` generates a random quote and sets it as the current quote, while also
   * generating a random color and setting it as the current color.
   */
  const getNewQuote = () => {
    const randomNumber = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomNumber]);

    // generate a random color string
    const randomColor = getRandomDarkColor();
    setColor(randomColor);
  }

  function getRandomDarkColor() {
    let hue = Math.floor(Math.random() * 360);
    let saturation = Math.floor(Math.random() * 100);
    let lightness = Math.floor(Math.random() * 45); // Max at 45% to keep color dark

    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}


  if (!currentQuote) return <h1>Loading...</h1>;

  return <Quote currentQuote={currentQuote} getNewQuote={getNewQuote} color={color} />;
}

export default App
