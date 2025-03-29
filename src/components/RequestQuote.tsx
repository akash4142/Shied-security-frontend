import React, { ChangeEvent, FormEvent, useState } from "react";
import { api } from '@/utils/api';
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  MenuItem,
} from "@mui/material";
import Link from "next/link";

const inquiryReasons = [
  "Mobile Patrol",
  "Event Security",
  "Corporate Security",
  "Retail Security",
  "Construction Security",
  "General Inquiry",
];

const frequencyOptions = [
  "One-time",
  "Daily",
  "Weekly",
  "Monthly",
  "On-call",
];

const referralSources = [
  "Google",
  "Instagram",
  "LinkedIn",
  "Referral",
  "Returning Client",
  "Other",
];

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

const RequestQuote = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    city: "",
    reason: "",
    frequency: "",
    heardFrom: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await api.post('/quotes', formData);
      alert(response.data.message);
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        city: "",
        reason: "",
        frequency: "",
        heardFrom: "",
        message: "",
      });
    } catch (error) {
      console.error("Quote submission error:", error);
      alert("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ backgroundColor: "", py: 8 }}>
      <Container maxWidth="md">
        <Typography variant="h4" sx={{ textAlign: "center", fontWeight: "bold", mb: 4 }}>
          Request a Quote
        </Typography>

        <Typography sx={{ color: "#bbb", mb: 4, textAlign: "center" }}>
          Interested in learning more about Shield Security’s range of professional security services? Simply complete the form below and we’ll be in touch.
          <br /><br />
          <strong>Looking for employment?</strong> Check out our {" "}
          <Link href="/careers" passHref legacyBehavior>
            <a style={{ color: "#ff0000", textDecoration: "underline" }}>
              Job Board
            </a>
          </Link>{" "}
          for current openings. Please note that all job inquiries must be made on Indeed and will be blocked if submitted through this form.
        </Typography>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="First Name" name="firstName" value={formData.firstName} onChange={handleChange} sx={inputStyles} required />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} sx={inputStyles} required />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Phone Number" name="phone" value={formData.phone} onChange={handleChange} sx={inputStyles} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Email" name="email" type="email" value={formData.email} onChange={handleChange} sx={inputStyles} required />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="City" name="city" value={formData.city} onChange={handleChange} sx={inputStyles} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField select fullWidth label="Reason for Inquiry" name="reason" value={formData.reason} onChange={handleChange} sx={inputStyles} required>
                {inquiryReasons.map((option) => (
                  <MenuItem key={option} value={option}>{option}</MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField select fullWidth label="Frequency of Service" name="frequency" value={formData.frequency} onChange={handleChange} sx={inputStyles}>
                {frequencyOptions.map((option) => (
                  <MenuItem key={option} value={option}>{option}</MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField select fullWidth label="How did you hear about us?" name="heardFrom" value={formData.heardFrom} onChange={handleChange} sx={inputStyles}>
                {referralSources.map((option) => (
                  <MenuItem key={option} value={option}>{option}</MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth multiline rows={4} label="Message" name="message" value={formData.message} onChange={handleChange} sx={inputStyles} />
            </Grid>
            <Grid item xs={12} textAlign="center">
              <Button type="submit" variant="contained" disabled={loading} sx={{ backgroundColor: "#ff0000", color: "#fff", fontSize: "18px", px: 5, py: 1.5, fontWeight: "bold", mt: 2, '&:hover': { backgroundColor: "#e60000" } }}>
                {loading ? "Submitting..." : "Submit Request"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </Box>
  );
};

export default RequestQuote;