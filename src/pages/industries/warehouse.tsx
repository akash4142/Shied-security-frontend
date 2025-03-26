import React from "react";
import {
  Box,
  Typography,
  Grid,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";
import RequestQuote from "@/components/RequestQuote";
import SecurityIcon from "@mui/icons-material/Security";
import KeyIcon from "@mui/icons-material/VpnKey";
import VisibilityIcon from "@mui/icons-material/Visibility";
import HandshakeIcon from "@mui/icons-material/Handshake";
import TestimonialsSection from "@/components/TestimonialsSection";
import ServicesShowcase from "@/components/serviceShowcase";

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

const WarehouseSecurity = () => {
  return (
    <>
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
          overflowX: "hidden",
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
            <Typography variant="h2" sx={{ color: "#fff", fontWeight: "bold", fontFamily: "'Poppins', sans-serif" }}>
              Warehouse Security
            </Typography>
          </motion.div>
        </Box>
      </Box>

      {/* ✅ Intro Section */}
      <Box sx={{ background: "#111318", color: "#fff", px: { xs: 3, md: 10 }, py: 8, textAlign: "center" }}>
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Typography variant="h5" fontWeight="300" sx={{ mb: 2 }}>
            Industry-Leading Protection for Warehouse Environments
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, maxWidth: 700, mx: "auto", color: "#ccc", fontWeight: 300 }}>
            We understand the unique challenges of securing warehouse operations — from asset protection and safety compliance to smooth logistic flow. Our team is equipped to handle it all with professionalism and precision.
          </Typography>
          <Button variant="contained" color="error" size="large">
            Request a Quote
          </Button>
        </motion.div>
      </Box>

      {/* ✅ Core Features Grid */}
      <Box sx={{ background: "#1c1f25", color: "#fff", px: { xs: 3, md: 10 }, py: 10 }}>
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Grid container spacing={4}>
            {[{
              icon: <SecurityIcon sx={{ fontSize: 70, color: '#e53935' }} />, 
              title: "Concierge & Lobby Presence",
              description: "First impressions matter. Our guards professionally manage visitor inquiries and provide front desk support."
            }, {
              icon: <KeyIcon sx={{ fontSize: 70, color: '#e53935' }} />,
              title: "Access & Entry Control",
              description: "Monitor and manage all access points, ensuring only authorized personnel enter secure zones."
            }, {
              icon: <VisibilityIcon sx={{ fontSize: 70, color: '#e53935' }} />,
              title: "Mobile Foot Patrols",
              description: "Regular perimeter sweeps ensure complete coverage and rapid incident response day and night."
            }, {
              icon: <HandshakeIcon sx={{ fontSize: 70, color: '#e53935' }} />,
              title: "Customer-Oriented Service",
              description: "Beyond safety, our team offers a welcoming attitude to staff, guests, and contractors."
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
                Trained to Represent You With Excellence
              </Typography>
              <Typography variant="h6" sx={{ color: "#ccc", mb: 3, fontWeight: 300 }}>
                At Shield Security, we understand that first impressions last. That’s why our warehouse guards are extensively trained not only in safety protocols but also in human interaction.
              </Typography>
              <Typography variant="body1" sx={{ color: "#aaa", fontWeight: 300, mb: 4 }}>
                From greeting delivery drivers and contractors to assisting your team with directions and inquiries, our professionals deliver a warm and helpful presence that reinforces your business’s reputation.
              </Typography>
              <Typography variant="body1" sx={{ color: "#aaa", fontWeight: 300 }}>
                Their professional uniforms, calm demeanor, and readiness to assist make them a valued part of your daily operations — blending protection with hospitality.
              </Typography>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <Box
                component="img"
                src="/images/3.jpg"
                alt="Customer Service"
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
        <ServicesShowcase currentService="Loss Prevention" />
      </motion.div>

      {/* ✅ Testimonials + CTA */}
      <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <TestimonialsSection />
        <RequestQuote />
      </motion.div>
    </>
  );
};

export default WarehouseSecurity;
