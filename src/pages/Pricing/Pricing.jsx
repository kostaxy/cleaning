import React from 'react'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'
import { PRICES } from '../../constants/prices'
import PageWrapper from '../../components/PageWrapper/PageWrapper'
import Section from '../../components/Section/Section'
import HeaderTitle from '../../components/HeaderTitle/HeaderTitle'
import Title from '../../components/Title/Title'
import styles from './Pricing.module.css'

function Pricing() {
    return (
        <>
            <Helmet>
                <title>Цены на уборку | ЧистоДом</title>
                <meta
                    name="description"
                    content="Цены на профессиональную уборку квартир в Гомеле. Генеральная уборка, химчистка мебели, регулярная уборка и другие услуги."
                />
            </Helmet>
            <PageWrapper>
                <Section>
                    <HeaderTitle>
                        <Title>Наши цены</Title>
                    </HeaderTitle>

                    <p className={styles.InfoText}>
                        Мы предлагаем гибкую систему ценообразования в
                        зависимости от площади квартиры и объема работ. Все цены
                        указаны в белорусских рублях.
                    </p>

                    <div className={styles.PriceCard}>
                        <div className={styles.TableHeader}>
                            <div>Услуга</div>
                            <div>Цена</div>
                        </div>
                        <div className={styles.TableBody}>
                            {PRICES.map((service, index) => (
                                <div className={styles.ServiceRow} key={index}>
                                    <div className={styles.ServiceName}>
                                        {service.name}
                                    </div>
                                    <div className={styles.ServicePrice}>
                                        {service.price}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={styles.Disclaimer}>
                        <p>
                            * Цены указаны ориентировочно и могут меняться в
                            зависимости от конкретных условий.
                        </p>
                        <p>* Минимальный заказ - 50 BYN.</p>
                        <p>
                            * При заказе нескольких услуг предоставляется
                            скидка.
                        </p>
                    </div>
                </Section>
            </PageWrapper>
        </>
    )
}

export default Pricing
