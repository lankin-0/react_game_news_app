import React from "react";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
//REDUX
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
//ICONS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlaystation, faAndroid, faApple, faXbox, faLinux, faFirefox} from "@fortawesome/free-brands-svg-icons";
import { faDesktop, faGamepad, faStar, faStarHalfAlt} from "@fortawesome/free-solid-svg-icons";

const GameDetail = () => {
    //Data
    const {game, screen, isLoading} = useSelector((state) => state.detail)

    //History Route
    const history = useHistory();

    //Exit Detail Handler
    const exitDetailHandler = (e) => {
        const element = e.target;
        if(element.classList.contains('shadow')){
            document.body.style.overflow = 'auto';
            history.push('/')
        }
    }

    //ICONS
    const playStation = <FontAwesomeIcon size="3x" icon={faPlaystation} />
    const android = <FontAwesomeIcon size="3x" icon={faAndroid} />
    const ios = <FontAwesomeIcon size="3x" icon={faApple} />
    const xbox = <FontAwesomeIcon size="3x" icon={faXbox} />
    const PC = <FontAwesomeIcon size="3x" icon={faDesktop} />
    const nintendo = <FontAwesomeIcon size="3x" icon={faGamepad} />
    const linux = <FontAwesomeIcon size="3x" icon={faLinux} />
    const web = <FontAwesomeIcon size="3x" icon={faFirefox} />
  

    const iconHandler = (platformName) => {
        switch(platformName){
            case 'PlayStation 4':
                return playStation;
            case 'PlayStation 3':
                return playStation;
            case 'PlayStation 5':
                return playStation;
            case 'Xbox One':
                return xbox;
            case 'Xbox Series S/X':
                return xbox;
            case 'Xbox 360':
                return xbox;
            case 'Android':
                return android;
            case 'iOS':
                return ios; 
            case 'macOS':
                return ios; 
            case 'PC':
                return PC; 
            case 'Linux':
                return linux; 
            case 'Nintendo Switch':
                return nintendo; 
            case 'Nintendo 3DS':
                return nintendo; 
            case 'Web':
                return web; 
            default: return '';
        }
    }

    //RATING ICON
    const starFull = <FontAwesomeIcon size="1x" icon={faStar} />
    const starHalf = <FontAwesomeIcon size="1x" icon={faStarHalfAlt} />

    const getStar = () => {
        const stars = [];
        const rating = Math.floor(game.rating);

        for(let i = 1; i <= 5; i++){
            if(i <= rating){
                stars.push(<i key={i}>{starFull}</i>);
            }else{
                stars.push(<i key={i}>{starHalf}</i>);
            }
        }

        return stars;
    }

    return(
        <>
        {!isLoading && (
        <CardShadow className="shadow" onClick={exitDetailHandler}>
            <Detail>
                <Stats>
                    <div className="rating">
                        <h3>{game.name}</h3>
                        <p>Rating: {game.rating}</p>
                        {getStar()}
                    </div>
                    <Info>
                        <h3>Platforms:</h3>
                        <Platforms>
                            {game.platforms.map((data) => (
                                <div>
                                <h5 key={data.platform.id}>{data.platform.name}</h5>
                                <i key={data.platform.name}>{iconHandler(data.platform.name)}</i>
                                </div>
                            ))}
                        </Platforms>
                    </Info>
                </Stats>
                <Media>
                    <img src={game.background_image} alt={game.background_image}/>
                </Media>
                <Description>
                    <p>{game.description_raw}</p>
                </Description>
                <div className="gallery">
                    {screen.results.map(screen => (
                        <img src={screen.image} alt={screen.image} key={screen.id}/>
                    ))}
                </div>
            </Detail>
        </CardShadow>
        )}
        </>
    );
}//GameDetail end

//STYLE
const CardShadow = styled(motion.div)`
    width: 100%;
    min-height: 100vh;
    overflow-y: scroll;
    background: rgba(0,0,0,0.7);
    position: fixed;
    top: 0;
    left: 0;
`;

const Detail = styled(motion.div)`
    background-color: #1C1C1C;
    box-shadow: 0px 0px 30px rgba(111,204,237,1);
    width: 80%;
    border-radius: 1rem;
    border:solid 2px;
    border-color: rgb(111,204,237);
    padding: 2rem 5rem;
    position: absolute;
    left: 10%;
    color: black;
    img{
        width: 100%;
    }
`;

const Stats = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    i{
        color: #F2D676;
    }
    p{
        color: wheat;
    }
`;

const Info = styled(motion.div)`
    text-align: center;
`;

const Platforms = styled(motion.div)`
    display: flex;
    justify-content: space-evenly;
    img{
        margin: 3rem;
    }
    i{
        padding: 1.5rem ;
        color: white;
    }
    h5{
        color: white;
    }
`;

const Media = styled(motion.div)`
    margin-top: 5rem;
    img{
        width: 100%;
    }
`;

const Description = styled(motion.div)`
    margin: 5rem 0rem;
`;

export default GameDetail;