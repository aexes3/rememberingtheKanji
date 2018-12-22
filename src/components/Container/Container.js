import React, { Component } from "react";
import Card from '../Card/Card.js'
import images from '../../image.json';
import './Container.css';

class Container extends Component {
    state = {
        images,
        message: "test test test",
        score: 0,
        topScore: 0
    };

    selectKanji = (id, clicked) => {
      if(!this.state.clicked.includes(id)){
        return this.setState({
          image: this.state.images.sort(() => Math.random() - 0.5),
          // message: "Not so lucky this time. Give it another shot",
          score: this.state.score + 1,
          clicked: [...this.state.clicked, id]
        })}
        else {
        alert(" You lose")
      }
    }
  

      render() {
        return(
        <div  className="container-fluid">
          <p> 
            Think you can Remember The Kanji? Click around, and be careful not to click an image twice
          <br />
          Current Score: {this.state.score} | Top Score: {this.state.topScore}
          </p>
          <div>
            {
              this.state.images.map(image => 
                <Card
                  key={image.id}
                  image={image.imageLink}
                />
              )
            }
          </div>
        </div>
        )
      }


    }
    


export default Container;