import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './Game'

const number1 = Math.floor(Math.random() * 100);
const number2 = Math.floor(Math.random() * 100);
const number3 = Math.floor(Math.random() * 100);
const proposedAnswer = Math.floor(Math.random() * 3) + number1 + number2 + number3;
const numQuestions = 0;
const numCorrect = 0;

class App extends Component {
  state={
    number1,
    number2,
    number3,
    proposedAnswer,
    numCorrect,
    numQuestions,
  }

   btntrue=()=>{
   const {
    proposedAnswer,
    number1,
    number2,
    number3,
    numCorrect,
    numQuestions
   }=this.state


   //true wali condition
if(proposedAnswer===number1+number2+number3){
  this.setState({
    numCorrect:numCorrect+1
  })

}
//question hamesha increase hongy islae bhar hn conditions
this.setState({
  numQuestions: numQuestions + 1
});
//for next number jo screen pe show random
const number11 = Math.floor(Math.random() * 100);
const number31 = Math.floor(Math.random() * 100);
const number21 = Math.floor(Math.random() * 100);
this.setState(()=>({
  number1: number11,
  number2: number21,
  number3: number31,
  proposedAnswer:
    Math.floor(Math.random() * 3) + number11 + number21 + number31
} ))

  }


  btnfalse=()=>{
    const {
     proposedAnswer,
     number1,
     number2,
     number3,
     numCorrect,
     numQuestions
    }=this.state
 
 
    //false wali condition
 if(proposedAnswer!==number1+number2+number3){
   this.setState({
     numCorrect:numCorrect+1
   })
 
 }
 //question hamesha increase hongy islae bhar hn conditions
 this.setState({
   numQuestions: numQuestions + 1
 });
 //for next number
 const number11 = Math.floor(Math.random() * 100);
 const number31 = Math.floor(Math.random() * 100);
 const number21 = Math.floor(Math.random() * 100);
 this.setState(()=>({
   number1: number11,
   number2: number21,
   number3: number31,
   proposedAnswer:
     Math.floor(Math.random() * 3) + number11 + number21 + number31
 } ))
   }
 

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Game
          number1={this.state.number1}
          number2={this.state.number2}
          number3={this.state.number3}
          proposedAnswer={this.state.proposedAnswer}
          numQuestions={this.state.numQuestions}
          numCorrect={this.state.numCorrect}
          changeTheNumbers={this.changeTheNumbers}
          true={this.btntrue}
          false={this.btnfalse}
        />     
	</header>
 

      </div>
    );
  }
}

export default App;

