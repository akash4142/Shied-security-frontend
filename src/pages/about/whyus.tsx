import React from "react";
import { Box,  Typography, Grid} from "@mui/material";
import { motion } from "framer-motion";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import BuildIcon from "@mui/icons-material/Build";
import GroupsIcon from "@mui/icons-material/Groups";
import SecurityIcon from "@mui/icons-material/Security";
import FinalCTA from "@/components/FinalCTA";
import RequestQuote from "@/components/RequestQuote";
import ServicesShowcase from "@/components/serviceShowcase";

// Animations
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const WhyUs = () => {
  return (
    <Box>
      {/* ✅ Hero Section */}
      <Box
        sx={{
          position: "relative",
          height: "100vh",
          backgroundImage: "url(/images/eventsecurity.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          px: 2,
        }}
      >
        <Box sx={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.6)", zIndex: 1 }} />
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ zIndex: 2 }}
        >
          <Typography
            variant="h2"
            sx={{
              color: "#fff",
              fontWeight: 800,
              fontSize: { xs: "2.5rem", md: "4rem" },
              letterSpacing: 2,
              fontFamily: "'Bebas Neue', sans-serif",
              textShadow: "4px 4px 12px rgba(0,0,0,0.8)",
            }}
          >
            Why Choose Shield Security?
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#ddd",
              mt: 2,
              fontWeight: 300,
              fontSize: { xs: "1rem", md: "1.2rem" },
              textShadow: "1px 1px 6px rgba(0,0,0,0.5)",
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            Your Protection, Our Commitment
          </Typography>
        </motion.div>
      </Box>

      {/* ✅ Mission & Overview */}
<Box sx={{ backgroundColor: "#fff", color: "#111", py: { xs: 6, md: 10 }, px: { xs: 3, md: 10 } }}>
  <Grid container spacing={6} alignItems="center" justifyContent="center">
    <Grid item xs={12} md={10}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          gutterBottom
          sx={{
            fontSize: { xs: "2rem", md: "2.5rem" },
            textAlign: "center",
            mb: 3,
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          Personalized. Professional. Proven.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "1rem", md: "1.15rem" },
            color: "#333",
            lineHeight: 1.9,
            maxWidth: "900px",
            mx: "auto",
            textAlign: "center",
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          At <strong>Shield Security</strong>, we deliver more than protection — we provide peace of mind through 
          tailored security strategies built on trust, technology, and training. Whether you need on-site presence, 
          event monitoring, or mobile patrols, our licensed professionals work as an extension of your team — 
          responsive, reliable, and ready 24/7.
          <br /><br />
          Every client receives personalized attention. Every challenge is met with proactive, proven solutions. 
          Let us elevate your safety standards and become the trusted partner in your security journey.
        </Typography>
      </motion.div>
    </Grid>
  </Grid>
</Box>


      {/* ✅ Operational Principles */}
      <Box sx={{ py: 10, px: { xs: 3, md: 10 }, backgroundColor: "#111" }}>
        <Typography variant="h4" textAlign="center" fontWeight={700} gutterBottom>
          Our Operational Principles
        </Typography>
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Grid container spacing={4} mt={4} color="black">
            {[
              {
                title: "Hands-On Leadership",
                icon: <GroupsIcon sx={{ fontSize: 40, color: "#1976d2", mb: 1 }} />,
                desc: "Our leadership is actively involved in every contract through site visits, audits, and direct engagement.",
              },
              {
                title: "Customizable Strategies",
                icon: <BuildIcon sx={{ fontSize: 40, color: "#388e3c", mb: 1 }} />,
                desc: "Security plans tailored to your operations, risks, and environment — not just templates.",
              },
              {
                title: "Scalable Operations",
                icon: <SecurityIcon sx={{ fontSize: 40, color: "#f57c00", mb: 1 }} />,
                desc: "From a single site to a nationwide presence, our team is built to scale with your needs.",
              },
              {
                title: "Certified Excellence",
                icon: <VerifiedUserIcon sx={{ fontSize: 40, color: "#d32f2f", mb: 1 }} />,
                desc: "Shield officers are WHMIS, First Aid, and De-escalation certified academy",
              },
            ].map((item, idx) => (
              <Grid key={idx} item xs={12} md={6}>
                <motion.div variants={fadeInUp}>
                  <Box
                    sx={{
                      p: 4,
                      backgroundColor: "#fff",
                      borderRadius: 4,
                      border: "1px solid #eee",
                      boxShadow: 1,
                      height: "100%",
                      textAlign: "left",
                      transition: "0.3s",
                      "&:hover": { transform: "translateY(-5px)", boxShadow: 3 },
                    }}
                  >
                    {item.icon}
                    <Typography variant="h5" fontWeight="bold" gutterBottom>
                      {item.title}
                    </Typography>
                    <Typography sx={{ color: "#555", lineHeight: 1.6 }}>{item.desc}</Typography>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Box>

      <ServicesShowcase currentService="Retail"/>

     <FinalCTA/>
     <RequestQuote/>
    </Box>
  );
};

export default WhyUs;
