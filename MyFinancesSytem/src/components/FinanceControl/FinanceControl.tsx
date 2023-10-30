import { FinanceControlProps } from "../Models/Interfaces/Movement/FinanceControlProps/FinanceControlProps";
import { Movement } from "../Models/Interfaces/Movement/Movement";
import Balance from "../Balance/Balance";
import "./FinanceControl.css"
import Expense from "../Expense/Expense";

const FinanceControl =({
    handleSetMovement,
    balance,
    expense,
}: FinanceControlProps) => {

    const reciveNewMoviment = (movement:Movement) => {
        movement && handleSetMovement(movement);
    }


    return (
        <div className="container_finances">
           <Balance currentBalance={balance} emitMovement={reciveNewMoviment} />
            <Expense currentBalance={balance}  currentExpenses={expense} emitMovement={reciveNewMoviment}/>
        </div>
    );
};


export default FinanceControl;