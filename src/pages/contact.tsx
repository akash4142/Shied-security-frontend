import React, { useState } from 'react';
import { Container, Grid, Typography, TextField, Button } from '@mui/material';
import Image from 'next/image';
import { api } from '@/utils/api';

const Contact = () => {
    const [formData, setFormData] = useState<{ name: string; email: string; message: string }>({
        name: "",
        email: "",
        message: "",
      });
    
      // ✅ Correct type for input change
      const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  try {
    const response = await api.post('/contact', {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    });

    alert(response.data.message);
  } catch (error) {
    console.error("Contact Error:", error);
    alert("Failed to send message. Please try again.");
  }
};

  return (
    <>
      {/* Hero Section */}
      <section style={{ position: 'relative', height: '50vh', backgroundImage: 'url(/contact-banner.jpg)', backgroundSize: 'cover', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
        <div style={{ backgroundColor: 'rgba(0,0,0,0.6)', padding: '30px', borderRadius: '10px' }}>
          <Typography variant="h2" sx={{ color: '#fff', fontWeight: 'bold' }}>Contact Us</Typography>
          <Typography variant="h6" sx={{ color: '#ddd' }}>We’re here to help you with your security needs</Typography>
        </div>
      </section>

      {/* Contact Form & Info */}
      <Container sx={{ padding: '50px 0' }}>
        <Grid container spacing={6}>
          {/* Contact Form */}
          <Grid item xs={12} md={6}>
            <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#fff', marginBottom: '20px' }}>Get in Touch</Typography>
            <form onSubmit={handleSubmit} style={{ backgroundColor: '#222', padding: '30px', borderRadius: '10px' }}>
              <TextField fullWidth label="Full Name" name="name" onChange={handleInputChange} sx={{ marginBottom: '20px', backgroundColor: '#fff' }} />
              <TextField fullWidth label="Email Address" name="email" type="email" onChange={handleInputChange} sx={{ marginBottom: '20px', backgroundColor: '#fff' }} />
              <TextField fullWidth multiline rows={4} label="Your Message" name="message" onChange={handleInputChange} sx={{ marginBottom: '20px', backgroundColor: '#fff' }} />
              <Button type="submit" variant="contained" sx={{ backgroundColor: '#ff0000', fontSize: '18px', padding: '10px 20px' }}>Send Message</Button>
            </form>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={6}>
            <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#fff', marginBottom: '20px' }}>Contact Details</Typography>
            <Typography variant="h6" sx={{ color: '#fff' }}>📍 Office Address:</Typography>
            <Typography variant="body1" sx={{ color: '#ddd', marginBottom: '10px' }}>123 Security St, Toronto, ON</Typography>

            <Typography variant="h6" sx={{ color: '#fff' }}>📞 Phone:</Typography>
            <Typography variant="body1" sx={{ color: '#ddd', marginBottom: '10px' }}>+1 (123) 456-7890</Typography>

            <Typography variant="h6" sx={{ color: '#fff' }}>✉ Email:</Typography>
            <Typography variant="body1" sx={{ color: '#ddd', marginBottom: '10px' }}>info@shieldsecurity.com</Typography>

            <Image src="/contact-map.jpg" alt="Office Location" width={500} height={300} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Contact;
