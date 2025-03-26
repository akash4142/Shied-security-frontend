import React from "react";
import {
  Box,
  Typography,
  Grid,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";
import RequestQuote from "@/components/RequestQuote";
import ServicesShowcase from "@/components/serviceShowcase";
import TestimonialsSection from "@/components/TestimonialsSection";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import BadgeIcon from "@mui/icons-material/Badge";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";

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

const CorporateSecurity = () => {
  return (
    <Box sx={{ overflowX: "hidden" }}>
      {/* ✅ Hero Section */}
      <Box
        sx={{
          position: "relative",
          height: "70vh",
          backgroundImage: "url(/images/1.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          paddingBottom: "60px",
        }}
      >
        <Box
          sx={{
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            padding: "30px 50px",
            borderRadius: "12px",
            textAlign: "center",
            backdropFilter: "blur(4px)",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Typography variant="h2" sx={{ color: "#fff", fontWeight: "bold" }}>
              Corporate Security
            </Typography>
          </motion.div>
        </Box>
      </Box>

      {/* ✅ Intro Section */}
      <Box sx={{ background: "#111318", color: "#fff", px: { xs: 3, md: 10 }, py: 8, textAlign: "center" }}>
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Typography variant="h5" fontWeight="300" sx={{ mb: 2 }}>
            Executive-Level Protection for Office Environments
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, maxWidth: 700, mx: "auto", color: "#ccc", fontWeight: 300 }}>
            We help you maintain a secure and professional workplace with concierge-style security, access control, and incident response.
          </Typography>
          <Button variant="contained" color="error" size="large">
            Request a Quote
          </Button>
        </motion.div>
      </Box>

      {/* ✅ Feature Grid */}
      <Box sx={{ background: "#1c1f25", color: "#fff", px: { xs: 3, md: 10 }, py: 10 }}>
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Grid container spacing={4}>
            {[{
              icon: <BusinessCenterIcon sx={{ fontSize: 70, color: '#e53935' }} />,
              title: "Lobby & Front Desk Security",
              description: "A professional presence to welcome guests and manage daily visitor interactions."
            }, {
              icon: <VerifiedUserIcon sx={{ fontSize: 70, color: '#e53935' }} />,
              title: "Access Control",
              description: "Track employee access, manage badges, and monitor facility entry points."
            }, {
              icon: <BadgeIcon sx={{ fontSize: 70, color: '#e53935' }} />,
              title: "Executive Protection",
              description: "Discreet protection for high-profile employees, VIPs, and board meetings."
            }, {
              icon: <SupervisorAccountIcon sx={{ fontSize: 70, color: '#e53935' }} />,
              title: "Workplace Safety",
              description: "Trained in de-escalation and emergency protocols for corporate settings."
            }].map((item, idx) => (
              <Grid item xs={12} sm={6} md={3} key={idx} textAlign="center">
                <motion.div variants={fadeInUp}>
                  <Box sx={{ mb: 2 }}>{item.icon}</Box>
                  <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>{item.title}</Typography>
                  <Typography variant="body1" color="#ccc">{item.description}</Typography>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Box>

      {/* ✅ Customer Service Section */}
      <Box sx={{ background: "#111318", color: "#fff", px: { xs: 3, md: 10 }, py: 12 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                Corporate Security That Elevates Your Image
              </Typography>
              <Typography variant="h6" sx={{ color: "#ccc", mb: 3, fontWeight: 300 }}>
                Our corporate guards do more than protect — they serve as a trusted extension of your front office.
              </Typography>
              <Typography variant="body1" sx={{ color: "#aaa", fontWeight: 300, mb: 4 }}>
                We ensure that our personnel reflect your brand values with polished uniforms, professional conduct, and a helpful demeanor. Whether greeting clients or managing high-security access, they uphold your company’s reputation.
              </Typography>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <Box
                component="img"
                src="/images/3.jpg"
                alt="Corporate Security"
                sx={{ width: "100%", borderRadius: 4, boxShadow: 4 }}
              />
            </motion.div>
          </Grid>
        </Grid>
      </Box>

      {/* ✅ Trusted By Section */}
      <Box sx={{ background: "#1a1d22", py: 8, px: { xs: 3, md: 12 }, textAlign: "center" }}>
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Typography variant="h5" color="white" fontWeight="bold" gutterBottom>
            Trusted By Leading Retailers
          </Typography>
          <Grid container spacing={4} justifyContent="center" sx={{ mt: 3 }}>
            {["/logos/canadian-tire.png", "/logos/canadian-tire.png", "/logos/canadian-tire.png", "/logos/canadian-tire.png"].map(
              (logo, idx) => (
                <Grid item key={idx} xs={6} sm={3} md={2}>
                  <Box
                    component="img"
                    src={logo}
                    alt={`Client ${idx + 1}`}
                    sx={{ width: "100%" }}
                  />
                </Grid>
              )
            )}
          </Grid>
        </motion.div>
      </Box>

      {/* ✅ Services Showcase */}
      <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <ServicesShowcase currentService="Corporate" />
      </motion.div>

      {/* ✅ Testimonials + CTA */}
      <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <TestimonialsSection />
        <RequestQuote />
      </motion.div>
    </Box>
  );
};

export default CorporateSecurity;
