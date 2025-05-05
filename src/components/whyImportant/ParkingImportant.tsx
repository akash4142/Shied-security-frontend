import React from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const ParkingImportant: React.FC = () => {
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
              src="/images/1.jpg" // Make sure this image exists
              alt="Why Parking Enforcement"
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
              Why Parking Enforcement Matters
            </Typography>

            <Typography
              sx={{
                fontSize: '1.1rem',
                lineHeight: 1.8,
                mb: 4,
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              Parking enforcement ensures access, fairness, and safety in high-traffic zones. From managing lot capacity to addressing illegal parking,
              our officers provide structure and accountability to private and commercial spaces.
              <br /><br />
              Their presence deters violations, promotes compliance, and improves the overall experience for tenants, customers, and visitors.
              With training in bylaw awareness and conflict resolution, they bring professionalism to every interaction.
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

export default ParkingImportant;
