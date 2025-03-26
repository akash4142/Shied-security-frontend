
import { Box, Button, Card, CardContent, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const allServices = [
  { title: 'Mobile Patrol', img: '/images/2.jpg', link: '/services/Mobile' },
  { title: 'Event Security', img: '/images/3.jpg', link: '/services/Event' },
  { title: 'Loss Prevention', img: '/images/4.jpg', link: '/services/Loss' },
  { title: 'Uniformed Security', img: '/images/1.jpg', link: '/services/Uniformed' },
  { title: 'Tactical Security', img: '/images/2.jpg', link: '/services/Tactical' },
  { title: 'Patrol Security', img: '/images/2.jpg', link: '/services/Patrol' },
];

interface ServicesShowcaseProps {
  currentService: string;
}

const ServicesShowcase: React.FC<ServicesShowcaseProps> = ({ currentService }) => {
  const filteredServices = allServices.filter(service => service.title !== currentService).slice(0, 3);

  return (
    <Box sx={{ background: 'linear-gradient(90deg, #0f1114, #1c1f25)', py: 12 }}>
      <Container maxWidth="xl">
        <Typography
          variant="h3"
          sx={{
            fontWeight: 'bold',
            color: '#fff',
            mb: 8,
            textAlign: 'center',
            fontSize: { xs: '2rem', md: '2.5rem' },
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          Other Security Services We Provide
        </Typography>

        <Grid container spacing={5} justifyContent="center">
          {filteredServices.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Link href={service.link} passHref legacyBehavior>
                <a style={{ textDecoration: 'none' }}>
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <Card
                      sx={{
                        background: 'linear-gradient(to bottom right, #1e1e1e, #2c2c2c)',
                        color: '#fff',
                        borderRadius: 3,
                        height: '100%',
                        overflow: 'hidden',
                        boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
                      }}
                    >
                      <Box sx={{ overflow: 'hidden' }}>
                        <Image
                          src={service.img}
                          alt={service.title}
                          width={400}
                          height={250}
                          style={{
                            width: '100%',
                            height: '250px',
                            objectFit: 'cover',
                            transition: 'transform 0.4s ease',
                          }}
                          onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                          onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1.0)')}
                        />
                      </Box>
                      <CardContent>
                        <Typography
                          variant="h5"
                          sx={{ fontWeight: 'bold', mb: 1, fontFamily: "'Poppins', sans-serif" }}
                        >
                          {service.title}
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#ccc', lineHeight: 1.6 }}>
                          Expertly delivered protection and peace of mind for every situation.
                        </Typography>
                      </CardContent>
                    </Card>
                  </motion.div>
                </a>
              </Link>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 8, display: 'flex', justifyContent: 'center' }}>
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
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: '#e60000',
                },
              }}
            >
              View All Services
            </Button>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default ServicesShowcase;
