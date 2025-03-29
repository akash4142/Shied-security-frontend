import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import RequestQuote from "@/components/RequestQuote";
import ClientLogoCarousel from "@/components/ClientLogoCarousel";
import TestimonialsSection from "@/components/TestimonialsSection";
import ServicesShowcase from "@/components/serviceShowcase";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const CanmoreSecurity = () => {
  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          height: "80vh",
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
            maxWidth: { xs: "90%", md: "70%" },
          }}
        >
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <Typography variant="h2" sx={{ color: "#fff", fontWeight: "bold", mb: 2 }}>
              Canmore Security Services
            </Typography>
            <Typography variant="h6" sx={{ color: "#ccc" }}>
              Trusted by the Bow Valley Community
            </Typography>
          </motion.div>
        </Box>
      </Box>

      {/* Intro Section */}
      <Box
        sx={{
          backgroundColor: "#111",
          color: "#fff",
          px: { xs: 3, md: 10 },
          py: { xs: 6, md: 10 },
          textAlign: "center",
        }}
      >
        <motion.div initial="hidden" whileInView="visible" variants={fadeInUp} viewport={{ once: true }}>
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3 }}>
            Shielding Canmore with Trusted Local Security
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#ccc",
              maxWidth: "900px",
              mx: "auto",
              lineHeight: 1.8,
              fontSize: { xs: "1rem", md: "1.1rem" },
            }}
          >
            We proudly serve Canmore and the Bow Valley with dependable, community-focused security solutions. From tourism hotspots to local businesses and residential sites, Shield Security brings professionalism and peace of mind to every corner of this mountain town.
          </Typography>
        </motion.div>
      </Box>

      {/* Content Sections */}
      <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        {/* Logos */}
        <motion.div variants={fadeInUp}>
          <ClientLogoCarousel />
        </motion.div>

        {/* Why We're the Best in Canmore */}
        <motion.div variants={fadeInUp}>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "stretch",
              backgroundColor: "#111",
              color: "#fff",
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 8px 30px rgba(0,0,0,0.2)",
              mx: { xs: 2, md: 6 },
              mb: 10,
              height: { md: "400px", xs: "auto" },
            }}
          >
            <Box
              component="img"
              src="/images/3.jpg"
              alt="Why We're Best in Canmore"
              sx={{
                width: { xs: "100%", md: "50%" },
                height: { xs: "250px", md: "100%" },
                objectFit: "cover",
              }}
            />
            <Box
              sx={{
                p: { xs: 4, md: 6 },
                width: { xs: "100%", md: "50%" },
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
                Why We’re the Best in Canmore
              </Typography>
              <Typography variant="body1" sx={{ color: "#ccc", lineHeight: 1.8 }}>
                Our Canmore-based team understands the town&apos;s unique rhythms, from festival seasons to serene winter months. With top-tier training, local familiarity, and real-time reporting tools, Shield Security delivers reliable protection that fits seamlessly into the mountain lifestyle.
              </Typography>
            </Box>
          </Box>
        </motion.div>

        {/* Testimonials and Services */}
        <motion.div variants={fadeInUp}>
          <TestimonialsSection />
          <ServicesShowcase currentService="Mobile Patrol" />
        </motion.div>


        {/* Request Form */}
        <motion.div variants={fadeInUp}>
          <RequestQuote />
        </motion.div>
      </motion.div>
    </>
  );
};

export default CanmoreSecurity;
