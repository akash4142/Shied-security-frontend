import React from "react";
import { Box, Container, Typography, Grid, Paper, Button, Divider } from "@mui/material";
import Image from "next/image";



const CompanyOverview = () => {
  return (
    <Box>
      {/* Hero */}
      <Box
        sx={{
          backgroundImage: "url(/images/1.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "60vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box sx={{ backgroundColor: "rgba(0,0,0,0.6)", p: 4, borderRadius: 2, textAlign: "center" }}>
          <Typography variant="h2" sx={{ color: "#fff", fontWeight: "bold" }}>
            Company Overview
          </Typography>
          <Typography variant="h6" sx={{ color: "#ddd", mt: 2 }}>
            Learn About Shield Secure and Our Mission
          </Typography>
        </Box>
      </Box>

      <Container sx={{ py: 8 }}>
        {/* Company Description */}
        <Paper sx={{ p: 4, backgroundColor: "#f7f9fc", mb: 6 }}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Who We Are
          </Typography>
          <Typography>
            Shield Secure Ltd. is a customer-focused security services company based in Canmore, proudly serving the surrounding areas including Banff, Cochrane, and Calgary. We specialize in providing a wide range of security services such as mobile patrol, event security, fire watch, emergency response, construction security, and wedding security.
            <br /><br />
            Our mission is to deliver professional and dependable security solutions that ensure the protection of our clients’ properties and the safety of the public. We pride ourselves on our comprehensive services, our community involvement, and our unwavering commitment to safety, integrity, and adaptability.
          </Typography>
        </Paper>

        {/* Leadership */}
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={5}>
            <Image src="/images/sourav.jpg" alt="Sourav Gupta" width={500} height={500} style={{ width: "100%", borderRadius: 10 }} />
          </Grid>
          <Grid item xs={12} md={7}>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Meet Our Founder: Sourav Gupta
            </Typography>
            <Typography>
              Sourav Gupta is the founder and General Manager of Shield Secure Ltd. After immigrating to Canada in 2017, Sourav brought with him a wealth of knowledge and a passion for security. With a background in accounting and administration, as well as hands-on experience with Alberta Health Services and the Town of Canmore, Sourav ensures that every aspect of the company runs with excellence.
              <br /><br />
              Sourav is committed to ethical operations, proactive communication, and the highest standards in training and professionalism. His leadership drives the success of Shield Secure.
            </Typography>
          </Grid>
        </Grid>

        {/* Core Values */}
        <Paper sx={{ mt: 8, p: 4, backgroundColor: "#f7f9fc" }}>
          <Typography variant="h4" fontWeight="bold" gutterBottom textAlign="center">
            Our Core Values
          </Typography>
          <Grid container spacing={4}>
            {[{
              title: "Safety",
              desc: "We prioritize safety in all operations, ensuring the well-being of both clients and the public."
            }, {
              title: "Integrity",
              desc: "We believe in transparency, respect, and honest conduct. Our guards embody these principles."
            }, {
              title: "Teamwork",
              desc: "Our staff collaborate closely, sharing insights and supporting one another to provide exceptional service."
            }, {
              title: "Adaptability",
              desc: "We train our personnel to respond efficiently to any situation, from emergencies to event security."
            }].map((item, idx) => (
              <Grid item xs={12} md={3} key={idx}>
                <Typography variant="h6" fontWeight="bold">{item.title}</Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>{item.desc}</Typography>
              </Grid>
            ))}
          </Grid>
        </Paper>

        {/* Contact Info */}
        <Box sx={{ mt: 10, textAlign: "center" }}>
          <Divider sx={{ mb: 4 }} />
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Contact Shield Secure
          </Typography>
          <Typography>
            Based in Canmore, Alberta
            <br />
            Phone: 403-953-1998
            <br />
            Email: Shieldsecure82@gmail.com
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Button variant="contained" color="error" sx={{ mx: 1 }}>Facebook</Button>
            <Button variant="contained" color="error" sx={{ mx: 1 }}>Instagram</Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default CompanyOverview;
