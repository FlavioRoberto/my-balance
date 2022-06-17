import getSpend from "@/domain/services/balance.service";
import { Card, Graph, Header } from "@/presentation/components";
import React from "react";
import "./my-balance.scss";

const MyBalacne = () => {
    const data = getSpend();
    return <div className="my-balance">
        <section className="container">
            <Header myBalance={data.myBalance} />
            <Card >
                <h2 className="title">Spending - Last 7 day</h2>

                <Graph data={data.spending} />

                <hr />

                <div className="row space-between center">
                    <div className="column">
                        <span className="label">Total this month</span>
                        <span className="title">${data.totalThisMonth}</span>
                    </div>
                    <div className="column">
                        <span className="results">+{data.pecentualFromLastMonth}%</span>
                        <span className="label">from last month</span>
                    </div>
                </div>
            </Card>
        </section>
    </div>
}

export default MyBalacne;