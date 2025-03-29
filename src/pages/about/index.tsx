import React from "react";
import {  Grid, Typography, Card, CardContent, Box } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          height: "80vh",
          backgroundImage: "url(/images/3.jpg)",
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
              About Shield Security
            </Typography>
            <Typography variant="h6" sx={{ color: "#ccc" }}>
              Trusted Protection. Proven Experience.
            </Typography>
          </motion.div>
        </Box>
      </Box>

      {/* Company Overview */}
      <Box sx={{ backgroundColor: "#111", color: "#fff", py: 10, px: { xs: 3, md: 10 }, textAlign: "center" }}>
        <motion.div initial="hidden" whileInView="visible" variants={fadeInUp} viewport={{ once: true }}>
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3 }}>
            Who We Are
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "#ccc", maxWidth: "900px", mx: "auto", lineHeight: 1.8 }}
          >
            At Shield Security, we combine years of industry experience with a forward-thinking approach to modern safety challenges. Operating across Canada, our mission is to deliver exceptional security services tailored to our clients&apos; unique needs. Our professional team is trained in conflict resolution, emergency response, and customer service—backed by real-time technology for full transparency and trust.
          </Typography>
        </motion.div>
      </Box>

      {/* Core Values Section */}
      <Box sx={{ py: 10, px: { xs: 3, md: 10 }, backgroundColor: "#f7f9fc" }}>
        <Typography variant="h4" fontWeight="bold" textAlign="center" gutterBottom>
          Our Core Values
        </Typography>
        <Grid container spacing={4} mt={4}>
          {[{
            title: "Integrity",
            desc: "Every decision we make is guided by honesty, ethics, and responsibility.",
            img: "/images/1.jpg"
          }, {
            title: "Accountability",
            desc: "We believe in transparent operations with real-time reporting.",
            img: "/images/2.jpg"
          }, {
            title: "Community",
            desc: "Giving back to the communities we protect is central to our mission.",
            img: "/images/3.jpg"
          }].map((item, idx) => (
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
      </Box>

      {/* Why Choose Us */}
      <Box sx={{ backgroundColor: "#111", color: "#fff", py: 10, px: { xs: 3, md: 10 } }}>
        <Typography variant="h4" textAlign="center" fontWeight="bold" gutterBottom>
          Why Choose Shield Security?
        </Typography>
        <Grid container spacing={4} mt={3}>
          {["24/7 Mobile Patrols & Monitoring", "Trusted by Government & Private Sector", "Custom Security Strategies for Each Client", "TrackTik Real-Time Reporting", "Licensed, Insured & Bonded Guards", "Proven Track Record of Incident Prevention"].map((point, idx) => (
            <Grid key={idx} item xs={12} sm={6} md={4}>
              <Box sx={{ backgroundColor: "#1a1a1a", p: 4, borderRadius: 3, height: "100%" }}>
                <Typography variant="body1" sx={{ color: "#ccc" }}>• {point}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Our Impact */}
      <Box sx={{ py: 10, px: { xs: 3, md: 10 } }}>
        <Typography variant="h4" textAlign="center" fontWeight="bold" gutterBottom>
          Our Impact in Numbers
        </Typography>
        <Grid container spacing={4} mt={3} justifyContent="center">
          {[{
            title: "10+ Years of Trusted Service",
            img: "/images/1.jpg"
          }, {
            title: "500+ Clients Secured",
            img: "/images/2.jpg"
          }, {
            title: "1M+ Patrols Logged via TrackTik",
            img: "/images/3.jpg"
          }].map((stat, idx) => (
            <Grid key={idx} item xs={12} sm={6} md={4}>
              <Card sx={{ textAlign: "center", p: 4, borderRadius: 4, boxShadow: 3 }}>
                <Image src={stat.img} alt={stat.title} width={80} height={80} />
                <Typography variant="h6" mt={2}>{stat.title}</Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default About;
