import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';

const clientLogos = [
  { src: '/logos/canadian-tire.png', alt: 'Canadian Tire' },
  { src: '/logos/canadian-tire.png', alt: 'Dollarama' },
  { src: '/logos/canadian-tire.png', alt: 'Walmart' },
  { src: '/logos/canadian-tire.png', alt: 'Best Buy' },
  { src: '/logos/canadian-tire.png', alt: 'Costco' },
  { src: '/logos/canadian-tire.png', alt: 'Shoppers Drug Mart' },
  { src: '/logos/canadian-tire.png', alt: 'Home Depot' },
  { src: '/logos/canadian-tire.png', alt: 'Metro' },
];

const animationVariants = {
  animate: {
    x: ['0%', '-100%'],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: 50,
        ease: 'linear',
      },
    },
  },
};

const ClientLogoCarousel = () => {
  return (
    <Box
      sx={{
        background: 'linear-gradient(90deg, #0f1114, #1c1f25)',
        py: 8,
        overflow: 'hidden',
        mt: 5,
      }}
    >
      <Container>
        <Typography
          variant="h4"
          sx={{
            color: '#fff',
            fontWeight: 'bold',
            textAlign: 'center',
            mb: 6,
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          Trusted by Leading Clients
        </Typography>

        <Box sx={{ display: 'flex', overflow: 'hidden', position: 'relative' }}>
          <motion.div
            variants={animationVariants}
            animate="animate"
            style={{
              display: 'flex',
              minWidth: '200%',
            }}
          >
            {[...clientLogos, ...clientLogos].map((logo, index) => (
              <motion.div
                whileHover={{ scale: 1.05 }}
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '0 40px',
                  minWidth: '130px',
                }}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={120}
                  height={120}
                  style={{
                    objectFit: 'contain',
                    opacity: 0.8,
                    //filter: 'grayscale(100%)',
                    transition: 'filter 0.3s ease-in-out, opacity 0.3s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.filter = 'grayscale(0%)';
                    e.currentTarget.style.opacity = '1';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.filter = 'grayscale(100%)';
                    e.currentTarget.style.opacity = '0.8';
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default ClientLogoCarousel;
