import React, { Component } from "react";
import "./App.scss";
import Helmet from "react-helmet";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: [
        "#16a085",
        "#27ae60",
        "#2c3e50",
        "#f39c12",
        "#e74c3c",
        "#9b59b6",
        "#FB6964",
        "#342224",
        "#472E32",
        "#BDBB99",
        "#77B1A9",
        "#73A857"
      ],
      color: "",
      quotes: [
        {
          quote:
            "We are what we pretend to be, so we must be careful about what we pretend to be.",
          author: "Kurt Vonnegut"
        },
        {
          quote: "The privilege of a lifetime is to become who you truly are.",
          author: "C.G. Jung"
        },
        {
          quote: "Become what you are.",
          author: "Friedrich Nietzsche"
        },
        {
          quote:
            "We must be willing to let go of the life we planned so as to have the life that is waiting for us.",
          author: "Joseph Campbell"
        },
        {
          quote: "What labels me, negates me.",
          author: "Søren Kierkegaard"
        },
        {
          quote:
            "I’d tell you all you want and more, if the sounds I made could be what you hear.",
          author: "David Foster Wallace"
        },
        {
          quote:
            "Many a book is like a key to unknown chambers within the castle of one’s own self.",
          author: "Franz Kafka"
        },
        {
          quote:
            "Words can be like X-rays if you use them properly ― they’ll go through anything. You read and you’re pierced.",
          author: "Aldous Huxley"
        },
        {
          quote:
            "Words are never ‘only words’; they matter because they define the contours of what we can do.",
          author: "Slavoj Žižek"
        },
        {
          quote:
            "It is what you read when you don’t have to that determines what you will be when you can’t help it.",
          author: "Oscar Wilde"
        },
        {
          quote: "I must find a truth that is true for me.",
          author: "Søren Kierkegaard"
        },
        {
          quote:
            "The fundamental delusion of humanity is to suppose that I am here and you are out there.",
          author: "Yasutani Roshi"
        },
        {
          quote:
            "I want to sing like the birds sing, not worrying about who hears or what they think.",
          author: "Rumi"
        },
        {
          quote:
            "Music expresses that which cannot be put into words and that which cannot remain silent.",
          author: "Victor Hugo"
        },
        {
          quote:
            "There's no beauty without poignancy and there's no poignancy without the feeling that it's going, men, names, books, houses--bound for dust--mortal--",
          author: "F. Scott Fitzgerald"
        },
        {
          quote:
            "Whenever humans encounter the unknown, they tend to lose perspective.",
          author: "Knov"
        },
        {
          quote:
            "Silence is only frightening to people who are compulsively verbalizing.",
          author: "William S. Burroughs"
        },
        {
          quote:
            "The world breaks every one and afterward many are strong at the broken places.",
          author: "Ernest Hemingway"
        },
        {
          quote:
            "Life is a series of natural and spontaneous changes. Don’t resist them; that only creates sorrow. Let reality be reality.",
          author: "Lao Tzu"
        },
        {
          quote:
            "Talk of mysteries! — Think of our life in nature, — daily to be shown matter, to come in contact with it, — rocks, trees, wind on our cheeks! The solid earth! The actual world! The common sense! Contact! Contact! Who are we? Where are we?",
          author: "Henry David Thoreau"
        },
        {
          quote:
            "Life is not a problem to be solved, but a reality to be experienced.",
          author: "Søren Kierkegaard"
        },
        {
          quote:
            "The clearest way into the Universe is through a forest wilderness.",
          author: "John Muir"
        },
        {
          quote:
            "In individuals, insanity is rare; but in groups, parties, nations and epochs, it is the rule.",
          author: "Friedrich Nietzsche"
        },
        {
          quote:
            "In reality there are as many religions as there are individuals.",
          author: "Mahatma Gandhi"
        },
        {
          quote: "One has a moral responsibility to disobey unjust laws.",
          author: "Martin Luther King Jr."
        }
      ],
      previousQuote: "",
      previousAuthor: "",
      currentQuote: "",
      currentAuthor: "",
      opacity: 1,
      prevQuotes: ""
    };
    this.changeColor = this.changeColor.bind(this);
    this.back = this.back.bind(this);
  }
  componentDidMount() {
    let randCol = Math.floor(Math.random() * this.state.colors.length);
    let randQuote = Math.floor(Math.random() * this.state.quotes.length);
    this.setState({
      color: this.state.colors[randCol],
      opacity: 0,
      prevQuotes: this.state.prevQuotes.concat(this.state.quotes[randQuote])
    });
    this.timer = setTimeout(_ => {
      this.setState({
        currentQuote: this.state.quotes[randQuote].quote,
        currentAuthor: this.state.quotes[randQuote].author,
        opacity: 1
      });
    }, 500);
  }
  back() {
    if (this.state.previousAuthor != "") {
      let randCol = Math.floor(Math.random() * this.state.colors.length);
      this.setState({
        currentQuote: this.state.previousQuote,
        currentAuthor: this.state.previousAuthor,
        color: this.state.colors[randCol],
        opacity: 0
      });
      this.timer = setTimeout(_ => {
        this.setState({
          opacity: 1
        });
      }, 500);
    }
  }
  changeColor() {
    let randCol = Math.floor(Math.random() * this.state.colors.length);
    let randQuote = Math.floor(Math.random() * this.state.quotes.length);
    this.setState({
      previousQuote: this.state.currentQuote,
      previousAuthor: this.state.currentAuthor,
      color: this.state.colors[randCol],
      opacity: 0,
      prevQuotes: this.state.prevQuotes.concat(this.state.quotes[randQuote])
    });
    this.timer = setTimeout(_ => {
      this.setState({
        currentQuote: this.state.quotes[randQuote].quote,
        currentAuthor: this.state.quotes[randQuote].author,
        opacity: 1
      });
    }, 500);
  }
  render() {
    return (
      <div className="wrapper">
        <Helmet>
          <style>{"body { background-color: " + this.state.color + ";}"}</style>
        </Helmet>
        <div className="quote-box">
          <div className="quote-text" style={{ color: this.state.color }}>
            <i class="fa fa-quote-left" style={{ color: this.state.color }} />
            <span id="text" style={{ opacity: this.state.opacity }}>
              {this.state.currentQuote}
            </span>
          </div>
          <div
            className="quote-author"
            style={{ color: this.state.color, opacity: this.state.opacity }}
          >
            - {this.state.currentAuthor}
          </div>
          <div className="buttons">
            <button
              class="button"
              id="back"
              style={{
                backgroundColor: this.state.color
              }}
              onClick={this.back}
            >
              <i className="fa fa-arrow-left" />
            </button>
            <a
              class="button"
              id="tweet-quote"
              target="_blank"
              href="http://twitter.com"
              style={{ backgroundColor: this.state.color }}
            >
              <i className="fa fa-twitter" />
            </a>
            <a
              class="button"
              id="tumblr-quote"
              target="_blank"
              href="http://tumblr.com"
              style={{ backgroundColor: this.state.color }}
            >
              <i className="fa fa-tumblr" />
            </a>
            <a
              class="button"
              id="facebook-quote"
              target="_blank"
              href="http://facebook.com"
              style={{ backgroundColor: this.state.color }}
            >
              <i className="fa fa-facebook" />
            </a>
            <button
              className="button"
              id="new-quote"
              onClick={this.changeColor}
              style={{ backgroundColor: this.state.color }}
            >
              New quote
            </button>
          </div>
        </div>
        <div className="footer">
          By{" "}
          <a href="https://www.linkedin.com/in/daltonnorth" target="_blank">
            Dalton North
          </a>
        </div>
      </div>
    );
  }
}

export default App;
