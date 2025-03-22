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

const ExshawSecurity = () => {
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
              Exshaw
            </Typography>
            <Typography variant="h6" sx={{ color: "white", mt: 2 }}>
              Local Security Services for Peace of Mind in Exshaw
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
                Exshaw Security Company
              </Typography>
              <Typography>
                Shield Security proudly serves the hamlet of Exshaw and surrounding areas with dependable, community-focused security services. We offer personalized protection for local businesses, residential areas, and industrial sites.
              </Typography>
            </motion.div>
          </Paper>

          {/* Section 2: Local Culture */}
          <Paper sx={sectionStyle}>
            <motion.div variants={fadeInUp}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Built for the Bow Valley
              </Typography>
              <Typography>
                Nestled in the Rocky Mountains, Exshaw has unique security needs shaped by its environment and industry. Our guards understand the terrain, respond fast to incidents, and are part of the Bow Valley community.
              </Typography>
            </motion.div>
          </Paper>

          {/* Section 3: Services */}
          <Paper sx={sectionStyle}>
            <motion.div variants={fadeInUp}>
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                Exshaw Security Services We Offer
              </Typography>
              <Grid container spacing={2}>
                {["Industrial Site Security", "Mobile Patrols", "Alarm Response", "Event Security", "Loss Prevention", "CCTV Monitoring", "Construction Site Security", "Uniformed Security", "Concierge & Gatehouse", "Tactical Support", "Access Control"].map((service, idx) => (
                  <Grid key={idx} item xs={12} sm={6} md={4}>
                    <Typography>• Exshaw {service}</Typography>
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          </Paper>

          {/* Section 4: Custom Plans */}
          <Paper sx={sectionStyle}>
            <motion.div variants={fadeInUp}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Tailored Protection for Exshaw
              </Typography>
              <Typography>
                Whether it's a small business, industrial operation, or community facility, our team will develop a security strategy specific to your needs, geography, and risk profile.
              </Typography>
            </motion.div>
          </Paper>

          {/* Section 5: Social Impact */}
          <Paper sx={sectionStyle}>
            <motion.div variants={fadeInUp}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Giving Back Locally
              </Typography>
              <Typography>
                We support Bow Valley and Exshaw initiatives that focus on sustainability, community connection, and public safety. Shield Security is proud to serve where we live.
              </Typography>
            </motion.div>
          </Paper>

          {/* Section 6: Training */}
          <Paper sx={sectionStyle}>
            <motion.div variants={fadeInUp}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Expert Training for Unique Conditions
              </Typography>
              <Typography>
                Our guards undergo specialized training for mountain and industrial environments, learning everything from hazard awareness to effective communication.
              </Typography>
              <Grid container spacing={2} sx={{ mt: 2 }}>
                {["Hazard Awareness", "CCTV Monitoring", "Emergency Response", "First Aid & WHMIS", "Conflict De-Escalation", "Customer Service", "Industrial Compliance", "Local Area Familiarity"].map((module, idx) => (
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
                Real-Time Security Reporting
              </Typography>
              <Typography>
                With GPS and mobile tracking tools like TrackTik, our team provides real-time alerts, patrol updates, and incident reports to keep you informed at all times.
              </Typography>
            </motion.div>
          </Paper>

          {/* CTA Section */}
          <Paper sx={{ ...sectionStyle, textAlign: "center" }}>
            <Divider sx={{ mb: 4 }} />
            <motion.div variants={fadeInUp}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Protect What Matters in Exshaw
              </Typography>
              <Typography>
                Let Shield Security create a protection plan tailored for your property in Exshaw. Contact us today.
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

export default ExshawSecurity;