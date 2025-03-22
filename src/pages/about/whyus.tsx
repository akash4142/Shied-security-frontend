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
          height: "60vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Box sx={{ backgroundColor: "rgba(0,0,0,0.6)", p: 4, borderRadius: 2 }}>
          <Typography variant="h2" sx={{ color: "#fff", fontWeight: "bold" }}>
            Why Shield Secure?
          </Typography>
          <Typography variant="h6" sx={{ color: "#ddd", mt: 2 }}>
            Our Business is Protecting Yours
          </Typography>
        </Box>
      </Box>

      {/* Content Section */}
      <Container sx={{ py: 8 }}>
        <Paper sx={{ p: 4, mb: 6, backgroundColor: "#f7f9fc" }}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Personalized & Reliable Service
          </Typography>
          <Typography>
            Shield Secure was created to fill a critical gap in the Canadian security market. Many clients told us they found existing companies either too small to handle broad service offerings or too large to provide personal attention. We bridge that gap by offering comprehensive solutions with the responsiveness of a local business.
            <br /><br />
            Whether you&apos;re a small retail shop or a large construction site, our flexible solutions are built around your unique needs.
          </Typography>
        </Paper>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 4 }}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                We Are Hands-On
              </Typography>
              <Typography>
                Our leadership team actively engages in day-to-day operations, meeting with clients, auditing sites, and ensuring satisfaction at every level. If something isn’t right, our team is involved until it is.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 4 }}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                We Are Flexible
              </Typography>
              <Typography>
                Every client is unique, and so are our strategies. Whether you want us to follow your internal security protocol or need full consultation, we’re adaptable and collaborative in our approach.
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        <Grid container spacing={4} sx={{ mt: 4 }}>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 4 }}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                We Are Well Managed
              </Typography>
              <Typography>
                Our leadership brings together decades of multi-disciplinary security knowledge. From emergency responses to operational logistics, we act fast, decisively, and effectively.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 4 }}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                We Are Growing
              </Typography>
              <Typography>
                What started with a few passionate individuals is now a national team of trained professionals. As we continue to grow across Canada, our core commitment to excellence remains unchanged.
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        {/* Services List */}
        <Paper sx={{ mt: 8, p: 4, backgroundColor: "#f7f9fc" }}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Our Security Services Include:
          </Typography>
          <Grid container spacing={2}>
            {["Concierge Security", "Event Security", "Executive Protection", "Construction Security", "Mobile Patrol", "Uniformed Guards", "Loss Prevention", "Government Security", "Residential Security", "Shopping Mall Security"].map((service, idx) => (
              <Grid item xs={12} sm={6} md={4} key={idx}>
                <Typography>• {service}</Typography>
              </Grid>
            ))}
          </Grid>
        </Paper>

        {/* Trusted By */}
        <Box sx={{ textAlign: "center", mt: 10 }}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Trusted By Leading Organizations
          </Typography>
          <Grid container spacing={3} justifyContent="center" mt={2}>
            {["logo1.png", "logo2.png", "logo3.png", "logo4.png"].map((logo, idx) => (
              <Grid item key={idx}>
                <Image src={`/images/${logo}`} alt={`Client Logo ${idx + 1}`} width={100} height={60} />
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Contact CTA */}
        <Box sx={{ mt: 10, textAlign: "center" }}>
          <Divider sx={{ mb: 4 }} />
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Let&apos;s Discuss Your Security Options
          </Typography>
          <Typography>
            Ready to experience security done right? Reach out to our team today and let&apos;s customize a solution for you.
          </Typography>
          <Button variant="contained" color="error" sx={{ mt: 3, px: 4, py: 1.5, fontSize: "16px" }}>
            Contact Us
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default WhyUs;