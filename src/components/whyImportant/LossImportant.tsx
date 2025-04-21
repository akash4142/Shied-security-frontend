import React from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const WhyLossSecurityImportant = () => {
  return (
    <Box component="section" sx={{ width: '100%', minHeight: '600px' }}>
      <Grid container sx={{ minHeight: '600px' }}>
        {/* ✅ Full-width Image Left */}
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
              src="/images/2.jpg"
              alt="Why Loss Prevention"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
            />
          </Box>
        </Grid>

        {/* ✅ Text Section Right with #3a506b Background */}
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
              Why Loss Prevention Is Critical
            </Typography>

            <Typography
              sx={{
                fontSize: '1.1rem',
                lineHeight: 1.8,
                mb: 4,
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              Loss prevention services are designed to protect revenue and assets in environments vulnerable to theft and shrinkage.
              From employee dishonesty to external shoplifting, our specialists are trained to identify, deter, and respond to suspicious behavior with speed and professionalism.
              <br /><br />
              These experts operate calmly and efficiently—monitoring environments, supporting investigations, and reinforcing your internal controls.
              Their deep knowledge of retail operations and investigative procedures provides strategic protection where it matters most.
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

export default WhyLossSecurityImportant;
