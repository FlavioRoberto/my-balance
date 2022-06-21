import { Balance } from "@/domain";
import getSpend from "@/domain/services/balance.service";
import { Card, Graph, Header } from "@/presentation/components";
import React, { useEffect, useState } from "react";
import "./my-balance.scss";

const MyBalacne = () => {
    const [spend, setSpend] = useState<Balance>();

    useEffect(() => {
        const fetchSpend = async () => {
            setSpend(await getSpend());
        }

        if (!spend)
            fetchSpend()
    });

    return <>{spend && <div className="my-balance">
        <section className="container">
            <Header myBalance={spend.myBalance} />
            <Card >
                <h2 className="title">Spending - Last 7 day</h2>

                <Graph data={spend.spending} />

                <hr />

                <div className="row space-between center">
                    <div className="column">
                        <span className="label">Total this month</span>
                        <span className="title">${spend.totalThisMonth}</span>
                    </div>
                    <div className="column">
                        <span className="results">+{spend.pecentualFromLastMonth}%</span>
                        <span className="label">from last month</span>
                    </div>
                </div>
            </Card>
        </section>
    </div>}</>
}

export default MyBalacne;