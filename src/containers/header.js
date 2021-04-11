import React from 'react'
import { Header } from '../components'
import * as ROUTES from '../constants/routes'
import logo from '../logo.svg'

export function HeaderContainer({children}) {
    return (
        <Header.Background home>
            <Header.Navbar>
                <Header.Logo to={ROUTES.HOME} src={logo} alt='Netflix'/>
                <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
            </Header.Navbar>
            {children}
        </Header.Background>
    )
}