import React, { Component } from 'react';
import Header from './Header';
import Game from './Game';
import './App.css';
import './Header';
import ImageWithCaption from './ImageWithCaption';

class App extends Component {
  render() {
    return (
        <div>
            <Header></Header><br/>
            <Game></Game><br/>
            <hr></hr>
            <ImageWithCaption
                id="kris01"
                captionText="Paleo Services is a site for fossil collectors..."
                uri="kris01.jpg"
                alt="Kris 01"
            ></ImageWithCaption>
        </div>
    );
  }
}

export default App;
