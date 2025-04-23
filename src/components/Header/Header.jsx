import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import LogoCompany from '../LogoCompany'
import styles from './Header.module.css'

const NavLink = styled(Link)`
    color: ${(props) =>
        props.$active ? 'var(--primary-color)' : 'var(--text-color)'};
    text-decoration: none;
    font-weight: ${(props) => (props.$active ? '600' : '400')};

    &:hover {
        color: var(--primary-color);
    }
`

function Header() {
    const location = useLocation()

    return (
        <header className={styles.HeaderWrapper}>
            <nav className={styles.Nav}>
                <LogoCompany />
                <div className={styles.NavLinks}>
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
                </div>
            </nav>
        </header>
    )
}

export default Header
