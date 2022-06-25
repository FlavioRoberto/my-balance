import React, { useState } from "react";
import { Badge } from "@/presentation/components";
import { getPercent } from "@/domain";
import './graph-column.scss';

interface Props {
    spendValue: number,
    maxValue: number,
    description: string,
}

function getColumnStyle(value, maxValue): React.CSSProperties {
    return { height: `${Math.round(getPercent(value, maxValue))}%` } as React.CSSProperties;
}

function getColumnClass(principalColumn: boolean): string | undefined {
    const columnClass = "column";

    if (principalColumn)
        return `${columnClass} principal`;

    return columnClass;
}

const GraphColumn: React.FC<Props> = (props: Props) => {
    const [showBadge, setShowBadge] = useState(false);
    const isPrincipalColumn = props.spendValue === props.maxValue;

    return <div className="graph-column" onMouseEnter={() => setShowBadge(true)} onMouseLeave={() => setShowBadge(false)}>
        <Badge description={props.spendValue.toFixed(2)} show={showBadge} />
        <div className={getColumnClass(isPrincipalColumn)} style={getColumnStyle(props.maxValue, props.spendValue)}></div>
        <span className="description">{props.description}</span>
    </div>
}

export default GraphColumn;