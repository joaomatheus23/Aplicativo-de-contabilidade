import React, { useState } from "react";
import { ExpenseProps } from "../Models/Interfaces/ExpenseProps/ExpenseProps"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPercentage } from "@fortawesome/free-solid-svg-icons";
import Button from "../Button/Button";
import { type } from "@testing-library/user-event/dist/type";
import { FormatMoney } from "../../utils/util";
import { ActionsContainer, Card, CardHeader, Container, FormContainer, FormInput } from "../Balance/Balance";




const  Expense = ({emitMovement, currentBalance, currentExpenses} : ExpenseProps) => {
    const [renderInputForm, setRenderInputForm] = useState(false);
    const [isFormvalid, setIsFormValid] = useState(true);
    const [inputName, setInputName] = useState("");
    const [inputValue, setInputValue] = useState("");

    const handleRenderInputForm = () => setRenderInputForm(!false);

    const hideInputForm = () => {
        setRenderInputForm(false);
        setIsFormValid(true);
        setInputName("");
        setInputValue("");
    };


    const formSubmitHandler = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (inputName.trim().length === 0 || inputValue.trim().length === 0){
            setIsFormValid(false);
            return;
        }

        if (currentBalance >= +inputValue){
            hideInputForm();
            emitMovement({
                name: inputName,
                value: inputValue,
                type: "Output",
            })
        }else{
            setIsFormValid(false);
        }

    };

    const handleInputNameForm = (event: React.FormEvent<HTMLInputElement>) => {
        const eventTarget = event.currentTarget as HTMLInputElement;
        const eventValue = eventTarget.value;
        inputName.trim().length > 0 ? setIsFormValid(true) : setIsFormValid(false);
        setInputName(eventValue);

    };  

    const handleInputValueForm = (event: React.FormEvent<HTMLInputElement>) => {
        const eventTarget = event.currentTarget as HTMLInputElement;
        const eventValue = eventTarget.value;
        inputValue.trim().length > 0 ? setIsFormValid(true) : setIsFormValid(false);
        setInputValue(eventValue);

    };  


    
    return (
            <Container>
                <Card>
                    <CardHeader>
                        <FontAwesomeIcon icon={faPercentage} color="#E43F4d" size="2x"/>
                        <h2>Despesas</h2>
                    </CardHeader>

                    <h3> {currentExpenses > 0 ? FormatMoney(String(currentExpenses)) : 'R$ 0'} </h3>
                        {!renderInputForm && (
                            <Button
                                action={handleRenderInputForm}
                                title="Saída"
                                priority="Output"
                                disable={currentBalance === 0}
                        />
                        )}

                        {renderInputForm &&
                        <form onSubmit={formSubmitHandler}>
                            <FormContainer invalid={!isFormvalid}>
                            
                                <FormInput type="text" placeholder="Nome"  value={inputName} onChange={handleInputNameForm} />  
                                <FormInput type="text" placeholder="Valor"  value={inputValue} onChange={handleInputValueForm} />
                            </FormContainer>

                            <ActionsContainer>
                                <Button 
                                    title="Cancelar"
                                    priority="Output"
                                    action={hideInputForm}
                                    />
                                    <Button 
                                    type="submit"
                                    title="Adicionar"
                                    priority="Input"
                                    
                                    />
                            </ActionsContainer>

                        </form>
                        }

                </Card>
            </Container>
    );
};


export default Expense;