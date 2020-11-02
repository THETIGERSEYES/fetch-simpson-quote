import React from 'react';
import axios from 'axios';

const samplequote = {
    quote: "Oh pinaise ça marche !",
    character: "Homer Simpson",
    image:"https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
};

class QuoteSimpson extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      quote : samplequote
    };
  }

  
  getQuote = () => {
    axios
        .get('https://thesimpsonsquoteapi.glitch.me/quotes')
        .then ( (resp) => resp .data)
        .then ((data) => {
            this.setState({
               quote : data[0]
            });
        });
  }

  render (){
   
        const  {quote } =this.state;

        return(
        <div className="QuoteSimpson">
            <img src={quote.image} alt={quote.character} />
            <div className="captionQuote"> 
                <p className="quote">{quote.quote}</p>
                <p className="character">{quote.character}</p>
            
                <button type='button' onClick={this.getQuote}>Get new one</button>
            </div>
        </div>
    );
  }
}

export default QuoteSimpson;