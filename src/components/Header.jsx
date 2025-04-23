import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import LogoCompany from './LogoCompany'

const HeaderWrapper = styled.header`
    background-color: var(--background-color);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    position: sticky;
    top: 0;
    z-index: 1000;
`

const Nav = styled.nav`
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 1rem;
    }
`

const Logo = styled(Link)`
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--primary-color);
    text-decoration: none;
`

const NavLinks = styled.div`
    display: flex;
    gap: 2rem;
    align-items: center;

    @media (max-width: 768px) {
        gap: 1rem;
    }
`

const NavLink = styled(Link)`
    color: var(--text-color);
    text-decoration: none;
    font-weight: ${(props) => (props.$active ? '600' : '400')};

    &:hover {
        color: var(--primary-color);
    }
`

function Header() {
    const location = useLocation()

    return (
        <HeaderWrapper>
            <Nav>
                <LogoCompany />
                <NavLinks>
                    <NavLink to="/" $active={location.pathname === '/'}>
                        О компании
                    </NavLink>
                    <NavLink
                        to="/pricing"
                        $active={location.pathname === '/pricing'}
                    >
                        Прайс-лист
                    </NavLink>
                    <NavLink
                        to="/contacts"
                        $active={location.pathname === '/contacts'}
                    >
                        Контакты
                    </NavLink>
                </NavLinks>
            </Nav>
        </HeaderWrapper>
    )
}

export default Header
