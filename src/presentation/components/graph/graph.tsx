import { getPercent, getMaxValue } from "@/domain";
import React from "react";
import './graph.scss';

function getColumnStyle(value, maxValue): React.CSSProperties {
    const style = { height: `${getPercent(value, maxValue)}%` } as React.CSSProperties;

    if (value === maxValue)
        style.backgroundColor = "#B5DFE5";

    return style;
}

const Graph = props => {
    const { data } = props;
    const maxValue = getMaxValue(data.map(item => item.value));

    return <div className="row align-center gap margin-1" style={{ height: "100px" }}>
        {data.map((spend, i) =>
            <div key={i} className="column end">
                <span>{spend.value}</span>
                <div className="graph-column" style={getColumnStyle(maxValue, spend.value)}></div>
                <span className="graph-column-description">{spend.description}</span>
            </div>
        )}
    </div>
}

export default Graph;