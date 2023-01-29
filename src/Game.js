import React from 'react';
import BoardGame from './BoardGame';
import RenderDices from './RenderDices';
import './styles/Game.css';

class Game extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            values: Array.from(Array(5)).map(i => Math.floor(Math.random() * 6 + 1)),
            locked: Array(5).fill(false),
            score: 0,
            scoreBonus: 0,
            counterBonus: 0,
            counterTotal: 0,
            shotsLeft: 2,
            rotate: Array(5).fill(false),
            lines: [
                {id: "uno", name: "Uno", description: "Somma di uno", score: null}, 
                {id: "due", name: "Due", description: "Somma di due", score: null}, 
                {id: "tre", name: "Tre", description: "Somma di tre", score: null}, 
                {id: "quattro", name: "Quattro", description: "Somma di quattro", score: null}, 
                {id: "cinque", name: "Cinque", description: "Somma di cinque", score: null}, 
                {id: "sei", name: "Sei", description: "Somma di sei", score: null},
                {id: "doppio", name: "Doppio", description: "Almeno una coppia di dadi", score: null},
                {id: "duedoppi", name: "Due Doppi", description: "Almeno due coppie di dadi", score: null},
                {id: "triplo", name: "Triplo", description: "Somma con 3 dadi uguali", score: null},
                {id: "quadruplo", name: "Quadruplo", description: "Somma con 4 dadi uguali", score: null},
                {id: "full", name: "Full", description: "3+2", score: null},
                {id: "scalamin", name: "Scala minima", description: "Scala con 4 dadi", score: null},
                {id: "scalamax", name: "Scala massima", description: "Scala con 5 dadi", score: null},
                {id: "yahtzee", name: "Yahtzee", description: "Tutti e 5 i dadi uguali", score: null},
                {id: "chance", name: "Chance", description: "Somma dei 5 dadi", score: null}
            ],                  
        }

        this.decreaseShots = this.decreaseShots.bind(this);
        this.diceLocked = this.diceLocked.bind(this);
        this.reset = this.reset.bind(this);
        this.updateBonus = this.updateBonus.bind(this);
        this.refresh = this.refresh.bind(this);
        
}

    decreaseShots(){
      this.setState(prev => (
        {
            values: prev.values.map((dado, index) =>
                prev.locked[index] === false ? Math.floor(Math.random() * 6 + 1) : dado
            ),
            shotsLeft: prev.shotsLeft - 1,
            rotate: prev.locked.map((dado, index) => 
                prev.locked[index] === false ? true : false
            ),
        }));

        setTimeout(() => {
        this.setState({
            rotate: Array(5).fill(false),
        })
        }, 500);
    }

    diceLocked(index){
      this.setState(prev => (
        {
          locked: [
            ...prev.locked.slice(0, index),
            !prev.locked[index],
            ...prev.locked.slice(index+1),
          ],
        }));
    }

    reset(points){
        if(this.state.counterTotal + 1 < 15){
            this.setState(prev => (
                {
                  values: Array.from(Array(5)).map(i => Math.floor(Math.random() * 6 + 1)),
                  locked: Array(5).fill(false),
                  score: prev.score + points,
                  shotsLeft: 2,
                  counterTotal: prev.counterTotal + 1,
                  rotate: Array(5).fill(true),
                    
                }));
               
                setTimeout(() => {
                this.setState({
                    rotate: Array(5).fill(false),
                })
                }, 500);
        } else {
            this.setState(prev => (
                {
                  score: prev.score + points,
                }));
        }

        console.log(`${this.state.counterTotal}`);
      
    }

    updateBonus(points){
        this.setState(prev => (
            {
                counterBonus: prev.counterBonus + 1,
                scoreBonus: prev.scoreBonus + points,    
            })); 
        
        
        if(this.state.counterBonus +  1 === 6){
            if(this.state.scoreBonus + points >= 63){
                this.setState(prev => (
                    {
                        score: prev.score + 35,       
                    })); 
            }
        }

    }

    refresh(){
        window.location.reload(true);
    }
    
    render() {
        return (
            <div className="game">
                <div className="game__title">
                    <h1 className="game__h1">
                        Yahtzee
                    </h1>
                </div>
            <div className='dadi'>
                <RenderDices 
                    values={this.state.values}
                    locked={this.state.locked}
                    shotsLeft={this.state.shotsLeft}
                    rotate={this.state.rotate}
                    decreaseShots={this.decreaseShots}
                    diceLocked={this.diceLocked}
                    
                />
            </div>
            <div>
                <BoardGame 
                    values={this.state.values}
                    lines={this.state.lines}
                    reset={this.reset}
                    score={this.state.score}
                    scoreBonus={this.state.scoreBonus}
                    counterBonus={this.state.counterBonus}
                    updateBonus={this.updateBonus}
                    
                    
                /> 
            </div>    
            <div className="footer">
                <div className="game_score">
                    <h2 className="title_game_score">{`Punteggio: ${this.state.score}`}</h2>
                </div>
                    <div className="button_container">
                        <button className="replay_button" onClick={this.refresh} >
                            <img className="replay" src={require(`./images/reload.png`)} width="35" height="35" alt=" "/>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Game;
