import React from 'react';
import Tiles from './components/Tiles/'
import Wrapper from './components/Wrapper'
import tilesInfo from './tilesInfo.json'
import Navbar from './components/Navbar'
import "./App.css";


function shuffleArray(array) {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

class App extends React.Component {

  state = {
    tilesInfo,
    score: 0,
    topScore: 0
  };


  handleLogic = id => {

    let updateTilesInfo = this.state.tilesInfo.slice(0);

    let clickedValue = updateTilesInfo.find(tile => tile.id === id).clicked;

    if (clickedValue === false) {

      updateTilesInfo.find(tile => tile.id === id).clicked = true;
      this.setState({ tilesInfo: updateTilesInfo, score: this.state.score + 1 });

    } else {

      let resetTilesInfo = this.state.tilesInfo.slice();

      resetTilesInfo.forEach(function(element){
        if(element.clicked === true){
          element.clicked = false
        }
      })

      let currentScore = this.state.score;
      let currentTopScore = this.state.topScore;

      if (currentScore < currentTopScore) {
        this.setState({ tilesInfo: resetTilesInfo, score: 0});
      } else {
        this.setState({ tilesInfo: resetTilesInfo, topScore: currentScore, score: 0});
      }
    }
  };

  render() {
    const shuffledPosts = shuffleArray(this.state.tilesInfo);
    return (

      <div>
        <Navbar score={this.state.score} topScore={this.state.topScore} />
        <Wrapper>

          {shuffledPosts.map(tile => (

            <Tiles
              id={tile.id}
              key={tile.id}
              image={tile.image}
              clicked={tile.clicked}
              handleLogic={this.handleLogic}
            />
          ))}
        </Wrapper>
      </div>
    )
  }
}
export default App;
