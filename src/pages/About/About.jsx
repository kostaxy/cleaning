import React from 'react'
import { FaBroom, FaHandSparkles, FaClock, FaShieldAlt } from 'react-icons/fa'
import { Helmet } from 'react-helmet'
import ImageCarousel from '../../components/ImageCarousel'
import PageWrapper from '../../components/PageWrapper/PageWrapper'
import Section from '../../components/Section/Section'
import HeaderTitle from '../../components/HeaderTitle/HeaderTitle'
import Title from '../../components/Title/Title'
import styles from './About.module.css'
import { BENEFITS } from '../../constants/benefits'

function About() {
    return (
        <>
            <Helmet>
                <title>О компании | АвтоЧистка</title>
                <meta
                    name="description"
                    content="Профессиональная чистка автомобилей в Москве. Качественные услуги мойки и детейлинга от опытных специалистов."
                />
            </Helmet>
            <PageWrapper>
                <Section>
                    <HeaderTitle>
                        <Title>О компании</Title>
                    </HeaderTitle>
                    <div className={styles.ContentFullWidth}>
                        <div className={styles.TextBlock}>
                            <h2>О компании</h2>
                            <p style={{ textAlign: 'justify' }}>
                                <b>Huechistka</b> - это профессиональная
                                клининговая компания в Гомеле,
                                специализирующаяся на уборке квартир. Мы
                                предлагаем широкий спектр услуг по поддержанию
                                чистоты в вашем доме, используя современное
                                оборудование и экологически безопасные моющие
                                средства.
                            </p>
                        </div>
                    </div>
                    <div className={styles.CarouselWrapper}>
                        <ImageCarousel />
                    </div>
                    <div className={styles.Content}>
                        <div className={styles.TextBlock}>
                            <h2>Наша миссия</h2>
                            <p>
                                Мы стремимся предоставлять нашим клиентам самый
                                высокий уровень обслуживания в сфере клининговой
                                чистки. Наша цель - сделать ваш дом не просто
                                чистым, а безупречным.
                            </p>
                            <p>
                                С 2023 года мы заботимся о чистоте и красоте
                                домов наших клиентов, постоянно совершенствуя
                                технологии и повышая качество обслуживания.
                            </p>
                        </div>
                        <div className={styles.TextBlock}>
                            <h2>Наши преимущества</h2>
                            <div className={styles.BenefitsList}>
                                {BENEFITS.map((benefit) => (
                                    <li key={benefit}>{benefit}</li>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className={styles.ServicesGrid}>
                        <div className={styles.ServiceCard}>
                            <div className={styles.ServiceIcon}>
                                <FaBroom />
                            </div>
                            <h3 className={styles.ServiceTitle}>
                                Генеральная уборка
                            </h3>
                            <p className={styles.ServiceDescription}>
                                Полная уборка квартиры с тщательной очисткой
                                всех поверхностей, включая труднодоступные
                                места.
                            </p>
                        </div>

                        <div className={styles.ServiceCard}>
                            <div className={styles.ServiceIcon}>
                                <FaHandSparkles />
                            </div>
                            <h3 className={styles.ServiceTitle}>
                                Химчистка мебели
                            </h3>
                            <p className={styles.ServiceDescription}>
                                Профессиональная чистка мягкой мебели, ковров и
                                матрасов с использованием специализированного
                                оборудования.
                            </p>
                        </div>

                        <div className={styles.ServiceCard}>
                            <div className={styles.ServiceIcon}>
                                <FaClock />
                            </div>
                            <h3 className={styles.ServiceTitle}>
                                Регулярная уборка
                            </h3>
                            <p className={styles.ServiceDescription}>
                                Поддерживающая уборка по удобному для вас
                                графику, включая все необходимые процедуры.
                            </p>
                        </div>

                        <div className={styles.ServiceCard}>
                            <div className={styles.ServiceIcon}>
                                <FaShieldAlt />
                            </div>
                            <h3 className={styles.ServiceTitle}>
                                Послестроительная уборка
                            </h3>
                            <p className={styles.ServiceDescription}>
                                Тщательная уборка после ремонта, включая
                                удаление строительной пыли и остатков
                                материалов.
                            </p>
                        </div>
                    </div>
                </Section>
            </PageWrapper>
        </>
    )
}

export default About
