import React from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  IconButton,
  Divider,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import ShieldIcon from "@mui/icons-material/Shield";
import Link from "next/link";
import Image from "next/image";

const pages = [
  { name: "Our Blog", link: "/blog" },
  { name: "About Us", link: "/about" },
  { name: "Media", link: "/media" },
  { name: "Privacy Policy", link: "/privacypolicy" },
  { name: "FAQ", link: "/faq" },
];

const MobileFooter = () => {
  return (
    <Box
      sx={{
        background: "#0b0b0b",
        color: "#eee",
        pt: 5,
        pb: 5,
        px: 3,
        mt: "auto",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* Logo */}
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Image src="/images/logo.jpg" alt="Shield Logo" width={70} height={70} />
      </Box>

      {/* Accordions */}
      <Accordion disableGutters sx={{ background: "transparent", color: "#eee" }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "#eee" }} />}>
          <Typography fontWeight="bold">Discover More</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {pages.map((page) => (
            <Link key={page.name} href={page.link} passHref legacyBehavior>
              <Typography
                component="span"
                sx={{
                  display: "block",
                  color: "#bbb",
                  mb: 1,
                  cursor: "pointer",
                  "&:hover": { color: "#ff4d4d" },
                }}
              >
                {page.name}
              </Typography>
            </Link>
          ))}
        </AccordionDetails>
      </Accordion>

      <Accordion disableGutters sx={{ background: "transparent", color: "#eee", mt: 2 }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "#eee" }} />}>
          <Typography fontWeight="bold">Join Our Team</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {["Careers", "Apply Now"].map((text) => (
            <Link key={text} href={`/${text.toLowerCase().replace(/\s+/g, "-")}`} passHref legacyBehavior>
              <Typography
                component="span"
                sx={{
                  display: "block",
                  color: "#bbb",
                  mb: 1,
                  cursor: "pointer",
                  "&:hover": { color: "#ff4d4d" },
                }}
              >
                {text}
              </Typography>
            </Link>
          ))}
        </AccordionDetails>
      </Accordion>

      <Accordion disableGutters sx={{ background: "transparent", color: "#eee", mt: 2 }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "#eee" }} />}>
          <Typography fontWeight="bold">Contact Us</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2" sx={{ color: "#ccc", mb: 1 }}>📞 403-953-1998</Typography>
          <Typography variant="body2" sx={{ color: "#ccc", mb: 1 }}>
    📧{" "}
    <a href="mailto:shieldsecure82@gmail.com" style={{ color: "#ccc", textDecoration: "none" }}>
      shieldsecure82@gmail.com
    </a>
  </Typography>
          <Typography variant="body2" sx={{ color: "#ccc" }}>🏢 Head Office: Canmore, AB</Typography>
        </AccordionDetails>
      </Accordion>

      {/* Social Icons */}
      <Box sx={{ mt: 4, display: "flex", justifyContent: "center", gap: 2 }}>
        {[InstagramIcon, FacebookIcon].map((Icon, index) => (
          <IconButton key={index} sx={{ color: "#ccc", background: "#1f1f1f", "&:hover": { background: "#ff4d4d", color: "#fff" } }}>
            <Icon />
          </IconButton>
        ))}
      </Box>

      {/* Copyright */}
      <Divider sx={{ my: 4, background: "#333" }} />
      <Typography
        variant="body2"
        sx={{ textAlign: "center", color: "#888", fontSize: "13px" }}
      >
        <ShieldIcon fontSize="small" /> {new Date().getFullYear()} Shield Security. All rights reserved.
      </Typography>
    </Box>
  );
};

export default MobileFooter;
