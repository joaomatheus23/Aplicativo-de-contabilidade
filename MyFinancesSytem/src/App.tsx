import React from 'react';
import { useState } from 'react';
import './App.css';

import FinanceControl from './components/FinanceControl/FinanceControl';
import Header from "./components/Header/Header";
import { Movement } from './components/Models/Interfaces/Movement/Movement';
import Movements from './components/Movements/Movements';
import { FormatMoney } from './utils/util';

function App() {
  const [currentBalance, setCurrentBalance] = useState(0);   //State de saldo atual
  const [currentExpenses, setCurrentExpenses] = useState(0);  //State de despesas atual
  const [movementsItens, setMovimentsItens] = useState<Array<Movement>>([]); //State de movimentação 
  
  const setNewMovement = (movement: Movement) => {
    if(movement) {
      setMovimentsItens((prevMovements) => {
        const movements = [... prevMovements];
        movements.unshift({
          name: movement.name,
          value: FormatMoney(movement.value),
          type: movement.type,
          id: Math.random().toString(),
        });
        return movements;
      });

      movement.type === "Input" && 
      setCurrentBalance(
        (prevBalance) => prevBalance + Number(movement.value)
      );

      if(movement.type === "Output") {
        setCurrentExpenses(
          (prevExpenses) => prevExpenses + Number(movement.value)
        );
  
        currentBalance > 0 &&
        setCurrentBalance (
          (prevBalance) => prevBalance - Number(movement.value)
        );
      }
    }
  };

  return (
    <div>
      <Header/>
      <FinanceControl balance={currentBalance} expense={currentExpenses} handleSetMovement={setNewMovement} />
      <Movements movementList={movementsItens} />
    </div>
  );
}




export default App;
