
import { Box, Button, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const allServices = [
  { title: 'Mobile Patrol', img: '/images/PatrolSecurity.jpg', link: '/services/Mobile' },
  { title: "Fire Watch", img: "/images/FireWatch.jpg", link: "/services/FireWatchSecurity" },
  { title: 'Event Security', img: '/images/event.jpg', link: '/services/Event' },
  { title: 'Loss Prevention', img: '/images/retail.jpg', link: '/services/Loss' },
  { title: 'Uniformed Security', img: '/images/Uniformed2.jpg', link: '/services/Uniformed' },
  { title: 'Tactical Security', img: '/images/PatrolSecurity2.jpg', link: '/services/Tactical' },
  { title: 'Patrol Security', img: '/images/PatrolSEcurity.jpg', link: '/services/Patrol' },
  {title:"Parking Enforcement", img: "/images/Uniformed.jpg",link: "/services/ParkingEnforcement"}
];

interface ServicesShowcaseProps {
  currentService: string;
}

const ServicesShowcase: React.FC<ServicesShowcaseProps> = ({ currentService }) => {
  const filteredServices = allServices.filter(service => service.title !== currentService).slice(0, 3);

  return (
    <Box sx={{ backgroundColor: '#fff', py: 4 }}>
      <Box sx={{ maxWidth: '1600px', mx: 'auto', px: { xs: 2, md: 6 } }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 'bold',
            color: '#111',
            mb: 8,
            textAlign: 'center',
            fontSize: { xs: '2rem', md: '2.75rem' },
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          Services We Provide
        </Typography>

        <Grid container spacing={5} justifyContent="center">
  {filteredServices.map((service, index) => (
    <Grid item xs={12} sm={6} md={4} key={index}>
      <Link href={service.link} passHref legacyBehavior>
        <a style={{ textDecoration: 'none' }}>
          <motion.div
            whileHover="hover"
            initial="rest"
            animate="rest"
            variants={{
              rest: { scale: 1, backgroundColor: '#f9f9f9', boxShadow: '0 6px 20px rgba(0, 0, 0, 0.08)' },
              hover: {
                scale: 1.03,
                backgroundColor: '#ffffff',
                boxShadow: '10px 10px 15px 30px rgba(255, 0, 0, 0.4)',
              },
            }}
            transition={{ duration: 0.3, ease: [0.2, 1, 0.3, 1] }}
            style={{
              borderRadius: '16px',
              overflow: 'hidden',
              cursor: 'pointer',
              position: 'relative',
            }}
          >
            {/* Image */}
            <Box sx={{ height: '300px', position: 'relative' }}>
              <Image
                src={service.img}
                alt={service.title}
                fill
                sizes="100%"
                style={{
                  objectFit: 'cover',
                  transition: 'transform 0.5s ease',
                }}
              />
            </Box>

            {/* Text Content */}
            <motion.div
              variants={{
                rest: { y: 10, opacity: 0.8 },
                hover: { y: 0, opacity: 1 },
              }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              style={{
                padding: '24px',
                textAlign: 'center',
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  color: '#111',
                  fontFamily: "'Poppins', sans-serif",
                  mb: 1,
                  fontSize: '1.4rem',
                }}
              >
                {service.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: '#444',
                  fontSize: '0.95rem',
                  fontFamily: "'Poppins', sans-serif",
                  lineHeight: 1.6,
                }}
              >
                Expertly delivered protection and peace of mind for every situation.
              </Typography>
            </motion.div>
          </motion.div>
        </a>
      </Link>
    </Grid>
  ))}
</Grid>


        <Box sx={{ mt: 10, display: 'flex', justifyContent: 'center' }}>
          <motion.div whileHover={{ scale: 1.05 }}>
            <Button
              variant="contained"
              href="/services"
              sx={{
                backgroundColor: '#ff0000',
                color: '#fff',
                fontWeight: 'bold',
                px: 5,
                py: 1.5,
                fontSize: '1rem',
                borderRadius: '30px',
                textTransform: 'none',
                boxShadow: '0 5px 15px rgba(255, 0, 0, 0.2)',
                '&:hover': {
                  backgroundColor: '#e60000',
                  boxShadow: '0 8px 25px rgba(255, 0, 0, 0.3)',
                },
              }}
            >
              View All Services
            </Button>
          </motion.div>
        </Box>
      </Box>
    </Box>
  );
};

export default ServicesShowcase;

