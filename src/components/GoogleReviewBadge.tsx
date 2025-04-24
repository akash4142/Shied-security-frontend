// components/GoogleReviewBadge.tsx
import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const GoogleReviewBadge = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
    >
      <Box
        sx={{
          position: "fixed",
          bottom: 24,
          left: 24,
          zIndex: 1500,
          background: "rgba(255, 255, 255, 0.9)",
          borderRadius: "16px",
          px: 2.5,
          py: 1.5,
          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.25)",
          display: "flex",
          alignItems: "center",
          gap: 2,
          backdropFilter: "blur(6px)",
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: "0 10px 30px rgba(255, 0, 0, 0.2)",
          },
        }}
      >
        <Image src="/logos/google.jpg" alt="Google" width={40} height={40} />

        <Box sx={{ lineHeight: 1.3 }}>
          <Typography
            variant="subtitle2"
            sx={{
              fontWeight: "600",
              color: "#202124",
              fontSize: "13px",
            }}
          >
            ⭐ 5.0 out of 5.0
          </Typography>
          <Link
            href="https://www.google.com/maps/place/Shield+Secure+Security+LTD./@54.3833461,-120.2757729,6z/data=!4m8!3m7!1s0x443f19176b012fe9:0x6e174e7d31e4d995!8m2!3d54.4983702!4d-115.0011694!9m1!1b1!16s%2Fg%2F11w3p1m1by?entry=ttu&g_ep=EgoyMDI1MDQyMC4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D"
            target="_blank"
            passHref
          >
            <Typography
              variant="caption"
              sx={{
                fontSize: "12px",
                color: "#1a73e8",
                fontWeight: 500,
                cursor: "pointer",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              See More Reviews
            </Typography>
          </Link>
        </Box>
      </Box>
    </motion.div>
  );
};

export default GoogleReviewBadge;
