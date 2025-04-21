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
        py: 12,
        px: 2,
        mt: "auto",
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={6} alignItems="flex-start">
          {/* Logo and Company Info */}
          <Grid item xs={12} md={3}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Box textAlign={{ xs: "center", md: "left" }}>
                <Image
                  src="/images/logo.jpg"
                  alt="Shield Security Logo"
                  width={140}
                  height={140}
                />
                <Typography variant="h6" sx={{ fontWeight: "bold", mt: 2 }}>
                  Shield Secure Security
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ mt: 2, color: "#cfcfcf", lineHeight: 1.6, maxWidth: 300 }}
                >
                  Providing high-quality security services with professionalism
                  and commitment to safety.
                </Typography>
              </Box>
            </motion.div>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={3}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Box textAlign={{ xs: "center", md: "left" }}>
                <Typography variant="h6" sx={{ fontWeight: "bold", mb: 3 }}>
                  Want to Know More?
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
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
                            cursor: "pointer",
                            color: "#cfcfcf",
                            "&:hover": { color: "#ff0000" },
                            transition: "color 0.3s",
                          }}
                        >
                          {text}
                        </Typography>
                      </Link>
                    )
                  )}
                </Box>
              </Box>
            </motion.div>
          </Grid>

          {/* Careers */}
          <Grid item xs={12} md={3}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Box textAlign={{ xs: "center", md: "left" }}>
                <Typography variant="h6" sx={{ fontWeight: "bold", mb: 3 }}>
                  Join Our Team
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                  {["Careers", "Apply Now"].map((text) => (
                    <Link
                      key={text}
                      href={`/${text.toLowerCase().replace(/\s+/g, "")}`}
                      passHref
                    >
                      <Typography
                        variant="body2"
                        sx={{
                          cursor: "pointer",
                          color: "#cfcfcf",
                          "&:hover": { color: "#ff0000" },
                          transition: "color 0.3s",
                        }}
                      >
                        {text}
                      </Typography>
                    </Link>
                  ))}
                </Box>
              </Box>
            </motion.div>
          </Grid>

          {/* Contact Info + Map */}
          <Grid item xs={12} md={3}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Box
                textAlign={{ xs: "center", md: "left" }}
                sx={{ display: "flex", flexDirection: "column", gap: 2 }}
              >
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Contact Us
                </Typography>

                <Typography variant="body2" sx={{ color: "#cfcfcf" }}>
                  📞 403-953-1998
                </Typography>
                <Typography variant="body2" sx={{ color: "#cfcfcf" }}>
                  📧 shieldsecure82@gmail.com
                </Typography>

                <Link href="/quote" passHref>
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: "bold",
                      color: "#ff0000",
                      mt: 1,
                      cursor: "pointer",
                      "&:hover": { color: "#fff" },
                      transition: "color 0.3s",
                    }}
                  >
                    Request a Quote
                  </Typography>
                </Link>

                {/* Social Icons */}
                <Box
                  sx={{
                    mt: 2,
                    display: "flex",
                    justifyContent: { xs: "center", md: "flex-start" },
                    gap: 2,
                  }}
                >
                  {[FacebookIcon, LinkedInIcon, InstagramIcon, TwitterIcon].map(
                    (Icon, idx) => (
                      <motion.div whileHover={{ scale: 1.2 }} key={idx}>
                        <IconButton
                          component="a"
                          href="#"
                          sx={{
                            color: "#cfcfcf",
                            "&:hover": { color: "#ff0000" },
                            transition: "color 0.3s",
                          }}
                        >
                          <Icon />
                        </IconButton>
                      </motion.div>
                    )
                  )}
                </Box>
{/* Google Map Embed */}
<Box
  sx={{
    mt: 3,
    borderRadius: 2,
    overflow: 'hidden',
    boxShadow: '0 4px 16px rgba(255, 0, 0, 0.3)',
    maxWidth: '100%',
    height: { xs: 200, sm: 200 },
  }}
>
  <iframe
    title="Shield Security HQ - Canmore, AB"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2501.2264642449775!2d-115.3591012232796!3d51.08929467174853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5370cae8ea4b4011%3A0x6b547d316ebd8d6c!2sCanmore%2C%20AB!5e0!3m2!1sen!2sca!4v1713366048080!5m2!1sen!2sca"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</Box>

                </Box>
            </motion.div>
          </Grid>
        </Grid>

        <Divider sx={{ backgroundColor: "#333", my: 6 }} />

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