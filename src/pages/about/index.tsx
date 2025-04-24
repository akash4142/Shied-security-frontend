import React from "react";
import { Box, Typography, Grid, Card, CardContent} from "@mui/material";
import { motion } from "framer-motion";
import SecurityIcon from "@mui/icons-material/Security";
import BuildIcon from "@mui/icons-material/Build";
import FinalCTA from "@/components/FinalCTA";
import RequestQuote from "@/components/RequestQuote";
import TestimonialsSection from "@/components/TestimonialsSection";


// Animations
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// const stagger = {
//   visible: {
//     transition: { staggerChildren: 0.2 },
//   },
// };

const About = () => {
  return (
    <>
      {/* ✅ Hero Section */}
      <Box
        sx={{
          position: "relative",
          height: "90vh",
          backgroundImage: "url(/images/3.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: 2,
        }}
      >
        <Box sx={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.65)", zIndex: 1 }} />
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
              textTransform: "uppercase",
              fontFamily: "'Bebas Neue', sans-serif",
              letterSpacing: 1,
              textAlign: "center",
              textShadow: "6px 6px 20px rgba(0,0,0,0.8)",
            }}
          >
            About Shield Security
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#eee",
              mt: 2,
              maxWidth: 700,
              mx: "auto",
              fontWeight: 300,
              fontSize: { xs: "1rem", md: "1.2rem" },
              textAlign: "center",
              textShadow: "1px 1px 6px rgba(0,0,0,0.5)",
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            Providing trusted protection across Canada, backed by technology and integrity.
          </Typography>
        </motion.div>
      </Box>


{/* ✅ Company Overview Text */}
<Box
  sx={{
    background: "#eee",
    color: "#111",
    px: { xs: 3, md: 12 },
    py: { xs: 6, md: 8 },
    textAlign: "center",
  }}
>
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7 }}
  >
    <Typography variant="h5" fontWeight={600} gutterBottom>
      Shield Secure
    </Typography>
    <Typography variant="body1" sx={{ maxWidth: 900, mx: "auto", lineHeight: 2.8, color: "#111" }}>
      Shield Secure Ltd. is a customer service focused security services company based in Canmore, also serving Banff,
      Cochrane and Calgary. We specialize in offering a wide range of security solutions including mobile patrol,
      event security, fire watch, emergency response, construction security, and wedding security services.
      <br /><br />
      Contact us for information about our services, team, and commitment to delivering professional and reliable
      security solutions. We take pride in our extensive range of services and our dedication to ensuring the safety
      and security of our clients&apos; premises and events.
    </Typography>
  </motion.div>
</Box>

     

     {/* ✅ Core Values - Upgraded */}
<Box sx={{ background: "#fff", py: 12, px: { xs: 3, md: 10 } }}>
  <Typography
    variant="h4"
    fontWeight={700}
    textAlign="center"
    gutterBottom
    sx={{ color: "#111" }}
  >
    Our Core Values
  </Typography>

  <Grid container spacing={4} mt={4}>
    {[
      {
        title: "Integrity",
        desc: "We operate with complete honesty, respect, and moral conduct.",
        icon: <SecurityIcon sx={{ fontSize: 40, color: "#1976d2" }} />,
      },
      {
        title: "Accountability",
        desc: "Real-time GPS tracking and reporting ensures transparency.",
        icon: <BuildIcon sx={{ fontSize: 40, color: "#388e3c" }} />,
      },
      {
        title: "Community",
        desc: "We support and protect the communities we live in.",
        icon: <SecurityIcon sx={{ fontSize: 40, color: "#ff9800" }} />,
      },
      {
        title: "Reliability",
        desc: "We’re committed to being present and responsive when it matters most.",
        icon: <BuildIcon sx={{ fontSize: 40, color: "#0288d1" }} />,
      },
      {
        title: "Innovation",
        desc: "We leverage technology to improve efficiency and results.",
        icon: <BuildIcon sx={{ fontSize: 40, color: "#673ab7" }} />,
      },
      {
        title: "Customer Focus",
        desc: "Your safety, needs, and satisfaction guide everything we do.",
        icon: <SecurityIcon sx={{ fontSize: 40, color: "#e91e63" }} />,
      },
    ].map((value, idx) => (
      <Grid item xs={12} sm={6} md={4} key={idx}>
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Card
            sx={{
              height: "100%",
              textAlign: "center",
              borderRadius: "16px",
              boxShadow: 3,
              p: 4,
              transition: "0.3s ease",
              "&:hover": {
                boxShadow: 6,
              },
            }}
          >
            <CardContent>
              <Box sx={{ mb: 2 }}>{value.icon}</Box>
              <Typography variant="h6" fontWeight={600} gutterBottom sx={{ color: "#111" }}>
                {value.title}
              </Typography>
              <Typography variant="body2" sx={{ color: "#444", lineHeight: 1.7 }}>
                {value.desc}
              </Typography>
            </CardContent>
          </Card>
        </motion.div>
      </Grid>
    ))}
  </Grid>
</Box>

      <TestimonialsSection />
      <FinalCTA/>
      <RequestQuote />
    </>
  );
};

export default About;
