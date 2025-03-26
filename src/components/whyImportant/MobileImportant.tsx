import React from 'react';
import { Box, Container, Grid, Typography, Button } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const WhyMobileSecurityImportant = () => {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(90deg, #0f1114, #1c1f25)',
        color: '#f1f1f1',
      }}
    >
      <Container maxWidth="xl">
        <Grid
          container
          spacing={0}
          alignItems="stretch"
          sx={{
            borderRadius: 3,
            overflow: 'hidden',
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)',
          }}
        >
          {/* Image Left */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              position: 'relative',
              height: { xs: '600px' },
            }}
          >
            <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
              <Image
                src="/images/2.jpg"
                alt="Why Uniformed Security"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
              />
            </Box>
          </Grid>

          {/* Text Right */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              px: { xs: 3, md: 6 },
              py: { xs: 6, md: 8 },
              backgroundColor: '#1c1f25',
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
                  mb: 3,
                  fontSize: { xs: '2rem', md: '2.5rem' },
                  color: '#fff',
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                Why Mobile Security Is Critical
              </Typography>

              <Typography
                sx={{
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  mb: 4,
                  color: '#cfcfcf',
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                Mobile security services are designed to deliver agile protection across expansive or multi-site environments.
From commercial complexes to construction zones, our patrol units respond swiftly to incidents, deter unauthorized access, and ensure high-visibility deterrence.

<br /><br />

Equipped with GPS-tracked vehicles and trained for dynamic response, these professionals operate with speed and precision—securing your premises through scheduled and randomized patrols. Their mobility and presence provide unmatched peace of mind, day and night.
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
      </Container>
    </Box>
  );
};

export default WhyMobileSecurityImportant;
