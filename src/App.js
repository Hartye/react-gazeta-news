import './App.scss';
import './styles/buttons.scss'
import React from 'react';
import PropTypes from 'prop-types'
import NoImage from './images/no_image.jpg'
import NewsInstance from './NewsInstance'

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.modal = this.modal.bind(this);
    this.modalClose = this.modalClose.bind(this);
    this.state = {
      modal: false,
      modalId: '',
      buttonCheck: "Check",
      news: []
    }
  }

  componentDidMount() {
    var url =
      'https://newsapi.org/v2/everything?' +
      'q=science&' +
      'apiKey=eb92b334958145c792daee7a681754d6';
    var req = new Request(url);
    fetch(req)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          window.location.reload();
        }
      })
      .then((response) => {
        const requestContent = response.articles;
        let tempNews = [];

        for (let i = 0; i < 20; i++) {
          let newsInfo = {
            content: requestContent[i].content,
            author: requestContent[i].author,
            title: requestContent[i].title,
            url: requestContent[i].url,
            image: requestContent[i].urlToImage,
            publishedAt: requestContent[i].publishedAt
          }

          let htmlContent = 
            `
            <div className="App-instance" id="${i}">
              <img className="App-instance-image" src="${requestContent[i].urlToImage == null ? NoImage : requestContent[i].urlToImage}" alt="News Image" />
              <h1>${requestContent[i].title}</h1>
              <p>${requestContent[i].description}</p>
            </div>
            `;
          document.querySelector(".App-content-instances").innerHTML += htmlContent;
          tempNews.push(newsInfo);
        }

        this.setState({
          news: tempNews
        })
      })
  }

  modal(event) {
    if (this.state.modal == false) {
      this.setState({
        modal: true
      });
    } else {
      this.setState({
        modal: false
      })
    }

    let clickedElement = event.target;

    if (clickedElement.classList.contains('App-instance')) {
      this.setState({
        modalId: clickedElement.id
      })
    } else {
      this.setState({
        modalId: clickedElement.parentNode.id
      })
    }
  }

  modalClose() {
    this.setState({
      modal: false
    })
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
          <NewsInstance closeModal={this.modalClose} news={this.state.news} instanceId={this.state.modalId} display={this.state.modal} />
          <button className='App-to-top-button btn' onClick={this.toTop}>TOP</button>
          <section className="App-content-container">
            <div className="App-content-instances" onClick={this.modal}>
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