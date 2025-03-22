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

const PatrolSecurity = () => {
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
              Patrol Security
            </Typography>
            <Typography variant="h6" sx={{ color: "white", mt: 2 }}>
              Visible, Reliable Protection On The Move
            </Typography>
          </Box>
        </motion.div>
      </Box>

      <Container sx={{ py: 8 }}>
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Paper sx={sectionStyle}>
            <motion.div variants={fadeInUp}>
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                Professional Mobile Patrol Services
              </Typography>
              <Typography variant="body1" sx={{ mb: 4 }}>
                Shield Security’s patrol services provide regular, visible protection to deter crime and keep your premises
                secure. Whether by foot, bike, or vehicle, our patrol units monitor property perimeters, check vulnerable
                areas, and respond swiftly to alarms or disturbances.
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
                  <Image src="/images/2.jpg" alt="Patrol Security" width={600} height={400} style={{ width: "100%", borderRadius: 10 }} />
                </motion.div>
              </Grid>
              <Grid item xs={12} md={6}>
                <motion.div variants={fadeInUp}>
                  <Typography variant="h5" fontWeight="bold" gutterBottom>
                    Why Patrol Security Is Essential
                  </Typography>
                  <Typography>
                    Consistent patrols discourage criminal behavior and ensure that your property remains secure. Patrol
                    officers act as a first line of defense, reporting suspicious activity and handling minor incidents
                    immediately.
                  </Typography>
                </motion.div>
              </Grid>
            </Grid>
          </Paper>

          <Paper sx={sectionStyle}>
            <motion.div variants={fadeInUp}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Key Patrol Services
              </Typography>
            </motion.div>
            <Grid container spacing={2}>
              {["Scheduled & Random Patrols", "Alarm Response", "Vehicle & Foot Patrols", "Lock & Unlock Services", "Incident Reporting", "Lighting & Perimeter Checks", "Vandalism & Loitering Deterrence", "Key Holding", "Fire Watch Patrols"].map((item, idx) => (
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
                Patrol Security Environments
              </Typography>
            </motion.div>
            <Grid container spacing={2}>
              {["Commercial Properties", "Residential Complexes", "Construction Sites", "Parking Facilities", "Office Parks", "Retail Plazas", "Industrial Zones"].map((item, idx) => (
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
                Trusted Eyes on the Ground
              </Typography>
              <Typography>
                Our patrol teams use real-time tracking and reporting tools to ensure transparency and accountability.
                We’re committed to safeguarding what matters most to you.
              </Typography>
            </motion.div>
          </Paper>

          <Paper sx={{ ...sectionStyle, textAlign: "center" }}>
            <Divider sx={{ mb: 4 }} />
            <motion.div variants={fadeInUp}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Let’s Discuss Your Patrol Needs
              </Typography>
              <Typography>
                Contact Shield Security today for a custom patrol security solution tailored to your property.
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

export default PatrolSecurity;
