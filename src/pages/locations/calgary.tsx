import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";
import RequestQuote from "@/components/RequestQuote";
import TestimonialsSection from "@/components/TestimonialsSection";
import ServicesShowcase from "@/components/serviceShowcase";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const CalgarySecurity = () => {
  return (
    <>
      {/* 🔥 HERO (height unchanged) */}
      <Box
        sx={{
          position: "relative",
          minHeight: { xs: "100svh", md: "100vh" },
          backgroundImage: "url(/images/calgary.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: { xs: "scroll", md: "fixed" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        {/* overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.75), rgba(0,0,0,0.65))",
          }}
        />

        {/* text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ zIndex: 2 }}
        >
          <Typography
            variant="h2"
            sx={{
              color: "#fff",
              fontWeight: 900,
              fontSize: { xs: "2.2rem", md: "4.3rem" },
              letterSpacing: "3px",
              textTransform: "uppercase",
              mb: 2,
            }}
          >
            Calgary Security Services
          </Typography>

          <Typography
            sx={{
              color: "#ddd",
              maxWidth: "650px",
              mx: "auto",
              fontSize: { xs: "1rem", md: "1.2rem" },
            }}
          >
            Trusted across Calgary’s busiest spaces — from events to corporate security.
          </Typography>
        </motion.div>
      </Box>

      {/* 🔹 INTRO */}
      <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <Box sx={{ py: 12, px: { xs: 3, md: 10 }, textAlign: "center" }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 800,
              mb: 3,
              color: "#111",
            }}
          >
            Professional Security Coverage in Calgary
          </Typography>

          <Typography
            sx={{
              color: "#555",
              maxWidth: "800px",
              mx: "auto",
              fontSize: "1.1rem",
              lineHeight: 1.8,
            }}
          >
            We provide high-level protection across Calgary and Southern Alberta.
            From corporate offices to major public events, our team delivers consistent,
            reliable, and technology-driven security solutions.
          </Typography>
        </Box>
      </motion.div>

      {/* 🔥 PREMIUM SPLIT SECTION */}
      <Grid
        container
        sx={{
          background: "#0f172a",
          color: "#fff",
        }}
      >
        {/* IMAGE */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              height: { xs: "350px", md: "600px" },
              backgroundImage: "url(/images/3.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </Grid>

        {/* CONTENT */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            alignItems: "center",
            px: { xs: 3, md: 8 },
            py: { xs: 6, md: 0 },
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: 800,
                mb: 3,
              }}
            >
              Why We’re the Best in Calgary
            </Typography>

            <Typography
              sx={{
                color: "#cbd5e1",
                lineHeight: 1.9,
                fontSize: "1.1rem",
              }}
            >
              Our guards are trained for high-traffic and high-risk environments,
              including major events like the Calgary Stampede, commercial towers,
              and government facilities.
              <br /><br />
              With real-time reporting, rapid response teams, and customized security
              strategies, we deliver protection that is proactive, visible, and reliable.
            </Typography>
          </motion.div>
        </Grid>
      </Grid>

      {/* 🔹 SERVICES + TESTIMONIALS */}
      <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <Box sx={{ py: 10 }}>
          <ServicesShowcase currentService="Calgary" />
          <TestimonialsSection />
        </Box>
      </motion.div>

      {/* 🔹 CTA */}
      <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <RequestQuote />
      </motion.div>
    </>
  );
};

export default CalgarySecurity;