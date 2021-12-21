import React, { useEffect } from "react";
import GameDetail from "../components/GameDetail";
//REDUX
import { useDispatch, useSelector } from 'react-redux';
import { loadGames } from "../redux/Actions";
//COMPONENTS
import Game from '../components/Game';
//STYLING and ANIMATION
import styled from "styled-components";
import { motion,} from "framer-motion";
//ROUTER
import { useLocation } from "react-router-dom";

const Home = () => {

    //Get Curremt Location
    const location = useLocation();
    const pathId = location.pathname.split("/")[2];

    //FETCH_GAMES  
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadGames());
    }, [dispatch]);

    //Get Data from state(store) and extract it to variables
    const {popular, newGames, upcomingGames, searched} = useSelector((state) => state.games);

    return(
        <GameList>
            <>
                { pathId && <GameDetail/> } 
            </>
            {searched.length ? (
            <div>
            <h2>Search Results:</h2>
            <Games>
                {searched.map((game) => {
                    return(
                    <Game 
                    name={game.name} 
                    released={game.released} 
                    rating={game.rating} 
                    id={game.id}
                    image={game.background_image}
                    key={game.id}
                    />
                    );
                })}
            </Games>
            </div>
            ) : ""}

            <h2>Pupular Games</h2>
            <Games>
                {popular.map((game) => {
                    return(
                    <Game 
                    name={game.name} 
                    released={game.released} 
                    rating={game.rating} 
                    id={game.id}
                    image={game.background_image}
                    key={game.id}
                    />
                    );
                })}
            </Games>
            <h2>Upcoming Games </h2>
            <Games>
                {upcomingGames.map((game) => {
                    return(
                    <Game 
                    name={game.name} 
                    released={game.released}
                    rating={game.rating} 
                    id={game.id}
                    image={game.background_image}
                    key={game.id}
                    />
                    );
                })}
            </Games>
            <h2>New Games</h2>
            <Games>
                {newGames.map((game) => {
                    return(
                    <Game 
                    name={game.name} 
                    released={game.released} 
                    rating={game.rating} 
                    id={game.id}
                    image={game.background_image}
                    key={game.id}
                    />
                    );
                })}
            </Games>
        </GameList>
    );

}//end Home

//Styled Div GameList
const GameList = styled(motion.div)`
    padding: 0rem 5rem;
    h2 {
        padding: 0 2rem;
        margin-bottom: 2rem;
    }
`;

//Styled Div Games
const Games = styled(motion.div)`
    min-height: 8vh;
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(350px, 1fr));
    grid-column-gap: 3rem;
    grid-row-gap: 5rem;
`;

export default Home;