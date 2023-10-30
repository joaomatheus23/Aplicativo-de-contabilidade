import { ButtonProps } from "../Models/Interfaces/ButtonProps/ButtonProps";
import "./Button.css";


const Button = ({title, priority,action, type, disable  }: ButtonProps) => {
    return (
        <button 
        onClick={action}
        type={type ? type: "button"}
        className={ `btn ${priority === "Input" ? "greenBg" : "redBg"}`}   
        disabled={disable ? disable : false} 
        >
            {title}
        </button>
    );
};




export default Button;