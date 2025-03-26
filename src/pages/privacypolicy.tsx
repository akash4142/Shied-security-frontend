import React from "react";
import { Container, Typography, Box } from "@mui/material";

const PrivacyPolicyPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        style={{
          position: "relative",
          height: "45vh",
          backgroundImage: "url(/privacy-banner.jpg)",
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
            Privacy Policy
          </Typography>
        </div>
      </section>

      {/* Content Section */}
      <Container sx={{ padding: "50px 0", color: "#ccc" }}>
        <Box mb={4}>
          <Typography variant="h5" sx={{ color: "#fff", fontWeight: "bold", mb: 1 }}>
            Introduction
          </Typography>
          <Typography>
            Shield Security is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you interact with our services.
          </Typography>
        </Box>

        <Box mb={4}>
          <Typography variant="h5" sx={{ color: "#fff", fontWeight: "bold", mb: 1 }}>
            Information We Collect
          </Typography>
          <Typography>
            We may collect personal information including your name, contact details, resume, and messages submitted through our website forms.
          </Typography>
        </Box>

        <Box mb={4}>
          <Typography variant="h5" sx={{ color: "#fff", fontWeight: "bold", mb: 1 }}>
            How We Use Your Information
          </Typography>
          <Typography>
            Your data is used to respond to inquiries, process job applications, improve our services, and comply with legal obligations. We do not sell your information to third parties.
          </Typography>
        </Box>

        <Box mb={4}>
          <Typography variant="h5" sx={{ color: "#fff", fontWeight: "bold", mb: 1 }}>
            Data Security
          </Typography>
          <Typography>
            We implement industry-standard measures to protect your personal data. However, no online transmission is 100% secure, and we encourage you to use caution.
          </Typography>
        </Box>

        <Box mb={4}>
          <Typography variant="h5" sx={{ color: "#fff", fontWeight: "bold", mb: 1 }}>
            Your Rights
          </Typography>
          <Typography>
            You have the right to access, correct, or delete your personal information. You may contact us at any time to make these requests.
          </Typography>
        </Box>

        <Box mb={4}>
          <Typography variant="h5" sx={{ color: "#fff", fontWeight: "bold", mb: 1 }}>
            Contact Us
          </Typography>
          <Typography>
            If you have any questions about our Privacy Policy, please contact us at:
            <br />
            📧 <strong>privacy@shieldsecurity.ca</strong>
            <br />
            📞 <strong>+1 (123) 456-7890</strong>
          </Typography>
        </Box>

        <Typography variant="body2" sx={{ color: "#777", mt: 4 }}>
          Last updated: March 23, 2025
        </Typography>
      </Container>
    </>
  );
};

export default PrivacyPolicyPage;
