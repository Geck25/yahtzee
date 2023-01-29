import React from 'react';
import './styles/LinePoint.css';
import * as score from './ScoreValues';

class LinePoint extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      
    }
    
  }

  changeState() {
    this.setState({
      active: true,
    });
   
    if(this.props.score === null ){
      let scoreValue = 0;
      switch(this.props.id){
        case 'uno': 
          scoreValue = score.scoreOnes(this.props.values);
          this.props.updateBonus(scoreValue);
          break;
        case 'due': 
          scoreValue = score.scoreTwos(this.props.values);
          this.props.updateBonus(scoreValue);
          break;
        case 'tre': 
          scoreValue = score.scoreThrees(this.props.values);
          this.props.updateBonus(scoreValue);
          break;
        case 'quattro': 
          scoreValue = score.scoreFours(this.props.values);
          this.props.updateBonus(scoreValue);
          break;
        case 'cinque': 
          scoreValue = score.scoreFives(this.props.values);
          this.props.updateBonus(scoreValue);
          break;
        case 'sei': 
          scoreValue = score.scoreSixes(this.props.values);
          this.props.updateBonus(scoreValue);
          break;
        case 'doppio': 
          scoreValue = score.scoreDoppio(this.props.values); 
          break; 
        case 'duedoppi': 
          scoreValue = score.scoreDueDoppi(this.props.values); 
          break; 
        case 'triplo': 
          scoreValue = score.scoreTriplo(this.props.values); 
          break; 
        case 'quadruplo': 
          scoreValue = score.scoreQuadruplo(this.props.values); 
          break; 
        case 'full': 
          scoreValue = score.scoreFull(this.props.values); 
          break; 
        case 'scalamin': 
          scoreValue = score.scoreScalaMinima(this.props.values); 
          break; 
        case 'scalamax': 
          scoreValue = score.scoreScalaMassima(this.props.values); 
          break; 
        case 'yahtzee': 
          scoreValue = score.scoreYahtzee(this.props.values); 
          break; 
        default: 
          scoreValue = score.sum(this.props.values); 
          break; 
      }

      let updateLines = {...this.props.lines};
      updateLines[this.props.index].score = scoreValue;
      this.setState({
        lines: updateLines,
      });
     
      this.props.reset(scoreValue);
    
    }
      
    
     
     
  }


  render() {
    return (
      <tr
        onClick={() => this.changeState()} //gli passo l'id e in changestate() faccio gli switch con this.props.score = funzione; 
        className={this.state.active ? 'row-active' : 'row-disable'}>
          <td className="score-name">{this.props.name}</td>
          <td className="value"> {this.state.active !== false ? this.props.score : this.props.description} </td>
      </tr>
    )
  }

  

  
}

export default LinePoint;