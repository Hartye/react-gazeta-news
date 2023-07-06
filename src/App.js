import './App.scss';
import './styles/buttons.scss'
import React from 'react';
import PropTypes from 'prop-types'
import NoImage from './images/no_image.jpg'
import NewsInstance from './NewsInstance'

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.ApiRequest = this.ApiRequest.bind(this);
    this.modal = this.modal.bind(this);
    this.state = {
      modal: false,
      buttonCheck: "Check",
      news: []
    }
  }

  ApiRequest() {
    var url =
      'https://newsapi.org/v2/everything?' +
      'q=science&' +
      'apiKey=eb92b334958145c792daee7a681754d6';
    var req = new Request(url);
    fetch(req)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        const requestContent = response.articles;
        for (let i = 0; i < 10; i++) {
          let htmlContent = 
            `
            <div>
              <img className="App-instance-image" src="${requestContent[i].urlToImage == null ? NoImage : requestContent[i].urlToImage}" alt="News Image" />
              <h1>${requestContent[i].title}</h1>
              <p>${requestContent[i].description}</p>
            </div>
            `
          document.querySelector(".App-content-instances").innerHTML += htmlContent;
        }
      })
  }

  modal() {
    if (this.state.modal == false) {
      this.setState({
        modal: true
      })
    } else {
      this.setState({
        modal: false
      })
    }
  }

  toTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  render() {
    return (
      <div className="App-main">
        <main>
          <NewsInstance display={this.state.modal} />
          <button className='App-to-top-button btn' onClick={this.toTop}>TOP</button>
          <section className="App-content-container">
            <div className="App-content-instances">
              <button className='App-content-refresh-button btn' onClick={this.ApiRequest}>Refresh</button>
            </div>
          </section>
        </main>
        <footer></footer>
      </div>
    )
  }
}

function App(props) {
  return (
    <div className='App'>
      <header className="App-header">
        <nav>
          <span className="App-logo"><a href="localhost:3000">Gazeta News</a></span>
          <span className="App-page">{props.page}</span>
          <span className="App-menu">Menu</span>
        </nav>
      </header>
      <Main />
    </div>
  )
};

App.defaultProps = {
  page: "DashBoard"
}

App.propTypes = {
  page: PropTypes.string
}

export default App;