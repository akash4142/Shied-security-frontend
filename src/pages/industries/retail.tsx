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

const RetailSecurity = () => {
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
              Retail Security
            </Typography>
            <Typography variant="h6" sx={{ color: "white", mt: 2 }}>
              Loss Prevention and Safety for Staff & Shoppers
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
                Prevent Theft. Protect Staff. Reassure Customers.
              </Typography>
              <Typography>
                Shield Security’s retail security services are tailored to protect your merchandise, staff, and customers. Our uniformed professionals deter theft, respond quickly to incidents, and ensure a welcoming environment that builds shopper confidence.
              </Typography>
            </motion.div>
          </Paper>

          {/* Key Features */}
          <Paper sx={sectionStyle}>
            <Grid container spacing={2}>
              {["Loss Prevention Patrols", "Customer Service Integration", "Emergency Response", "Shoplifting Deterrence"].map((item, idx) => (
                <Grid key={idx} item xs={12} sm={6} md={3}>
                  <motion.div variants={fadeInUp}>
                    <Typography align="center">• {item}</Typography>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Paper>

          {/* Why It Matters */}
          <Paper sx={sectionStyle}>
            <motion.div variants={fadeInUp}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                More Than Just Theft Prevention
              </Typography>
              <Typography>
                Retail environments demand a balance of vigilance and hospitality. Our guards are trained to be approachable while maintaining high alertness, ensuring store policies are enforced with professionalism.
              </Typography>
            </motion.div>
          </Paper>

          {/* Responsibilities */}
          <Paper sx={sectionStyle}>
            <motion.div variants={fadeInUp}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Core Retail Security Duties
              </Typography>
            </motion.div>
            <Grid container spacing={2}>
              {["Theft Deterrence & Apprehension", "Surveillance Monitoring", "Conflict De-Escalation", "Emergency Evacuations", "Shopper Safety Support", "Crowd & Queue Management", "Policy Enforcement", "Incident Reporting", "Store Opening & Closing Security"].map((task, idx) => (
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
                Technology-Backed Security
              </Typography>
              <Typography>
                Through systems like TrackTik, clients gain access to real-time insights, incident documentation, and compliance checks to ensure full visibility into security operations.
              </Typography>
            </motion.div>
          </Paper>

          {/* Custom Solutions */}
          <Paper sx={sectionStyle}>
            <motion.div variants={fadeInUp}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Tailored to Every Retail Format
              </Typography>
              <Typography>
                Whether you operate a boutique, national chain, shopping mall, or department store — we adapt our approach to your retail floor plan, brand culture, and customer volume.
              </Typography>
            </motion.div>
          </Paper>

          {/* Services Offered */}
          <Paper sx={sectionStyle}>
            <motion.div variants={fadeInUp}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Retail Security Services Offered
              </Typography>
            </motion.div>
            <Grid container spacing={2}>
              {["Uniformed Store Security", "Mall Security Patrols", "Retail Concierge Guards", "Loss Prevention Officers", "Retail Event Security"].map((service, idx) => (
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
                Secure Your Retail Space Today
              </Typography>
              <Typography>
                Let Shield Security help you reduce shrinkage, elevate customer experience, and safeguard your retail business.
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

export default RetailSecurity;
