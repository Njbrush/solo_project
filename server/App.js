import { hot } from 'react-hot-loader/root';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Row from './Row';
import StarterRow from './Starter_Row';
// import $ from 'jquery';
// const jsdom = require("jsdom");
// const { JSDOM } = jsdom;
// const puppeteer = require('puppeteer')


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startingChaos: 100,
            exaltToChaos: 103,
            currentExchange :[
                {
                    type: 'Orbs of Alteration',
                    chaosTo: 4.36,
                    toExalt: 0.0023,                    
                },
                {
                    type: 'Orbs of Fusing',
                    chaosTo: 5,
                    toExalt: 0.0024,                    
                },
                {
                    type: 'Gemcutter\'s Prism',
                    chaosTo: 1,
                    toExalt: 0.0111,                    
                },
                {
                    type: 'Divine Orb',
                    chaosTo: 0.099,
                    toExalt: 0.102,                    
                }
            ]
        }
        this.updateStartingChaos = this.updateStartingChaos.bind(this);
    }   
    
    updateStartingChaos (newChaosAmount) {
        let stateUpdate = this.state;
        stateUpdate.startingChaos = newChaosAmount;
        this.setState(stateUpdate);
    }
  
    render() {
        const rowElements = [];
        rowElements.push(<StarterRow key = {100} startingChaos = {this.state.startingChaos} exaltToChaos = {this.state.exaltToChaos} currentExchange = {this.state.currentExchange[0]} isFirst = {true} />)
        for (let i = 0; i < this.state.currentExchange.length; i++){
        rowElements.push(<Row key = {i} accessId = {i} startingChaos = {this.state.startingChaos} exaltToChaos = {this.state.exaltToChaos} currentExchange = {this.state.currentExchange[i]} isFirst = {false} update = {this.updateStartingChaos}/>)
        }
        return (
            <div id = "overallContainer">
                <div id = "instructions">
                    Instructions: Given is an example of how various trade cycles would end up with a starting amount of 100 Chaos Orbs. Select the row of the intermediate currency you wish to cycle, and set the Ex field in that row to the exalted orb return you wish to target.
                    Trade the resulting starting chaos orbs amount into the intermediate currency, then into exalts, then back into chaos for profit.
                </div>
                <div id = "setStartingChaos">
                    <label> Change Starting Chaos Orbs: </label>
                    <input type="number" id = "newChaosAmount"></input>
                    <button onClick= {() => {
                        console.log(document.getElementById("newChaosAmount").value)
                        this.updateStartingChaos(document.getElementById("newChaosAmount").value)                        
                        document.getElementById('newChaosAmount').value = "";
                        // this.updateStartingChaos()

                    }}> Update </button>
                </div>
                {rowElements}
            </div>
        )
    }

}

export default hot(App);
