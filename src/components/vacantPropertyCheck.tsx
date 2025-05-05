import React from "react";
import { Typography, Button } from "@mui/material";
import { motion } from "framer-motion";

const VacantPropertyCheck = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      style={{
        width: "100%",
        padding: "80px 20px",
        background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      <Typography
        variant="h2"
        component="h2"
        sx={{
          fontWeight: 800,
          mb: 3,
          fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
        }}
      >
        🏠 Vacant Property Security Check
      </Typography>

      <Typography
        variant="h6"
        sx={{
          maxWidth: "800px",
          mb: 5,
          color: "#ddd",
          fontSize: { xs: "1rem", md: "1.2rem" },
        }}
      >
        Whether you&apos;re on vacation or managing a remote property, Shield Security ensures your vacant space remains protected, secure, and regularly monitored — giving you complete peace of mind.
      </Typography>

      <Button
        variant="contained"
        size="large"
        sx={{
          background: "linear-gradient(to right, #ff416c, #ff4b2b)",
          color: "#fff",
          fontWeight: "bold",
          px: 5,
          py: 1.6,
          borderRadius: "50px",
          textTransform: "none",
          fontSize: "1rem",
          boxShadow: "0 0 25px rgba(255, 75, 43, 0.5)",
          "&:hover": {
            background: "linear-gradient(to right, #ff4b2b, #ff416c)",
            boxShadow: "0 0 35px rgba(255, 75, 43, 0.8)",
          },
        }}
        href="/quote"
      >
        Request a Quote
      </Button>
    </motion.section>
  );
};

export default VacantPropertyCheck;
