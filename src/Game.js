import React ,{Component}  from 'react'
class Game extends Component{
 
render(){
  const {number1,number2,number3,proposedAnswer} = this.props;
    return(
  <div className="game">
          
  <h4 className="red-text">ADD THE NUMBERS GAME</h4>

 

          <div className="equation">
            <p className="text">{`${number1} + ${
              number2
            } + ${number3} = ${proposedAnswer}`}</p>
          </div>
          <button className="btn " onClick={() => this.props.true()}>True</button> 
          
          <button className="btn " onClick={()=> this.props.false()}>False</button>
          <p className="text">
            You have answered {this.props.numCorrect} question answered
            correctly out of total {this.props.numQuestions} questions.
          </p>
          
        </div>
    )
}
}

export default Game