import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import './styles.css';

import logoImg from '../../assets/logo-image.png';
// import dragonsImg from '../../assets/logo2.png';

export default function Login()
{
    return (
        <div className="login-container">
                <img src={logoImg} alt="Dragons Form"></img>
                <form>
                    {/* <h1>Faça seu login</h1> */}

                    <input placeholder="Username"/>
                    <button type="submit" className="button">Entrar</button>

                    <a href="/register">
                        <FiLogIn size={16} color="#E02041"/> 
                        Não tenho cadastro
                    </a>
                </form>

            {/* <img src={dragonsImg} alt="Dragons"></img> */}
        </div>
    );
}