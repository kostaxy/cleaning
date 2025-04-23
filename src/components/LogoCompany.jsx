import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const LogoWrapper = styled(Link)`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--primary-color);
    transition: all 0.2s ease;

    &:hover {
        color: var(--secondary-color);
    }
`

const LogoText = styled.span`
    font-family: 'Montserrat', sans-serif;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 600;
    color: var(--text-color);
`

function LogoCompany() {
    return (
        <LogoWrapper to="/">
            <LogoText>HUECHISTKA</LogoText>
        </LogoWrapper>
    )
}

export default LogoCompany
