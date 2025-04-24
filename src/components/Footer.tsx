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
        background: "linear-gradient(180deg, #0b0b0b, #1c1c1c)",
        color: "#eee",
        pt: 10,
        pb: 6,
        px: 2,
        mt: "auto",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={6}>
          {/* Logo & Description */}
          <Grid item xs={12} md={3}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Box textAlign={{ xs: "center", md: "left" }}>
                <Box
                  sx={{
                    display: "inline-block",
                    borderRadius: "50%",
                    overflow: "hidden",
                    boxShadow: "0 0 12px rgba(255,0,0,0.4)",
                  }}
                >
                  <Image
                    src="/images/logo.jpg"
                    alt="Shield Logo"
                    width={120}
                    height={120}
                  />
                </Box>
                <Typography
                  variant="h6"
                  sx={{
                    mt: 2,
                    fontWeight: "bold",
                    textShadow: "0 0 6px rgba(255,77,77,0.6)",
                  }}
                >
                  Shield Secure Security
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "#aaa", mt: 1, lineHeight: 1.7 }}
                >
                  Premium security services in Alberta’s most trusted
                  locations — committed to safety and professionalism.
                </Typography>
              </Box>
            </motion.div>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={3}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  mb: 2,
                  textShadow: "0 0 5px rgba(255,77,77,0.5)",
                }}
              >
                Discover More
              </Typography>
              {["Our Blog", "About Us", "Media", "Privacy Policy", "FAQ"].map(
                (text) => (
                  <Link
                    key={text}
                    href={`/${text.toLowerCase().replace(/\s+/g, "")}`}
                    passHref
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        my: 0.8,
                        color: "#bbb",
                        cursor: "pointer",
                        "&:hover": {
                          color: "#ff4d4d",
                          transform: "translateX(6px)",
                          transition: "all 0.3s",
                        },
                      }}
                    >
                      {text}
                    </Typography>
                  </Link>
                )
              )}
            </motion.div>
          </Grid>

          {/* Careers */}
          <Grid item xs={12} md={3}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  mb: 2,
                  textShadow: "0 0 5px rgba(255,77,77,0.5)",
                }}
              >
                Careers
              </Typography>
              {["Careers", "Apply Now"].map((text) => (
                <Link
                  key={text}
                  href={`/${text.toLowerCase().replace(/\s+/g, "")}`}
                  passHref
                >
                  <Typography
                    variant="body2"
                    sx={{
                      my: 0.8,
                      color: "#bbb",
                      cursor: "pointer",
                      "&:hover": {
                        color: "#ff4d4d",
                        transform: "translateX(6px)",
                        transition: "all 0.3s",
                      },
                    }}
                  >
                    {text}
                  </Typography>
                </Link>
              ))}
            </motion.div>
          </Grid>

          {/* Contact + Socials + Map */}
          <Grid item xs={12} md={3}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  mb: 2,
                  textShadow: "0 0 5px rgba(255,77,77,0.5)",
                }}
              >
                Contact Us
              </Typography>
              <Typography variant="body2" sx={{ color: "#bbb" }}>
                📞 403-953-1998
              </Typography>
              <Typography variant="body2" sx={{ color: "#bbb", mb: 1 }}>
                📧 shieldsecure82@gmail.com
              </Typography>
              <Link href="/quote" passHref>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    color: "#ff4d4d",
                    mt: 1,
                    display: "inline-block",
                    cursor: "pointer",
                    "&:hover": {
                      color: "#fff",
                      textDecoration: "underline",
                      transition: "color 0.3s",
                    },
                  }}
                >
                  ➤ Request a Quote
                </Typography>
              </Link>

              {/* Social Icons */}
              <Box sx={{ mt: 3, display: "flex", gap: 2 }}>
                {[FacebookIcon, LinkedInIcon, InstagramIcon, TwitterIcon].map(
                  (Icon, i) => (
                    <motion.div whileHover={{ scale: 1.15 }} key={i}>
                      <IconButton
                        sx={{
                          color: "#ccc",
                          background: "#1f1f1f",
                          boxShadow: "0 4px 8px rgba(255,77,77,0.3)",
                          "&:hover": {
                            background: "#ff4d4d",
                            color: "#fff",
                          },
                          transition: "all 0.3s",
                        }}
                        size="small"
                      >
                        <Icon />
                      </IconButton>
                    </motion.div>
                  )
                )}
              </Box>

              {/* Map */}
              <Box
                sx={{
                  mt: 3,
                  borderRadius: 2,
                  overflow: "hidden",
                  boxShadow: "0 4px 20px rgba(255,0,0,0.3)",
                  height: 200,
                }}
              >
                <iframe
                  title="Shield HQ - Canmore"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2501.2264642449775!2d-115.3591012232796!3d51.08929467174853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5370cae8ea4b4011%3A0x6b547d316ebd8d6c!2sCanmore%2C%20AB!5e0!3m2!1sen!2sca!4v1713366048080!5m2!1sen!2sca"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                ></iframe>
              </Box>
            </motion.div>
          </Grid>
        </Grid>

        {/* Footer Bottom */}
        <Divider sx={{ my: 5, borderColor: "#333" }} />
        <Typography
          variant="body2"
          sx={{
            textAlign: "center",
            color: "#888",
            fontSize: "13px",
            fontFamily: "'Poppins', sans-serif",
            letterSpacing: "0.5px",
          }}
        >
          &copy; {new Date().getFullYear()} Shield Security. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
