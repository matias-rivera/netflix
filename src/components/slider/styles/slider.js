import styled from 'styled-components/macro'

export const Main = styled.div`
    margin-bottom: 70px;
`;

export const Controls = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
`;

export const Title = styled.h3`
    color: #fff;
	font-size: 30px;
`;

export const Indicators = styled.div`
`;

export const Container = styled.div`
    display: flex;
	align-items: center;
	position: relative;
`;

export const ButtonLeft = styled.button`
    position: absolute;
	border: none;
	background: rgba(0,0,0,0.3);
	font-size: 40px;
	height: 50%;
	top: calc(50% - 25%);
	line-height: 40px;
	width: 50px;
	color: #fff;
	cursor: pointer;
	z-index: 500;
	transition: .2s ease all;
    left: 0;

    &:hover{
        background: rgba(0, 0, 0, .9);
    }
`;

export const ButtonRight = styled.button`
    position: absolute;
	border: none;
	background: rgba(0,0,0,0.3);
	font-size: 40px;
	height: 50%;
	top: calc(50% - 25%);
	line-height: 40px;
	width: 50px;
	color: #fff;
	cursor: pointer;
	z-index: 500;
	transition: .2s ease all;
    right: 0;

    &:hover{
        background: rgba(0, 0, 0, .9);
    }
`;

export const CarouselContainer = styled.div`
    width: 100%;
	padding: 20px 0;
	overflow:hidden;
	scroll-behavior: smooth;

`;

export const Carousel = styled.div`
    display: flex;
	flex-wrap: nowrap;
`;

export const CarouselButton = styled.button`
    background: ${({ active}) => (active ? 'red' : 'white')};
	height: 3px;
	width: 10px;
	cursor: pointer;
	border: none;
	margin-right: 2px;

    &:hover{
        background: red;
    }
`;

export const ItemMeta = styled.div`
	display: none;
	position: absolute;
	bottom: 0;
	padding: 10px;
	background-color: #0000008F;
`;

export const ItemText = styled.p`
	margin-top: 5px;
	font-size: 10px;
	color: #fff;
	margin-bottom: 0;
	user-select: none;
	display: none;
	line-height: normal;
`;

export const ItemSubtitle = styled.p`
	font-size: 12px;
	color: #fff;
	font-weight: bold;
	margin-top: 0;
	margin-bottom: 0;
	user-select: none;
	display: none;
`;

export const Item = styled.div`
    min-width: 20%;
	transition: .3s ease all;
	box-shadow: 5px 5px 10px rgba(0, 0, 0, .3);
	position: relative;
	cursor: pointer;

	@media (min-width: 1200px) {
        &:hover ${ItemMeta}, &:hover ${ItemText}, &:hover ${ItemSubtitle} {
            display: block;
            z-index: 100;
        }
    }

    &:hover{
		z-index:100;
        transform: scale(1.2);
        transform-origin: center;
    }

	@media (max-width: 1100px) {
        min-width: 25%;
    }

	@media (max-width: 800px) {
        min-width: 33.3%;
    }

	@media (max-width: 450px) {
        min-width: 50%;
    }
`;

export const ItemImage = styled.img`
    width: 100%;
	vertical-align: top;
`;


export const Frame = styled.div`
	padding: 0 2rem;
	margin: auto;
`;


export const FeatureText = styled.p`
    font-size: 18px;
    color: white;
    font-weight: ${({ fontWeight }) => (fontWeight === 'bold' ? 'bold' : 'normal')};
    margin: 0;

    @media (max-width: 600px){
        line-height: 22px;
    }
`;

export const Feature = styled.div`
    display: flex;
    flex-direction: row;
    background: url(${({ src }) => src});
    background-size: contain;
    position: relative;
    height: 360px;
    background-position-x: right;
    background-repeat: no-repeat;
    background-color: black;

    @media (max-width: 1000px){
        height: auto;
        background-size: auto;

        ${Title} {
            font-size: 20px;
            line-height: 20px;
            margin-bottom: 10px;
        }
        ${FeatureText}{
            font-size: 14px;
        }
    }
`;



export const FeatureTitle = styled(Title)`
    margin-left:0;
`;

export const FeatureClose = styled.button`
    color: white;
    position: absolute;
    right: 20px;
    top: 20px;
    cursor: pointer;
    background-color: transparent;
    border: 0;

    img {
        filter: brightness(0) invert(1);
        width:24px;
    }
`;


export const Maturity = styled.div`
    background-color: ${({ rating }) => (rating >= 15 ? 'red' : 'green')};
    border-radius: 15px;
    width: 20px;
    padding: 5px;
    text-align: center;
    color: white;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
    margin-right: 10px;
    font-size: 12px;
`;

export const Content = styled.div`
    margin: 56px;
    max-width: 500px;
    line-height: normal;

    @media (max-width: 1000px) {
        margin: 30px;
        max-width: none;
    }
`;

export const Group = styled.div`
    display: flex;
    flex-direction: ${({ flexDirection }) => flexDirection === 'row' ? 'row' : 'column'};
    ${({ alignItems }) => alignItems && `align-items: ${alignItems}`};
    ${({ margin }) => margin && `margin: ${margin}`};

    > ${Container}:first-of-type {
        @media (min-width: 1100px) {
            margin-top: --150px;
        }
    }
`;


