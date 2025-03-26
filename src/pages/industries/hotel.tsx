import React from "react";
import {
  Box,
  Typography,
  Grid,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";
import RequestQuote from "@/components/RequestQuote";
import TestimonialsSection from "@/components/TestimonialsSection";
import ServicesShowcase from "@/components/serviceShowcase";
import HotelIcon from "@mui/icons-material/Hotel";
import KeyIcon from "@mui/icons-material/VpnKey";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";

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

const HotelSecurity = () => {
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
            <Typography variant="h2" sx={{ color: "#fff", fontWeight: "bold", fontFamily: "'Poppins', sans-serif" }}>
              Hotel Security
            </Typography>
          </motion.div>
        </Box>
      </Box>

      {/* ✅ Intro Section */}
      <Box sx={{ background: "#111318", color: "#fff", px: { xs: 3, md: 10 }, py: 8, textAlign: "center" }}>
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Typography variant="h5" fontWeight="300" sx={{ mb: 2 }}>
            Guest-Centered Safety & Hospitality-Driven Security
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, maxWidth: 700, mx: "auto", color: "#ccc", fontWeight: 300 }}>
            Shield Security provides discreet and dependable hotel protection — from front desk presence to emergency response, we keep your guests safe while representing your brand with professionalism.
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
              icon: <HotelIcon sx={{ fontSize: 70, color: '#e53935' }} />,
              title: "Concierge Presence",
              description: "Trained to greet guests and maintain visibility in hotel lobbies and reception areas."
            }, {
              icon: <KeyIcon sx={{ fontSize: 70, color: '#e53935' }} />,
              title: "Access Management",
              description: "Monitor entries, exits, elevators and restricted areas with professional oversight."
            }, {
              icon: <DirectionsWalkIcon sx={{ fontSize: 70, color: '#e53935' }} />,
              title: "Patrol & Emergency Support",
              description: "24/7 internal and external patrols, with immediate response to incidents or alarms."
            }, {
              icon: <EmojiPeopleIcon sx={{ fontSize: 70, color: '#e53935' }} />,
              title: "Hospitality-Focused Approach",
              description: "Our guards are guest-ready — always courteous, respectful, and responsive."
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

      {/* ✅ Customer Service Image Section */}
      <Box sx={{ background: "#111318", color: "#fff", px: { xs: 3, md: 10 }, py: 12 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                A Guest Experience Built on Safety & Warmth
              </Typography>
              <Typography variant="h6" sx={{ color: "#ccc", mb: 3, fontWeight: 300 }}>
                We don’t just secure your hotel — we enhance your brand reputation. Our staff are trained in hospitality etiquette and calm, professional conflict resolution.
              </Typography>
              <Typography variant="body1" sx={{ color: "#aaa", fontWeight: 300, mb: 4 }}>
                Whether assisting late-night guests, managing disturbances, or helping during events, our guards bring professionalism and positivity to every interaction.
              </Typography>
              <Typography variant="body1" sx={{ color: "#aaa", fontWeight: 300 }}>
                Your guests notice quality — and Shield Security makes sure it shows.
              </Typography>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <Box
                component="img"
                src="/images/3.jpg"
                alt="Hotel Guard"
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
        <ServicesShowcase currentService="Hotel Security" />
      </motion.div>

      {/* ✅ Testimonials + CTA */}
      <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <TestimonialsSection />
        <RequestQuote />
      </motion.div>
    </Box>
  );
};

export default HotelSecurity;
