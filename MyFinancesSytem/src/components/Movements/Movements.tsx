import { faMoneyBillTransfer } from "@fortawesome/free-solid-svg-icons";
import { MovementsProps } from "../Models/Interfaces/MovementsProps/MovementsProps";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Movements.css";
import React from "react";

const Movements = ({ movementList }: MovementsProps) => {
  return (
    <React.Fragment>
      <header className="movements_header">
        <FontAwesomeIcon icon={faMoneyBillTransfer} color="#7af1a7" size="2x" />
        <h2>{`${
          movementList.length > 0
            ? "Movimentações"
            : "Sem movimentações a exibir!"
        }  `}</h2>
      </header>

      {movementList.length > 0 &&
        movementList.map((movement) => (
          <div key={movement.id} className="movimentations_container">
            <div className="movimentation">
              <h2> {movement.name} </h2>

              <h3
                className={`${
                  movement.type === "Input" ? "balance_btn" : "expense_btn"
                }`}
              >
                {movement.type === "Input" ? "+ " : "- "}
                {movement.value}
              </h3>
            </div>
          </div>
        ))}
    </React.Fragment>
  );
};

export default Movements;
