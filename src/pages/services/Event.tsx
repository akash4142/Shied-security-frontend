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
import WhyEventSecurityImportant from "@/components/whyImportant/EventImportant";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const EventSecurity = () => {
  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          height: "85vh",
          backgroundImage: "url(/images/EventSecurity.jpg)",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          px: 2,
          zIndex: 1,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.6))",
            zIndex: 2,
          }}
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ zIndex: 3 }}
        >
          <Typography
            variant="h2"
            sx={{
              color: "#fff",
              fontWeight: 800,
              fontSize: { xs: "2rem", md: "4rem" },
              letterSpacing: "2px",
              textTransform: "uppercase",
              textShadow: "4px 4px 12px rgba(0,0,0,0.8)",
              mb: 2,
              fontFamily: "'Bebas Neue', 'Poppins', sans-serif",
            }}
          >
            Event Security
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#eee",
              maxWidth: "700px",
              mx: "auto",
              fontWeight: 300,
              fontSize: { xs: "1rem", md: "1.2rem" },
              textShadow: "1px 1px 6px rgba(0,0,0,0.6)",
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            Professional Protection for Unforgettable Events
          </Typography>
        </motion.div>
      </Box>

      {/* Intro Section */}
      <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <Box sx={{ background: "#fff", py: 10, px: { xs: 3, md: 12 }, textAlign: "center" }}>
          <Typography variant="h4" fontWeight={700} mb={2} fontFamily="'Poppins', sans-serif" color="#111">
            Expert Security for Every Occasion
          </Typography>
          <Typography sx={{ color: "#444", maxWidth: "900px", mx: "auto", fontSize: "1.1rem" }}>
            Our event security services are tailored to ensure peace of mind, smooth operations, and the safety of every guest.
            Whether your event hosts 50 or 50,000 attendees, our trained professionals are prepared to manage it efficiently.
          </Typography>
        </Box>
      </motion.div>

     

      {/* Why Event Security is Important */}
      <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <WhyEventSecurityImportant />
      </motion.div>

      {/* Responsibilities Section */}
      <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <Box sx={{ background: "#fff", py: 10, px: { xs: 3, md: 12 } }}>
          <Typography variant="h4" fontWeight={700} color="#111" fontFamily="'Poppins', sans-serif" mb={3} textAlign="center">
            Duties of Our Event Security Team
          </Typography>
          <Typography sx={{ color: "#555", mb: 5, maxWidth: "900px", mx: "auto", textAlign: "center", fontSize: "1.05rem" }}>
            Our team handles a wide range of duties to keep your event safe and running smoothly:
          </Typography>

          <Grid container spacing={4}>
            {[
              { icon: <FaShieldAlt />, label: "Access Control & Checkpoints" },
              { icon: <FaUsers />, label: "Crowd Monitoring" },
              { icon: <FaHandsHelping />, label: "Conflict Resolution" },
              { icon: <FaUserSecret />, label: "VIP Escort Services" },
              { icon: <FaCamera />, label: "Surveillance & Monitoring" },
              { icon: <FaCarCrash />, label: "Traffic & Parking Management" },
            ].map((item, idx) => (
              <Grid key={idx} item xs={12} sm={6} md={4}>
                <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <Box
                    sx={{
                      background: "#f1f1f1",
                      borderRadius: 4,
                      p: 4,
                      textAlign: "center",
                      height: "100%",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        background: "#e4e4e4",
                      },
                    }}
                  >
                    <Box sx={{ fontSize: 40, mb: 2, color: "#111" }}>{item.icon}</Box>
                    <Typography variant="h6" fontWeight={600} color="#222">
                      {item.label}
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </motion.div>

      {/* Other Services */}
      <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <ServicesShowcase currentService="Event Security" />
      </motion.div>

       {/* Trusted By Section */}
       <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <Box sx={{ background: "#f7f7f7", py: 8, px: { xs: 3, md: 12 }, textAlign: "center" }}>
          <Typography variant="h5" fontWeight={600} fontFamily="'Poppins', sans-serif" color="#111" mb={4}>
            Trusted by Leading Brands
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {["/logos/spyfilms.jpg", "/logos/Town of canmore.png", "/logos/peka.jpg", "/logos/cornerStone.jpg"].map(
              (logo, idx) => (
                <Grid item key={idx} xs={6} sm={3} md={2} >
                  <Box
                    component="img"
                    src={logo}
                    alt={`Client ${idx + 1}`}
                    sx={{ width: "100%", opacity: 0.8 }}
                  />
                </Grid>
              )
            )}
          </Grid>
        </Box>
      </motion.div>

      {/* Testimonials + CTA */}
      <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <TestimonialsSection />
        <RequestQuote />
      </motion.div>
    </>
  );
};

export default EventSecurity;
