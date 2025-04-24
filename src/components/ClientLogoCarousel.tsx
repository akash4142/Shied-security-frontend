import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';

const clientLogos = [
  { src: '/logos/canadian-tire.png', alt: 'Canadian Tire' },
  { src: '/logos/Town of canmore.png', alt: 'Town of Canmore' },
  { src: '/logos/peka.jpg', alt: 'Peka' },
  { src: '/logos/fillmore.jpg', alt: 'Fill more' },
  { src: '/logos/CanmoreHostel.jpg', alt: 'Canmore hostel' },
  { src: '/logos/cornerStone.jpg', alt: 'Fill more' },
  { src: '/logos/spyfilms.jpg', alt: 'spy Films' },
];

const animationVariants = {
  animate: {
    x: ['0%', '-100%'],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: 80, // perfect pacing
        ease: 'linear',
      },
    },
  },
};

const ClientLogoCarousel = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#fff',
        py: { xs: 8, md: 12 },
        overflow: 'hidden',
        mt: 10,
        position: 'relative',
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

        {/* Edge Fades */}
        <Box
          sx={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: 80,
            background: 'linear-gradient(to right, #fff, transparent)',
            zIndex: 2,
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            right: 0,
            top: 0,
            bottom: 0,
            width: 80,
            background: 'linear-gradient(to left, #fff, transparent)',
            zIndex: 2,
          }}
        />

        {/* Scrolling Logos */}
        <Box sx={{ position: 'relative', overflow: 'hidden', mx: -6 }}>
          <motion.div
            variants={animationVariants}
            animate="animate"
            style={{
              display: 'flex',
              minWidth: '250%',
            }}
          >
            {[...clientLogos, ...clientLogos].map((logo, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.08 }}
                style={{
                  padding: '0 60px',
                  minWidth: '200px',
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
                    width={160}
                    height={160}
                    style={{
                      objectFit: 'contain',
                      transition: 'transform 0.3s ease-in-out',
                    }}
                  />
                </Box>
              </motion.div>
            ))}
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default ClientLogoCarousel;
