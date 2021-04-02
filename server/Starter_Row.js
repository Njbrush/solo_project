import React from 'react';

const starterRow = (props) => {
    const type = "Intermediate Currency Type";
    const startingChaos = "Starting Chaos Orbs";
    const intermediate = "Intermediate Currency Amount"
    const exalts = "Intermediate Exalted Orb Amount";
    const final = "Final Amount in Chaos";
    const profitMargin = "Estimated Profit Margin";  

    return (
        <div className = "row">
            <div className = "element">
            {type}
            </div>
            <div className = "element">
            {startingChaos}
            </div>
            <div className = "element">
            {intermediate}
            </div>
            <div className = "element">
            {exalts} 
            </div>
            <div className = "element">
            {final}
            </div>
            <div className = "element">
            {profitMargin}
            </div>
            {/* Intermediate currency: {type}. Starting currency: {startingChaos} Chaos Orbs. Intermediate amount: {intermediate.toFixed(2)} {type}. 
            Exalted orbs: {exalts.toFixed(2)}. Final amount: {final.toFixed(2)} Chaos.  Profit margin: {profitMargin.toFixed(2)}% */}
        </div>
    )
}

export default starterRow;