
import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Image from "next/image";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMenuOpen = (menu: string) => {
    setMenuOpen(menu);
  };

  const handleMenuClose = () => {
    setMenuOpen(null);
  };

  // Dropdown items
  const menuItems = {
    services: [
      { text: "Uniformed Security", link: "/services/Uniformed" },
      { text: "Event Security", link: "/services/Event" },
      { text: "Loss Prevention", link: "/services/Loss" },
      { text: "Patrol Security", link: "/services/Patrol" },
      { text: "Mobile Security", link: "/services/Mobile" },
      { text: "Tactical Security", link: "/services/Tactical" },
      { text: "Mobile Security", link: "/services/Mobile" },
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
    ],
    about: [
      { text: "Company Overview", link: "/about/overview" },
      { text: "Why Us", link: "/about/whyus" },
      { text: "Our Team", link: "/about/our-team" },
      { text: "Careers", link: "/careers" },
      {text:"Our Partners" ,link:"/about/parnters"},
    ],
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: scrolled ? "#2c2c2c" : "transparent",
          boxShadow: scrolled ? "0 4px 10px rgba(0, 0, 0, 0.3)" : "none",
          padding: "20px 0",
          transition: "all 0.3s ease-in-out",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          {/* Logo */}
          <Link href="/" passHref>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Image src="/images/logo.jpg" alt="Shield Security Logo" width={60} height={60} />
              <Typography
                variant="h6"
                sx={{
                  color: "#fff",
                  mt: 1,
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                }}
              >
                Shield Security
              </Typography>
            </Box>
          </Link>

          {/* Desktop Menu */}
          <Box sx={{ display: "flex", gap: "40px" }}>
            {Object.keys(menuItems).map((menu) => (
              <Box
                key={menu}
                onMouseEnter={() => handleMenuOpen(menu)}
                onMouseLeave={handleMenuClose}
                sx={{ position: "relative" }}
              >
                {/* Main Button (Clickable for Locations) */}
                <Link href={menu === "services" ? "/services":menu === "locations" ? "/locations" :menu === "industries" ? "/industries":menu==="about"?"/about":"#"} passHref>
                  <Button
                    sx={{
                      color: "#fff",
                      fontSize: "16px",
                      textTransform: "uppercase",
                      fontWeight: "bold",
                    }}
                    endIcon={<ArrowDropDownIcon />}
                  >
                    {menu.charAt(0).toUpperCase() + menu.slice(1)}
                  </Button>
                </Link>


                {/* Dropdown for Subpages */}
                {menuOpen === menu && (
                  <Box
                    sx={{
                      position: "absolute",
                      top: "100%",
                      left: 0,
                      backgroundColor: "#f5f5f5",
                      borderRadius: "5px",
                      boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                      zIndex: 10,
                      minWidth: "220px",
                      padding: "10px 0",
                    }}
                  >
                    {menuItems[menu as keyof typeof menuItems].map((item) => (
                      <Box key={item.text} sx={{ px: 3, py: 1 }}>
                        <Link href={item.link} passHref>
                          <Typography
                            sx={{
                              color: "#333",
                              fontSize: "15px",
                              fontWeight: "bold",
                              "&:hover": {
                                color: "#fff",
                                backgroundColor: "#ff0000",
                                borderRadius: "3px",
                                padding: "5px",
                              },
                              transition: "all 0.3s ease-in-out",
                            }}
                          >
                            {item.text}
                          </Typography>
                        </Link>
                      </Box>
                    ))}
                  </Box>
                )}
              </Box>
            ))}
          </Box>

          {/* CTA Button */}
          <Button variant="contained" sx={{ backgroundColor: "#ff0000", padding: "10px 25px", fontWeight: "bold", fontSize: "16px" }}>
            Get a Quote
          </Button>

          {/* Mobile Menu */}
          <IconButton color="inherit" onClick={handleDrawerToggle} sx={{ display: { md: "none" } }}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
        <List>
          {Object.keys(menuItems).map((menu) => (
            <ListItem key={menu} disablePadding>
              {/* Clickable Main Item */}
              <ListItemButton onClick={handleDrawerToggle}>
                <Link href={menu === "locations" ? "/locations" : "#"} passHref>
                  <ListItemText primary={menu.charAt(0).toUpperCase() + menu.slice(1)} />
                </Link>
              </ListItemButton>

              {/* Dropdown Subitems */}
              {menuItems[menu as keyof typeof menuItems].map((item) => (
                <ListItem key={item.text} disablePadding sx={{ pl: 4 }}>
                  <ListItemButton onClick={handleDrawerToggle}>
                    <Link href={item.link} passHref>
                      <ListItemText primary={item.text} />
                    </Link>
                  </ListItemButton>
                </ListItem>
              ))}
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
