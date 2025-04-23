import React from 'react'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'
import {
    FaInstagram,
    FaWhatsapp,
    FaTelegram,
    FaVk,
    FaPhone,
    FaEnvelope,
    FaMapMarkerAlt,
} from 'react-icons/fa'

const PageWrapper = styled.div`
    padding-bottom: 1rem;
`

const Section = styled.section`
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 0 1rem;
`

const Header = styled.div`
    text-align: center;
    margin-bottom: 3rem;
`

const Title = styled.h1`
    font-size: 2.5rem;
    margin: 2rem 0 1rem;
    color: var(--text-color);
    position: relative;
    display: inline-block;

    &::after {
        content: '';
        position: absolute;
        bottom: -10px;
        left: 50%;
        transform: translateX(-50%);
        width: 60px;
        height: 3px;
        background: var(--primary-color);
    }
`

const Content = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`

const ContactInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`

const ContactCard = styled.div`
    background: var(--card-background);
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    transition:
        transform 0.3s ease,
        box-shadow 0.3s ease;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
    }
`

const ContactItem = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.5rem;
    font-size: 1.1rem;

    svg {
        color: var(--primary-color);
        font-size: 1.5rem;
    }

    a {
        font-weight: 500;
        transition: color 0.2s ease;

        &:hover {
            color: var(--secondary-color);
        }
    }

    &:last-child {
        margin-bottom: 0;
    }
`

const SocialLinks = styled.div`
    display: flex;
    gap: 1.5rem;
    margin-top: 2rem;
    padding-top: 2rem;
    border-top: 1px solid var(--gray-medium);
    justify-content: center;
`

const SocialLink = styled.a`
    color: var(--primary-color);
    font-size: 2rem;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: var(--gray-light);

    &:hover {
        color: var(--secondary-color);
        transform: translateY(-3px);
        background: white;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
`

const MapContainer = styled.div`
    height: 100%;
    min-height: 400px;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    background: var(--card-background);
`

const WorkingHours = styled.div`
    h3 {
        color: var(--text-color);
        margin-bottom: 1.5rem;
        font-size: 1.5rem;
        position: relative;
        padding-bottom: 0.5rem;

        &::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 40px;
            height: 2px;
            background: var(--primary-color);
        }
    }

    p {
        margin-bottom: 0.75rem;
        font-size: 1.1rem;
    }
`

function Contacts() {
    return (
        <>
            <Helmet>
                <title>Контакты | АвтоЧистка</title>
                <meta
                    name="description"
                    content="Свяжитесь с нами для записи на услуги автомойки и детейлинга. Мы всегда на связи!"
                />
            </Helmet>
            <PageWrapper>
                <Section>
                    <Header>
                        <Title>Контакты</Title>
                    </Header>
                    <Content>
                        <ContactInfo>
                            <ContactCard>
                                <ContactItem>
                                    <FaPhone />
                                    <div>
                                        <a href="tel:+79991234567">
                                            +375 (29) 123-45-67
                                        </a>
                                    </div>
                                </ContactItem>
                                <ContactItem>
                                    <FaEnvelope />
                                    <div>
                                        <a href="mailto:info@autoclean.ru">
                                            info@test.by
                                        </a>
                                    </div>
                                </ContactItem>
                                <ContactItem>
                                    <FaMapMarkerAlt />
                                    <div>г. Гомель, ул. Пушкина, д. 1</div>
                                </ContactItem>
                                <SocialLinks>
                                    <SocialLink
                                        href="https://instagram.com"
                                        target="_blank"
                                        aria-label="Instagram"
                                    >
                                        <FaInstagram />
                                    </SocialLink>
                                    <SocialLink
                                        href="https://wa.me/375291234567"
                                        target="_blank"
                                        aria-label="WhatsApp"
                                    >
                                        <FaWhatsapp />
                                    </SocialLink>
                                    <SocialLink
                                        href="https://t.me/tg"
                                        target="_blank"
                                        aria-label="Telegram"
                                    >
                                        <FaTelegram />
                                    </SocialLink>
                                    <SocialLink
                                        href="https://vk.com"
                                        target="_blank"
                                        aria-label="VKontakte"
                                    >
                                        <FaVk />
                                    </SocialLink>
                                </SocialLinks>
                            </ContactCard>
                            <ContactCard>
                                <WorkingHours>
                                    <h3>Режим работы</h3>
                                    <p>Понедельник - Пятница: 8:00 - 22:00</p>
                                    <p>Суббота - Воскресенье: 9:00 - 21:00</p>
                                    <p>Без перерывов и выходных</p>
                                </WorkingHours>
                            </ContactCard>
                        </ContactInfo>
                        <MapContainer>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1217.048562267923!2d30.947765912019513!3d52.40491593864863!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46d469d8a7486d6d%3A0x78d45dc4a2d8cb7!2sKastry%C4%8Dnika%20Ave%2067%2C%20Homie%C4%BA%2C%20Homie%C4%BAskaja%20voblas%C4%87%20246029%2C%20Belarus!5e0!3m2!1sen!2sru!4v1745243675857!5m2!1sen!2sru"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </MapContainer>
                    </Content>
                </Section>
            </PageWrapper>
        </>
    )
}

export default Contacts
