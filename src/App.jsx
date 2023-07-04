import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { Twitter, Instagram } from '@mui/icons-material';
import './App.css'

function App() {
  const [currentQuote, setCurrentQuote] = useState(0);

  // logic here ...

  return (
    <div className='cardContainer'>
      <div className='quote'>
        <h1><span><FormatQuoteIcon style={{rotate: '180deg'}} /></span>{' '}quote here</h1>
        <p className='author'>- Author here</p>
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
          <Button variant='contained' style={{textTransform: 'capitalize'}}>New Quote</Button>
        </div>
      </div>
    </div>
  )
}

export default App
