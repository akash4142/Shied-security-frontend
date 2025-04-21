import React from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";

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

const About = () => {
  return (
    <>
      {/* ✅ Hero Section */}
      <Box
        sx={{
          position: "relative",
          height: "85vh",
          backgroundImage: "url(/images/3.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
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
            About Shield Security
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
            Trusted Protection. Proven Experience.
          </Typography>
        </motion.div>
      </Box>

      {/* ✅ Company Overview */}
      <Box sx={{ background: "#111", color: "#fff", py: 10, px: { xs: 3, md: 10 } }}>
        <motion.div initial="hidden" whileInView="visible" variants={fadeInUp} viewport={{ once: true }}>
          <Typography variant="h4" textAlign="center" fontWeight="bold" gutterBottom>
            Who We Are
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "#ccc", maxWidth: "900px", mx: "auto", lineHeight: 1.8, fontSize: "1.1rem", textAlign: "center" }}
          >
            At <strong>Shield Security</strong>, we are more than just a security company — we are guardians of trust,
            committed to safeguarding people, property, and peace of mind. With over a decade of experience and a presence
            across Canada, we serve commercial, residential, and institutional clients with integrity and professionalism.
            <br /><br />
            Our services are powered by real-time tech such as <em>TrackTik</em> and GPS-based patrol tracking, and our guards
            are trained not just in protection, but in people-first service — combining vigilance with empathy.
          </Typography>
        </motion.div>
      </Box>

      {/* ✅ Core Values Section */}
      <Box sx={{ py: 10, px: { xs: 3, md: 10 }, backgroundColor: "#f7f9fc" }}>
        <Typography variant="h4" fontWeight="bold" textAlign="center" gutterBottom>
          Our Core Values
        </Typography>
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Grid container spacing={4} mt={4}>
            {[
              {
                title: "Integrity",
                desc: "We operate with complete transparency, honesty, and ethical conduct at every level.",
                img: "/images/1.jpg",
              },
              {
                title: "Accountability",
                desc: "From mobile patrols to incident logs, we provide full visibility with real-time reporting.",
                img: "/images/2.jpg",
              },
              {
                title: "Community",
                desc: "We care deeply about the communities we serve and foster positive local relationships.",
                img: "/images/3.jpg",
              },
            ].map((item, idx) => (
              <Grid item xs={12} md={4} key={idx}>
                <Card sx={{ textAlign: "center", p: 3, borderRadius: 4, boxShadow: 3 }}>
                  <Image src={item.img} alt={item.title} width={60} height={60} />
                  <CardContent>
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#555" }}>{item.desc}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Box>

      {/* ✅ Why Choose Shield Section */}
      <Box sx={{ backgroundColor: "#111", color: "#fff", py: 10, px: { xs: 3, md: 10 } }}>
        <Typography variant="h4" textAlign="center" fontWeight="bold" gutterBottom>
          Why Choose Shield Security?
        </Typography>
        <Grid container spacing={4} mt={3}>
          {[
            "24/7 Mobile Patrols & Monitoring",
            "Trusted by Government & Private Sector",
            "Tailored Security Solutions",
            "TrackTik Real-Time Reporting",
            "Licensed, Insured & Bonded Professionals",
            "Rapid Emergency Response Capabilities",
          ].map((point, idx) => (
            <Grid key={idx} item xs={12} sm={6} md={4}>
              <Box sx={{ backgroundColor: "#1a1a1a", p: 4, borderRadius: 3, height: "100%" }}>
                <Typography variant="body1" sx={{ color: "#ccc" }}>• {point}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* ✅ Stats Section */}
      <Box sx={{ py: 10, px: { xs: 3, md: 10 }, backgroundColor: "#fff" }}>
        <Typography variant="h4" textAlign="center" fontWeight="bold" gutterBottom>
          Our Impact in Numbers
        </Typography>
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Grid container spacing={4} mt={3} justifyContent="center">
            {[
              { title: "10+ Years of Trusted Service", img: "/images/1.jpg" },
              { title: "500+ Clients Secured", img: "/images/2.jpg" },
              { title: "1M+ Patrols Logged via TrackTik", img: "/images/3.jpg" },
            ].map((stat, idx) => (
              <Grid key={idx} item xs={12} sm={6} md={4}>
                <Card sx={{ textAlign: "center", p: 4, borderRadius: 4, boxShadow: 3 }}>
                  <Image src={stat.img} alt={stat.title} width={80} height={80} />
                  <Typography variant="h6" mt={2}>{stat.title}</Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Box>
    </>
  );
};

export default About;
