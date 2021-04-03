import React, {useState, useEffect, useRef, createContext, useContext} from 'react'
import { Player } from '../';
import { 
        Main, 
        Controls, 
        Title, 
        Indicators, 
        Container, 
        ButtonLeft, ButtonRight, 
        CarouselContainer, 
        Carousel, 
        CarouselButton, 
        Item, 
        ItemImage,
        ItemMeta,
        ItemText,
        ItemSubtitle, 
        Frame,
        Feature,
        Content,
        FeatureTitle,
        FeatureText,
        FeatureClose,
        Group,
        Maturity
    } from './styles/slider'
import useWindowDimensions from './useWindowDimensions ';

export const FeatureContext = createContext()

export default function Slider({ category, items, children, ...restProps}){

    const [active, setActive] = useState(0)
    const [showFeature, setShowFeature] = useState(false)
    const [itemFeature, setItemFeature] = useState({})

    const sliderRef = useRef()

    const { height, width } = useWindowDimensions();

    const carouselMoveLeft = () => {
        sliderRef.current.scrollLeft -= sliderRef.current.offsetWidth
        if(active > 0){
            setActive(active-1)
        }
    }
    
    const carouselMoveRight = () => {
        sliderRef.current.scrollLeft += sliderRef.current.offsetWidth
        const pages =  Math.ceil(items.data.length / handleItemsPerRow())
        if(active < pages -1 ){
            console.log(active)
            setActive(active+1)
        }
    }


    const handleCarouselButton= (e, i) => {
        e.preventDefault();
        sliderRef.current.scrollLeft = i * sliderRef.current.offsetWidth
    }

    const handleItemsPerRow = () => {
        if(width <= 450){
            return 2
        }

        if(width <= 800){
            return 3
        }

        if(width <= 1100){
            return 4
        }
        return 5
    }

    const sliderButtons = (items) => {
        const pages = Math.ceil(items / handleItemsPerRow());
        var rows = [];
        for (let i = 0; i < pages; i++) {
            rows.push(
            <CarouselButton active={i === active} onClick={(e) => handleCarouselButton(e,i)}></CarouselButton>
                );
        }
        
        return (<>
        {rows}
        </>)

    }

    return <> 
    
    <FeatureContext.Provider value={{ showFeature, setShowFeature, itemFeature, setItemFeature}}>
        <Main {...restProps}>
            <Controls>
                <Title>{items.title}</Title>
                <Indicators >
                    {sliderButtons(items.data.length)}
                </Indicators>
            </Controls>
            <Container>
                <ButtonLeft role='button'  onClick={() => carouselMoveLeft()}><i className="fas fa-angle-left"></i></ButtonLeft>
                <CarouselContainer ref={sliderRef}>
                    <Carousel>
                        {items.data.map((item,i) => (
                            <Item key={i} onClick={()=> {
                                setItemFeature(item)
                                setShowFeature(true)
                            }}>
                                <ItemImage src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`} />
                                <ItemMeta>
                                    <ItemSubtitle>{item.title}</ItemSubtitle>
                                    <ItemText>{item.description}</ItemText>
                                </ItemMeta>
                            </Item>
                        ))}
                    </Carousel>
                </CarouselContainer>
                <ButtonRight role='button' onClick={() => carouselMoveRight()}><i className="fas fa-angle-right"></i></ButtonRight>
            </Container>
                    <Slider.Feature category={category}>
                        <Player>
                            <Player.Button />
                            <Player.Video src='/videos/bunny.mp4' />
                        </Player>
                    </Slider.Feature>
        </Main>
    </FeatureContext.Provider>
            

            </>
}

Slider.Container = function SliderContainer({ children, ...restProps}){
    return <Frame {...restProps}>{children}</Frame>
}

Slider.Feature = function SliderFeature({ children, category, ...restProps}){
    const {showFeature, itemFeature, setShowFeature} = useContext(FeatureContext)
    
    
    return showFeature ? (
        <Feature
            src={`/images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`}
            {...restProps}
        >
            <Content>
                <FeatureTitle>{itemFeature.title}</FeatureTitle>
                <FeatureText>{itemFeature.description}</FeatureText>
                <FeatureClose
                    onClick={() => setShowFeature(false)}
                >
                    <img src='/images/icons/close.png' alt='Close' />
                </FeatureClose>
                <Group margin='30px 0' flexDirection='row' alignItems='center'>
                    <Maturity rating={itemFeature.maturity}>
                        {itemFeature.maturity < 12 ? 'PG' : itemFeature.maturity}
                    </Maturity>
                    <FeatureText fontWeight='bold'>
                        {itemFeature.genre.charAt(0).toUpperCase() + itemFeature.genre.slice(1)}
                    </FeatureText>
                </Group>
                {children}
            </Content>
        </Feature>
    ) : null
}




