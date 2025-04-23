import React from 'react'
import styled from 'styled-components'
import {
    FaFacebook,
    FaInstagram,
    FaTelegram,
    FaWhatsapp,
    FaPhone,
    FaEnvelope,
    FaMapMarkerAlt,
} from 'react-icons/fa'

const FooterWrapper = styled.footer`
    background-color: var(--background-color-secondary);
    padding: 1.5rem 0;
    margin-top: auto;
    border-top: 1px solid var(--gray-medium);
`

const FooterContent = styled.div`
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 0 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;

    @media (max-width: 768px) {
        flex-direction: column;
        text-align: center;
    }
`

const ContactLink = styled.a`
    color: var(--text-color-secondary);
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: color 0.2s ease;
    font-size: 0.9rem;

    &:hover {
        color: var(--primary-color);
    }
`

const SocialLinks = styled.div`
    display: flex;
    gap: 1rem;
`

const SocialLink = styled.a`
    color: var(--text-color-secondary);
    font-size: 1.2rem;
    transition:
        color 0.2s ease,
        transform 0.2s ease;

    &:hover {
        color: var(--primary-color);
        transform: translateY(-2px);
    }
`

const Footer = () => {
    return (
        <FooterWrapper>
            <FooterContent>
                <ContactLink href="tel:+375291234567">
                    <FaPhone /> +375 (29) 123-45-67
                </ContactLink>

                <ContactLink href="mailto:someemail@cleaning.by">
                    <FaEnvelope /> someemail@cleaning.by
                </ContactLink>

                <ContactLink
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaMapMarkerAlt /> г. Гомель, ул. Пушкина, д. 1
                </ContactLink>
                <SocialLinks>
                    <SocialLink
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaFacebook />
                    </SocialLink>
                    <SocialLink
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaInstagram />
                    </SocialLink>
                    <SocialLink
                        href="https://t.me"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaTelegram />
                    </SocialLink>
                    <SocialLink
                        href="https://wa.me/79001234567"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaWhatsapp />
                    </SocialLink>
                </SocialLinks>
            </FooterContent>
        </FooterWrapper>
    )
}

export default Footer
