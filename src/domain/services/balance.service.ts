import { Balance } from "../models/balance";

export default function getBalance(): Balance {
    return {
        myBalance: 921.48,
        pecentualFromLastMonth: 2.4,
        totalThisMonth: 478.33,
        spending: [
            {
                description: "mon",
                value: 15
            },
            {
                description: "tue",
                value: 20
            },
            {
                description: "web",
                value: 52.20
            },
            {
                description: "thu",
                value: 28.07
            },
            {
                description: "fri",
                value: 18.15
            },
            {
                description: "sat",
                value: 32
            },
            {
                description: "sun",
                value: 19
            }
        ]
    }
}