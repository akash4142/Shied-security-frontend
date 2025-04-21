import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";
import RequestQuote from "@/components/RequestQuote";
import ClientLogoCarousel from "@/components/ClientLogoCarousel";
import TestimonialsSection from "@/components/TestimonialsSection";
import ServicesShowcase from "@/components/serviceShowcase";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const ExshawSecurity = () => {
  return (
    <>
      {/* ✅ Hero Section */}
      <Box
        sx={{
          position: "relative",
          height: "85vh",
          backgroundImage: "url(/images/1.jpg)",
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
            Exshaw Security Services
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
            Local Security Services for Peace of Mind in Exshaw
          </Typography>
        </motion.div>
      </Box>

      {/* ✅ Intro Section */}
      <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <Box sx={{ background: "#fff", py: 10, px: { xs: 3, md: 12 }, textAlign: "center" }}>
          <Typography variant="h4" fontWeight={700} mb={2} fontFamily="'Poppins', sans-serif" color="#111">
            Community-Focused Protection in Exshaw
          </Typography>
          <Typography sx={{ color: "#444", maxWidth: "900px", mx: "auto", fontSize: "1.1rem" }}>
            From industrial zones to residential neighborhoods, Shield Security safeguards the people and properties of
            Exshaw with proactive protection, expert training, and cutting-edge reporting technology.
          </Typography>
        </Box>
      </motion.div>

       {/* ✅ Trusted Brands */}
                  <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <Box sx={{ background: "#f7f7f7", py: 8, px: { xs: 3, md: 12 }, textAlign: "center" }}>
                      <Typography variant="h5" fontWeight={600} fontFamily="'Poppins', sans-serif" color="#111" mb={4}>
                        Trusted by Leading Businesses
                      </Typography>
                      <Grid container spacing={4} justifyContent="center">
                        {["/logos/canadian-tire.png", "/logos/canadian-tire.png", "/logos/canadian-tire.png", "/logos/canadian-tire.png"].map(
                          (logo, idx) => (
                            <Grid item key={idx} xs={6} sm={3} md={2}>
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

      {/* ✅ Why We're the Best in Exshaw - Premium Style */}
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
            alt="Why We're Best in Exshaw"
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
              Why We’re the Best in Exshaw
            </Typography>

            <Typography
              sx={{
                fontSize: "1.1rem",
                lineHeight: 1.8,
                color: "#cfcfcf",
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              Shield Security understands the mountain terrain, industrial operations, and tight-knit community that
              defines Exshaw. With trained professionals, real-time reporting, and fast response, we ensure your peace
              of mind — whether protecting homes, businesses, or public spaces.
            </Typography>
          </motion.div>
        </Grid>
      </Grid>

      {/* ✅ Testimonials + Services */}
      <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <TestimonialsSection />
        <ServicesShowcase currentService="Exshaw" />
      </motion.div>

      {/* ✅ Quote Form */}
      <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <RequestQuote />
      </motion.div>
    </>
  );
};

export default ExshawSecurity;
