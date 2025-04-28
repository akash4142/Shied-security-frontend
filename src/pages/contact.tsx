import React, { useState } from 'react';
import { Container, Grid, Typography, TextField, Button, Box } from '@mui/material';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { api } from '@/utils/api';

const inputStyles = {
  '& .MuiInputBase-root': {
    backgroundColor: '#1e1e1e',
    color: '#fff',
  },
  '& .MuiInputLabel-root': {
    color: '#bbb',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#333',
    },
    '&:hover fieldset': {
      borderColor: '#ff0000',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#ff0000',
    },
  },
  '& input, & textarea': {
    color: '#fff',
  },
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
      setFormData({ name: '', email: '', message: '' }); // Reset form after success
    } catch (error) {
      console.error("Contact Error:", error);
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          height: { xs: '50vh', md: '70vh' },
          backgroundImage: 'url(/contact-banner.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          component={motion.div}
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          sx={{
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            padding: { xs: 3, md: 6 },
            borderRadius: 3,
            textAlign: 'center',
            maxWidth: '90%',
          }}
        >
          <Typography variant="h2" sx={{ color: '#fff', fontWeight: 'bold', mb: 2, fontSize: { xs: '32px', md: '48px' } }}>
            Contact Us
          </Typography>
          <Typography variant="h6" sx={{ color: '#ccc', fontSize: { xs: '16px', md: '20px' } }}>
            We're here to support your security needs.
          </Typography>
        </Box>
      </Box>

      {/* Contact Form & Info */}
      <Container sx={{ py: { xs: 8, md: 12 } }}>
        <Grid container spacing={8} alignItems="center">
          {/* Form */}
          <Grid item xs={12} md={6}>
            <motion.div initial="hidden" animate="visible" variants={fadeIn}>
              <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#fff', mb: 4 }}>
                Get in Touch
              </Typography>
              <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                  backgroundColor: '#111',
                  p: { xs: 3, md: 4 },
                  borderRadius: 3,
                  boxShadow: '0 4px 20px rgba(0,0,0,0.7)',
                }}
              >
                <TextField
                  fullWidth
                  label="Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  sx={{ ...inputStyles, mb: 3 }}
                  required
                />
                <TextField
                  fullWidth
                  label="Email Address"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  sx={{ ...inputStyles, mb: 3 }}
                  required
                />
                <TextField
                  fullWidth
                  label="Your Message"
                  name="message"
                  multiline
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  sx={{ ...inputStyles, mb: 4 }}
                  required
                />
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  sx={{
                    backgroundColor: '#ff0000',
                    fontWeight: 'bold',
                    fontSize: '16px',
                    paddingY: 1.5,
                    '&:hover': { backgroundColor: '#cc0000' },
                  }}
                >
                  Send Message
                </Button>
              </Box>
            </motion.div>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={6}>
            <motion.div initial="hidden" animate="visible" variants={fadeIn}>
              <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#fff', mb: 4 }}>
                Contact Details
              </Typography>
              <Box sx={{ color: '#bbb', mb: 4 }}>
                <Typography variant="h6" sx={{ color: '#fff', mb: 1 }}>
                  📍 Office Address:
                </Typography>
                <Typography sx={{ mb: 2 }}>
                  123 Security Street, Toronto, ON, Canada
                </Typography>

                <Typography variant="h6" sx={{ color: '#fff', mb: 1 }}>
                  📞 Phone:
                </Typography>
                <Typography sx={{ mb: 2 }}>
                  +1 (123) 456-7890
                </Typography>

                <Typography variant="h6" sx={{ color: '#fff', mb: 1 }}>
                  ✉ Email:
                </Typography>
                <Typography sx={{ mb: 2 }}>
                  info@shieldsecurity.com
                </Typography>
              </Box>
              <Box
                component={motion.div}
                whileHover={{ scale: 1.02 }}
                sx={{
                  overflow: 'hidden',
                  borderRadius: 3,
                  boxShadow: '0 4px 20px rgba(0,0,0,0.6)',
                }}
              >
                
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Contact;
