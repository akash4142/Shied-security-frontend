import React from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const WhyPatrolSecurityImportant = () => {
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
              src="/images/2.jpg"
              alt="Why Patrol Security"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
            />
          </Box>
        </Grid>

        {/* ✅ Text Section with Background Color */}
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
              Why Patrol Security Is Critical
            </Typography>

            <Typography
              sx={{
                fontSize: '1.1rem',
                lineHeight: 1.8,
                mb: 4,
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              Patrol security services are essential for maintaining a visible, active presence that deters crime and ensures continuous surveillance across your property. From nightly lock-ups to randomized drive-bys, patrol officers provide flexible and cost-effective protection.
              <br /><br />
              These mobile units are equipped to spot suspicious activity, respond quickly to incidents, and maintain order with professionalism. Their presence reassures tenants, employees, and visitors — creating a safer, more secure environment through consistency and vigilance.
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

export default WhyPatrolSecurityImportant;
