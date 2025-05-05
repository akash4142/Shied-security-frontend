import React, { useState } from 'react';
import { Container, Grid, Typography, TextField, Button, Box } from '@mui/material';
import { motion } from 'framer-motion';
import { api } from '@/utils/api';

const inputStyles = {
  '& .MuiInputBase-root': { backgroundColor: '#f9f9f9', color: '#111' },
  '& .MuiInputLabel-root': { color: '#666' },
  '& .MuiOutlinedInput-root': {
    '& fieldset': { borderColor: '#ccc' },
    '&:hover fieldset': { borderColor: '#ff0000' },
    '&.Mui-focused fieldset': { borderColor: '#ff0000' },
  },
  '& input, & textarea': { color: '#111' },
};

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await api.post('/contact', formData);
      alert(response.data.message);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error("Contact Error:", error);
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <Box sx={{ backgroundColor: '#fff', color: '#111' }}>
      {/* ✅ Hero Section */}
      <Box
        sx={{
          position: 'relative',
          height: '90vh',
          backgroundImage: 'url(/images/2.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          px: 2,
        }}
      >
        <Box sx={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.65)', zIndex: 1 }} />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          style={{ zIndex: 2 }}
        >
          <Typography
            variant="h2"
            sx={{
              color: '#fff',
              fontWeight: 800,
              fontSize: { xs: '2.5rem', md: '4rem' },
              textTransform: 'uppercase',
              fontFamily: "'Bebas Neue', sans-serif",
              letterSpacing: 1,
              textAlign: 'center',
              textShadow: '4px 4px 10px rgba(255,255,255,0.6)',
            }}
          >
            Contact Us
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: '#fff',
              mt: 2,
              maxWidth: 700,
              mx: 'auto',
              fontWeight: 300,
              fontSize: { xs: '1rem', md: '1.2rem' },
              textAlign: 'center',
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            We&apos;re here to help. Let&apos;s connect.
          </Typography>
        </motion.div>
      </Box>

      {/* ✅ Contact Section */}
      <Container sx={{ py: { xs: 8, md: 12 } }}>
        <Grid container spacing={8} alignItems="stretch">
          {/* ✅ Contact Form */}
          <Grid item xs={12} md={6}>
            <motion.div initial="hidden" animate="visible" variants={fadeIn}>
              <Typography variant="h4" fontWeight={700} sx={{ mb: 4 }}>
                Send Us a Message
              </Typography>
              <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                  backgroundColor: '#fafafa',
                  p: 4,
                  borderRadius: 3,
                  boxShadow: '0 6px 30px rgba(0,0,0,0.1)',
                }}
              >
                <TextField fullWidth label="Full Name" name="name" value={formData.name} onChange={handleInputChange} sx={{ ...inputStyles, mb: 3 }} required />
                <TextField fullWidth label="Email Address" name="email" type="email" value={formData.email} onChange={handleInputChange} sx={{ ...inputStyles, mb: 3 }} required />
                <TextField fullWidth label="Your Message" name="message" multiline rows={5} value={formData.message} onChange={handleInputChange} sx={{ ...inputStyles, mb: 4 }} required />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    backgroundColor: '#ff0000',
                    fontWeight: 'bold',
                    fontSize: '16px',
                    py: 1.5,
                    '&:hover': { backgroundColor: '#cc0000' },
                  }}
                >
                  Send Message
                </Button>
              </Box>
            </motion.div>
          </Grid>

          {/* ✅ Contact Info */}
          <Grid item xs={12} md={6}>
            <motion.div initial="hidden" animate="visible" variants={fadeIn}>
              <Typography variant="h4" fontWeight={700} sx={{ mb: 4 }}>
                Get in Touch
              </Typography>
              <Box
                sx={{
                  backgroundColor: '#fafafa',
                  p: 4,
                  borderRadius: 3,
                  boxShadow: '0 6px 30px rgba(0,0,0,0.1)',
                }}
              >
                <Box sx={{ mb: 3 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>📍 Office Address</Typography>
                  <Typography>Canmore, Alberta, Canada</Typography>
                </Box>
                <Box sx={{ mb: 3 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>📞 Phone</Typography>
                  <Typography>+1 (403)-953-1998</Typography>
                </Box>
                <Box sx={{ mb: 0 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>✉ Email</Typography>
                  <Typography>shieldsecure82@gmail.com</Typography>
                </Box>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
