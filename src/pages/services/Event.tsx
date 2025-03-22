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

const EventSecurity = () => {
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
              Event Security
            </Typography>
            <Typography variant="h6" sx={{ color: "white", mt: 2 }}>
              Professional Protection for Unforgettable Events
            </Typography>
          </Box>
        </motion.div>
      </Box>

      <Container sx={{ py: 8 }}>
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Paper sx={sectionStyle}>
            <motion.div variants={fadeInUp}>
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                Comprehensive Event Security Services
              </Typography>
              <Typography variant="body1" sx={{ mb: 4 }}>
                At Shield Security, we specialize in providing professional event security for events of all sizes — from
                concerts and corporate functions to community festivals and VIP gatherings. Our licensed and highly trained
                guards ensure a secure, seamless experience for guests, staff, and performers.
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
                  <Image src="/images/2.jpg" alt="Event Security" width={600} height={400} style={{ width: "100%", borderRadius: 10 }} />
                </motion.div>
              </Grid>
              <Grid item xs={12} md={6}>
                <motion.div variants={fadeInUp}>
                  <Typography variant="h5" fontWeight="bold" gutterBottom>
                    Why Event Security is Essential
                  </Typography>
                  <Typography>
                    Well-coordinated security is critical for crowd management, emergency preparedness, and protecting VIPs
                    and valuable assets. Our presence helps prevent disruptions and provides peace of mind to attendees.
                  </Typography>
                </motion.div>
              </Grid>
            </Grid>
          </Paper>

          <Paper sx={sectionStyle}>
            <motion.div variants={fadeInUp}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                What We Provide
              </Typography>
            </motion.div>
            <Grid container spacing={2}>
              {["Access Control & Checkpoints", "Crowd Monitoring", "Emergency Response", "VIP Escort Services", "Bag Checks & Scanning", "Conflict Resolution", "Surveillance & Monitoring", "Traffic & Parking Management", "On-site Communication Teams"].map((item, idx) => (
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
                Events We Cover
              </Typography>
            </motion.div>
            <Grid container spacing={2}>
              {["Concerts & Festivals", "Corporate Events", "Weddings", "Film & TV Productions", "Trade Shows", "Sporting Events", "Private Parties"].map((item, idx) => (
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
                Our Team, Your Peace of Mind
              </Typography>
              <Typography>
                From pre-event planning to post-event wrap-up, our security professionals coordinate closely with your team,
                ensuring protocols are followed and your event runs safely and smoothly.
              </Typography>
            </motion.div>
          </Paper>

          <Paper sx={{ ...sectionStyle, textAlign: "center" }}>
            <Divider sx={{ mb: 4 }} />
            <motion.div variants={fadeInUp}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Let’s Secure Your Next Event
              </Typography>
              <Typography>
                Contact Shield Security today to build a customized event security plan tailored to your needs.
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

export default EventSecurity;