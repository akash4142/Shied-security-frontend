import React from 'react';
import Slider from 'react-slick';
import { Box, Container, Typography } from '@mui/material';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const clientLogos = [
  { src: '/logos/canadian-tire.png', alt: 'Canadian Tire' },
  { src: '/logos/Town of canmore.png', alt: 'Town of Canmore' },
  { src: '/logos/peka.jpg', alt: 'Peka' },
  { src: '/logos/fillmore.jpg', alt: 'Fill more' },
  { src: '/logos/CanmoreHostel.jpg', alt: 'Canmore hostel' },
  { src: '/logos/cornerStone.jpg', alt: 'Cornerstone' },
  { src: '/logos/spyfilms.jpg', alt: 'Spy Films' },
  { src: '/logos/OIP.jpeg', alt: 'Waymarker' },
  { src: '/logos/ghardy.jpeg', alt: 'ghardy' },
];

const settings = {
  infinite: true,
  autoplay: true,
  autoplaySpeed: 0, // creates continuous motion
  speed: 6000,      // slow and steady scroll
  cssEase: 'linear',
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: false,
  pauseOnHover: true,
  swipeToSlide: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const ClientLogoCarousel = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#fff',
        py: { xs: 8, md: 12 },
        mt: 12,
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="xl">
        <Typography
          variant="h4"
          sx={{
            color: '#111',
            fontWeight: 'bold',
            textAlign: 'center',
            mb: 6,
            fontSize: { xs: '1.8rem', md: '2.2rem' },
            fontFamily: "'Poppins', sans-serif",
            letterSpacing: 1,
          }}
        >
          Trusted by Leading Brands
        </Typography>

        <Slider {...settings}>
          {clientLogos.map((logo, index) => (
            <Box
              key={index}
              sx={{
                px: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Box
                sx={{
                  p: 2,
                  borderRadius: 3,
                  backgroundColor: '#f9f9f9',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                  transition: 'box-shadow 0.3s ease',
                  '&:hover': {
                    boxShadow: '0 6px 20px rgba(0,0,0,0.1)',
                  },
                }}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={220}
                  height={140}
                  style={{ objectFit: 'contain' }}
                />
              </Box>
            </Box>
          ))}
        </Slider>
      </Container>
    </Box>
  );
};

export default ClientLogoCarousel;
