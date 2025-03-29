import React, { useState } from 'react';
import { Container, Grid, Typography, TextField, Button, Box } from '@mui/material';
import Image from 'next/image';
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
      borderColor: '#444',
    },
    '&:hover fieldset': {
      borderColor: '#ff0000',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#ff0000',
    },
  },
  '& input': {
    color: '#fff',
  },
  '& textarea': {
    color: '#fff',
  },
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
    } catch (error) {
      console.error("Contact Error:", error);
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <>
      {/* Hero Section */}
      <Box sx={{ position: 'relative', height: '60vh', backgroundImage: 'url(/contact-banner.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Box sx={{ backgroundColor: 'rgba(0,0,0,0.6)', padding: 4, borderRadius: 2, textAlign: 'center' }}>
          <Typography variant="h2" sx={{ color: '#fff', fontWeight: 'bold' }}>Contact Us</Typography>
          <Typography variant="h6" sx={{ color: '#ccc' }}>We’re here to help you with your security needs</Typography>
        </Box>
      </Box>

      {/* Contact Form & Info */}
      <Container sx={{ py: 10 }}>
        <Grid container spacing={6}>
          {/* Form */}
          <Grid item xs={12} md={6}>
            <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#fff', mb: 3 }}>Get in Touch</Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ backgroundColor: '#111', p: 4, borderRadius: 2 }}>
              <TextField fullWidth label="Full Name" name="name" onChange={handleInputChange} sx={{ ...inputStyles, mb: 3 }} required />
              <TextField fullWidth label="Email Address" name="email" type="email" onChange={handleInputChange} sx={{ ...inputStyles, mb: 3 }} required />
              <TextField fullWidth label="Your Message" name="message" multiline rows={4} onChange={handleInputChange} sx={{ ...inputStyles, mb: 3 }} required />
              <Button type="submit" variant="contained" sx={{ backgroundColor: '#ff0000', fontSize: '16px', fontWeight: 'bold', px: 4, py: 1.5, '&:hover': { backgroundColor: '#cc0000' } }}>
                Send Message
              </Button>
            </Box>
          </Grid>

          {/* Info */}
          <Grid item xs={12} md={6}>
            <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#fff', mb: 3 }}>Contact Details</Typography>
            <Typography variant="h6" sx={{ color: '#fff' }}>📍 Office Address:</Typography>
            <Typography sx={{ color: '#bbb', mb: 2 }}>123 Security St, Toronto, ON</Typography>
            <Typography variant="h6" sx={{ color: '#fff' }}>📞 Phone:</Typography>
            <Typography sx={{ color: '#bbb', mb: 2 }}>+1 (123) 456-7890</Typography>
            <Typography variant="h6" sx={{ color: '#fff' }}>✉ Email:</Typography>
            <Typography sx={{ color: '#bbb', mb: 3 }}>info@shieldsecurity.com</Typography>
            <Image src="/contact-map.jpg" alt="Office Location" width={500} height={300} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Contact;
