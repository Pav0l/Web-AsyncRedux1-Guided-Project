import React from 'react';
import { connect } from 'react-redux';
import { arrayOf, shape, string, bool, func } from 'prop-types';
import { bindActionCreators } from 'redux';
import Quote from './Quote';
import { getQuotesAsync, deleteQuoteAsync, makeQuoteOfTheDay } from '../state/actionCreators';


export class Quotes extends React.Component {
  componentDidMount() {
    // Mmm. Geez I wonder what we could do here.
    // Look at prop types for hints.
    this.props.getQuotesAsync();
  }

  render() {
    return (
      <div>
        <h3>My Favorite Quotes</h3>
        <div>
          {
            this.props.quotes.map(quote => (
              <Quote
                key={quote.id}
                quote={quote}
                isQuoteOfTheDay={this.props.quoteOfTheDay === quote.id}
                deleteQuoteAsync={this.props.deleteQuoteAsync}
                makeQuoteOfTheDay={this.props.makeQuoteOfTheDay}
              />
            ))
          }
        </div>
      </div>
    );
  }
}

Quotes.propTypes = {
  // data from store
  quotes: arrayOf(shape({
    id: string.isRequired,
    author: string.isRequired,
    text: string.isRequired,
  })).isRequired,
  quoteOfTheDay: string, // not required because `null` is legit value for this prop
  spinner: bool.isRequired,
  // action creators
  getQuotesAsync: func.isRequired,
  deleteQuoteAsync: func.isRequired,
  makeQuoteOfTheDay: func.isRequired,
};

function mapStateToProps(state) {
  return {
    quotes: state.quotes,
    quoteOfTheDay: state.quoteOfTheDay,
    spinner: state.spinner,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getQuotesAsync,
    deleteQuoteAsync,
    makeQuoteOfTheDay,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
