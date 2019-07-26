import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ImageCard from "./components/ImageCard";
import images from "./images.json";


class App extends Component {
  // Setting this.state.images to the images json array
  state = {
    images,
    currentScore: 0,
    bestScore: 0,
    selected: [],
  };

  endGame = () => {
    if (this.state.currentScore > this.state.bestScore) {
      this.setState({ bestScore: this.state.currentScore, }, function () {
        console.log(this.state.bestScore);
      });
    } else {
      this.setState({ bestScore: this.state.bestScore }, function () {
        console.log(this.state.bestScore)
      })
    }
    this.setState({
      selected: [],
      currentScore: 0
    });
    return true;
    
  }

  randomizeImageCards = () => {
    // sorting images randomly by retuning 50% positive and 50% negative when comparing components
    this.state.images.sort(() => Math.random() - 0.5);
    return true;
  }

  handleClick = id => {
    // find image with id and check selected array for id if it includes it end game
    if (this.state.selected.includes(id)) {
      this.endGame();
    } else {
      // if selected array does not contain this id add id to selected array
      this.setState(state => {
        const selected = state.selected.concat(id);
        console.log(selected)
        return {
          selected
        }
      })
      // randomize images
      this.randomizeImageCards();
      // set current score to the new current score by adding 1
      this.setState({ currentScore: this.state.currentScore + 1 }, function () {
      console.log(this.state.currentScore);
    });
    }
  }

  render() {
    return (
      <div>
        <Header>
        <ul className="score list-inline d-flex justify-content-center">
            <li className="list-inline-item">Score:</li>
            <li className="list-inline-item num">{this.state.currentScore}</li>
            <li className="list-inline-item">Best Score:</li>
            <li className="list-inline-item num">{this.state.bestScore}</li>
          </ul>
        </Header>
        <Wrapper>

          {this.state.images.map(image => (
            <ImageCard
              handleClick = {this.handleClick}
              id={image.id}
              key={image.id}
              name={image.id}
              image={image.image}       
          />
          ))}
        </Wrapper>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
