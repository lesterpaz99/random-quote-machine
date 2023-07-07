import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { Twitter, Instagram } from '@mui/icons-material';


export const Quote = ({ currentQuote, getNewQuote, color }) => {

  document.getElementById('body').style.backgroundColor = color;

  return (
    <div className='cardContainer' style={{ color }}>
      <div className='quote'>
        <h1><span><FormatQuoteIcon style={{rotate: '180deg'}} /></span>{' '}{currentQuote?.text}</h1>
        <p className='author'>- {currentQuote?.author}</p>
      </div>
      <div className='buttons'>
        <div className='socialButtons'>
          <Button variant='contained' href='' style={{ backgroundColor: color }}>
            <Twitter />
          </Button>
          <Button variant='contained' href='' style={{ backgroundColor: color }}>
            <Instagram />
          </Button>
        </div>
        <div>
          <Button onClick={getNewQuote} variant='contained' style={{textTransform: 'capitalize', backgroundColor: color}}>
            New Quote
          </Button>
        </div>
      </div>
    </div>
  )
}

Quote.propTypes = {
  currentQuote: PropTypes.shape({
    text: PropTypes.string,
    author: PropTypes.string
  }),
  getNewQuote: PropTypes.func.isRequired,
  color: PropTypes.string
}