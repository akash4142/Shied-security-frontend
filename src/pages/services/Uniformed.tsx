// UniformedSecurity.jsx
import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaUsers,
  FaCarCrash,
  FaCamera,
  FaUserSecret,
  FaHandsHelping,
} from "react-icons/fa";
import TestimonialsSection from "@/components/TestimonialsSection";
import RequestQuote from "@/components/RequestQuote";
import ServicesShowcase from "@/components/serviceShowcase";
import UniformedImportant from "@/components/whyImportant/UniformedImportant"

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const UniformedSecurity = () => {
  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          height: "100vh",
          backgroundImage: "url(/images/1.jpg)",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "flex-end",
          p: { xs: 3, md: 10 },
        }}
      >
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <Box
            sx={{
              backgroundColor: "rgba(0, 0, 0, 0.7)",
              px: 4,
              py: 4,
              borderRadius: 2,
              maxWidth: "500px",
              textAlign: "center",
            }}
          >
            <Typography variant="h2" sx={{ color: "white", fontWeight: "bold" }}>
              Uniformed Security
            </Typography>
            <Typography variant="h6" sx={{ color: "#ccc", mt: 1 }}>
              Visible Presence. Proven Protection.
            </Typography>
          </Box>
        </motion.div>
      </Box>

      {/* Intro Text Section */}
      <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <Box sx={{ background: "#0f1114", py: 10, px: { xs: 3, md: 12 }, textAlign: "center" }}>
          <Typography variant="h4" color="white" fontWeight="bold" gutterBottom>
            Professionalism You Can See
          </Typography>
          <Typography sx={{ color: "#aaa", maxWidth: "900px", mx: "auto" }}>
            Our uniformed guards provide a commanding presence that helps deter threats, enforce policies, and enhance safety.
            Whether at a corporate office, shopping mall, or community event, our uniformed officers deliver reliability and peace of mind.
          </Typography>
        </Box>
      </motion.div>

      {/* Trusted By Section */}
      <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <Box sx={{ background: "#1a1d22", py: 8, px: { xs: 3, md: 12 }, textAlign: "center" }}>
          <Typography variant="h5" color="white" fontWeight="bold" gutterBottom>
            Trusted by Leading Brands
          </Typography>
          <Grid container spacing={4} justifyContent="center" sx={{ mt: 3 }}>
            {["/logos/canadian-tire.png", "/logos/canadian-tire.png", "/logos/canadian-tire.png", "/logos/canadian-tire.png"].map(
              (logo, idx) => (
                <Grid item key={idx} xs={6} sm={3} md={2}>
                  <Box
                    component="img"
                    src={logo}
                    alt={`Client ${idx + 1}`}
                    sx={{ width: "100%", filter: "grayscale(1) brightness(0.8)" }}
                  />
                </Grid>
              )
            )}
          </Grid>
        </Box>
      </motion.div>

      {/* Why Security is Important Section */}
      <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <UniformedImportant/>
      </motion.div>

      {/* Duties of Uniformed Security */}
      <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <Box sx={{ background: "#0f1114", py: 10, px: { xs: 3, md: 12 } }}>
          <Typography variant="h4" color="white" fontWeight="bold" gutterBottom>
            Responsibilities of Our Uniformed Guards
          </Typography>
          <Typography sx={{ color: "#aaa", mb: 5, maxWidth: "900px" }}>
            Our uniformed officers are trained to manage a variety of security tasks with professionalism and efficiency:
          </Typography>

          <Grid container spacing={4}>
            {[
              { icon: <FaShieldAlt />, label: "Visible Deterrence" },
              { icon: <FaUsers />, label: "Customer Assistance" },
              { icon: <FaHandsHelping />, label: "Conflict Management" },
              { icon: <FaUserSecret />, label: "Policy Enforcement" },
              { icon: <FaCamera />, label: "Incident Reporting" },
              { icon: <FaCarCrash />, label: "Perimeter Patrols" },
            ].map((item, idx) => (
              <Grid key={idx} item xs={12} sm={6} md={4}>
                <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <Box
                    sx={{
                      background: "linear-gradient(135deg, #1c1f25, #262a31)",
                      borderRadius: 4,
                      p: 4,
                      textAlign: "center",
                      color: "white",
                      boxShadow: "0 6px 30px rgba(0,0,0,0.3)",
                      height: "100%",
                    }}
                  >
                    <Box sx={{ fontSize: 40, mb: 2 }}>{item.icon}</Box>
                    <Typography variant="h6">{item.label}</Typography>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </motion.div>

      {/* Other Services */}
      <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <ServicesShowcase currentService="Uniformed Security" />
      </motion.div>

      {/* Testimonials + CTA */}
      <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <TestimonialsSection />
        <RequestQuote />
      </motion.div>
    </>
  );
};

export default UniformedSecurity;