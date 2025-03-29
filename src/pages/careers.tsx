import React from 'react';
import { Container, Grid, Typography, Card, CardContent, Button } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

const jobListings = [
  { title: 'Security Guard', location: 'Toronto, ON', type: 'Full-Time', img: '/images/1.jpg' },
  { title: 'Mobile Patrol Officer', location: 'Vancouver, BC', type: 'Part-Time', img: '/images/2.jpg' },
  { title: 'Event Security Officer', location: 'Calgary, AB', type: 'Contract', img: '/images/3.jpg' },
];

const Careers = () => {
  return (
    <>
      {/* Hero Section */}
      <section style={{ position: 'relative', height: '50vh', backgroundImage: 'url(/images/1.jpg)', backgroundSize: 'cover', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
        <div style={{ backgroundColor: 'rgba(0,0,0,0.6)', padding: '30px', borderRadius: '10px' }}>
          <Typography variant="h2" sx={{ color: '#fff', fontWeight: 'bold' }}>Join Our Team</Typography>
          <Typography variant="h6" sx={{ color: '#ddd' }}>Start your career in professional security services</Typography>
        </div>
      </section>

      {/* Job Listings */}
      <Container sx={{ padding: '50px 0' }}>
        <Typography variant="h3" sx={{ fontWeight: 'bold', textAlign: 'center', color: '#fff', marginBottom: '30px' }}>Current Job Openings</Typography>
        <Grid container spacing={4}>
          {jobListings.map((job, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={{ backgroundColor: '#222', color: '#fff', textAlign: 'center', padding: '20px' }}>
                <Image src={job.img} alt={job.title} width={400} height={250} />
                <CardContent>
                  <Typography variant="h5" sx={{ fontWeight: 'bold' }}>{job.title}</Typography>
                  <Typography variant="body2" sx={{ margin: '10px 0' }}>{job.location} | {job.type}</Typography>
                  <Link href={`/apply?job=${encodeURIComponent(job.title)}`} passHref>
                    <Button variant="contained" sx={{ backgroundColor: '#ff0000', color: '#fff' }}>Apply Now</Button>
                  </Link>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Why Work With Us */}
      <Container sx={{ padding: '50px 0', textAlign: 'center' }}>
        <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#fff', marginBottom: '20px' }}>Why Work With Shield Security?</Typography>
        <Grid container spacing={4} justifyContent="center">
          {[
            'Competitive Pay & Benefits',
            'Flexible Work Schedules',
            'Opportunities for Career Growth',
            'Comprehensive Training Programs',
          ].map((benefit, index) => (
            <Grid item xs={12} md={3} key={index}>
              <Typography variant="h6" sx={{ backgroundColor: '#333', padding: '20px', borderRadius: '10px', color: '#fff' }}>{benefit}</Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Careers;