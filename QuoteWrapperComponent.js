import React from 'react';
import './App.css';

class QuoteMach extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      Quote: "",
      Author: "",
      Colors: ["red", "yellow", "blue", "green", "purple", "pink"]
    }
    this.changeBg=this.changeBg.bind(this);
    this.handleClick=this.handleClick.bind(this);
  }
  componentDidMount() {
    this.handleClick();
  }
  changeBg() {
    const colors = this.state.Colors;
    const color = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = color;
  }

  handleClick() {
    fetch('https://api.quotable.io/random').then(response => response.json())
        .then(data => this.setState({ Quote: data.content, Author: "-" + data.author}));
    this.changeBg()

  }


  render() {
    var tweetquote = this.state.Quote;
    var tweetauthor = this.state.Author;
    var tweetlink = "https://twitter.com/intent/tweet?text="+tweetquote+" By "+tweetauthor;
    return (
        <div className="quote-box">
          <h1 className="text">{this.state.Quote}</h1>
          <h2 className="author">{this.state.Author}</h2>
          <button className="new-quote" onClick={this.handleClick}>New Quote</button>
          <a className="tweetQuote" href={tweetlink}>Tweet Quote</a>


        </div>


    )


  }
}



export default QuoteMach;
