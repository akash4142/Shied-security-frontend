import React from "react";
import { Box, Container, Typography, Grid, Paper, Button, Divider } from "@mui/material";
import Image from "next/image";

const WhyUs = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage: "url(/images/1.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "80vh",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          paddingBottom: "60px",
        }}
      >
        <Box sx={{ backgroundColor: "rgba(0,0,0,0.6)", p: 4, borderRadius: 2, textAlign: "center", backdropFilter: "blur(4px)" }}>
          <Typography variant="h2" sx={{ color: "#fff", fontWeight: "bold" }}>
            Why Choose Shield Security?
          </Typography>
          <Typography variant="h6" sx={{ color: "#ddd", mt: 2 }}>
            Your Protection, Our Commitment
          </Typography>
        </Box>
      </Box>

      {/* Mission & Overview */}
      <Box sx={{ backgroundColor: "#111", color: "#fff", py: 10, px: { xs: 3, md: 10 }, textAlign: "center" }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Personalized, Professional, Proven
        </Typography>
        <Typography variant="body1" sx={{ color: "#ccc", maxWidth: "900px", mx: "auto", lineHeight: 1.8 }}>
          Shield Security is redefining protection in Canada by blending personalized attention with large-scale capability. We focus on delivering proactive, technology-enhanced security solutions for organizations of every size. Our team isn&apos;t just trained; they&apos;re empowered, responsive, and dedicated to safeguarding what matters most to you.
        </Typography>
      </Box>

      {/* Principles Section */}
      <Container sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {[{
            title: "Hands-On Leadership",
            desc: "Our executive team is personally involved with every client, conducting regular site audits and maintaining open communication.",
          }, {
            title: "Customizable Strategies",
            desc: "We tailor every solution to fit your unique operational needs, industry standards, and security risks.",
          }, {
            title: "Scalable Operations",
            desc: "From a single location to multi-site deployments across provinces, our infrastructure is built to grow with you.",
          }, {
            title: "Certified Excellence",
            desc: "All personnel are licensed, insured, and trained under our Shield Academy programs, including crisis management, cultural awareness, and WHMIS.",
          }].map((item, idx) => (
            <Grid key={idx} item xs={12} md={6}>
              <Paper sx={{ p: 4, backgroundColor: "#f7f9fc" }}>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  {item.title}
                </Typography>
                <Typography>{item.desc}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Services List */}
      <Container sx={{ mt: 6, px: { xs: 3, md: 10 }, py: 10, backgroundColor: "#f7f9fc" }}>
        <Typography variant="h4" fontWeight="bold" textAlign="center" gutterBottom>
          Comprehensive Security Services
        </Typography>
        <Grid container spacing={2} mt={2}>
          {["Mobile Patrol", "Event Security", "Concierge & Front Desk", "Construction Site Security", "Loss Prevention", "Residential Security", "Executive Protection", "Tactical Response", "CCTV Monitoring", "Retail & Shopping Mall Security", "Access Control", "Alarm Response"].map((service, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx}>
              <Typography sx={{ color: "#444" }}>• {service}</Typography>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Clients */}
      <Box sx={{ textAlign: "center", py: 10 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Trusted by Leading Brands
        </Typography>
        <Grid container spacing={3} justifyContent="center" mt={2}>
          {["logo1.png", "logo2.png", "logo3.png", "logo4.png"].map((logo, idx) => (
            <Grid item key={idx}>
              <Image src={`/images/${logo}`} alt={`Client Logo ${idx + 1}`} width={100} height={60} />
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* CTA */}
      <Box sx={{ backgroundColor: "#111", color: "#fff", textAlign: "center", py: 10, px: { xs: 3, md: 10 } }}>
        <Divider sx={{ mb: 4, backgroundColor: "#444" }} />
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Let’s Build a Safer Tomorrow
        </Typography>
        <Typography variant="body1" sx={{ color: "#ccc", maxWidth: "800px", mx: "auto", mb: 4 }}>
          Contact us today and discover how Shield Security can help elevate your protection strategy with integrity, insight, and innovation.
        </Typography>
        <Button variant="contained" color="error" sx={{ px: 5, py: 1.5, fontSize: "16px", borderRadius: "30px" }}>
          Contact Us
        </Button>
      </Box>
    </Box>
  );
};

export default WhyUs;
