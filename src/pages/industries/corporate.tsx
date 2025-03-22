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

const CorporateSecurity = () => {
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
              Corporate Security
            </Typography>
            <Typography variant="h6" sx={{ color: "white", mt: 2 }}>
              Professional Protection for Corporate Environments
            </Typography>
          </Box>
        </motion.div>
      </Box>

      <Container sx={{ py: 8 }}>
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {/* Overview */}
          <Paper sx={sectionStyle}>
            <motion.div variants={fadeInUp}>
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                Trusted Corporate Security Solutions
              </Typography>
              <Typography>
                At Shield Security, we understand that protecting your corporate office is more than just preventing threats — it's about maintaining a professional, secure environment where staff and visitors feel safe. We offer premium corporate security that aligns with your company’s culture and brand.
              </Typography>
            </motion.div>
          </Paper>

          {/* Key Features */}
          <Paper sx={sectionStyle}>
            <Grid container spacing={2}>
              {["Front Desk & Concierge Security", "Executive Protection", "Access Control & Visitor Management", "Emergency Response Protocols"].map((item, idx) => (
                <Grid key={idx} item xs={12} sm={6} md={3}>
                  <motion.div variants={fadeInUp}>
                    <Typography align="center">• {item}</Typography>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Paper>

          {/* Professionalism Focus */}
          <Paper sx={sectionStyle}>
            <motion.div variants={fadeInUp}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Trained to Represent Your Brand
              </Typography>
              <Typography>
                Our corporate guards are polished, discreet, and proactive. They are trained in conflict resolution, workplace behavior, and professionalism to ensure seamless integration into your office culture.
              </Typography>
            </motion.div>
          </Paper>

          {/* Responsibilities */}
          <Paper sx={sectionStyle}>
            <motion.div variants={fadeInUp}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Core Corporate Security Duties
              </Typography>
            </motion.div>
            <Grid container spacing={2}>
              {["Reception Security & Greeter Services", "Badge & Access Management", "Surveillance & CCTV Monitoring", "Internal Threat Prevention", "Meeting Room Security", "Parking Area Patrols", "Mail Screening & Package Handling", "Emergency Evacuation Support", "Policy Enforcement"].map((task, idx) => (
                <Grid key={idx} item xs={12} sm={6} md={4}>
                  <motion.div variants={fadeInUp}>
                    <Typography>• {task}</Typography>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Paper>

          {/* Technology */}
          <Paper sx={sectionStyle}>
            <motion.div variants={fadeInUp}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Smart Security Integration
              </Typography>
              <Typography>
                We utilize modern tools like TrackTik to track guard activities, maintain accountability, and provide real-time reports to facility managers, ensuring transparency and peace of mind.
              </Typography>
            </motion.div>
          </Paper>

          {/* Tailored Planning */}
          <Paper sx={sectionStyle}>
            <motion.div variants={fadeInUp}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Custom Security Plans for Every Office
              </Typography>
              <Typography>
                Whether you operate a head office, regional branch, or shared coworking space, we design strategies that reflect your company’s size, risk level, and operational needs.
              </Typography>
            </motion.div>
          </Paper>

          {/* Services Offered */}
          <Paper sx={sectionStyle}>
            <motion.div variants={fadeInUp}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Corporate Security Services Offered
              </Typography>
            </motion.div>
            <Grid container spacing={2}>
              {["Corporate Concierge Security", "Boardroom Security", "Visitor Escorting", "24/7 Static Guarding", "Risk Mitigation & Threat Assessment"].map((service, idx) => (
                <Grid key={idx} item xs={12} sm={6} md={4}>
                  <motion.div variants={fadeInUp}>
                    <Typography>• {service}</Typography>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Paper>

          {/* CTA Section */}
          <Paper sx={{ ...sectionStyle, textAlign: "center" }}>
            <Divider sx={{ mb: 4 }} />
            <motion.div variants={fadeInUp}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Secure Your Workplace Today
              </Typography>
              <Typography>
                Let Shield Security elevate the protection and professionalism of your corporate office. Reach out for a custom consultation.
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

export default CorporateSecurity;
