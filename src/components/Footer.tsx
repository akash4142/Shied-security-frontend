import React from "react";
import {
  Container,
  Grid,
  Typography,
  IconButton,
  Box,
  Divider,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        background: "linear-gradient(180deg, #0f1114, #1c1f25)",
        color: "#fff",
        py: 10,
        px: 2,
        mt: "auto",
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Grid container spacing={6} justifyContent="space-between">
            {/* Logo and Company Info */}
            <Grid item xs={12} md={3} textAlign={{ xs: "center", md: "left" }}>
              <Image
                src="/images/logo.jpg"
                alt="Shield Security Logo"
                width={140}
                height={140}
              />
              <Typography variant="h6" sx={{ fontWeight: "bold", mt: 2 }}>
                Shield Security
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  mt: 2,
                  color: "#cfcfcf",
                  lineHeight: 1.6,
                  maxWidth: 300,
                }}
              >
                Providing high-quality security services with professionalism
                and commitment to safety.
              </Typography>
            </Grid>

            {/* Quick Links */}
            <Grid item xs={12} md={3} textAlign={{ xs: "center", md: "left" }}>
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 3 }}>
                Want to Know More?
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                {[
                  { text: "Our Blog", link: "/blog" },
                  { text: "About Us", link: "/about" },
                  { text: "Media", link: "/media" },
                  { text: "Privacy Policy", link: "/privacypolicy" },
                  { text: "FAQ", link: "/faq" },
                ].map((item) => (
                  <Link key={item.text} href={item.link} passHref>
                    <Typography
                      variant="body2"
                      sx={{
                        cursor: "pointer",
                        color: "#cfcfcf",
                        "&:hover": {
                          color: "#ff0000",
                        },
                        transition: "color 0.3s",
                      }}
                    >
                      {item.text}
                    </Typography>
                  </Link>
                ))}
              </Box>
            </Grid>

            {/* Careers */}
            <Grid item xs={12} md={3} textAlign={{ xs: "center", md: "left" }}>
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 3 }}>
                Join Our Team
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                {[
                  { text: "Careers", link: "/careers" },
                  { text: "Apply Now", link: "/apply" },
                ].map((item) => (
                  <Link key={item.text} href={item.link} passHref>
                    <Typography
                      variant="body2"
                      sx={{
                        cursor: "pointer",
                        color: "#cfcfcf",
                        "&:hover": {
                          color: "#ff0000",
                        },
                        transition: "color 0.3s",
                      }}
                    >
                      {item.text}
                    </Typography>
                  </Link>
                ))}
              </Box>
            </Grid>

            {/* Contact Info */}
            <Grid item xs={12} md={3} textAlign={{ xs: "center", md: "left" }}>
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 3 }}>
                Contact Us
              </Typography>
              <Typography variant="body2" sx={{ color: "#cfcfcf", mb: 1 }}>
                📞 1-435-654-3453
              </Typography>
              <Typography variant="body2" sx={{ color: "#cfcfcf", mb: 1 }}>
                📧 info@shieldsecurity.com
              </Typography>
              <Link href="/quote" passHref>
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: "bold",
                    color: "#ff0000",
                    mt: 2,
                    cursor: "pointer",
                    "&:hover": {
                      color: "#fff",
                    },
                    transition: "color 0.3s",
                  }}
                >
                  Request a Quote
                </Typography>
              </Link>

              {/* Social Media Icons */}
              <Box
                sx={{
                  mt: 3,
                  display: "flex",
                  justifyContent: { xs: "center", md: "flex-start" },
                  gap: 2,
                }}
              >
                {[
                  {
                    icon: <FacebookIcon />,
                    link: "https://www.facebook.com",
                  },
                  {
                    icon: <LinkedInIcon />,
                    link: "https://www.linkedin.com",
                  },
                  {
                    icon: <InstagramIcon />,
                    link: "https://www.instagram.com",
                  },
                  {
                    icon: <TwitterIcon />,
                    link: "https://www.twitter.com",
                  },
                ].map((item, index) => (
                  <motion.div whileHover={{ scale: 1.2 }} key={index}>
                    <IconButton
                      component="a"
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: "#cfcfcf",
                        "&:hover": {
                          color: "#fff",
                        },
                        transition: "color 0.3s",
                      }}
                    >
                      {item.icon}
                    </IconButton>
                  </motion.div>
                ))}
              </Box>
            </Grid>
          </Grid>
        </motion.div>

        <Divider sx={{ backgroundColor: "#333", my: 5 }} />

        <Typography
          variant="body2"
          sx={{
            textAlign: "center",
            color: "#999",
            fontSize: "14px",
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          &copy; {new Date().getFullYear()} Shield Security. All Rights Reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
