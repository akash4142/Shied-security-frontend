import React from "react";
import { Container, Grid, Typography, Card, CardContent, Box, Paper } from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";

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
          backgroundImage: "url(/images/3.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "60vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <Box sx={{ backgroundColor: "rgba(0,0,0,0.6)", p: 4, borderRadius: 2 }}>
            <Typography variant="h2" sx={{ color: "white", fontWeight: "bold" }}>
              About Shield Security
            </Typography>
            <Typography variant="h6" sx={{ color: "white", mt: 2 }}>
              Your Trusted Partner in Protection
            </Typography>
          </Box>
        </motion.div>
      </Box>

      {/* Company Overview */}
      <Container sx={{ py: 8 }}>
        <Paper sx={{ p: 4, backgroundColor: "#f7f9fc" }}>
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Typography variant="h3" fontWeight="bold" gutterBottom textAlign="center">
              Who We Are
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: "800px", margin: "auto", color: "#444" }} textAlign="center">
              Shield Security is a professional security company dedicated to delivering superior protection services across Canada. Our team is comprised of licensed, experienced professionals who integrate cutting-edge technology with time-tested vigilance to safeguard people, properties, and reputations.
            </Typography>
          </motion.div>
        </Paper>
      </Container>

      {/* Core Values */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h3" fontWeight="bold" textAlign="center" gutterBottom>
          Our Core Values
        </Typography>
        <Grid container spacing={4}>
          {[{
            title: "Integrity",
            desc: "We operate with honesty, transparency, and accountability in every interaction.",
            img: "/images/value-integrity.png"
          }, {
            title: "Professionalism",
            desc: "We maintain the highest standards of training and conduct for all our personnel.",
            img: "/images/value-professionalism.png"
          }, {
            title: "Reliability",
            desc: "You can count on us 24/7 to respond with speed and efficiency.",
            img: "/images/value-reliability.png"
          }].map((item, idx) => (
            <Grid item xs={12} md={4} key={idx}>
              <Card sx={{ textAlign: "center", p: 3 }}>
                <Image src={item.img} alt={item.title} width={60} height={60} />
                <CardContent>
                  <Typography variant="h5" fontWeight="bold" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2">{item.desc}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Achievements */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h3" fontWeight="bold" textAlign="center" gutterBottom>
          Our Achievements
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {[{
            title: "10+ Years of Excellence",
            img: "/images/achievement1.png"
          }, {
            title: "Certified Security Experts",
            img: "/images/achievement2.png"
          }, {
            title: "500+ Clients Protected",
            img: "/images/achievement3.png"
          }].map((achievement, idx) => (
            <Grid item xs={12} sm={6} md={3} key={idx}>
              <Card sx={{ textAlign: "center", p: 3 }}>
                <Image src={achievement.img} alt={achievement.title} width={80} height={80} />
                <Typography variant="h6" mt={2}>{achievement.title}</Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default About;