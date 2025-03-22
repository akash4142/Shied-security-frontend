import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography, Card } from '@mui/material';
//import Image from 'next/image';
import {api} from '@/utils/api';

interface Testimonial{
  name: string;
  review: string;
}

const Testimonials = () => {
  const [testimonials , setTestimonials] = useState<Testimonial[]>([]);

  useEffect(()=>{
    const fetchTestimonials = async ()=>{
      try{
        const response = await api.get('/testimonials');
        setTestimonials(response.data);
      }catch(error){
        console.error("Testimonials Fetch Error: ",error);
      }
    };
    fetchTestimonials();
  },[])
  return (
    <>
      {/* Hero Section */}
      <section style={{ position: 'relative', height: '50vh', backgroundImage: 'url(/testimonials-banner.jpg)', backgroundSize: 'cover', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
        <div style={{ backgroundColor: 'rgba(0,0,0,0.6)', padding: '30px', borderRadius: '10px' }}>
          <Typography variant="h2" sx={{ color: '#fff', fontWeight: 'bold' }}>What Our Clients Say</Typography>
          <Typography variant="h6" sx={{ color: '#ddd' }}>Trusted by businesses and individuals across Canada</Typography>
        </div>
      </section>

      {/* Display testimonials dynamically */}
      <Container sx={{ padding: '50px 0' }}>
        <Typography variant="h3" sx={{ fontWeight: 'bold', textAlign: 'center', color: '#fff', marginBottom: '30px' }}>Client Testimonials</Typography>
        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={{ backgroundColor: '#222', color: '#fff', textAlign: 'center', padding: '20px' }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{testimonial.name}</Typography>
                <Typography variant="body2" sx={{ marginTop: '10px' }}>&quot;{testimonial.review}&quot;</Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Why Trust Us */}
      <Container sx={{ padding: '50px 0', textAlign: 'center' }}>
        <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#fff', marginBottom: '20px' }}>Why Clients Choose Shield Security</Typography>
        <Grid container spacing={4} justifyContent="center">
          {[
            'Highly Trained Security Professionals',
            'Fast Response Time',
            'Tailored Security Solutions',
            'Customer Satisfaction Guarantee',
          ].map((benefit, index) => (
            <Grid item xs={12} md={3} key={index}>
              <Typography variant="h6" sx={{ backgroundColor: '#333', padding: '20px', borderRadius: '10px', color: '#fff' }}>{benefit}</Typography>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* CTA Section */}
      <section style={{ backgroundColor: '#ff0000', padding: '50px 0', textAlign: 'center' }}>
        <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#fff' }}>Join Our Satisfied Clients</Typography>
        <Typography variant="body1" sx={{ color: '#ddd', marginBottom: '20px' }}>Contact us today to experience top-tier security services.</Typography>
        <button style={{ backgroundColor: '#fff', color: '#ff0000', fontSize: '18px', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Get in Touch</button>
      </section>
    </>
  );
};

export default Testimonials;
