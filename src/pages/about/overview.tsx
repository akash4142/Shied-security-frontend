import React from "react";
import { Box, Container, Typography, Grid, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";
import GppGoodIcon from "@mui/icons-material/GppGood";
import SecurityIcon from "@mui/icons-material/Security";
import GroupsIcon from "@mui/icons-material/Groups";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import Image from "next/image";
import FinalCTA from "@/components/FinalCTA";
import RequestQuote from "@/components/RequestQuote";

// Animation
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const CompanyOverview = () => {
  return (
    <>
      {/* ✅ Hero Section */}
      <Box
        sx={{
          position: "relative",
          height: "90vh",
          backgroundImage: "url(/images/1.jpg)",
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
            Company Overview
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
            Learn about Shield Secure’s leadership, mission, and operations across Alberta.
          </Typography>
        </motion.div>
      </Box>

      {/* ✅ Company Description */}
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
            Who We Are
          </Typography>
          <Typography
            variant="body1"
            sx={{ maxWidth: 900, mx: "auto", lineHeight: 2.2, color: "#111" }}
          >
            Shield Secure Ltd. is a customer service–focused security company based in Canmore, also serving Banff,
            Cochrane, and Calgary. We provide reliable, responsive security solutions including mobile patrol, event security, fire watch,
            construction and emergency response coverage.
            <br /><br />
            With a leadership team rooted in public service and operational excellence, we take pride in community involvement,
            professional conduct, and ensuring your property and people are safe—always.
          </Typography>
        </motion.div>
      </Box>

      {/* ✅ Leadership */}
      <Container sx={{ py: 8 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={5}>
            <Image
              src="/images/sourav.jpg"
              alt="Sourav Gupta"
              width={500}
              height={500}
              style={{
                width: "100%",
                borderRadius: 10,
                objectFit: "cover",
                boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
              }}
            />
          </Grid>
          <Grid item xs={12} md={7}>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Meet Our Founder
            </Typography>
            <Typography sx={{ fontWeight: 500, color: "#666", mb: 2 }}>
              Sourav Gupta – General Manager
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
              Sourav Gupta, the founder and GM of Shield Secure Ltd., brings deep experience from working with Alberta Health Services and the
              Town of Canmore. His values of accountability, responsiveness, and community engagement are embedded in the
              company&apos;s approach to service.
              <br /><br />
              Under his leadership, Shield Secure delivers consistent, ethical, and reliable security for clients and communities across Alberta.
            </Typography>
          </Grid>
        </Grid>
      </Container>

      {/* ✅ Core Values */}
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
              title: "Safety",
              desc: "We prioritize safety in all operations and decisions.",
              icon: <GppGoodIcon sx={{ fontSize: 40, color: "#1976d2" }} />,
            },
            {
              title: "Integrity",
              desc: "We operate with honesty, respect, and ethical conduct.",
              icon: <SecurityIcon sx={{ fontSize: 40, color: "#388e3c" }} />,
            },
            {
              title: "Teamwork",
              desc: "We collaborate to ensure smooth and professional execution.",
              icon: <GroupsIcon sx={{ fontSize: 40, color: "#ff9800" }} />,
            },
            {
              title: "Adaptability",
              desc: "We adjust rapidly to changing situations and needs.",
              icon: <AutorenewIcon sx={{ fontSize: 40, color: "#0288d1" }} />,
            },
          ].map((value, idx) => (
            <Grid item xs={12} sm={6} md={3} key={idx}>
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
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

      
      <FinalCTA/>
      <RequestQuote/>
    </>
  );
};

export default CompanyOverview;
