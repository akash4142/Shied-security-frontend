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

const UniformedSecurity = () => {
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
              Uniformed Security
            </Typography>
            <Typography variant="h6" sx={{ color: "white", mt: 2 }}>
              Simple, Safe, and Secure Security Solutions You Can Trust
            </Typography>
          </Box>
        </motion.div>
      </Box>

      <Container sx={{ py: 8 }}>
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Paper sx={sectionStyle}>
            <motion.div variants={fadeInUp}>
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                Professionally Trained Uniformed Guards
              </Typography>
              <Typography variant="body1" sx={{ mb: 4 }}>
                At Shield Security, our uniformed guards are the face of our services. Whether in retail, public, or
                industrial settings, they provide visible deterrents and fast response in emergencies. Each guard is trained to
                the highest standards and offers unmatched professionalism tailored to your needs. Choose from standard or
                tactical uniformed guards depending on your situation.
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
                  <Image src="/images/2.jpg" alt="Guards in mall" width={600} height={400} style={{ width: "100%", borderRadius: 10 }} />
                </motion.div>
              </Grid>
              <Grid item xs={12} md={6}>
                <motion.div variants={fadeInUp}>
                  <Typography variant="h5" fontWeight="bold" gutterBottom>
                    Why Are Uniformed Security Guards Important?
                  </Typography>
                  <Typography>
                    Uniformed security guards serve as a powerful visual deterrent. They reduce crimes of opportunity and
                    create a secure environment through vigilant observation, customer engagement, and fast response to
                    threats. Their presence assures your staff and visitors that safety is a top priority.
                  </Typography>
                </motion.div>
              </Grid>
            </Grid>
          </Paper>

          <Paper sx={sectionStyle}>
            <motion.div variants={fadeInUp}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Key Responsibilities
              </Typography>
            </motion.div>
            <Grid container spacing={2}>
              {["Visible Crime Deterrent", "Emergency Response", "Suspicious Activity Reporting", "Access Control", "Crowd Management", "CCTV Monitoring", "Welcoming Visitors", "Loss Prevention", "Incident Handling"].map((item, idx) => (
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
                Where We Deploy Uniformed Guards
              </Typography>
            </motion.div>
            <Grid container spacing={2}>
              {["Retail Stores", "Shopping Centers", "Government Buildings", "Educational Institutions", "Construction Sites", "Warehouses", "Public Events"].map((item, idx) => (
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
                Training & Certification
              </Typography>
              <Typography>
                Our guards undergo comprehensive training through Shield Academy. The program includes:
              </Typography>
            </motion.div>
            <Grid container spacing={2} sx={{ mt: 2 }}>
              {["Customer Service Excellence", "Conflict De-Escalation", "Emergency Response", "Crisis Management", "Incident Reporting", "Access & Crowd Control", "Mental Health Awareness", "Indigenous Cultural Training", "Workplace Safety & WHMIS"].map((item, idx) => (
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
                Smart Technology
              </Typography>
              <Typography>
                We equip our teams with advanced tools like GPS-enabled reporting systems. Monitor security activity in
                real-time through client dashboards with images, reports, and patrol logs for transparency and peace of mind.
              </Typography>
            </motion.div>
          </Paper>

          <Paper sx={{ ...sectionStyle, textAlign: "center" }}>
            <Divider sx={{ mb: 4 }} />
            <motion.div variants={fadeInUp}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Ready to Secure Your Property?
              </Typography>
              <Typography>
                Contact us today to learn how Shield Security’s uniformed guards can protect your people and assets.
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

export default UniformedSecurity;