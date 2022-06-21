import React, { useState } from "react";
import { Badge } from "@/presentation/components";
import { getPercent } from "@/domain";
import './graph-column.scss';

interface GraphColumn {
    spendValue: number,
    maxValue: number,
    description: string
}

function getColumnStyle(value, maxValue): React.CSSProperties {
    const style = { height: `${getPercent(value, maxValue)}%` } as React.CSSProperties;

    if (value === maxValue)
        style.backgroundColor = "#B5DFE5";

    return style;
}

const GraphColumn: React.FC<GraphColumn> = (props: GraphColumn) => {
    const [showBadge, setShowBadge] = useState(false);

    const onSetShowBadge = (enable: boolean) => {
        setShowBadge(enable)
    }

    return <div className="graph-column" onMouseEnter={() => onSetShowBadge(true)} onMouseLeave={() => onSetShowBadge(false)}>
        {showBadge && <Badge description={props.spendValue.toFixed(2)} />}
        <div className="column" style={getColumnStyle(props.maxValue, props.spendValue)}></div>
        <span className="description">{props.description}</span>
    </div>
}


export default GraphColumn;