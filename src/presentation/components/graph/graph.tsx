import React from "react";
import './graph.scss';

function getMaxValue(data) {
    let maxValue = 0;

    data.forEach(element => {
        if (element.value > maxValue)
            maxValue = element.value;
    });

    return maxValue;
}

function getPercent(maxValue, value): number {
    return (value * 100) / maxValue;
}

const Graph = props => {
    const { data } = props;
    const maxValue = getMaxValue(data);

    return <div className="row align-center gap" style={{ height: "100px" }}>

        {data.map((spend, i) =>
            <div key={i} className="column end">
                <span>{spend.value}</span>
                <div className="graph-column" style={{ height: `${getPercent(maxValue, spend.value)}%` }}></div>
                <span className="graph-column-description">{spend.description}</span>
            </div>
        )}
    </div>
}

export default Graph;