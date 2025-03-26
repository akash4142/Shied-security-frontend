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
          backgroundImage: 'url(/images/3.jpg)',
          //backdropFilter: "blur(10px)",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'left',
          px: 4,
          paddingTop:"100px"
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
      <Container sx={{ py: 10, textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 3, color: '#ffffff' }}>
            Shield Security&apos;s Commitment
          </Typography>
          <Typography variant="body1" sx={{ color: '#cfcfcf', maxWidth: '900px', margin: '0 auto' }}>
            At Shield Security, our mission is to deliver uncompromising security solutions that prioritize the safety of people, the protection of assets, and the security of environments. We are committed to maintaining the highest standards of professionalism, reliability, and integrity in every service we provide. Our team is extensively trained and equipped to respond effectively to dynamic security challenges across diverse industries, including retail, residential, commercial, and event settings.
          </Typography>
        </motion.div>
      </Container>

      <OurMission />
      <ServicesShowcase currentService='Mobile Patrol'/>
      <TestimonialsSection />
      <ClientLogoCarousel />
      <FinalCTA/>
      <RequestQuote />
    </>
  );
};

export default Home;
