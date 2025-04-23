import React from 'react'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'
import ImageCarousel from '../components/ImageCarousel'

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
    margin: 4rem 0;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
`

const TextBlock = styled.div`
    background: var(--card-background);
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s ease;

    &:hover {
        transform: translateY(-5px);
    }

    h2 {
        font-size: 1.8rem;
        margin-bottom: 1.5rem;
        position: relative;
        padding-bottom: 0.5rem;
        color: var(--text-color);

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
        margin-bottom: 1.5rem;
        font-size: 1.1rem;
        line-height: 1.8;
        color: var(--text-color);

        &:last-child {
            margin-bottom: 0;
        }
    }
`

const BenefitsList = styled.ul`
    list-style: none;
    padding: 0;

    li {
        margin-bottom: 1.5rem;
        padding-left: 2rem;
        position: relative;
        font-size: 1.1rem;

        &:before {
            content: '✓';
            color: var(--primary-color);
            position: absolute;
            left: 0;
            font-weight: bold;
        }

        &:last-child {
            margin-bottom: 0;
        }
    }
`

const Stats = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin: 4rem 0;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`

const StatItem = styled.div`
    background: var(--card-background);
    padding: 2rem;
    border-radius: 12px;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s ease;

    &:hover {
        transform: translateY(-5px);
    }

    h3 {
        font-size: 2.5rem;
        color: var(--primary-color);
        margin-bottom: 0.5rem;
    }

    p {
        color: var(--text-color);
        font-size: 1.1rem;
        font-weight: 500;
    }
`

const CarouselWrapper = styled.div`
    background: var(--card-background);
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    margin-bottom: 4rem;
`

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
                    <Header>
                        <Title>О компании</Title>
                    </Header>
                    <CarouselWrapper>
                        <ImageCarousel />
                    </CarouselWrapper>
                    <Content>
                        <TextBlock>
                            <h2>Наша миссия</h2>
                            <p>
                                Мы стремимся предоставлять нашим клиентам самый
                                высокий уровень обслуживания в сфере
                                автомобильной чистки и детейлинга. Наша цель -
                                сделать ваш автомобиль не просто чистым, а
                                безупречным.
                            </p>
                            <p>
                                С 2015 года мы заботимся о чистоте и красоте
                                автомобилей наших клиентов, постоянно
                                совершенствуя технологии и повышая качество
                                обслуживания.
                            </p>
                        </TextBlock>
                        <TextBlock>
                            <h2>Наши преимущества</h2>
                            <BenefitsList>
                                <li>
                                    Профессиональное оборудование премиум-класса
                                </li>
                                <li>
                                    Сертифицированные специалисты с опытом от 5
                                    лет
                                </li>
                                <li>Гарантия качества на все виды работ</li>
                                <li>Комфортная зона ожидания премиум-класса</li>
                                <li>
                                    Эксклюзивные программы для владельцев
                                    премиум автомобилей
                                </li>
                            </BenefitsList>
                        </TextBlock>
                    </Content>
                    <Stats>
                        <StatItem>
                            <h3>8+</h3>
                            <p>Лет опыта</p>
                        </StatItem>
                        <StatItem>
                            <h3>15000+</h3>
                            <p>Довольных клиентов</p>
                        </StatItem>
                        <StatItem>
                            <h3>100%</h3>
                            <p>Гарантия качества</p>
                        </StatItem>
                    </Stats>
                </Section>
            </PageWrapper>
        </>
    )
}

export default About
