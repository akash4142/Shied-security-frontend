import React from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const WhyFireWatchImportant = () => {
  return (
    <Box component="section" sx={{ width: '100%', minHeight: '600px' }}>
      <Grid container sx={{ minHeight: '600px' }}>
        {/* ✅ Full-width Image on the Left */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            position: 'relative',
            minHeight: { xs: '300px', md: '100%' },
          }}
        >
          <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
            <Image
              src="/images/fireWatch2.jpg" // 🔥 Replace with your firewatch image path
              alt="Why Fire Watch Security"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
            />
          </Box>
        </Grid>

        {/* ✅ Text Section with Background */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            backgroundColor: '#3a506b',
            color: '#f1f1f1',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            py: { xs: 6, md: 10 },
            px: { xs: 4, md: 8 },
            textAlign: 'left',
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: 'bold',
                fontSize: { xs: '2rem', md: '2.5rem' },
                mb: 3,
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              Why Fire Watch Security Is Important
            </Typography>

            <Typography
              sx={{
                fontSize: '1.1rem',
                lineHeight: 1.8,
                mb: 4,
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              Fire hazards can arise unexpectedly in construction zones, industrial facilities, and during alarm outages.
              Fire Watch Security ensures that these risks are closely monitored until systems are restored or hazards are eliminated.
              <br /><br />
              Our trained guards are equipped to detect signs of fire, ensure adherence to fire safety regulations, and initiate
              emergency response protocols when necessary — providing your site with vital protection and peace of mind.
            </Typography>

            <Link href="/quote" passHref>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#ff0000',
                  color: '#fff',
                  fontWeight: 'bold',
                  px: 5,
                  py: 1.5,
                  fontSize: '1rem',
                  borderRadius: '40px',
                  textTransform: 'none',
                  '&:hover': {
                    backgroundColor: '#e60000',
                  },
                }}
              >
                Request a Quote
              </Button>
            </Link>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WhyFireWatchImportant;
