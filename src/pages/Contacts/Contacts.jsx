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
} from 'react-icons/fa'
import { CONST_INFO } from '../../constants/constantsInfo'
import PageWrapper from '../../components/PageWrapper/PageWrapper'
import Section from '../../components/Section/Section'
import HeaderTitle from '../../components/HeaderTitle/HeaderTitle'
import Title from '../../components/Title/Title'
import styles from './Contacts.module.css'

function Contacts() {
    return (
        <>
            <Helmet>
                <title>Контакты | ЧистоДом</title>
                <meta
                    name="description"
                    content="Свяжитесь с нами для заказа услуг по уборке квартир. Мы всегда на связи!"
                />
            </Helmet>
            <PageWrapper>
                <Section>
                    <HeaderTitle>
                        <Title>Контакты</Title>
                    </HeaderTitle>
                    <div className={styles.Content}>
                        <div className={styles.ContactCard}>
                            <div className={styles.ContactItem}>
                                <FaPhone />
                                <a href={`tel:${CONST_INFO.telephone.number}`}>
                                    {CONST_INFO.telephone.formatted}
                                </a>
                            </div>
                            <div className={styles.ContactItem}>
                                <FaEnvelope />
                                <a href={`mailto:${CONST_INFO.email}`}>
                                    {CONST_INFO.email}
                                </a>
                            </div>
                            <div className={styles.SocialLinks}>
                                <a
                                    className={styles.SocialLink}
                                    href={`${CONST_INFO.links.vk.url}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaVk />
                                </a>
                                <a
                                    className={styles.SocialLink}
                                    href={`${CONST_INFO.links.instagram.url}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaInstagram />
                                </a>
                                <a
                                    className={styles.SocialLink}
                                    href={`${CONST_INFO.links.telegram.url}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaTelegram />
                                </a>
                                <a
                                    className={styles.SocialLink}
                                    href={`${CONST_INFO.links.whatsapp.url}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaWhatsapp />
                                </a>
                            </div>
                        </div>
                        <div className={styles.ContactCard}>
                            <div className={styles.WorkingHours}>
                                <h3>Режим работы</h3>
                                <p>Понедельник - Пятница: 8:00 - 22:00</p>
                                <p>Суббота - Воскресенье: 9:00 - 21:00</p>
                                <p>
                                    <b>Без перерывов и выходных</b>
                                </p>
                            </div>
                        </div>
                    </div>
                </Section>
            </PageWrapper>
        </>
    )
}

export default Contacts
