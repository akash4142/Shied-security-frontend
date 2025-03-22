import React from "react";
import { Box, Container, Typography, Grid, Button, Divider, Paper } from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";

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

const sectionStyle = {
  backgroundColor: "#f7f9fc",
  borderRadius: 4,
  padding: "40px 30px",
  boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
  marginBottom: "60px",
};

const LossPrevention = () => {
  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage: "url(/images/1.jpg)",
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
          <Box sx={{ backgroundColor: "rgba(0, 0, 0, 0.6)", p: 4, borderRadius: 2 }}>
            <Typography variant="h2" sx={{ color: "white", fontWeight: "bold" }}>
              Loss Prevention
            </Typography>
            <Typography variant="h6" sx={{ color: "white", mt: 2 }}>
              Reducing Shrink, Protecting Profits
            </Typography>
          </Box>
        </motion.div>
      </Box>

      <Container sx={{ py: 8 }}>
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Paper sx={sectionStyle}>
            <motion.div variants={fadeInUp}>
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                Proven Loss Prevention Strategies
              </Typography>
              <Typography variant="body1" sx={{ mb: 4 }}>
                Shield Security’s loss prevention services are designed to stop theft and reduce shrink across retail and
                commercial environments. Our trained officers work discreetly or in uniform, identifying suspicious
                behavior, deterring internal and external theft, and creating a secure atmosphere.
              </Typography>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 4, justifyContent: "center", mb: 6 }}>
                {["/images/logo1.png", "/images/logo2.png", "/images/logo3.png", "/images/logo4.png", "/images/logo5.png", "/images/logo6.png"].map((logo, idx) => (
                  <motion.div key={idx} whileHover={{ scale: 1.1 }}>
                    <Image src={logo} alt="Client Logo" width={100} height={60} />
                  </motion.div>
                ))}
              </Box>
            </motion.div>
          </Paper>

          <Paper sx={sectionStyle}>
            <Grid container spacing={6}>
              <Grid item xs={12} md={6}>
                <motion.div variants={fadeInUp}>
                  <Image src="/images/2.jpg" alt="Loss Prevention" width={600} height={400} style={{ width: "100%", borderRadius: 10 }} />
                </motion.div>
              </Grid>
              <Grid item xs={12} md={6}>
                <motion.div variants={fadeInUp}>
                  <Typography variant="h5" fontWeight="bold" gutterBottom>
                    Why Loss Prevention Is Crucial
                  </Typography>
                  <Typography>
                    Retail theft, employee fraud, and inventory shrinkage cost businesses billions every year. Our loss
                    prevention experts identify vulnerabilities, conduct investigations, and implement strategies that
                    protect your bottom line.
                  </Typography>
                </motion.div>
              </Grid>
            </Grid>
          </Paper>

          <Paper sx={sectionStyle}>
            <motion.div variants={fadeInUp}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Our Services Include
              </Typography>
            </motion.div>
            <Grid container spacing={2}>
              {["Undercover Security Agents", "Shoplifting Deterrence", "Theft Apprehension", "Employee Theft Prevention", "Audit & Compliance Checks", "Surveillance Support", "Customer Service Integration", "Inventory Protection Programs", "Incident Documentation & Reports"].map((item, idx) => (
                <Grid key={idx} item xs={12} sm={6} md={4}>
                  <motion.div variants={fadeInUp}>
                    <Typography>• {item}</Typography>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Paper>

          <Paper sx={sectionStyle}>
            <motion.div variants={fadeInUp}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Environments We Serve
              </Typography>
            </motion.div>
            <Grid container spacing={2}>
              {["Retail Chains", "Supermarkets", "Pharmacies", "Warehouse Clubs", "Luxury Retail", "Shopping Malls", "Standalone Stores"].map((item, idx) => (
                <Grid key={idx} item xs={12} sm={6} md={4}>
                  <motion.div variants={fadeInUp}>
                    <Typography>• {item}</Typography>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Paper>

          <Paper sx={sectionStyle}>
            <motion.div variants={fadeInUp}>
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                Reduce Risk, Boost Profitability
              </Typography>
              <Typography>
                With a customized loss prevention plan from Shield Security, you can stop shrink before it starts. Our proactive
                approach delivers peace of mind and improved revenue control.
              </Typography>
            </motion.div>
          </Paper>

          <Paper sx={{ ...sectionStyle, textAlign: "center" }}>
            <Divider sx={{ mb: 4 }} />
            <motion.div variants={fadeInUp}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Let’s Protect Your Business Assets
              </Typography>
              <Typography>
                Get in touch with our team to develop a tailored loss prevention strategy for your business.
              </Typography>
              <Button variant="contained" color="error" sx={{ mt: 3, px: 4, py: 1.5, fontSize: "16px" }}>
                Get a Free Quote
              </Button>
            </motion.div>
          </Paper>
        </motion.div>
      </Container>
    </>
  );
};

export default LossPrevention;