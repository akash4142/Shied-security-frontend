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

const TacticalSecurity = () => {
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
              Tactical Security
            </Typography>
            <Typography variant="h6" sx={{ color: "white", mt: 2 }}>
              Specialized Protection for High-Risk Environments
            </Typography>
          </Box>
        </motion.div>
      </Box>

      <Container sx={{ py: 8 }}>
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Paper sx={sectionStyle}>
            <motion.div variants={fadeInUp}>
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                Elite Tactical Security Services
              </Typography>
              <Typography variant="body1" sx={{ mb: 4 }}>
                When threats are elevated, you need a security team trained for rapid response and critical incident
                management. Our tactical security officers are highly skilled professionals with military, police, or
                specialized backgrounds to handle volatile or high-risk scenarios with discipline and control.
              </Typography>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 4, justifyContent: "center", mb: 6 }}>
                {["/images/logo1.png", "/images/logo2.png", "/images/logo3.png", "/images/logo4.png", "/images/logo5.png", "/images/logo6.png"].map((logo, idx) => (
                  <motion.div key={idx} whileHover={{ scale: 1.1 }}>
                    <Image src={logo} alt="Client Logo" width={100} height={60} />
                  </motion.div>
                ))}
              </Box>
            </motion.div>
          </Paper>

          <Paper sx={sectionStyle}>
            <Grid container spacing={6}>
              <Grid item xs={12} md={6}>
                <motion.div variants={fadeInUp}>
                  <Image src="/images/2.jpg" alt="Tactical Security" width={600} height={400} style={{ width: "100%", borderRadius: 10 }} />
                </motion.div>
              </Grid>
              <Grid item xs={12} md={6}>
                <motion.div variants={fadeInUp}>
                  <Typography variant="h5" fontWeight="bold" gutterBottom>
                    Why Tactical Security Matters
                  </Typography>
                  <Typography>
                    Tactical officers are prepared for worst-case scenarios, offering protection where traditional guards
                    may not suffice. Their presence is a deterrent, and their action plan is precise and proven in hostile
                    or vulnerable situations.
                  </Typography>
                </motion.div>
              </Grid>
            </Grid>
          </Paper>

          <Paper sx={sectionStyle}>
            <motion.div variants={fadeInUp}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Tactical Services We Offer
              </Typography>
            </motion.div>
            <Grid container spacing={2}>
              {["Armed or Unarmed Tactical Units", "High-Value Asset Protection", "Hostile Termination Support", "VIP Protection & Escort", "Threat Assessment & Risk Mitigation", "Crowd Suppression & Control", "Workplace Violence Prevention", "Critical Infrastructure Protection", "Emergency Rapid Response Teams"].map((item, idx) => (
                <Grid key={idx} item xs={12} sm={6} md={4}>
                  <motion.div variants={fadeInUp}>
                    <Typography>• {item}</Typography>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Paper>

          <Paper sx={sectionStyle}>
            <motion.div variants={fadeInUp}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                High-Risk Environments We Serve
              </Typography>
            </motion.div>
            <Grid container spacing={2}>
              {["Government Buildings", "Financial Institutions", "Healthcare Facilities", "Corporate Offices", "Logistics Centers", "Event Venues with VIPs", "Energy & Utility Sites"].map((item, idx) => (
                <Grid key={idx} item xs={12} sm={6} md={4}>
                  <motion.div variants={fadeInUp}>
                    <Typography>• {item}</Typography>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Paper>

          <Paper sx={sectionStyle}>
            <motion.div variants={fadeInUp}>
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                Precision-Driven Protection
              </Typography>
              <Typography>
                Our tactical security personnel act fast and stay calm under pressure. With rigorous training and strategic
                coordination, they provide unmatched safety in unpredictable conditions.
              </Typography>
            </motion.div>
          </Paper>

          <Paper sx={{ ...sectionStyle, textAlign: "center" }}>
            <Divider sx={{ mb: 4 }} />
            <motion.div variants={fadeInUp}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Deploy Tactical Security with Confidence
              </Typography>
              <Typography>
                Connect with Shield Security to secure your high-risk environment with elite tactical professionals.
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

export default TacticalSecurity;