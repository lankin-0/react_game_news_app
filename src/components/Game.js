import React from "react";
//STYLING and ANIMATION
import styled from "styled-components";
import { motion } from "framer-motion";
//REDUX
import { useDispatch } from "react-redux";
import {loadDetail} from '../redux/Actions';
//ROUTER
import { Link } from 'react-router-dom';


const Game = ({ name, released, image, rating, id }) => {

    const dispatch = useDispatch();

    const loadDetailHandler = () => {
        
        document.body.style.overflow = "hidden";

        dispatch(loadDetail(id));
    }
    
    const rate = () => {
        if(rating === 0){
            return "/"
        }else{
            return rating
        }
    }

    return (
        <StyledGame onClick={loadDetailHandler}>
            <Link to={`/game/${id}`}>
                <h3>{name}</h3>
                <h4>Rating: {rate()}</h4>
                <p>{released}</p>
                <img src={image} alt={name}/>
            </Link>
        </StyledGame>
    );
}

//StylegGame div
const StyledGame = styled(motion.div)`
    min-height: 30vh;
    box-shadow: 0px 0px 20px rgba(111,204,237,0.5);
    background-color: #111;
    border:1px solid;
    border-color: rgb(111,204,237);
    text-align: center;
    cursor: pointer;
    border-radius: 10px;
    overflow: hidden;
    img {
        width: 100%;
        height: 30vh;
        object-fit: cover; 
    }
`;

export default Game;