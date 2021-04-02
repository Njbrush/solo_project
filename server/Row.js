import React from 'react';

const Row = (props) => {
    // if (!props.isFirst) {
    let {startingChaos, exaltToChaos, currentExchange, isFirst} = props;
    startingChaos = 1*startingChaos;
    // <Row startingChaos = {this.state.startingChaos} exaltToChaos = {this.state.exaltToChaos} currencyInfo = {this.state.altInfo}/>
    let intermediate = startingChaos*currentExchange.chaosTo;
    let exalts = intermediate*currentExchange.toExalt;
    let final = exalts*exaltToChaos;
    let type = currentExchange.type;
    let profitMargin = 100*final/startingChaos-100
    intermediate = intermediate.toFixed(2);
    exalts = exalts.toFixed(2);
    final = final.toFixed(2);
    profitMargin = profitMargin.toFixed(2);

    if (props.isFirst) {
        type = "Intermediate Currency Type";
        startingChaos = "Starting Chaos Orbs";
        intermediate = "Intermediate Currency Amount"
        exalts = "Intermediate Exalted Orb Amount";
        final = "Final Amount in Chaos";
        profitMargin = "Estimated Profit Margin";
    }


    // } 
    // }


    return (
        <div className = "row">
            <div className = "element">
                {type}
            </div>
            <div className = "element">
                {startingChaos.toFixed(0)}
            </div>
            <div className = "element">
                {intermediate}
            </div>
            <div className = "element">
                {exalts} 
                <div>
                    <label> Ex: </label>
                    <input type="number" id = {props.accessId + "newExaltAmount"} className = "exaltField"></input>
                    <button onClick= {() => {
                        let targetEx = document.getElementById(props.accessId + "newExaltAmount").value
                        console.log(targetEx)
                        let reverseIntermediate = targetEx*1/currentExchange.toExalt
                        console.log(reverseIntermediate)
                        let reverseChaos = reverseIntermediate*1/currentExchange.chaosTo
                        console.log(reverseChaos)
                        props.update(reverseChaos)
                        document.getElementById(props.accessId +'newExaltAmount').value = "";
                        // this.updateStartingChaos()

                    }}> Update </button>
                </div>
            </div>
            <div className = "element">
            {final}
            </div>
            <div className = "element">
            {profitMargin}%
            </div>
            {/* Intermediate currency: {type}. Starting currency: {startingChaos} Chaos Orbs. Intermediate amount: {intermediate.toFixed(2)} {type}. 
            Exalted orbs: {exalts.toFixed(2)}. Final amount: {final.toFixed(2)} Chaos.  Profit margin: {profitMargin.toFixed(2)}% */}
        </div>
    )
}

export default Row;