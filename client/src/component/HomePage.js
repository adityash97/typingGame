import React, { Component } from 'react';

class HomePage extends Component {
  constructor(props) {
    super(props); //to get properties from parent component.
    this.state = {
      text: '',
      typingData: '',
      correct: false,
      score: 0,
      globalScore: 0,
      incorrectData: 0,
      level: 1,
      speed: 4000,
    };
  }

  onInputChange = (e) => {
    //on getting data it will be called.
    if (e.target.value.length === 3) {
      if (this.state.typingData === e.target.value) {
        this.setState({
          correct: true,
          score: this.state.score + 10,
        });
        if (this.state.score === 90) {
          alert(`Congratulations, You've passes Level ${this.state.level}`);
          this.setState({
            level: this.state.level + 1,
            score: 0,
            speed: this.state.speed - 500,
            globalScore: this.state.globalScore + this.state.score,
          });
        } 
       

      } else {
        this.setState({
          incorrectData: this.state.incorrectData + 10,
        });
        if(this.state.incorrectData === 40){
          
          this.props.history.push('/gameover'); 
        }

      }
    }
    e.persist();
    this.setState(() => ({
      [e.target.name]: e.target.value,
    }));
  };

  makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  componentDidMount() {
    //react life cycle method every time after state change after rendring
    setInterval(() => {
      this.setState({
        typingData: this.makeid(3),
        correct: false,
        text: '',
      });
    }, this.state.speed);
  }

  render() {
    return (
      <div className ="container text-center">
        <h6>Each correct input contains 10 point and incorrect also 10 points. </h6>
          <h6>After 50 incorrect points game will be over and after 100 correct points
          you will enter to next level.   </h6>       
         
      <div
        className="container text-center"
        style={{ marginTop: '20vh', width: '40%' }}
      >
        <div>Level {this.state.level}</div>
        <h1>{this.state.typingData}</h1>
        <input
          style={{ padding: '10px', width: '30vh' }}
          type="text"
          placeholder="Type..."
          name="text"
          maxLength="3"
          value={this.state.text}
          onChange={this.onInputChange}
        />
        <div>
          {this.state.correct ? (
            <div style={{ color: 'green' }}>Correct</div>
          ) : (
            <div style={{ color: 'red' }}>Incorrect</div>
          )}
        </div>
        <div>
          Score : {this.state.score}
          Invalid : {this.state.incorrectData}
        </div>
        <div className="progress">
          <div
            className="progress-bar bg-success"
            role="progressbar"
            style={{ width: `${this.state.score}%` }}
            aria-valuenow={this.state.score}
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
      </div>
    );
  }
}

export default HomePage;
