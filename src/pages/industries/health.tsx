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

const HealthcareSecurity = () => {
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
              Healthcare Security
            </Typography>
            <Typography variant="h6" sx={{ color: "white", mt: 2 }}>
              Compassionate, Professional Protection for Healthcare Settings
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
                Trusted Healthcare Security Across Canada
              </Typography>
              <Typography>
                Shield Security specializes in compassionate and competent healthcare protection for hospitals, clinics,
                long-term care homes, and medical facilities. Our presence helps create a secure, respectful environment
                for patients, visitors, and staff.
              </Typography>
            </motion.div>
          </Paper>

          {/* Core Functions */}
          <Paper sx={sectionStyle}>
            <Grid container spacing={2}>
              {["Access Control & Screening", "Patient & Visitor Safety", "Emergency Response", "De-escalation Support"].map((item, idx) => (
                <Grid key={idx} item xs={12} sm={6} md={3}>
                  <motion.div variants={fadeInUp}>
                    <Typography align="center">• {item}</Typography>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Paper>

          {/* Approach */}
          <Paper sx={sectionStyle}>
            <motion.div variants={fadeInUp}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Trauma-Informed & Patient-Centered
              </Typography>
              <Typography>
                Our guards are trained to support individuals in distress while maintaining safety and order. They work
                closely with medical teams to prevent escalation and respond appropriately to behavioral emergencies.
              </Typography>
            </motion.div>
          </Paper>

          {/* Responsibilities */}
          <Paper sx={sectionStyle}>
            <motion.div variants={fadeInUp}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Healthcare Security Duties
              </Typography>
            </motion.div>
            <Grid container spacing={2}>
              {["Lobby & Access Coverage", "Aggression Management", "Policy Enforcement", "Escort Services", "Emergency Assistance", "Patient Watch & Support", "Conflict Resolution", "Incident Reporting", "Visitor Management", "Alarm Response"].map((task, idx) => (
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
                Transparent Reporting via TrackTik
              </Typography>
              <Typography>
                Our technology allows administrators to monitor activities, receive detailed reports, and ensure accountability
                across healthcare sites in real time.
              </Typography>
            </motion.div>
          </Paper>

          {/* Flexible Plans */}
          <Paper sx={sectionStyle}>
            <motion.div variants={fadeInUp}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Flexible Security for Every Facility
              </Typography>
              <Typography>
                From large hospitals to outpatient clinics, we adapt our approach based on your infrastructure, patient
                demographics, and specific health service needs.
              </Typography>
            </motion.div>
          </Paper>

          {/* Services */}
          <Paper sx={sectionStyle}>
            <motion.div variants={fadeInUp}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Healthcare Security Services Offered
              </Typography>
            </motion.div>
            <Grid container spacing={2}>
              {["Hospital Security", "Mental Health Support Security", "Healthcare Concierge/Greeters", "Ambulatory Unit Guards"].map((service, idx) => (
                <Grid key={idx} item xs={12} sm={6} md={4}>
                  <motion.div variants={fadeInUp}>
                    <Typography>• {service}</Typography>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Paper>

          {/* Facilities We Serve */}
          <Paper sx={sectionStyle}>
            <motion.div variants={fadeInUp}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Who We Protect
              </Typography>
            </motion.div>
            <Grid container spacing={2}>
              {["Hospitals", "Clinics", "Long-Term Care Homes", "Mental Health Facilities", "Urgent Care Centres", "Rehabilitation Centres", "Medical Offices", "Testing & Screening Sites"].map((location, idx) => (
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
                Specialized Training for Healthcare Guards
              </Typography>
              <Typography>
                Our healthcare security staff are equipped with certifications in Nonviolent Crisis Intervention, Mental
                Health First Aid, Infection Control, and Cultural Competency.
              </Typography>
            </motion.div>
          </Paper>

          {/* CTA Section */}
          <Paper sx={{ ...sectionStyle, textAlign: "center" }}>
            <Divider sx={{ mb: 4 }} />
            <motion.div variants={fadeInUp}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Your Healthcare Facility Deserves the Best
              </Typography>
              <Typography>
                Reach out to Shield Security for a tailored safety plan designed to support your team and care environment.
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

export default HealthcareSecurity;
