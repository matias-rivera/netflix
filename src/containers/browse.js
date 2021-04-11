import React, { useContext, useState, useEffect} from 'react'
import { SelectProfileContainer } from './profiles'
import { FirebaseContext } from './../context/firebase';
import { Card, Header, Loading, Player, Slider } from '../components'
import * as ROUTES from '../constants/routes'
import logo from '../logo.svg'
import { FooterContainer } from './footer';

export function BrowseContainer({ slides }) {

    const [category, setCategory] = useState('series');
    const [searchTerm, setSearchTerm] = useState('')
    const [profile, setProfile] = useState({})
    const [loading, setLoading] = useState(true)
    const [slideRows, setSlideRows] = useState([])    

    const { firebase } = useContext(FirebaseContext)
    const user = firebase.auth().currentUser || {}

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [profile.displayName])

    useEffect(() => {
        setSlideRows(slides[category])
    }, [slides, category])


    return profile.displayName ? (
        <>
            {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody /> }
            <Header src='new-amsterdam' dontShowOnSmallViewPort>
                <Header.Navbar>
                    <Header.Group>
                        <Header.Logo to={ROUTES.HOME} src={logo} alt='Netflix' margin/>
                        <Header.TextLink 
                            active={category === 'series' ? 'true' : 'false'}
                            onClick={() => setCategory('series')}
                        >
                            Series
                        </Header.TextLink>
                        <Header.TextLink
                            active={category === 'films' ? 'true' : 'false'}
                            onClick={() => setCategory('films')}
                        >
                            Films
                        </Header.TextLink>
                        {/* <Header.TextLink
                        >
                            Popular
                        </Header.TextLink>
                        <Header.TextLink
                        >
                            My List
                        </Header.TextLink>
                        <Header.TextLink
                        >
                            Wach Again
                        </Header.TextLink> */}
                    </Header.Group>
                    <Header.Group>
                        <Header.Search 
                            searchTerm={searchTerm} 
                            setSearchTerm={setSearchTerm}
                        />
                        
                        <Header.Profile>
                            <Header.Picture src={user.photoURL} />
                            <Header.Dropdown>
                                <Header.Group>
                                    <Header.Picture src={user.photoURL} />
                                    <Header.TextLink>{user.displayName}</Header.TextLink>
                                </Header.Group>
                                <Header.Group>
                                    <Header.TextLink onClick={() => firebase.auth().signOut()}>Sign out</Header.TextLink>
                                </Header.Group>
                            </Header.Dropdown>
                        </Header.Profile>
                    </Header.Group>
                </Header.Navbar>
                
                <Header.Feature>
                    <Header.FeatureCallOut>New Amsterdam</Header.FeatureCallOut>
                    <Header.Text>
                        The oldest hospital in the US receives a new director: the nonconformist Max Goodwin, a doctor determined to change things and save lives.
                    </Header.Text>
                    <Header.ButtonGroup>
                        <Header.PlayButton><i className="fas fa-play"></i> Play</Header.PlayButton>
                        <Header.InfoButton><i className="fas fa-info-circle"></i> Information</Header.InfoButton>
                    </Header.ButtonGroup>
                </Header.Feature>
            </Header>

            <Slider.Container>
                {slideRows.map((slideItem, i) => (
                    <>
                    <Slider items={slideItem}  category={category} key={i} />

                    </>
                ))}
                    

                
            </Slider.Container>
					
         
            
            <FooterContainer />
        </>
    ) : <SelectProfileContainer user={user} setProfile={setProfile}/>
}