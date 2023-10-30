import { Movement } from "../Movement/Movement";

export interface ExpenseProps {
    emitMovement: (movement:Movement) => void;
    currentExpenses: number;
    currentBalance: number;
}

