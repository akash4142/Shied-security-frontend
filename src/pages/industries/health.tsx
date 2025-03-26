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
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import VisibilityIcon from "@mui/icons-material/Visibility";
import PeopleIcon from "@mui/icons-material/People";
import SecurityIcon from "@mui/icons-material/Security";

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

const HealthcareSecurity = () => {
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
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <Typography variant="h2" sx={{ color: "#fff", fontWeight: "bold", fontFamily: "'Poppins', sans-serif" }}>
              Healthcare Security
            </Typography>
          </motion.div>
        </Box>
      </Box>

      {/* ✅ Intro Section */}
      <Box sx={{ background: "#111318", color: "#fff", px: { xs: 3, md: 10 }, py: 8, textAlign: "center" }}>
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Typography variant="h5" fontWeight="300" sx={{ mb: 2 }}>
            Trusted Security for Medical Spaces
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, maxWidth: 700, mx: "auto", color: "#ccc", fontWeight: 300 }}>
            Our healthcare-trained officers are equipped to handle sensitive scenarios with empathy, professionalism, and readiness.
          </Typography>
          <Button variant="contained" color="error" size="large">
            Request a Quote
          </Button>
        </motion.div>
      </Box>

      {/* ✅ Feature Highlights */}
      <Box sx={{ background: "#1c1f25", color: "#fff", px: { xs: 3, md: 10 }, py: 10 }}>
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Grid container spacing={4}>
            {[{
              icon: <LocalHospitalIcon sx={{ fontSize: 70, color: '#e53935' }} />,
              title: "Healthcare Access Control",
              description: "Ensure only authorized personnel and visitors access sensitive areas."
            }, {
              icon: <VisibilityIcon sx={{ fontSize: 70, color: '#e53935' }} />,
              title: "Patient & Staff Protection",
              description: "Maintain safety and order in high-stress medical environments."
            }, {
              icon: <PeopleIcon sx={{ fontSize: 70, color: '#e53935' }} />,
              title: "Compassionate Crisis Response",
              description: "De-escalate incidents with trauma-informed, respectful support."
            }, {
              icon: <SecurityIcon sx={{ fontSize: 70, color: '#e53935' }} />,
              title: "24/7 Security Readiness",
              description: "Prepared for emergencies, code calls, and behavioral incidents anytime."
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

      {/* ✅ Customer-Focused Approach */}
      <Box sx={{ background: "#111318", color: "#fff", px: { xs: 3, md: 10 }, py: 12 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                More Than Security — It&apos;s Patient-Centered Care
              </Typography>
              <Typography variant="h6" sx={{ color: "#ccc", mb: 3, fontWeight: 300 }}>
                We understand the emotional weight of healthcare spaces. Our officers practice active listening and clear communication while maintaining a strong, calm presence.
              </Typography>
              <Typography variant="body1" sx={{ color: "#aaa", fontWeight: 300, mb: 4 }}>
                We assist in patient watch, manage escalations with dignity, and collaborate with your clinical team to deliver smooth, compassionate service without disrupting care.
              </Typography>
              <Typography variant="body1" sx={{ color: "#aaa", fontWeight: 300 }}>
                Our guards undergo specialized training for mental health response, infection control, and non-violent crisis intervention — ensuring every interaction supports your mission.
              </Typography>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <Box
                component="img"
                src="/images/2.jpg"
                alt="Healthcare Guard"
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

      {/* ✅ Other Services */}
      <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <ServicesShowcase currentService="Healthcare Security" />
      </motion.div>

      {/* ✅ Testimonials + CTA */}
      <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <TestimonialsSection />
        <RequestQuote />
      </motion.div>
    </Box>
  );
};

export default HealthcareSecurity;
