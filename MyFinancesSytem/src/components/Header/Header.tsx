import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSackDollar} from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import logo from '../../assets/logo.jpeg'; // Importe o logotipo

const Header = () => {
    return (
        <header className="header_container">
            <img src={logo} alt="Logo" className="logo" /> {/* Adiciona a imagem */}
            <div className="title_container">
                <FontAwesomeIcon icon={faSackDollar} color="#7AF1a7" size="2x" />
                <h2> Sistema Financeiro Orc Burger</h2>
            </div>
        </header>
    );
};

export default Header;
