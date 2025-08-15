import React from "react";
import { Typography, Button } from "@mui/material";
import { motion } from "framer-motion";

const VacantPropertyCheck = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{
        width: "100%",
        padding: "80px 20px",
        background: "#0d1b2a", // deep navy
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      {/* Elegant Title */}
      <Typography
        variant="h2"
        component="h2"
        sx={{
          fontWeight: 700,
          mb: 3,
          fontFamily: "'Merriweather', serif",
          fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
          letterSpacing: "0.5px",
          color: "#f4f4f4",
        }}
      >
        🏠 Vacant Property Security Check
      </Typography>

      {/* Subtle Description */}
      <Typography
        variant="h6"
        sx={{
          maxWidth: "800px",
          mb: 5,
          color: "#cfd8dc",
          fontFamily: "'Open Sans', sans-serif",
          fontSize: { xs: "1rem", md: "1.15rem" },
          lineHeight: 1.7,
        }}
      >
        Whether you&apos;re on vacation or managing a remote property, Shield
        Secure ensures your space remains protected, secure, and regularly
        monitored — giving you complete peace of mind.
      </Typography>

      {/* Elegant Button */}
      <Button
        variant="contained"
        size="large"
        sx={{
          background: "red", // gold tones
          color: "#fff",
          fontWeight: 600,
          px: 5,
          py: 1.4,
          borderRadius: "40px",
          textTransform: "none",
          fontSize: "1rem",
          letterSpacing: "0.5px",
          boxShadow: "0 6px 20px rgba(0, 0, 0, 0.2)",
          transition: "all 0.3s ease",
          "&:hover": {
            background: "linear-gradient(135deg, #d4af37, #b68d40)",
            transform: "translateY(-2px)",
            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.25)",
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
