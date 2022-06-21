import { getMaxValue, Spend } from "@/domain";
import React from "react";
import GraphColumn from "./graph-column";

interface Props {
    data: Spend[]
}

const Graph: React.FC<Props> = (props: Props) => {
    const { data } = props;
    const maxValue = getMaxValue(data.map(item => item.value));

    return <div className="row align-center gap margin-1" style={{ height: "100px" }}>
        {data.map((spend, i) =>
            <GraphColumn key={i} spendValue={spend.value} maxValue={maxValue} description={spend.description} />
        )}
    </div>
}

export default Graph;