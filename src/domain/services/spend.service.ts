import { Spend } from "../models/spend";

export default function getSpend(): Spend[] {
    return [
        {
            description: "mon",
            value: 10
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
    ];
}