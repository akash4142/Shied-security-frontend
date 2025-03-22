import React from "react";
import { Box, Container, Typography, Grid, Button, Divider, Paper } from "@mui/material";
//import Image from "next/image";
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

const BanffSecurity = () => {
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
              Banff
            </Typography>
            <Typography variant="h6" sx={{ color: "white", mt: 2 }}>
              Trusted by Businesses & Resorts in Banff National Park
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
                Banff Security Company
              </Typography>
              <Typography>
                Shield Security is proud to serve Banff, offering trusted protection for hotels, resorts, retail outlets,
                and government properties throughout this iconic destination in the Canadian Rockies.
              </Typography>
            </motion.div>
          </Paper>

          {/* Section 2: Local Culture */}
          <Paper sx={sectionStyle}>
            <motion.div variants={fadeInUp}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Local Expertise in a Tourist Town
              </Typography>
              <Typography>
                As one of Canada&apos;s most visited destinations, Banff presents unique security needs. Our trained professionals
                know the area, work closely with local businesses, and respond swiftly to challenges on high-traffic days.
              </Typography>
            </motion.div>
          </Paper>

          {/* Section 3: Services */}
          <Paper sx={sectionStyle}>
            <motion.div variants={fadeInUp}>
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                Banff Security Services We Offer
              </Typography>
              <Grid container spacing={2}>
                {["Concierge Security", "Event Security", "Mobile Patrol", "Uniformed Security", "Loss Prevention", "Tactical Security", "Construction Site Security", "Hotel & Resort Security", "Executive Protection", "Tourist Safety Services", "CCTV Monitoring"].map((service, idx) => (
                  <Grid key={idx} item xs={12} sm={6} md={4}>
                    <Typography>• Banff {service}</Typography>
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          </Paper>

          {/* Section 4: Custom Plans */}
          <Paper sx={sectionStyle}>
            <motion.div variants={fadeInUp}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Personalized Security Planning
              </Typography>
              <Typography>
                Whether it’s a downtown hotel, outdoor event, or national park facility, we craft custom security strategies
                to match your operations, visitor flow, and environment.
              </Typography>
            </motion.div>
          </Paper>

          {/* Section 5: Social Impact */}
          <Paper sx={sectionStyle}>
            <motion.div variants={fadeInUp}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Supporting Our Mountain Communities
              </Typography>
              <Typography>
                We proudly give back to the Banff and Bow Valley area through local initiatives, sponsorships, and support
                for nonprofit organizations that uplift youth, nature, and safety.
              </Typography>
            </motion.div>
          </Paper>

          {/* Section 6: Training */}
          <Paper sx={sectionStyle}>
            <motion.div variants={fadeInUp}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Professional Training & Certifications
              </Typography>
              <Typography>
                Our Banff guards receive specialized training through Shield Academy, equipping them with situational
                awareness, conflict resolution, and tourism-centered safety protocols.
              </Typography>
              <Grid container spacing={2} sx={{ mt: 2 }}>
                {["Emergency Response", "Visitor Service Excellence", "Conflict Management", "First Aid & WHMIS", "CCTV & Access Control", "Report Writing", "Indigenous & Cultural Awareness", "Park Regulation Compliance"].map((module, idx) => (
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
                Technology That Keeps You Informed
              </Typography>
              <Typography>
                Using GPS-powered software like TrackTik, our clients in Banff receive live patrol updates, detailed
                incident logs, and access to security reports in real time.
              </Typography>
            </motion.div>
          </Paper>

          {/* CTA Section */}
          <Paper sx={{ ...sectionStyle, textAlign: "center" }}>
            <Divider sx={{ mb: 4 }} />
            <motion.div variants={fadeInUp}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Let’s Secure Banff Together
              </Typography>
              <Typography>
                Contact Shield Security to build a dependable protection plan for your Banff-based business or property.
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

export default BanffSecurity;