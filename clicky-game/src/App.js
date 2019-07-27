import React from 'react';
import Tiles from './components/Tiles/'
import Wrapper from './components/Wrapper'
import tilesInfo from './tilesInfo.json'
import Navbar from './components/Navbar'
import "./App.css";

class App extends React.Component {

  state = {
    tilesInfo,
    score: 0,
    beenClicked: []
  };

  handleIncrement = () => {
    this.setState({ score: this.state.score + 1 });
  };

  render() {
    return (

      <div>
        <Navbar score={this.state.score}/>
        <Wrapper>

          {this.state.tilesInfo.map(tile => (

            <Tiles
              id={tile.id}
              key={tile.id}
              image={tile.image}
              handleIncrement={this.handleIncrement}
            />
          ))}
        </Wrapper>
      </div>




    )
  }
}


export default App;
