import React from 'react';
import './styles/Dado.css';

class Dado extends React.Component{
  constructor(props) {
    super(props);
    this.changeState = this.changeState.bind(this);
  }
  
  changeState(){
    this.props.diceLocked(this.props.id);
  }

  render() {
      return (
          <i
            onClick={() => this.changeState()}
            className={this.props.locked === true ? 'dice-active' : null}> 
                <img src={require(`./faces/dice-${this.props.value}.png`)} width="80px" height="80px" alt=" "
                className={this.props.rotate === true ? 'rotate' : null} 
                />
          </i>
      )
    }
  } 

export default Dado;