import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { Twitter, Instagram } from '@mui/icons-material';

export const Quote = ({ currentQuote, getNewQuote, color }) => {

  if (!currentQuote) {
    return 'loader or some fallback UI here';
  }

  return (
    <div className='cardContainer' style={{ color }}>
      <div className='quote'>
        <h1>
          <FormatQuoteIcon style={{rotate: '180deg'}} alt='quote icon' />
          {' '}
          {currentQuote.text}
        </h1>
        <p className='author'>- {currentQuote.author}</p>
      </div>
      <div className='buttons'>
        <div className='socialButtons'>
          <Button variant='contained' target='_blank' href={`https://twitter.com/intent/tweet?text=${currentQuote.text}`} style={{ backgroundColor: color }}>
            <Twitter alt='twitter icon' />
          </Button>
          <Button variant='contained' href='' style={{ backgroundColor: color }}> {/* Insert Instagram sharing link */}
            <Instagram alt='instagram icon' />
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
    text: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
  }),
  getNewQuote: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired
}
