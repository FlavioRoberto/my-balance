import { Balance } from "../models/balance";
import balance from '../data/balance.json';

export default function getBalance(): Balance {
    return balance;
}