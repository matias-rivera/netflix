import styled from 'styled-components/macro'
import { Link as ReactRouterLink } from 'react-router-dom';


export const Background = styled.div`
    display: flex;
    flex-direction: column;
    background: url(${({ src }) => src ? `../images/misc/${src}.jpg` : '../images/misc/home-bg.jpg'}) 
    top left / cover no-repeat;
    position: relative;
    
    
    @media (max-width: 650px){
        height: 400px;

    }
    

`;
/* @media (max-width: 1100px) {
        ${({ dontShowOnSmallViewPort}) => 
            dontShowOnSmallViewPort && 'background: none;'}
    } */
    
export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: ${({ display }) => (display ? '' : 'none')};
 
`
export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`

export const Group = styled.div`
    display: flex;
    align-items: center;
`;

export const Container = styled.div`
    display: flex;
    margin: 0 40px;
    max-width: 500px;
    height: 100px;
    padding: 18px 0;
    justify-content: space-between;
    align-items: center;

    a{
        display: flex;
    }

    @media (max-width: 1000px) {
        margin: 0 30px;
    }
`;

export const Navbar = styled.div`
    display: flex;
    height: 64px;
    padding: 15px 30px;
    justify-content: space-between;
    align-items: center;
    background: linear-gradient(180deg, rgba(0,0,0,0.7455182756696428) 0%, rgba(22,18,18,0) 100%); 
    z-index: 100;
    a{
        display: flex;
    }

    @media (max-width: 1000px) {
    }
`;

export const Picture = styled.button`
    background: url(${({ src }) => src});
    background-size: contain;
    border: 0;
    width: 32px;
    height: 32px;
    cursor: pointer;
`;

export const Link = styled.p`
    color: white;
    text-decoration: none;
    margin-right: 30px;
    font-weight: ${({ active }) => (active === 'true' ? '700' : 'normal')};
    cursor: pointer;
    transition: all .3s;

    &:hover {
        transform:scale(1.1);
        font-weight: bold;
    }

    &:last-of-type {
        margin-right: 0;
    }
`;

export const Dropdown = styled.div`
    display: none;
    background-color: black;
    position: absolute;
    padding: 10px;
    width: 100px;
    top: 32px;
    right: 10px;

    ${Group}:last-of-type ${Link} {
        cursor: pointer;
    }

    ${Group} {
        margin-bottom: 10px;

        &:last-of-type {
            margin-bottom: 0;
        }
        ${Link},${Picture} {
            cursor: default;
        }
    }

    button {
        margin-right: 10px; 
    }

    p {
        font-size: 12px;
        margin-bottom: 0;
        margin-top: 0;
    }
`;

export const Search = styled.div`
    display: flex;
    align-items: center;

    svg{
        color: white;
        cursor: pointer;
    }

    @media (max-width: 700px){
        display: none;
    }
`;

export const SearchIcon = styled.button`
    cursor:pointer;
    background-color: transparent;
    border: 0;

    img {
        filter: brightness(0) invert(1);
        width: 16px;
    }
`;

export const PlayButton = styled.button`
    box-shadow: 0 0.6vw 1vw -0.4vw rgba(0, 0, 0, 0.35);
    background-color: #e6e6e6;
    color: #000;
    font-weight: bold;
    border-width: 0;
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 20px;
    margin-top: 30px;
    cursor: pointer;
    height:60px;
    transition: background-color 0.2s;

    &:hover {
        background-color: #ff1e1e;
        color: white;
    }

    @media (max-width: 650px) {
        font-size: 10px;
        height:20px;
        padding: 5px;

    }
`;

export const InfoButton = styled.button`
    box-shadow: 0 0.6vw 1vw -0.4vw rgba(0, 0, 0, 0.35);
    background: radial-gradient(circle, rgba(121,121,121,1) 90%, rgba(149,140,140,0.9) 100%);      color: #fff;
    font-weight: bold;
    border-width: 0;
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 20px;
    height:60px;
    margin-left: 10px;
    margin-top: 30px;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
        background: radial-gradient(circle, rgba(121,121,121,0.5) 100%, rgba(149,140,140,0.9) 100%);
        color: white;
    }

    @media (max-width: 650px) {
        font-size: 10px;
        height:20px;
        padding: 5px;

    }
`;

export const MuteButton = styled.button`
    position: absolute;
    bottom: 10px;
    right: 10px;
    background-color: #fff;
    border: none;
    color: gray;
    padding: 10px;
    text-align: center;
    text-decoration: none;
    font-size: 16px;
    margin: 4px 2px;
    border-radius: 50px;
    font-size:2rem;
    cursor: pointer;
`;

export const SearchInput = styled.input`
    background-color: #44444459;
    color: white;
    border: 1px solid white;
    transition: width 0.5s;
    height: 30px;
    font-size: 14px;
    margin-left: ${({ active }) => (active === true ? '10px' : '0')};
    padding: ${({ active }) => (active === true ? '0 10px' : '0')};
    opacity: ${({ active }) => (active === true ? '1' : '0')};
    width: ${({ active }) => (active === true ? '200px' : '0px')};
`;

export const Profile = styled.div`
    display:flex;
    align-items: center;
    margin-left: 20px;
    position: relative;

    button {
        cursor: pointer;
    }

    &:hover > ${Dropdown} {
        display: flex;
        flex-direction: column;
    }
`;

export const Logo = styled.img`
    height: 32px;
    width: 108px;
    margin-right: 40px;

    @media (min-width: 1449px){
        height: 45px;
        width: 167px;
    }
`;

export const ButtonLink = styled(ReactRouterLink)`
    display: block;
    background-color: #e50914;
    width: 84px;
    height: fit-content;
    color: white;
    border: 0;
    font-size: 15px;
    border-radius: 3px;
    padding: 8px 17px;
    cursor: pointer;
    text-decoration: none;
    box-sizing: border-box;

    &:hover {
        background-color: #f40612;
    }
`;



export const ButtonGroup = styled.div`
    display:flex;
`;

export const Feature = styled(Container)`
    padding: 200px 0 350px 0;
    flex-direction: column;
    align-items: normal;
    width: 50%;
    z-index: 100;

    @media (max-width: 650px){
        padding: 100px 0;
    }
`;

export const Text = styled.p`
    color: white;
    font-size: 22px;
    line-height: normal;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.45);
    margin: 0;
    @media (max-width: 650px){
        font-size:10px;
    }
`;


export const FeatureCallOut = styled.h2`
    color: white;
    font-size: 80px;
    text-transform: uppercase;
    line-height: normal;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.45);
    margin: 0;
    margin-bottom: 20px;

    @media (max-width: 650px){
        font-size:30px;
    }
`;


