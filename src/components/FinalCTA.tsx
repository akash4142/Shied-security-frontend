import { Box, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import Link from 'next/link';

const FinalCTA = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        py: { xs: 10, md: 14 },
        background: 'linear-gradient(90deg, #ff0000 0%, #cc0000 100%)',
        textAlign: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Subtle background icon or texture effect */}
      <Box
        sx={{
          position: 'absolute',
          top: '-20%',
          left: '-20%',
          width: '200%',
          height: '200%',
          background: 'radial-gradient(circle at center, rgba(255,255,255,0.05) 0%, transparent 70%)',
          zIndex: 0,
        }}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: true }}
        style={{ position: 'relative', zIndex: 2 }}
      >
        <Typography
          variant="h3"
          sx={{
            color: '#fff',
            fontWeight: 'bold',
            mb: 2,
            fontSize: { xs: '2rem', md: '2.8rem' },
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          Let’s Build a Safer Tomorrow — Together
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: '#fff',
            maxWidth: '800px',
            mx: 'auto',
            mb: 5,
            fontSize: '1.1rem',
            fontWeight: 300,
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          Shield Security goes beyond traditional protection. With rapid response units,
          tailored plans, and elite personnel — we deliver unmatched security and peace of mind.
          Ready to feel secure?
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, flexWrap: 'wrap' }}>
          <Link href="/contact" passHref>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#fff',
                color: '#ff0000',
                fontWeight: 'bold',
                px: 5,
                py: 1.5,
                fontSize: '1rem',
                borderRadius: '30px',
                '&:hover': {
                  backgroundColor: '#f2f2f2',
                },
              }}
            >
              Contact Us
            </Button>
          </Link>

          <Link href="/quote" passHref>
            <Button
              variant="outlined"
              sx={{
                borderColor: '#fff',
                color: '#fff',
                px: 5,
                py: 1.5,
                fontSize: '1rem',
                borderRadius: '30px',
                fontWeight: 'bold',
                '&:hover': {
                  backgroundColor: '#fff',
                  color: '#ff0000',
                },
              }}
            >
              Request a Quote
            </Button>
          </Link>
        </Box>
      </motion.div>
    </Box>
  );
};

export default FinalCTA;
