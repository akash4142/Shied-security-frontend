import React from "react";
import { Box, Container, Typography, Grid, Button, Divider, Paper } from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const sectionStyle = {
  backgroundColor: "#f7f9fc",
  borderRadius: 4,
  padding: "40px 30px",
  boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
  marginBottom: "60px",
};

const CalgarySecurity = () => {
  return (
    <>
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
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <Box sx={{ backgroundColor: "rgba(0, 0, 0, 0.6)", p: 4, borderRadius: 2 }}>
            <Typography variant="h2" sx={{ color: "white", fontWeight: "bold" }}>
              Calgary
            </Typography>
            <Typography variant="h6" sx={{ color: "white", mt: 2 }}>
              Trusted by Leading Brands in Alberta
            </Typography>
          </Box>
        </motion.div>
      </Box>

      <Container sx={{ py: 8 }}>
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {/* Section 1: City Info */}
          <Paper sx={sectionStyle}>
            <motion.div variants={fadeInUp}>
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                Calgary Security Company
              </Typography>
              <Typography>
                Shield Security proudly serves clients throughout Calgary and southern Alberta, including Red Deer,
                Lethbridge, Airdrie, Fort McMurray, Medicine Hat and Grande Prairie. Our Calgary-based guards bring local
                knowledge and tailored protection to every site — maximizing your security while staying within budget.
              </Typography>
            </motion.div>
          </Paper>

          {/* Section 2: Local Culture */}
          <Paper sx={sectionStyle}>
            <motion.div variants={fadeInUp}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                The Solution for Your Calgary Security Needs
              </Typography>
              <Typography>
                Calgary, lovingly called Cowtown, is known for its vibrant culture and diversity. With over 120 languages
                spoken, our team reflects the community we protect. We proudly work with local partners like IGA, Onni Group,
                and MEC.
              </Typography>
            </motion.div>
          </Paper>

          {/* Section 3: Services */}
          <Paper sx={sectionStyle}>
            <motion.div variants={fadeInUp}>
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                Calgary Security Services We Offer
              </Typography>
              <Grid container spacing={2}>
                {["Concierge Security", "Elite Suit and Tie Security", "Event Security", "Executive Protection", "Loss Prevention", "Mobile Patrol", "Patrol Security", "Front Desk Security", "Uniformed Security", "Shopping Mall Security", "Government Security"].map((service, idx) => (
                  <Grid key={idx} item xs={12} sm={6} md={4}>
                    <Typography>• Calgary {service}</Typography>
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          </Paper>

          {/* Section 4: Custom Plans */}
          <Paper sx={sectionStyle}>
            <motion.div variants={fadeInUp}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Customized Calgary Security Guard Services
              </Typography>
              <Typography>
                We provide the personal touch of a local business with the reach of a national leader. Whether you require
                mobile patrols, loss prevention, or static guards, we’ll meet with you to develop a personalized security
                plan that suits your needs and budget.
              </Typography>
            </motion.div>
          </Paper>

          {/* Section 5: Social Impact */}
          <Paper sx={sectionStyle}>
            <motion.div variants={fadeInUp}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Social Impact
              </Typography>
              <Typography>
                Shield Security uplifts marginalized communities across Canada by supporting nonprofits like the Breakfast
                Club of Canada, ALS Canada, and Covenant House. We believe in building safer, stronger communities for all.
              </Typography>
            </motion.div>
          </Paper>

          {/* Section 6: Training */}
          <Paper sx={sectionStyle}>
            <motion.div variants={fadeInUp}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Best-in-Class Training
              </Typography>
              <Typography>
                Our Shield Academy equips guards with modern skills through in-house and expert-led programs.
              </Typography>
              <Grid container spacing={2} sx={{ mt: 2 }}>
                {["Customer Service Training", "Incident Reporting", "Crisis Management", "Emergency Response", "Mental Health & Indigenous Awareness", "WHMIS", "Weapons Awareness", "Trespass Training"].map((module, idx) => (
                  <Grid key={idx} item xs={12} sm={6} md={4}>
                    <Typography>• {module}</Typography>
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          </Paper>

          {/* Section 7: Technology */}
          <Paper sx={sectionStyle}>
            <motion.div variants={fadeInUp}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Real-Time Reporting with GPS Tracking
              </Typography>
              <Typography>
                With TrackTik technology, you’ll always know what’s happening. From live guard location to real-time photos
                and incident updates — our reporting tools offer total transparency.
              </Typography>
            </motion.div>
          </Paper>

          {/* CTA Section */}
          <Paper sx={{ ...sectionStyle, textAlign: "center" }}>
            <Divider sx={{ mb: 4 }} />
            <motion.div variants={fadeInUp}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Let’s Discuss Your Security Options
              </Typography>
              <Typography>
                Have questions or want a quote for Calgary security services? Our team is here to help.
              </Typography>
              <Button variant="contained" color="error" sx={{ mt: 3, px: 4, py: 1.5, fontSize: "16px" }}>
                Get a Free Quote
              </Button>
            </motion.div>
          </Paper>
        </motion.div>
      </Container>
    </>
  );
};

export default CalgarySecurity;
