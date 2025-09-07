import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";
import RequestQuote from "@/components/RequestQuote";
//import ClientLogoCarousel from "@/components/ClientLogoCarousel";
import TestimonialsSection from "@/components/TestimonialsSection";
import ServicesShowcase from "@/components/serviceShowcase";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const CanmoreSecurity = () => {
  return (
    <>
      {/* ✅ Hero Section */}
      <Box
        sx={{
          position: "relative",
           minHeight: { xs: "100svh", md: "100vh" },
          backgroundImage: "url(/images/canmore.jpg)",
          backgroundSize: "cover",
          backgroundAttachment: { xs: "scroll", md: "fixed" },
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
            Canmore Security Services
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
            Trusted by the Bow Valley Community
          </Typography>
        </motion.div>
      </Box>

      {/* ✅ Intro Section */}
      <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <Box sx={{ background: "#fff", py: 10, px: { xs: 3, md: 12 }, textAlign: "center" }}>
          <Typography
            variant="h4"
            fontWeight={700}
            mb={2}
            fontFamily="'Poppins', sans-serif"
            color="#111"
          >
            Shielding Canmore with Trusted Local Security
          </Typography>
          <Typography sx={{ color: "#444", maxWidth: "900px", mx: "auto", fontSize: "1.1rem" }}>
            We proudly serve Canmore and the Bow Valley with dependable, community-focused security solutions.
            From tourism hotspots to local businesses and residential sites, Shield Security brings professionalism
            and peace of mind to every corner of this mountain town.
          </Typography>
        </Box>
      </motion.div>

      
      

      {/* ✅ Why Shield in Canmore - Premium Split Layout */}
      <Grid
        container
        spacing={0}
        alignItems="stretch"
        sx={{
          width: "100%",
          m: 0,
          background: "linear-gradient(90deg, #0f1114, #1c1f25)",
          color: "#f1f1f1",
          borderRadius: 0,
          boxShadow: "0 10px 40px rgba(0, 0, 0, 0.3)",
        }}
      >
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            position: "relative",
            height: { xs: "400px", md: "600px" },
          }}
        >
          <Box
            component="img"
            src="/images/3.jpg"
            alt="Why We're Best in Canmore"
            sx={{
              position: "absolute",
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Grid>



        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            px: { xs: 3, md: 6 },
            py: { xs: 6, md: 8 },
            backgroundColor: "#3a506b",
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                mb: 3,
                fontSize: { xs: "2rem", md: "2.5rem" },
                color: "#fff",
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              Why We’re the Best in Canmore
            </Typography>

            <Typography
              sx={{
                fontSize: "1.1rem",
                lineHeight: 1.8,
                mb: 4,
                color: "#cfcfcf",
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              Our Canmore-based team understands the town’s unique rhythms, from festival seasons to serene winter months.
              With top-tier training, local familiarity, and real-time reporting tools, Shield Security delivers reliable
              protection that fits seamlessly into the mountain lifestyle.
            </Typography>
          </motion.div>
        </Grid>
      </Grid>

 {/* ✅ Testimonials + Services */}
      <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <ServicesShowcase currentService="Canmore" />
        <TestimonialsSection />
        
      </motion.div>

     

      {/* ✅ Request a Quote */}
      <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <RequestQuote />
      </motion.div>
    </>
  );
};

export default CanmoreSecurity;
