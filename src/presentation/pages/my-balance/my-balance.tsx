import { Spend } from "@/domain";
import { Card, Graph, Header } from "@/presentation/components";
import React from "react";
import "./my-balance.scss";

const data: Spend[] = [
    {
        description: "mon",
        value: 10
    },
    {
        description: "tue",
        value: 50
    },
    {
        description: "web",
        value: 30
    }
]

const MyBalacne = () =>
    <div className="my-balance">
        <div className="container">
            <Header />
            <Card >
                <h2 className="title">Spending - Last 7 day</h2>

                <Graph data={data} />

                <hr />
                <div className="row space-between center">
                    <div className="column">
                        <span className="label">Total this month</span>
                        <span className="title">$478.33</span>
                    </div>
                    <div className="column">
                        <span className="results">+2.4%</span>
                        <span className="label">from last month</span>
                    </div>
                </div>
            </Card>
        </div>
    </div>

export default MyBalacne;