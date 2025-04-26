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
      <Box sx={{ display: "flex", justifyContent: "flex-end", px: 5, pt: 2 }}>
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

      <Toolbar sx={{ justifyContent: "space-between", alignItems: "center", px: 2, flexWrap: "wrap" }}>
        {/* Logo */}
        <Link href="/" passHref legacyBehavior>
  <motion.div whileHover={{ scale: 1.05 }}>
    <Box
      sx={{
        width: 140,
        height: 140,
        backgroundColor: "#0f0f0f", // dark circle background
        borderRadius: "50%",        // perfect circle
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        boxShadow: "0 0 12px rgba(255,77,77,0.5)", // slight glow to match theme
      }}
    >
      <Image src="/images/logo.jpg" alt="Shield Logo" width={160} height={140} />
    </Box>
  </motion.div>
</Link>


        {/* Desktop Menu */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
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

        {/* CTA Button */}
        <motion.div whileHover={{ scale: 1.05 }}>
          <Link href="/quote" passHref legacyBehavior>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#ff0000",
                fontWeight: "bold",
                fontSize: "16px",
                px: 3,
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

        {/* Mobile Menu Icon */}
        <IconButton onClick={handleDrawerToggle} sx={{ display: { md: "none" }, color: "#fff" }}>
          <MenuIcon />
        </IconButton>
      </Toolbar>

      {/* Drawer Menu (Mobile) */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: "#0f0f0f",
            color: "#fff",
            width: 280,
            padding: "20px 15px",
          },
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 3 }}>
          <Link href="/" passHref legacyBehavior>
            <Image src="/images/logo.jpg" alt="Shield Logo" width={100} height={60} />
          </Link>
          <IconButton onClick={handleDrawerToggle} sx={{ color: "#fff" }}>
            <MenuIcon />
          </IconButton>
        </Box>

        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={{
            hidden: { opacity: 0, x: 30 },
            visible: {
              opacity: 1,
              x: 0,
              transition: {
                type: "spring",
                damping: 18,
                stiffness: 80,
                staggerChildren: 0.1,
              },
            },
            exit: { opacity: 0, x: 30 },
          }}
        >
          {Object.entries(menuItems).map(([menu, subItems]) => {
            const isActive = router.pathname.includes(menu);

            return (
              <motion.div key={menu} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
                <Link href={`/${menu}`} passHref legacyBehavior>
                  <Typography
                    component="span"
                    onClick={handleDrawerToggle}
                    sx={{
                      fontSize: "16px",
                      fontWeight: 600,
                      mb: 1,
                      color: isActive ? "#ff0000" : "#fff",
                      cursor: "pointer",
                      display: "block",
                      "&:hover": { color: "#ff0000" },
                    }}
                  >
                    {menu.toUpperCase()}
                  </Typography>
                </Link>

                <Box sx={{ pl: 2, mb: 2 }}>
                  {subItems.map((item, idx) => {
                    const isSubActive = router.pathname === item.link;

                    return (
                      <motion.div
                        key={item.text}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05 * idx }}
                      >
                        <Link href={item.link} passHref legacyBehavior>
                          <Typography
                            component="span"
                            onClick={handleDrawerToggle}
                            sx={{
                              fontSize: "14px",
                              fontWeight: 400,
                              color: isSubActive ? "#ff0000" : "#ccc",
                              py: 0.5,
                              display: "block",
                              cursor: "pointer",
                              "&:hover": { color: "#ff0000" },
                            }}
                          >
                            • {item.text}
                          </Typography>
                        </Link>
                      </motion.div>
                    );
                  })}
                </Box>
              </motion.div>
            );
          })}

          {/* CTA Button */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
            <Box sx={{ mt: 3 }}>
              <Link href="/quote" passHref legacyBehavior>
                <Button
                  fullWidth
                  variant="contained"
                  onClick={handleDrawerToggle}
                  sx={{
                    backgroundColor: "#ff0000",
                    fontWeight: "bold",
                    fontSize: "15px",
                    "&:hover": { backgroundColor: "#cc0000" },
                  }}
                >
                  Get a Quote
                </Button>
              </Link>
            </Box>
          </motion.div>
        </motion.div>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
