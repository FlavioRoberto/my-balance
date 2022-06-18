import { getPercent, getMaxValue } from "@/domain";
import React, { useState } from "react";
import { Badge } from "@/presentation/components";
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
    let [showBadge, setShowBadge] = useState([]);

    const onSetShowBadge = (enable, i) => {
        let show = [];
        show.concat(show);
        show[i] = enable;
        setShowBadge(show)
    }

    return <div className="row align-center gap margin-1" style={{ height: "100px" }}>
        {data.map((spend, i) =>
            <div key={i} className="column end" onMouseEnter={() => onSetShowBadge(true, i)} onMouseLeave={() => onSetShowBadge(false, i)}>
                {showBadge[i] && <Badge description={spend.value.toFixed(2)} />}
                <div className="graph-column" style={getColumnStyle(maxValue, spend.value)}></div>
                <span className="graph-column-description">{spend.description}</span>
            </div>
        )}
    </div>
}

export default Graph;