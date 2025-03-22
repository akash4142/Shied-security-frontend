import React from "react";
import { Box, Container, Typography, Grid, Button, Divider, Paper } from "@mui/material";
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

const HotelSecurity = () => {
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
              Hotel Security
            </Typography>
            <Typography variant="h6" sx={{ color: "white", mt: 2 }}>
              Upgrade to Shield Security’s Trusted Hotel Protection
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
                Canada&apos;s Premier Hotel Security Partner
              </Typography>
              <Typography>
                Shield Security offers comprehensive, guest-focused protection for hotels, motels, and resorts across
                Canada. Our highly trained personnel ensure peace of mind for guests and staff alike. From luxury hotels to
                boutique inns, we tailor our services to match the atmosphere and brand of your property.
              </Typography>
            </motion.div>
          </Paper>

          {/* Icons Summary */}
          <Paper sx={sectionStyle}>
            <Grid container spacing={2}>
              {["Keyholding and Guest Enquiries", "Access Control & Perimeter Monitoring", "24/7 Foot Patrols", "Hospitality-Oriented Service"].map((item, idx) => (
                <Grid key={idx} item xs={12} sm={6} md={3}>
                  <motion.div variants={fadeInUp}>
                    <Typography align="center">• {item}</Typography>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Paper>

          {/* Customer Service Approach */}
          <Paper sx={sectionStyle}>
            <motion.div variants={fadeInUp}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Service That Represents Your Brand
              </Typography>
              <Typography>
                Our guards are trained not only in safety and emergency response but also in warm hospitality and guest
                interaction. We aim to make our security staff an extension of your team — dependable, professional, and
                always guest-ready.
              </Typography>
            </motion.div>
          </Paper>

          {/* Duties */}
          <Paper sx={sectionStyle}>
            <motion.div variants={fadeInUp}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Hotel Security Guard Responsibilities
              </Typography>
            </motion.div>
            <Grid container spacing={2}>
              {["Front Desk Presence", "Access Control", "Rule Enforcement", "CCTV Surveillance", "Alarm Response", "Evacuation Assistance", "Guest Support", "Incident Documentation", "Foot & Mobile Patrols", "Keyholding Duties"].map((task, idx) => (
                <Grid key={idx} item xs={12} sm={6} md={4}>
                  <motion.div variants={fadeInUp}>
                    <Typography>• {task}</Typography>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Paper>

          {/* TrackTik */}
          <Paper sx={sectionStyle}>
            <motion.div variants={fadeInUp}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Real-Time Security Oversight
              </Typography>
              <Typography>
                Using GPS-powered TrackTik technology, you receive instant reports and real-time visibility on guard activity,
                incident logs, and more.
              </Typography>
            </motion.div>
          </Paper>

          {/* Custom Solutions */}
          <Paper sx={sectionStyle}>
            <motion.div variants={fadeInUp}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Flexible & Personalized Hotel Security
              </Typography>
              <Typography>
                No two hotels are alike — that’s why Shield Security develops customized plans built on your layout,
                policies, and clientele. Whether it’s for temporary coverage or a long-term partnership, our team ensures
                complete alignment with your brand.
              </Typography>
            </motion.div>
          </Paper>

          {/* Services Offered */}
          <Paper sx={sectionStyle}>
            <motion.div variants={fadeInUp}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Our Hotel Security Offerings
              </Typography>
            </motion.div>
            <Grid container spacing={2}>
              {["Hotel Concierge Security", "Hotel Mobile Patrol", "On-Site Uniformed Security"].map((service, idx) => (
                <Grid key={idx} item xs={12} sm={6} md={4}>
                  <motion.div variants={fadeInUp}>
                    <Typography>• {service}</Typography>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Paper>

          {/* Deployment Areas */}
          <Paper sx={sectionStyle}>
            <motion.div variants={fadeInUp}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Where We Deploy Hotel Guards
              </Typography>
            </motion.div>
            <Grid container spacing={2}>
              {["Large Hotels", "Motels", "Resorts", "Conference Centres", "Bed & Breakfasts", "Inns", "Hostels", "Casino Hotels"].map((location, idx) => (
                <Grid key={idx} item xs={12} sm={6} md={4}>
                  <motion.div variants={fadeInUp}>
                    <Typography>• {location}</Typography>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Paper>

          {/* Training Section */}
          <Paper sx={sectionStyle}>
            <motion.div variants={fadeInUp}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Shield Academy Training Modules
              </Typography>
              <Typography>
                Our in-house and partner-led training includes Mental Health Awareness, Conflict Resolution, Cultural
                Awareness, and Emergency Management — all designed to deliver industry-leading hospitality protection.
              </Typography>
            </motion.div>
          </Paper>

          {/* CTA Section */}
          <Paper sx={{ ...sectionStyle, textAlign: "center" }}>
            <Divider sx={{ mb: 4 }} />
            <motion.div variants={fadeInUp}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Let’s Secure Your Hotel
              </Typography>
              <Typography>
                Contact Shield Security to learn how we can protect your guests, staff, and brand reputation.
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

export default HotelSecurity;
