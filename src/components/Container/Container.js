import React, { Component } from "react";
import Card from '../Card/Card.js'
import images from '../../images.json';
import './Container.css';

class Container extends Component {
    state = {
        images,
        message: "test test test",
        score: 0,
        topScore: 0,
        clicked: []
    };

    // selectKanji = (id) => {
    //   console.log("select Kanji executed")
    //   if(!this.state.clicked.includes(id)){
    //     return this.setState({
    //       image: this.state.images.sort(() => Math.random() - 0.5),
    //       // score: this.state.score + 1,
    //       clicked: [...this.state.clicked, id]
    //     })}
    //     else {
    //       this.setState({
    //         message: "Not so lucky this time. Give it another shot",
    //       })
    //       alert("You lose")
    //   }
    // }

    clickKanji = id => {
      console.log(`${id} clicked`);

      const kanjiClicked = this.state.images.filter(images => images.id === id);
      console.log(kanjiClicked);
      if(kanjiClicked[0].clicked === false) {
        kanjiClicked[0].clicked = true;
        console.log(kanjiClicked);
        this.handleIncrement();
      }
      else{
        this.setState({
          message: "Not so lucky this time. Give it another shot",
          score: 0
        })
        this.resetGame(this.state.images);
        this.shuffleImages(this.state.images);
      };
    };

    handleIncrement = () => {
      const {score, topScore } = this.state;
      const newScore = score + 1;
      const newTopScore = newScore > topScore ? newScore : topScore;
      this.setState({
        score : newScore,
        topScore: newTopScore,
        message: "Nice Job... Keep Clicking!"
      });
      if (newScore === 20) {
        this.setState({
          message: "You only clicked each Kanji once! You Win!",
          score: 0
        });
        this.resetGame(this.state.images)
      }
      this.shuffleImages(this.state.images);
    };

    shuffleImages = (id) => {
          if(!this.state.clicked.includes(id)){
            return(
              this.setState({
                images: this.state.images.sort(() => Math.random() - 0.5)
              })
            )
          }
      }

    resetGame = images => {
      this.setState({
        score : 0,
        images: images.map(image => ({...image, clicked: false}))
      })
    }
  
      render() {
        return(
        <div  className="container-fluid">
          <p> 
            <br />
            Think you can Remember The Kanji? Click around, and be careful not to click an image twice
          <br />
          Current Score: {this.state.score} | Top Score: {this.state.topScore}
          </p>
          <div>
            {
              this.state.images.map(images => { 
                // this.selectKanji()
                return (<Card
                  key={images.id}
                  id={images.id}
                  image={images.imageLink}
                  clickKanji={this.clickKanji}
                />)
                }
              )
            }
          </div>
        </div>
        )
      }


    }
    


export default Container;