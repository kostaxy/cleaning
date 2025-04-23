import React from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const CarouselContainer = styled.div`
    margin: 2rem 0;
    .slick-slide {
        padding: 0 10px;
    }
    .slick-prev,
    .slick-next {
        width: 40px;
        height: 40px;
        z-index: 1;
        &:before {
            font-size: 40px;
            color: var(--primary-color);
        }
    }
    .slick-prev {
        left: -50px;
    }
    .slick-next {
        right: -50px;
    }
`

const ImageWrapper = styled.div`
    position: relative;
    padding-top: 56.25%; /* 16:9 Aspect Ratio */
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`

const Image = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.05);
    }
`

const carouselImages = [
    {
        url: 'https://images.unsplash.com/photo-1686178827149-6d55c72d81df?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Car detailing process',
    },
    {
        url: 'https://images.unsplash.com/photo-1643216670147-f9a901d3133d?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Interior cleaning',
    },
    {
        url: 'https://images.unsplash.com/photo-1626379481874-3dc5678fa8ca?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Exterior washing',
    },
    {
        url: 'https://images.unsplash.com/photo-1687840936382-7333b7d26fca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTg3fHxwcm9mZXNzaW9uYWwlMjBjbGVhbmluZ3xlbnwwfHwwfHx8Mg%3D%3D',
        alt: 'Professional polishing',
    },
]

function ImageCarousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    }

    return (
        <CarouselContainer>
            <Slider {...settings}>
                {carouselImages.map((image, index) => (
                    <div key={index}>
                        <ImageWrapper>
                            <Image
                                src={`${image.url}?auto=format&fit=crop&w=800&q=80`}
                                alt={image.alt}
                            />
                        </ImageWrapper>
                    </div>
                ))}
            </Slider>
        </CarouselContainer>
    )
}

export default ImageCarousel
