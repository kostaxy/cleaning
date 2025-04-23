import React from 'react'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'

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

const PriceCard = styled.div`
    background: var(--card-background);
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    overflow: hidden;
    transition:
        transform 0.3s ease,
        box-shadow 0.3s ease;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
    }
`

const TableHeader = styled.div`
    background: var(--primary-color);
    color: white;
    padding: 1.5rem;
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 1rem;
    font-weight: 500;
    font-size: 1.1rem;

    @media (max-width: 768px) {
        padding: 1rem;
    }
`

const TableBody = styled.div`
    padding: 1rem;
`

const ServiceRow = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 1rem;
    padding: 1.25rem;
    border-bottom: 1px solid var(--gray-medium);
    transition: background-color 0.2s ease;

    &:last-child {
        border-bottom: none;
    }

    &:hover {
        background-color: var(--gray-light);
    }

    @media (max-width: 768px) {
        padding: 1rem;
    }
`

const ServiceName = styled.div`
    font-weight: 500;
    font-size: 1.1rem;
    color: var(--text-color);
`

const ServicePrice = styled.div`
    font-weight: 600;
    color: var(--primary-color);
    font-size: 1.1rem;
`

const InfoText = styled.p`
    text-align: center;
    margin: 2rem 0;
    color: var(--text-color);
    font-size: 1.1rem;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
`

const Disclaimer = styled.div`
    background: var(--card-background);
    padding: 1.5rem;
    border-radius: 12px;
    margin-top: 2rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);

    p {
        color: var(--text-color);
        font-size: 0.95rem;
        margin-bottom: 0.5rem;

        &:last-child {
            margin-bottom: 0;
        }
    }
`

const services = [
    { name: 'Экспресс-мойка кузова', price: '60 BYN' },
    { name: 'Комплексная мойка', price: '120 BYN' },
    { name: 'Химчистка салона', price: '450 BYN' },
    { name: 'Полировка кузова', price: '800 BYN' },
    { name: 'Нанесение защитного покрытия', price: '120 BYN' },
    { name: 'Мойка двигателя', price: '150 BYN' },
    { name: 'Чистка колёс', price: '40 BYN' },
    { name: 'Удаление битума', price: '100 BYN' },
]

function Pricing() {
    return (
        <>
            <Helmet>
                <title>Прайс-лист | АвтоЧистка</title>
                <meta
                    name="description"
                    content="Цены на услуги автомойки и детейлинга. Профессиональная мойка, химчистка и полировка автомобилей по доступным ценам."
                />
            </Helmet>
            <PageWrapper>
                <Section>
                    <Header>
                        <Title>Прайс-лист</Title>
                    </Header>

                    <InfoText>
                        Мы предлагаем широкий спектр услуг по уходу за вашим
                        автомобилем по конкурентным ценам. Для постоянных
                        клиентов действует система скидок.
                    </InfoText>

                    <PriceCard>
                        <TableHeader>
                            <div>Услуга</div>
                            <div>Стоимость</div>
                        </TableHeader>
                        <TableBody>
                            {services.map((service, index) => (
                                <ServiceRow key={index}>
                                    <ServiceName>{service.name}</ServiceName>
                                    <ServicePrice>{service.price}</ServicePrice>
                                </ServiceRow>
                            ))}
                        </TableBody>
                    </PriceCard>

                    <Disclaimer>
                        <p>
                            * Указанные цены являются базовыми. Финальная
                            стоимость может варьироваться в зависимости от
                            класса автомобиля и степени загрязнения.
                        </p>
                        <p>
                            * Для внедорожников и минивэнов применяется
                            коэффициент 1.2 к базовой стоимости.
                        </p>
                        <p>
                            * При заказе комплекса услуг предоставляется скидка
                            до 15%.
                        </p>
                    </Disclaimer>
                </Section>
            </PageWrapper>
        </>
    )
}

export default Pricing
