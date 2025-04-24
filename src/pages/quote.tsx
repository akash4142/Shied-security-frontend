import React from "react";
import Head from "next/head";
import RequestQuote from "@/components/RequestQuote";
import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";

const QuotePage = () => {
  return (
    <>
      <Head>
        <title>Request a Quote | Shield Security</title>
        <meta
          name="description"
          content="Get a custom quote from Shield Security. We offer reliable and flexible security solutions tailored to your property, event, or business."
        />
        <meta name="keywords" content="security quote, custom security pricing, private security, Shield Security Canada" />
      </Head>

      {/* ✅ Hero Section */}
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
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.6)",
            zIndex: 1,
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ zIndex: 2 }}
        >
          <Typography
            variant="h3"
            sx={{
              color: "#fff",
              fontWeight: "bold",
              textShadow: "2px 2px 10px rgba(0,0,0,0.8)",
              fontSize: { xs: "2rem", md: "3rem" },
            }}
          >
            Request a Quote
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#ddd",
              mt: 2,
              maxWidth: 700,
              mx: "auto",
              fontWeight: 300,
              fontSize: { xs: "1rem", md: "1.2rem" },
            }}
          >
            Custom security solutions tailored to your business, event, or property.
          </Typography>
        </motion.div>
      </Box>

      {/* ✅ Form Section */}
      <Container sx={{ py: 10, maxWidth: "900px", mx: "auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              Get Your Free Custom Quote
            </Typography>
            <Typography variant="body1" sx={{ color: "#666", maxWidth: 600, mx: "auto" }}>
              Fill out the form below and our team will contact you with a personalized security quote based on your specific requirements.
            </Typography>
          </Box>

          <RequestQuote />
        </motion.div>
      </Container>
    </>
  );
};

export default QuotePage;
