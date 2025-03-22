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

const WarehouseSecurity = () => {
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
              Warehouse Security
            </Typography>
            <Typography variant="h6" sx={{ color: "white", mt: 2 }}>
              Comprehensive Protection for Inventory and Operations
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
                Safeguarding Warehouses with Confidence
              </Typography>
              <Typography>
                Shield Security’s warehouse security guards protect your facility, goods, and employees by implementing proactive surveillance, access control, and patrol procedures that ensure peace of mind across your supply chain.
              </Typography>
            </motion.div>
          </Paper>

          {/* Key Features */}
          <Paper sx={sectionStyle}>
            <Grid container spacing={2}>
              {["Asset Protection", "Perimeter Patrols", "Loading Dock Oversight", "Unauthorized Entry Prevention"].map((item, idx) => (
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
                Secure Storage Means Secure Business
              </Typography>
              <Typography>
                Warehouses are high-value targets for theft and unauthorized access. Our security solutions focus on minimizing risk, enhancing workflow security, and ensuring that daily operations run smoothly and securely.
              </Typography>
            </motion.div>
          </Paper>

          {/* Responsibilities */}
          <Paper sx={sectionStyle}>
            <motion.div variants={fadeInUp}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Core Warehouse Security Duties
              </Typography>
            </motion.div>
            <Grid container spacing={2}>
              {["24/7 Perimeter Surveillance", "Check-in/Check-out Logging", "Suspicious Activity Reporting", "Dock & Gate Supervision", "Emergency Response", "Keyholding Duties", "Visitor Verification", "CCTV Monitoring", "Access Restriction Enforcement"].map((task, idx) => (
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
                Visibility with TrackTik & Real-Time Reporting
              </Typography>
              <Typography>
                Through TrackTik and other smart solutions, we provide digital logging, GPS-tracked patrol verification, and full visibility into every shift and incident response within your warehouse perimeter.
              </Typography>
            </motion.div>
          </Paper>

          {/* Custom Solutions */}
          <Paper sx={sectionStyle}>
            <motion.div variants={fadeInUp}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Security for Warehouses of All Sizes
              </Typography>
              <Typography>
                Whether it’s a local distribution hub or a national logistics center, we offer customized security packages that support your physical infrastructure, shift schedules, and loss prevention goals.
              </Typography>
            </motion.div>
          </Paper>

          {/* Services Offered */}
          <Paper sx={sectionStyle}>
            <motion.div variants={fadeInUp}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Warehouse Security Services Offered
              </Typography>
            </motion.div>
            <Grid container spacing={2}>
              {["Inventory Protection Patrols", "Dock & Loading Oversight", "Alarm Response Services", "Gatehouse Management", "Facility Lockdown Support"].map((service, idx) => (
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
                Protect Your Inventory with Shield Security
              </Typography>
              <Typography>
                Talk to our team today to explore how we can tailor a warehouse security strategy that’s right for your facility.
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

export default WarehouseSecurity;
