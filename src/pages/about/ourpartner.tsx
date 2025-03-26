import React from "react";
import { Container, Grid, Typography, Box, Button } from "@mui/material";
import Image from "next/image";

const partnerLogos = [
  { name: "Client A", img: "/partners/client-a.png" },
  { name: "Client B", img: "/partners/client-b.png" },
  { name: "Client C", img: "/partners/client-c.png" },
  { name: "Client D", img: "/partners/client-d.png" },
  { name: "Client E", img: "/partners/client-e.png" },
  { name: "Client F", img: "/partners/client-f.png" },
];

const OurPartnersPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        style={{
          position: "relative",
          height: "45vh",
          backgroundImage: "url(/partners-banner.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <div style={{ backgroundColor: "rgba(0,0,0,0.6)", padding: "30px", borderRadius: "10px" }}>
          <Typography variant="h2" sx={{ color: "#fff", fontWeight: "bold" }}>
            Our Partners
          </Typography>
          <Typography variant="h6" sx={{ color: "#ddd" }}>
            Trusted by organizations across Canada
          </Typography>
        </div>
      </section>

      {/* Partnership Statement */}
      <Container sx={{ padding: "50px 0", textAlign: "center" }}>
        <Typography variant="h4" sx={{ color: "#fff", fontWeight: "bold", marginBottom: "20px" }}>
          Trusted Partnerships Built on Performance
        </Typography>
        <Typography variant="body1" sx={{ color: "#ccc", maxWidth: "800px", margin: "auto" }}>
          At Shield Security, we proudly partner with companies who share our commitment to safety, professionalism, and long-term success. Our partnerships are built on trust, integrity, and results.
        </Typography>
      </Container>

      {/* Partner Logos Grid */}
      <Container sx={{ paddingBottom: "60px" }}>
        <Grid container spacing={4} justifyContent="center" alignItems="center">
          {partnerLogos.map((partner, index) => (
            <Grid item xs={6} md={3} key={index}>
              <Box
                sx={{
                  backgroundColor: "#1f1f1f",
                  borderRadius: "10px",
                  padding: "20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "120px",
                  transition: "0.3s",
                  "&:hover": {
                    backgroundColor: "#2c2c2c",
                  },
                }}
              >
                <Image src={partner.img} alt={partner.name} width={120} height={60} objectFit="contain" />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* CTA Section */}
      <section style={{ backgroundColor: "#ff0000", padding: "50px 0", textAlign: "center" }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", color: "#fff", marginBottom: "20px" }}>
          Become a Partner
        </Typography>
        <Typography variant="body1" sx={{ color: "#fff", marginBottom: "20px" }}>
          Join our growing network of trusted clients and partners.
        </Typography>
        <Button variant="contained" sx={{ backgroundColor: "#fff", color: "#ff0000", fontWeight: "bold" }} href="/contact">
          Contact Us
        </Button>
      </section>
    </>
  );
};

export default OurPartnersPage;
