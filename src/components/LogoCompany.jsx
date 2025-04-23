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

const LogoIcon = styled.div`
    width: 40px;
    height: 40px;
    background: var(--primary-color);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--background-color);
    font-size: 1.2rem;
    position: relative;
    overflow: hidden;
    transition: all 0.2s ease;
    box-shadow: 0 0 20px rgba(77, 133, 255, 0.3);

    &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: -20%;
        width: 140%;
        height: 1px;
        background: rgba(255, 255, 255, 0.8);
        transform: rotate(-45deg);
    }

    ${LogoWrapper}:hover & {
        background: var(--secondary-color);
        transform: rotate(-5deg);
        box-shadow: 0 0 25px rgba(107, 154, 255, 0.4);
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
