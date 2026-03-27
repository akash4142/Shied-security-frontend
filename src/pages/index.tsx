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
import VacantPropertyCheck from '@/components/vacantPropertyCheck';
import CommunityImpact from '@/components/CommunityImpact';

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
    backgroundImage: 'url(/images/ourmission.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    px: { xs: 2, md: 8 },
    pt: { xs: '140px', md: '100px' }, // Adjust for any fixed Navbar height
    overflow: 'hidden',
  }}
>
  {/* 🔥 Dark Overlay inside the background box */}
  <Box
    sx={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0,0,0,0.5)', // Dark overlay
      zIndex: 1, // behind text
    }}
  />

  {/* 🔥 Text Content */}
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1 }}
    style={{ position: 'relative', zIndex: 2 }} // ABOVE the overlay
  >
    <Box
  sx={{
    maxWidth: '900px',
    p: { xs: 3, md: 6 },
  }}
>
  <Typography
    variant="h2"
    sx={{
      fontWeight: 800,
      color: '#fff',
      fontSize: { xs: '24px', md: '60px' },
      lineHeight: 1.2,
    }}
  >
    Security Company in Canmore & Banff
  </Typography>

  <Typography
    sx={{
      mt: 2,
      color: '#ff4d4d',
      fontWeight: 1000,
      letterSpacing: '2px',
      fontSize: '18px',
    }}
  >
    YOU CAN TRUST
  </Typography>

  <Typography
  variant="h6"
  sx={{
    mt: 1,
    mb: 4,
    color: '#e0e0e0',
    fontSize: { xs: '14px', md: '18px' },
    lineHeight: 1.6,
    maxWidth: '700px',
  }}
>
  Professional security services for hotels, events & weddings, mobile patrols, construction sites, and 24/7 on-call protection across Banff, Canmore, and Alberta.
</Typography>

  <Link href="/quote" passHref legacyBehavior>
    <Button
      variant="contained"
      sx={{
        backgroundColor: '#ff0000',
        fontSize: { xs: '12px', md: '16px' },
        px: 5,
        py: 1.5,
        borderRadius: '30px',
        fontWeight: 'bold',
        textTransform: 'none',
        '&:hover': {
          backgroundColor: '#cc0000',
        },
      }}
    >
      Request a Quote
    </Button>
  </Link>
</Box>
  </motion.div>
</Box>
<Box sx={{ py: 10, backgroundColor: '#0f1114', textAlign: 'center' }}>
  <Container>
    <Typography
      variant="h3"
      sx={{
        fontWeight: 700,
        mb: 2,
        color: '#fff',
      }}
    >
      Why Choose Shield Secure Services
    </Typography>

    <Typography
      sx={{
        color: '#aaa',
        mb: 6,
        fontSize: '16px',
      }}
    >
      Professional. Reliable. Trusted across Canmore & Banff.
    </Typography>

    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
        gap: 4,
      }}
    >
      {[
        '24/7 Availability',
        'Fast Response Time',
        'Local Canmore & Banff Presence',
        'Fully Licensed & Insured',
        'Trusted by Hotels, Properties & Events',
        'Construction Site Security Experts',
      ].map((item, index) => (
        <Box
          key={index}
          sx={{
            p: 4,
            borderRadius: 3,
            background: 'linear-gradient(145deg, #1a1d22, #111)',
            border: '1px solid rgba(255,255,255,0.06)',
            transition: 'all 0.3s ease',
            position: 'relative',
            overflow: 'hidden',

            '&:hover': {
              transform: 'translateY(-8px)',
              borderColor: '#ff0000',
              boxShadow: '0 10px 40px rgba(255,0,0,0.2)',
            },
          }}
        >
          <Typography
            sx={{
              color: '#fff',
              fontWeight: 600,
              fontSize: '17px',
            }}
          >
            {item}
          </Typography>
        </Box>
      ))}
    </Box>
  </Container>
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
      <Typography
        variant="h3"
        sx={{ fontWeight: 'bold', mb: 3, color: 'black' }}
      >
        Shield Secure&apos;s Commitment
      </Typography>
      <Typography
        variant="body1"
        sx={{ color: 'black', maxWidth: '900px', margin: '0 auto' }}
      >
        At Shield Secure, we pledge to be more than a security provider — we are a trusted partner in safeguarding what matters most to you. Our commitment is to deliver dependable, adaptable, and discreet protection that meets the unique demands of every client. Whether securing high-traffic retail spaces, private residences, corporate facilities, or large-scale events, we stand for unwavering professionalism, integrity, and readiness in every assignment.
      </Typography>
    </motion.div>
  </Container>
</Box>



      <OurMission />
      <ServicesShowcase currentService='Mobile Patrol'/>
      <CommunityImpact />   {/* ADD HERE */}
      <VacantPropertyCheck/>
      <TestimonialsSection/>
      <ClientLogoCarousel />
      <FinalCTA/>
      <RequestQuote />
      <GoogleReviewBadge/>
    </>
  );
};

export default Home;
