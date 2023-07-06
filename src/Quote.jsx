import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { Twitter, Instagram } from '@mui/icons-material';


export const Quote = ({ currentQuote, getNewQuote }) => {
  return (
    <div className='cardContainer'>
      <div className='quote'>
        <h1><span><FormatQuoteIcon style={{rotate: '180deg'}} /></span>{' '}{currentQuote?.text}</h1>
        <p className='author'>- {currentQuote?.author}</p>
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

Quote.propTypes = {
  currentQuote: PropTypes.shape({
    text: PropTypes.string,
    author: PropTypes.string
  }),
  getNewQuote: PropTypes.func.isRequired
}