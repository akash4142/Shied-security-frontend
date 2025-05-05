import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Container, Grid, Typography, TextField, Button } from '@mui/material';

const ApplyNowPage = () => {
  const router = useRouter();
  const [jobTitle, setJobTitle] = useState('');

  useEffect(() => {
    if (router.query.job) {
      setJobTitle(String(router.query.job));
    }
  }, [router.query.job]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resume: null as File | null,
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({ ...prev, resume: file }));
    }
  };
  

 
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.resume) {
      alert("Please upload a resume.");
      return;
    }
  
    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    data.append("message", formData.message);
    data.append("resume", formData.resume);
    data.append("job", jobTitle); // optional
  
    try {
      console.log("Sending to:", `${process.env.NEXT_PUBLIC_API_URL}/jobs`);
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/jobs`, {
        method: "POST",
        body: data,
      });
      
  
      const result = await response.json();
      if (response.ok) {
        alert(result.message);
      } else {
        alert(result.error || "Submission failed.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Failed to submit. Try again later.");
    }
  };
  

  return (
    <>
      <section style={{ position: 'relative', height: '80vh', backgroundImage: 'url(/.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
        <div style={{ backgroundColor: 'rgba(0,0,0,0.6)', padding: '30px', borderRadius: '10px' }}>
          <Typography variant="h2" sx={{ color: '#fff', fontWeight: 'bold' }}>Apply Now</Typography>
          <Typography variant="h6" sx={{ color: '#ddd' }}>Join our growing team of security professionals</Typography>
        </div>
      </section>

      <Container sx={{ padding: '50px 0' }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#fff', marginBottom: '20px', textAlign: 'center' }}>Start Your Application</Typography>
        {jobTitle && (
          <Typography variant="h6" sx={{ color: '#ff0000', textAlign: 'center', marginBottom: '30px' }}>Applying for: {jobTitle}</Typography>
        )}

        <form onSubmit={handleSubmit} style={{ maxWidth: '700px', margin: 'auto', backgroundColor: '#222', padding: '30px', borderRadius: '10px' }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField fullWidth label="Full Name" name="name" value={formData.name} onChange={handleChange} sx={{ backgroundColor: '#fff' }} required />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField fullWidth label="Email" name="email" value={formData.email} onChange={handleChange} sx={{ backgroundColor: '#fff' }} required />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField fullWidth label="Phone Number" name="phone" value={formData.phone} onChange={handleChange} sx={{ backgroundColor: '#fff' }} />
            </Grid>
            <Grid item xs={12} md={6}>
              <Button variant="outlined" component="label" fullWidth sx={{ height: '56px', color: '#fff', borderColor: '#fff' }}>
                Upload Resume
                <input type="file" hidden onChange={handleFileChange} />
              </Button>
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth multiline rows={4} label="Message (Optional)" name="message" value={formData.message} onChange={handleChange} sx={{ backgroundColor: '#fff' }} />
            </Grid>
            <Grid item xs={12} sx={{ textAlign: 'center', marginTop: '20px' }}>
              <Button type="submit" variant="contained" sx={{ backgroundColor: '#ff0000', fontSize: '18px', padding: '10px 30px', fontWeight: 'bold' }}>
                Submit Application
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </>
  );
};

export default ApplyNowPage;
