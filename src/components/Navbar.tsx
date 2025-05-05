import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Accordion, AccordionSummary, AccordionDetails, Divider } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CloseIcon from "@mui/icons-material/Close";
import { useRouter } from "next/router";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
  const handleMenuOpen = (menu: string) => setMenuOpen(menu);
  const handleMenuClose = () => setMenuOpen(null);

  const menuItems = {
    services: [
      { text: "Uniformed Security", link: "/services/Uniformed" },
      { text: "Event Security", link: "/services/Event" },
      { text: "Loss Prevention", link: "/services/Loss" },
      { text: "Patrol Security", link: "/services/Patrol" },
      { text: "Mobile Security", link: "/services/Mobile" },
      { text: "Tactical Security", link: "/services/Tactical" },
      {text:"Parking Enforcement", link: "/services/ParkingEnforcement"}
    ],
    locations: [
      { text: "Canmore", link: "/locations/canmore" },
      { text: "Banff", link: "/locations/banff" },
      { text: "Calgary", link: "/locations/calgary" },
      { text: "Exshaw", link: "/locations/exshaw" },
      { text: "Cochrane", link: "/locations/cochrane" },
    ],
    industries: [
      { text: "Hotel Security", link: "/industries/hotel" },
      { text: "Healthcare Security", link: "/industries/health" },
      { text: "Corporate Security", link: "/industries/corporate" },
      { text: "Retail Security", link: "/industries/retail" },
      { text: "Warehouse Security", link: "/industries/warehouse" },
      { text: "Construction Security", link: "/industries/construction" },
      { text: "Education & Campus", link: "/industries/Education" },
      { text: "Government & Municipality", link: "/industries/Government" },
      { text: "Residential & Commerical ", link: "/industries/Residental" },
      { text: "Patrol Security", link: "/services/Patrol" },
      
    ],
    about: [
      { text: "Company Overview", link: "/about/overview" },
      { text: "Why Us", link: "/about/whyus" },
      { text: "Our Team", link: "/about/ourteam" },
    ],
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: scrolled ? "#0f0f0f" : "transparent",
        color: "#fff",
        backdropFilter: scrolled ? "blur(8px)" : "none",
        transition: "all 0.3s ease",
        boxShadow: scrolled ? "0 8px 20px rgba(0,0,0,0.25)" : "none",
        zIndex: 1301,
      }}
    >
      {/* Top Right Social Icons */}
      <Box sx={{ pr: 8}}>
      <Box sx={{ display: "flex", justifyContent: "flex-end", px: 5, pt: 2,gap:2 }}>
        {[
          { icon: <InstagramIcon />, href: "https://www.instagram.com/shieldsecuresecurity?igsh=MWRkOWFkaWZ0NXNqZQ==" },
          { icon: <FacebookIcon />, href: "https://www.facebook.com/share/1Ca1o6NnKu/?mibextid=wwXIfr" },
        ].map(({ icon, href }, i) => (
          <motion.div whileHover={{ scale: 1.4 }} key={i}>
            <IconButton href={href} target="_blank" rel="noopener noreferrer" sx={{ color: "#fff" }}>
              {icon}
            </IconButton>
          </motion.div>
        ))}
      </Box>
</Box>


      <Toolbar sx={{ justifyContent: "space-between", alignItems: "center",py:2, flexWrap: "wrap" }}>
        {/* Logo */}
        <Box sx={{pl: { xs: 2, md: 10 }, }}> {/* or ml: 4 */}
  <Link href="/" passHref legacyBehavior>
    <motion.div whileHover={{ scale: 1.05 }}>
      <Box
        sx={{
          width: 140,
          height: 140,
          backgroundColor: "#0f0f0f",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          boxShadow: "0 0 12px rgba(255,77,77,0.5)",
        }}
      >
        <Image src="/images/logo.jpg" alt="Shield Logo" width={160} height={140} />
      </Box>
    </motion.div>
  </Link>
</Box>



        {/* Desktop Menu */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 8 }}>
          {Object.keys(menuItems).map((menu) => (
            <Box
              key={menu}
              onMouseEnter={() => handleMenuOpen(menu)}
              onMouseLeave={handleMenuClose}
              sx={{ position: "relative" }}
            >
              <Button
                onClick={() => router.push(`/${menu}`)}
                sx={{
                  color: "#fff",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  fontSize: "15px",
                  '&:hover': { color: "#ff0000" },
                }}
                endIcon={<ArrowDropDownIcon />}
              >
                {menu}
              </Button>
              <AnimatePresence>
                {menuOpen === menu && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        top: "100%",
                        left: 0,
                        backgroundColor: "#222",
                        borderRadius: 2,
                        boxShadow: "0 6px 12px rgba(0,0,0,0.4)",
                        zIndex: 100,
                        p: 1,
                        minWidth: "220px",
                      }}
                    >
                      {menuItems[menu as keyof typeof menuItems].map((item) => (
                        <Link key={item.text} href={item.link} passHref legacyBehavior>
                          <Typography
                            component="span"
                            sx={{
                              color: "#eee",
                              p: 1,
                              fontWeight: 500,
                              borderRadius: "5px",
                              display: "block",
                              "&:hover": {
                                backgroundColor: "#ff0000",
                                color: "#fff",
                              },
                              transition: "all 0.3s ease-in-out",
                              cursor: "pointer",
                            }}
                          >
                            {item.text}
                          </Typography>
                        </Link>
                      ))}
                    </Box>
                  </motion.div>
                )}
              </AnimatePresence>
            </Box>
          ))}
        </Box>

        <Box sx={{ pr: 8 }}>
  <motion.div whileHover={{ scale: 1.05 }}>
    <Link href="/quote" passHref legacyBehavior>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#ff0000",
          fontWeight: "bold",
          fontSize: "16px",
          px: 4,
          display: { xs: "none", md: "inline-flex" },
          '&:hover': {
            backgroundColor: "#cc0000",
          },
        }}
      >
        Get a Quote
      </Button>
    </Link>
  </motion.div>
</Box>


        {/* Mobile Menu Icon */}
        <IconButton onClick={handleDrawerToggle} sx={{ display: { md: "none" }, color: "#fff" }}>
          <MenuIcon />
        </IconButton>
      </Toolbar>

      
<Drawer
  anchor="right"
  open={mobileOpen}
  onClose={handleDrawerToggle}
  sx={{
    zIndex:1400,
    "& .MuiDrawer-paper": {
      backgroundColor: "blak", // White background like Blackbird
      color: "#000",
      width: 280,
      padding: "10px 15px",
    },
  }}
>
  {/* Drawer Header: Logo and X Close Button */}
  <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 2 }}>
    

    <IconButton onClick={handleDrawerToggle}>
      <CloseIcon />
    </IconButton>
  </Box>

  <Divider sx={{ mb: 2 }} />

  {/* Accordion Menu */}
  <Box>
    {Object.entries(menuItems).map(([menu, subItems]) => (
      <Accordion key={menu} disableGutters elevation={0} sx={{ backgroundColor: "transparent" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`${menu}-content`}
          id={`${menu}-header`}
        >
          <Typography sx={{ fontWeight: 600, fontSize: "15px" }}>
            {menu.toUpperCase()}
          </Typography>
        </AccordionSummary>

        <AccordionDetails sx={{ pl: 2 }}>
          {subItems.map((item) => (
            <Link key={item.text} href={item.link} passHref legacyBehavior>
              <Typography
                component="span"
                onClick={handleDrawerToggle}
                sx={{
                  fontSize: "14px",
                  display: "block",
                  mb: 1,
                  cursor: "pointer",
                  "&:hover": { color: "#ff0000" },
                }}
              >
                {item.text}
              </Typography>
            </Link>
          ))}
        </AccordionDetails>
      </Accordion>
    ))}
  </Box>

  <Divider sx={{ mt: 3, mb: 2 }} />

  {/* Social Media Icons */}
  <Box sx={{ display: "flex", justifyContent: "space-around" }}>
    <IconButton
      href="https://www.instagram.com/shieldsecuresecurity"
      target="_blank"
      rel="noopener noreferrer"
    >
      <InstagramIcon sx={{ color: "#000" }} />
    </IconButton>

    <IconButton
      href="https://www.facebook.com/share/1Ca1o6NnKu"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FacebookIcon sx={{ color: "#000" }} />
    </IconButton>

  
  </Box>
</Drawer>

    </AppBar>
  );
};

export default Navbar;
