import React, { useState } from "react";
//Style.. Animation..
import styled from "styled-components";
import { motion } from "framer-motion";
//Logo
import zelda from "../img/zelda.png";
//REDUX and ROUTES
import { fetchSearched } from '../redux/Actions';
import { useDispatch } from "react-redux";


const Nav = () => {

    const dispatch = useDispatch();

    const [textInput, setTextInput] = useState("");

    const inputHander = (e) =>{
        setTextInput(e.target.value);
    }

    const submitSearch = (e) => {
        e.preventDefault();
        dispatch(fetchSearched(textInput));
        setTextInput("");
    }

    const clearSearched = () => {
        dispatch({type: "CLEAR_SEARCHED"});
    }

    return (
        <StyledNav>
            <Logo onClick={clearSearched}>
                <img src={zelda} alt="logo"/>
                <h1>RGN</h1>
            </Logo>
                <p>Retro Games Nostalgia</p>
                <form className="search">
                    <input value={textInput} onChange={inputHander} type="text" />
                    <button onClick={submitSearch} type="submit">Search</button>
                </form>
        </StyledNav>
    );
}

const StyledNav = styled(motion.nav)`
    padding-bottom: 3rem;
    text-align: center;
    input{
        width: 30%;
        padding: 0.5rem;
        border: none;
        box-shadow: 0px 0px 35px rgba(111,204,237,0.8);
        margin-top: 0.5rem;
        font-weight: bold; 
    }
    button{
        font-family: 'Orbitron';
        font-size: 1rem;
        border:none;
        padding: 0.4rem 2rem;
        background: rgb(111,204,237);
        box-shadow: 0px 0px 35px rgba(111,204,237,0.8);
        cursor: pointer; 
    }
    p{
        font-family: "Press Start 2P";
        color: #bce4f2;
    }
`;

const Logo = styled(motion.div)`
    cursor: pointer;
    justify-content: center;
    display: flex;
    img{
        width:2.5rem;
        height: auto;
        padding: 0px;
        margin: 0px;
        justify-content: center;
    }

    h1{
        font-family: 'Orbitron';
        font-size: 3rem;
        padding-bottom: 0px;
        color: white;
    }
`;

export default Nav;
