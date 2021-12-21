import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{ 
        margin: 0;
        padding: 0;
        box-sizing:border-box;
    }
    html{
        &::-webkit-scrollbar{
            width: 0.5rem;
        }
        &::-webkit-scrollbar-thumb{
            background-color: darkgray;
        }
    }
    body{
        font-family: 'Source', sans-serif;
        width: 100%;
        background-color: #0F0F0F;
    }
    h2{
        font-size: 3rem;
        font-family: 'Monoton';
        font-weight: lighter;
        color: #bce4f2;
        background-color: #0F0F0F;
        border-radius: 1.5rem;
        border: solid 3px #bce4f2;
        text-align: center;
        margin-top:1.8rem;
        box-shadow: 0px 0px 35px rgba(111,204,237,0.8);
        text-shadow:0px 0px 25px rgba(111,204,237,0.8)
    }
    h3{
       font-size: 1.3rem;
       color: white;
       padding: 1.5rem 0rem;
    }
    h4{
        font-family: 'Lato', sans-serif;
        color: white;
        font-size: 1.2rem;
        
    }
    h5{
        font-family: 'Source', sans-serif;
        color: #333;
        padding: 3px 4px;
    }
    p{
        font-size: 1.1rem;
        line-height: 200%;
        color: #696969;
    }
    a{
        text-decoration: none;
        color: #333;
    }
    img{
        display: block;
    }

`;

export default GlobalStyles;