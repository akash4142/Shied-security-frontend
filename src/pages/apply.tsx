import React, { useState , ChangeEvent,FormEvent } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
} from "@mui/material";

const ApplyNowPage = () => {

  type FormDataType = {
    name: string;
    email: string;
    phone: string;
    resume: File | null;
    message: string;
  };
  
  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    email: "",
    phone: "",
    resume: null,
    message: "",
  });
  

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, resume: e.target.files[0] });
    }
  };
  

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // You can connect to the backend here via Axios
    console.log(formData);
    alert("Application submitted successfully!");
  };

  return (
    <>
      {/* Hero Section */}
      <section
        style={{
          position: "relative",
          height: "50vh",
          backgroundImage: "url(/apply-banner.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(0,0,0,0.6)",
            padding: "30px",
            borderRadius: "10px",
          }}
        >
          <Typography variant="h2" sx={{ color: "#fff", fontWeight: "bold" }}>
            Apply Now
          </Typography>
          <Typography variant="h6" sx={{ color: "#ddd" }}>
            Join our growing team of security professionals
          </Typography>
        </div>
      </section>

      {/* Form Section */}
      <Container sx={{ padding: "50px 0" }}>
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", color: "#fff", marginBottom: "20px", textAlign: "center" }}
        >
          Start Your Application
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "#ccc", maxWidth: "700px", margin: "auto", textAlign: "center", marginBottom: "40px" }}
        >
          We&apos;re always looking for passionate and professional individuals to join our team.
          Submit your details and we&apos;ll be in touch.
        </Typography>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                sx={{ backgroundColor: "#fff" }}
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                sx={{ backgroundColor: "#fff" }}
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Phone Number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                sx={{ backgroundColor: "#fff" }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Button
                variant="outlined"
                component="label"
                fullWidth
                sx={{ height: "56px", color: "#fff", borderColor: "#fff" }}
              >
                Upload Resume
                <input type="file" hidden onChange={handleFileChange} />
              </Button>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={4}
                label="Message (Optional)"
                name="message"
                value={formData.message}
                onChange={handleChange}
                sx={{ backgroundColor: "#fff" }}
              />
            </Grid>
            <Grid item xs={12} sx={{ textAlign: "center", marginTop: "20px" }}>
              <Button
                variant="contained"
                type="submit"
                sx={{ backgroundColor: "#ff0000", fontSize: "18px", padding: "10px 30px", fontWeight: "bold" }}
              >
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
