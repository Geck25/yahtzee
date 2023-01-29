import React from 'react';
import Dado from './Dado';
import './styles/RenderDices.css';

class RenderDices extends React.Component {
  constructor(props) {
    super(props);
    
    this.handleClick = this.handleClick.bind(this);
    
  }
  
  handleClick() {
    
    if(this.props.shotsLeft > 0) {
      this.props.decreaseShots();
    }
}
  
  render() {
    
    return (
      <div className="dice">
        <div className="dice_container">
        {this.props.values.map((dado, index) => ( 
          <Dado 
            key={index}
            id={index}
            value={this.props.values[index]}
            locked={this.props.locked[index]}
            rotate={this.props.rotate[index]}
            diceLocked={this.props.diceLocked}
            
          />
          
        ))}
          
        </div>
        <div className='buttonContainer'>
          <button
            onClick={this.handleClick} 
            className="decrease_score">
              {this.props.shotsLeft}
          </button>
          
        </div>
      </div>
    )
}
}

export default RenderDices;
