
import React from 'react';
import { Grid, Typography, Button } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const OurMission = () => {
  return (
    <Grid
      container
      spacing={0}
      alignItems="stretch"
      sx={{
        width: '100%',
        m: 0,
        background: 'linear-gradient(90deg, #0f1114, #1c1f25)',
        color: '#f1f1f1',
        borderRadius: 0,
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
          height: { xs: '500px', md: '600px' },
        }}
      >
        <Image
          src="/images/uniformed2.jpg"
          alt="Our Mission"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          style={{ objectFit: 'cover' }}
        />
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
          backgroundColor: '#3a506b',
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
            Our Mission
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
           Our mission is to create safer communities by delivering innovative, tailored security solutions that protect people, assets, and environments. We aim to set the benchmark for security excellence through proactive strategies, skilled personnel, and a relentless focus on client peace of mind.
            <br />
            <br />
            We uphold the highest standards of professionalism, reliability, and integrity —
            offering responsive, tailored services in retail, commercial, residential, and event sectors.
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
  );
};

export default OurMission;
