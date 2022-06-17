import { Spend } from "./spend";

export interface Balance {
    spending: Spend[];
    myBalance: number;
    totalThisMonth: number;
    pecentualFromLastMonth: number;
}