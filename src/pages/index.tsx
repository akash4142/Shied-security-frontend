import React from 'react';
import { Container, Grid, Typography, Button, Card, CardContent } from '@mui/material';
import Image from 'next/image';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section style={{ position: 'relative', height: '100vh', backgroundImage: 'url(/images/1.jpg)', backgroundSize: 'cover', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center',width:"100%" }}>
        <div style={{ backgroundColor: 'rgba(0,0,0,0.6)', padding: '50px', borderRadius: '10px' }}>
          <Typography variant="h2" sx={{ color: '#fff', fontWeight: 'bold' }}>Professional Security Services</Typography>
          <Typography variant="h6" sx={{ color: '#ddd', marginBottom: '20px' }}>Shield Security – Your Trusted Protection Partner</Typography>
          <Button variant="contained" sx={{ backgroundColor: '#ff0000', fontSize: '18px', padding: '10px 20px' }}>Get a Quote</Button>
        </div>
      </section>

      {/* About Section */}
      <Container sx={{ padding: '50px 0', textAlign: 'center' }}>
        <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#fff', marginBottom: '20px' }}>Who We Are</Typography>
        <Typography variant="body1" sx={{ color: '#ddd', maxWidth: '800px', margin: 'auto' }}>
          Shield Security is a trusted provider of professional security services, ensuring safety for businesses and individuals across Canada.
        </Typography>
      </Container>

      {/* Services Overview */}
      <Container sx={{ padding: '50px 0' }}>
        <Typography variant="h3" sx={{ fontWeight: 'bold', textAlign: 'center', color: '#fff', marginBottom: '30px' }}>Our Services</Typography>
        <Grid container spacing={4}>
          {[
            { title: 'Mobile Patrol', img: '/images/2.jpg' },
            { title: 'Event Security', img: '/images/3.jpg' },
            { title: 'Corporate Security', img: '/images/4.jpg' },
          ].map((service, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={{ backgroundColor: '#222', color: '#fff' }}>
                <Image src={service.img} alt={service.title} width={400} height={250} />
                <CardContent>
                  <Typography variant="h5">{service.title}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Why Choose Us? */}
      <Container sx={{ padding: '50px 0', textAlign: 'center' }}>
        <Typography variant="h3" sx={{ fontWeight: 'bold', color: '', marginBottom: '20px' }}>Why Choose Shield Security?</Typography>
        <Grid container spacing={4} justifyContent="center">
          {[
            '24/7 Security Monitoring',
            'Highly Trained Professionals',
            'Customized Security Plans',
            'Advanced Technology Solutions',
          ].map((reason, index) => (
            <Grid item xs={12} md={3} key={index}>
              <Typography variant="h6" sx={{ backgroundColor: '#333', padding: '20px', borderRadius: '10px', color: '#fff' }}>{reason}</Typography>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Testimonials */}
      <Container sx={{ padding: '50px 0', textAlign: 'center' }}>
        <Typography variant="h3" sx={{ fontWeight: 'bold', color: '', marginBottom: '20px' }}>What Our Clients Say</Typography>
        <Grid container spacing={4} justifyContent="center">
          {[
            { name: 'John Doe', feedback: 'Best security service we have ever hired!' },
            { name: 'Jane Smith', feedback: 'Professional and reliable team, highly recommended!' },
          ].map((testimonial, index) => (
            <Grid item xs={12} md={5} key={index}>
              <Typography variant="body1" sx={{ backgroundColor: '#222', padding: '20px', borderRadius: '10px', color: '#fff' }}>&quot;{testimonial.feedback}&quot;</Typography>
              <Typography variant="subtitle1" sx={{ color: '#ddd', marginTop: '10px' }}>- {testimonial.name}</Typography>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Contact CTA */}
      <section style={{ backgroundColor: '#ff0000', padding: '50px 0', textAlign: 'center' }}>
        <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#fff' }}>Get in Touch</Typography>
        <Typography variant="body1" sx={{ color: '#ddd', marginBottom: '20px' }}>We are here to provide security solutions tailored to your needs.</Typography>
        <Button variant="contained" sx={{ backgroundColor: '#fff', color: '#ff0000', fontSize: '18px', padding: '10px 20px' }}>Contact Us</Button>
      </section>
    </>
  );
};

export default Home;