import React, { useState } from 'react';
import { Container, Grid, Typography, Card, CardContent, Button, TextField } from '@mui/material';
import {api} from '@/utils/api'
import Image from 'next/image';

const jobListings = [
  { title: 'Security Guard', location: 'Toronto, ON', type: 'Full-Time', img: '/images/1.jpg' },
  { title: 'Mobile Patrol Officer', location: 'Vancouver, BC', type: 'Part-Time', img: '/images/2.jpg' },
  { title: 'Event Security Officer', location: 'Calgary, AB', type: 'Contract', img: '/images/3.jpg' },
];

const Careers = () => {
    const [formData, setFormData] = useState<{ name: string; email: string; resume: File | null }>({
        name: "",
        email: "",
        resume: null, // ✅ Explicitly allow null
      });
 
  // ✅ Fix: Add correct type for event
 const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFormData({ ...formData, resume: e.target.files[0] });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await api.post("/jobs", {
        name: formData.name,
        email: formData.email,
        resumeUrl: "https://your-upload-url.com/resume.pdf", // Replace with actual file upload logic
      });
  
      alert(response.data.message);
    } catch (error) {
      console.error("Application Error:", error);
      alert("Failed to submit application. Please try again.");
    }
  };
  

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
                  <Button variant="contained" sx={{ backgroundColor: '#ff0000', color: '#fff' }}>Apply Now</Button>
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

      {/* Application Form */}
      <Container sx={{ padding: '50px 0', textAlign: 'center' }}>
        <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#fff', marginBottom: '20px' }}>Apply Now</Typography>
        <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: 'auto', backgroundColor: '#222', padding: '30px', borderRadius: '10px' }}>
          <TextField fullWidth label="Full Name" name="name" onChange={handleInputChange} sx={{ marginBottom: '20px', backgroundColor: '#fff' }} />
          <TextField fullWidth label="Email Address" name="email" type="email" onChange={handleInputChange} sx={{ marginBottom: '20px', backgroundColor: '#fff' }} />
          <input type="file" accept=".pdf,.docx" onChange={handleFileChange} style={{ marginBottom: '20px', color: '#fff' }} />
          <Button type="submit" variant="contained" sx={{ backgroundColor: '#ff0000', fontSize: '18px', padding: '10px 20px' }}>Submit Application</Button>
        </form>
      </Container>
    </>
  );
};

export default Careers;
