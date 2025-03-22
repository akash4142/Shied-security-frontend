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

const CochraneSecurity = () => {
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
              Cochrane
            </Typography>
            <Typography variant="h6" sx={{ color: "white", mt: 2 }}>
              Trusted Security Solutions in the Foothills Region
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
                Cochrane Security Company
              </Typography>
              <Typography>
                Shield Security proudly serves the community of Cochrane with local, professional, and reliable security services tailored to meet the needs of both residential and commercial clients.
              </Typography>
            </motion.div>
          </Paper>

          {/* Section 2: Local Culture */}
          <Paper sx={sectionStyle}>
            <motion.div variants={fadeInUp}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Securing One of Alberta’s Fastest-Growing Communities
              </Typography>
              <Typography>
                As Cochrane grows, so does the demand for dependable safety services. Our trained personnel understand the town’s unique layout and community values, ensuring localized and proactive coverage.
              </Typography>
            </motion.div>
          </Paper>

          {/* Section 3: Services */}
          <Paper sx={sectionStyle}>
            <motion.div variants={fadeInUp}>
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                Cochrane Security Services We Offer
              </Typography>
              <Grid container spacing={2}>
                {["Mobile Patrol", "Uniformed Security", "Event Security", "Loss Prevention", "CCTV Monitoring", "Construction Site Security", "Concierge & Front Desk", "Tactical Response", "Community Patrols", "Executive Protection", "Alarm Response"].map((service, idx) => (
                  <Grid key={idx} item xs={12} sm={6} md={4}>
                    <Typography>• Cochrane {service}</Typography>
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          </Paper>

          {/* Section 4: Custom Plans */}
          <Paper sx={sectionStyle}>
            <motion.div variants={fadeInUp}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Personalized Security Plans for Cochrane
              </Typography>
              <Typography>
                Whether you’re running a retail business downtown or managing a residential development, we work directly with you to create a scalable and effective protection plan.
              </Typography>
            </motion.div>
          </Paper>

          {/* Section 5: Social Impact */}
          <Paper sx={sectionStyle}>
            <motion.div variants={fadeInUp}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Giving Back to the Cochrane Community
              </Typography>
              <Typography>
                We are proud to partner with local organizations and events that strengthen community ties, support youth initiatives, and promote safety awareness.
              </Typography>
            </motion.div>
          </Paper>

          {/* Section 6: Training */}
          <Paper sx={sectionStyle}>
            <motion.div variants={fadeInUp}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Trained & Certified Guards You Can Trust
              </Typography>
              <Typography>
                Through our Shield Academy, guards in Cochrane receive rigorous, hands-on training that includes emergency response, cultural awareness, and situational judgment.
              </Typography>
              <Grid container spacing={2} sx={{ mt: 2 }}>
                {["Emergency Preparedness", "WHMIS & First Aid", "CCTV & Mobile Monitoring", "Community Engagement", "Report Writing", "Crowd Management", "Customer Service Training", "Local Area Familiarity"].map((module, idx) => (
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
                TrackTik Technology for Transparency
              </Typography>
              <Typography>
                Real-time GPS tracking, incident updates, and digital reporting keep you informed 24/7, so you always know your assets are protected.
              </Typography>
            </motion.div>
          </Paper>

          {/* CTA Section */}
          <Paper sx={{ ...sectionStyle, textAlign: "center" }}>
            <Divider sx={{ mb: 4 }} />
            <motion.div variants={fadeInUp}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Ready to Secure Your Space in Cochrane?
              </Typography>
              <Typography>
                Get in touch with our Cochrane security team today for a free consultation tailored to your environment.
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

export default CochraneSecurity;