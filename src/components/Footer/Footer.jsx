import React from 'react'
import {
    FaInstagram,
    FaTelegram,
    FaPhone,
    FaEnvelope,
    FaVk,
    FaViber,
} from 'react-icons/fa'
import { CONST_INFO } from '../../constants/constantsInfo'
import styles from './Footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.FooterWrapper}>
            <div className={styles.FooterContent}>
                <a
                    className={styles.ContactLink}
                    href={`tel:${CONST_INFO.telephone.number}`}
                >
                    <FaPhone /> {CONST_INFO.telephone.formatted}
                </a>

                <a
                    className={styles.ContactLink}
                    href={`mailto:${CONST_INFO.email}`}
                >
                    <FaEnvelope /> {CONST_INFO.email}
                </a>

                <div className={styles.SocialLinks}>
                    {/* <a
                        className={styles.SocialLink}
                        href={`${CONST_INFO.links.vk.url}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaVk />
                    </a> */}
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
                        href={`${CONST_INFO.links.viber.url}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaViber />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
