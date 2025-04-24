// pages/index.tsx

import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import Link from 'next/link';
import { motion } from 'framer-motion';
import TestimonialsSection from '@/components/TestimonialsSection';
import ServicesShowcase from '@/components/serviceShowcase';
import RequestQuote from '@/components/RequestQuote';
import ClientLogoCarousel from '@/components/ClientLogoCarousel';
import OurMission from '@/components/ourMission';
import Head from 'next/head';
import FinalCTA from '@/components/FinalCTA';
import GoogleReviewBadge from '@/components/GoogleReviewBadge';

const Home = () => {
  return (
    <>
      <Head>
        <style>{`body { font-family: 'Poppins', sans-serif; background: linear-gradient(180deg, #0f1114 0%, #1c1f25 100%); color: #f1f1f1; margin: 0; padding: 0; }`}</style>
      </Head>

      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
    height: '100vh',
    width: '100%',
    backgroundImage: 'url(/images/HomePage.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    px: { xs: 2, md: 8 },
    pt: { xs: '40px', md: '100px' }, // Adjust for any fixed Navbar height
    zIndex: 1,
    overflow: 'hidden',
        }}
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Box sx={{ maxWidth: 600,  p: 4, borderRadius: 2 }}>
            <Typography variant="h2" sx={{ fontWeight: 'bold', color: '#fff' }}>
              Security Services You Can Trust
            </Typography>
            <Typography variant="h6" sx={{ mt: 2, mb: 4, color: '#e0e0e0' }}>
              Tailored Protection for Every Environment
            </Typography>
            <Link href="/quote" passHref>
              <Button variant="contained" sx={{
                backgroundColor: '#ff0000',
                fontSize: '18px',
                px: 4,
                '&:hover': {
                  backgroundColor: '#cc0000',
                },
              }}>
                Request a Quote
              </Button>
            </Link>
          </Box>
        </motion.div>
      </Box>

      {/* Mission Section */}
      <Box sx={{ py: 5, textAlign: 'center', backgroundColor: 'white' }}>
  <Container>
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 3, color: 'black' }}>
        Shield Secure&apos;s Commitment
      </Typography>
      <Typography variant="body1" sx={{ color: 'black', maxWidth: '900px', margin: '0 auto' }}>
        At Shield Secure, our mission is to deliver uncompromising security solutions that prioritize the safety of people, the protection of assets, and the security of environments. We are committed to maintaining the highest standards of professionalism, reliability, and integrity in every service we provide. Our team is extensively trained and equipped to respond effectively to dynamic security challenges across diverse industries, including retail, residential, commercial, and event settings.
      </Typography>
    </motion.div>
  </Container>
</Box>


      <OurMission />
      <ServicesShowcase currentService='Mobile Patrol'/>
      <TestimonialsSection />
      <ClientLogoCarousel />
      <FinalCTA/>
      <RequestQuote />
      <GoogleReviewBadge/>
    </>
  );
};

export default Home;
