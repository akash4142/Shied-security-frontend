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

const CanmoreSecurity = () => {
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
              Canmore
            </Typography>
            <Typography variant="h6" sx={{ color: "white", mt: 2 }}>
              Trusted by the Bow Valley Community
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
                Canmore Security Company
              </Typography>
              <Typography>
                Shield Security proudly protects local businesses, resorts, and residential areas across Canmore and the
                Bow Valley. With deep local knowledge and responsive teams, we deliver trusted security tailored to your
                mountain community needs.
              </Typography>
            </motion.div>
          </Paper>

          {/* Section 2: Local Culture */}
          <Paper sx={sectionStyle}>
            <motion.div variants={fadeInUp}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Local Security for a Unique Community
              </Typography>
              <Typography>
                Canmore is known for its breathtaking views, tourism, and tranquil lifestyle. We bring that same calm and
                confidence to our security services, delivered by professionals who live and work in the region.
              </Typography>
            </motion.div>
          </Paper>

          {/* Section 3: Services */}
          <Paper sx={sectionStyle}>
            <motion.div variants={fadeInUp}>
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                Canmore Security Services We Offer
              </Typography>
              <Grid container spacing={2}>
                {["Concierge Security", "Event Security", "Mobile Patrol", "Uniformed Security", "Loss Prevention", "Tactical Security", "Construction Site Security", "Hotel & Resort Security", "Executive Protection", "Residential Patrols", "CCTV Monitoring"].map((service, idx) => (
                  <Grid key={idx} item xs={12} sm={6} md={4}>
                    <Typography>• Canmore {service}</Typography>
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          </Paper>

          {/* Section 4: Custom Plans */}
          <Paper sx={sectionStyle}>
            <motion.div variants={fadeInUp}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Custom-Tailored Security Services
              </Typography>
              <Typography>
                Every client and every location is unique. That’s why our Canmore security plans are personalized to
                reflect your goals, risk level, and budget — all delivered by guards who care about your safety.
              </Typography>
            </motion.div>
          </Paper>

          {/* Section 5: Social Impact */}
          <Paper sx={sectionStyle}>
            <motion.div variants={fadeInUp}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Local Impact & Giving Back
              </Typography>
              <Typography>
                Shield Security supports Bow Valley causes and local initiatives that uplift our neighbors. Through
                volunteerism and financial support, we give back to the communities that trust us.
              </Typography>
            </motion.div>
          </Paper>

          {/* Section 6: Training */}
          <Paper sx={sectionStyle}>
            <motion.div variants={fadeInUp}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Industry-Leading Guard Training
              </Typography>
              <Typography>
                From first aid to crisis de-escalation and Indigenous awareness, our Canmore guards are certified through
                Shield Academy for professional, respectful service.
              </Typography>
              <Grid container spacing={2} sx={{ mt: 2 }}>
                {["Emergency Response", "Customer Service Excellence", "Crisis Management", "First Aid & WHMIS", "Conflict Resolution", "CCTV & Access Control", "Indigenous Awareness Training", "Report Writing"].map((module, idx) => (
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
                Real-Time GPS Reporting
              </Typography>
              <Typography>
                With TrackTik, our clients in Canmore receive transparent, live updates about patrol progress, incidents,
                and site conditions — accessible through mobile dashboards.
              </Typography>
            </motion.div>
          </Paper>

          {/* CTA Section */}
          <Paper sx={{ ...sectionStyle, textAlign: "center" }}>
            <Divider sx={{ mb: 4 }} />
            <motion.div variants={fadeInUp}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Let's Discuss Your Canmore Security Needs
              </Typography>
              <Typography>
                Reach out to Shield Security for dependable, local protection in Canmore and the Bow Valley.
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

export default CanmoreSecurity;
