import React, { useState, useEffect, useRef } from 'react'
import { Link as ReactRouterLink } from 'react-router-dom'
import { 
    Background, 
    Profile, 
    Dropdown, 
    Container, 
    Picture, 
    Link, 
    ButtonLink, 
    Group, 
    Logo, 
    Feature, 
    FeatureCallOut, 
    Text,
    PlayButton,
    InfoButton,
    MuteButton,
    Search,
    SearchIcon,
    SearchInput,
    ButtonGroup,
    Navbar,
    HeroBg,
    VideoBg
} from './styles/header'

export default function Header({ bg = true, children, ...restProps }) {
    const videoRef = useRef(null);
    const [mute, setMute] = useState(false)
    const [display, setDisplay] = useState(false)
    
    const handlePlayVideo = () => {
        videoRef.current && setTimeout(function() {
            setDisplay(true)
            videoRef.current.play()
          }, 5000);
    }

    useEffect(() => {
        handlePlayVideo();
    }, [videoRef])

    return bg ? <Background {...restProps} >
        <HeroBg display={display}>
            <VideoBg ref={videoRef} loop muted={mute} src={'/videos/new-amsterdam.webm'} type='video/webm' />
        </HeroBg>
        {children}
        <MuteButton onClick={() => setMute(!mute)}><i className={`fas fa-volume-${mute ? 'mute' : 'up'}`}></i></MuteButton>
        </Background> : children
}

Header.Feature = function HeaderFeature({ children, ...restProps}){
    return <Feature {...restProps}>{children}</Feature>
}

Header.Background = function HeaderBackground({ children, ...restProps}){
    return <Background {...restProps}>{children}</Background>
}

Header.FeatureCallOut = function HeaderFeatureCallOut({ children, ...restProps}){
    return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>
}

Header.Profile = function HeaderProfile({ children, ...restProps}){
    return <Profile {...restProps}>{children}</Profile>
}

Header.Picture = function HeaderPicture({ src, ...restProps}){
    return <Picture {...restProps} src={`/images/users/${src}.png`} />
}

Header.ButtonGroup = function HeaderButtonGroup({ children, ...restProps}){
    return <ButtonGroup {...restProps}>{children}</ButtonGroup>
}

Header.Search = function HeaderSearch({ searchTerm, setSearchTerm, ...restProps }) {
    const [searchActive, setSearchActive] = useState(false)

    return (
        <Search {...restProps}>
            <SearchIcon onClick={() => setSearchActive(searchActive => !searchActive)}>
                <img src="/images/icons/search.png" alt='Search' />
            </SearchIcon>
            <SearchInput 
                value={searchTerm} 
                onChange={({ target }) => setSearchTerm(target.value)}
                placeholder='Search films and series'
                active={searchActive}
            />
        </Search>
    )
}

Header.Dropdown = function HeaderDropdown({ children, ...restProps}){
    return <Dropdown {...restProps}>{children}</Dropdown>
}

Header.Text = function HeaderText({ children, ...restProps}){
    return <Text {...restProps}>{children}</Text>
}

Header.PlayButton = function HeaderPlayButton({children, ...restProps}){
    return <PlayButton {...restProps}>{children}</PlayButton>
}



Header.InfoButton = function HeaderInfoButton({children, ...restProps}){
    return <InfoButton {...restProps}>{children}</InfoButton>
}

Header.TextLink = function HeaderTextLink({ children, ...restProps}){
    return <Link {...restProps}>{children}</Link>
}

Header.Frame = function HeaderFrame({ children, ...restProps}){
    return <Container {...restProps}>{children}</Container>
}

Header.Navbar = function HeaderNavbar({ children, ...restProps}){
    return <Navbar {...restProps}>{children}</Navbar>
}

Header.Group = function HeaderGroup({ children, ...restProps}){
    return <Group {...restProps}>{children}</Group>
}


Header.ButtonLink = function HeaderButtonLink({ children, ...restProps}){
    return <ButtonLink {...restProps}>{children}</ButtonLink>
}

Header.Logo = function HeaderLogo({ to, ...restProps}){
    return (
        <ReactRouterLink to={to}>
            <Logo {...restProps} />
        </ReactRouterLink>
    )
}