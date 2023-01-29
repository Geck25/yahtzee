import React from 'react';
import LinePoint from './LinePoint';
import './styles/BoardGame.css';
class BoardGame extends React.Component{
   
    render(){
        return (

       
          <table cellSpacing="0">
             <tbody>
             {this.props.lines.slice(0, 6).map((item, index) => { 
                return <LinePoint
                          key={index}
                          id={item.id}
                          index={index}
                          score={item.score}
                          name={item.name}
                          description={item.description}
                          values={this.props.values}
                          reset={this.props.reset}
                          lines={this.props.lines}
                          updateBonus={this.props.updateBonus}

                        />
             })}
                    <tr className="bonus" height="2vh"> 
                        <td>
                            Bonus
                        </td> 
                        <td>
                            <div className='image_container'>
                                {this.props.scoreBonus < 63 ? 
                                    <img className='image_bonus' src={require(`./images/cross.png`)}  alt=" "/>
                                    : <img className='image_bonus' src={require(`./images/tick.png`)}  alt=" "/>
                                }
                        </div>
                        </td>
                    </tr>
                    {this.props.lines.slice(6, 15).map((item,  index) => { 
                        return <LinePoint
                          key={index}
                          id={item.id}
                          index={index+6}
                          score={item.score}
                          name={item.name}
                          description={item.description}
                          values={this.props.values}
                          reset={this.props.reset}
                          lines={this.props.lines}
                        />
                     })}
                </tbody>
            </table>
      
        )
    }
}

export default BoardGame;

