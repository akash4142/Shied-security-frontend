// // components/Navbar.tsx

// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Button,
//   IconButton,
//   Drawer,
//   List,
//   ListItem,
//   ListItemButton,
//   ListItemText,
//   Box,
// } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";
// import {useRouter} from 'next/router';



// const Navbar = () => {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [menuOpen, setMenuOpen] = useState<string | null>(null);
//   const router = useRouter();

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
//   const handleMenuOpen = (menu: string) => setMenuOpen(menu);
//   const handleMenuClose = () => setMenuOpen(null);

//   const menuItems = {
//     services: [
//       { text: "Uniformed Security", link: "/services/Uniformed" },
//       { text: "Event Security", link: "/services/Event" },
//       { text: "Loss Prevention", link: "/services/Loss" },
//       { text: "Patrol Security", link: "/services/Patrol" },
//       { text: "Mobile Security", link: "/services/Mobile" },
//       { text: "Tactical Security", link: "/services/Tactical" },
//     ],
//     locations: [
//       { text: "Canmore", link: "/locations/canmore" },
//       { text: "Banff", link: "/locations/banff" },
//       { text: "Calgary", link: "/locations/calgary" },
//       { text: "Exshaw", link: "/locations/exshaw" },
//       { text: "Cochrane", link: "/locations/cochrane" },
//     ],
//     industries: [
//       { text: "Hotel Security", link: "/industries/hotel" },
//       { text: "Healthcare Security", link: "/industries/health" },
//       { text: "Corporate Security", link: "/industries/corporate" },
//       { text: "Retail Security", link: "/industries/retail" },
//       { text: "Warehouse Security", link: "/industries/warehouse" },
//     ],
//     about: [
//       { text: "Company Overview", link: "/about/overview" },
//       { text: "Why Us", link: "/about/whyus" },
//       { text: "Our Team", link: "/about/ourteam" },
//       { text: "Careers", link: "/careers" },
//       { text: "Our Partners", link: "/about/ourpartner" },
//     ],
//   };

//   return (
//     <>
//       {/* Social Bar */}
//       <Box
//         sx={{
//           width: "100%",
//           backgroundColor: scrolled ? "#0f0f0f" : "transparent",
//           color: "#fff",
//           display: "flex",
//           justifyContent: "flex-end",
//           alignItems: "center",
//           px: 2,
//           py: 0.5,
//           position: "fixed",
//           top: 0,
//           zIndex: 1301,
//         }}
//       >
//         <Box sx={{ display: "flex", gap: 2 }}>
//           {[{ icon: <InstagramIcon />, href: "https://www.instagram.com" },
//           { icon: <FacebookIcon />, href: "https://www.facebook.com" },
//           { icon: <TwitterIcon />, href: "https://www.twitter.com" }].map(({ icon, href }, i) => (
//             <motion.div whileHover={{ scale: 1.2 }} key={i}>
//               <IconButton href={href} target="_blank" rel="noopener noreferrer" sx={{ color: "#fff" }}>
//                 {icon}
//               </IconButton>
//             </motion.div>
//           ))}
//         </Box>
//       </Box>

//       {/* Navbar */}
//       <AppBar
//         position="fixed"
//         sx={{
//           top: "34px",
//           backgroundColor: scrolled ? "#0f0f0f" : "transparent",
//           transition: "all 0.4s ease",
//           boxShadow: scrolled ? "0 8px 20px rgba(0,0,0,0.25)" : "none",
//         }}
//       >
//         <Toolbar sx={{ justifyContent: "space-between", alignItems: "center" }}>
//           {/* Logo */}
//           <Link href="/" passHref>
//             <motion.div whileHover={{ scale: 1.05 }}>
//               <Box sx={{ display: "flex", alignItems: "center" }}>
//                 <Image src="/images/logo.jpg" alt="Shield Logo" width={220} height={140} />
//               </Box>
//             </motion.div>
//           </Link>

//           {/* Desktop Menu */}
//           <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
//             {Object.keys(menuItems).map((menu) => (
//               <Box
//                 key={menu}
//                 onMouseEnter={() => handleMenuOpen(menu)}
//                 onMouseLeave={handleMenuClose}
//                 sx={{ position: "relative" }}
//               >
//                 <Button
//                 onClick={()=>router.push(`/${menu}`)}
//                   sx={{
//                     color: "#fff",
//                     fontWeight: "bold",
//                     textTransform: "uppercase",
//                     fontSize: "15px",
//                     '&:hover': { color: "#ff0000" },
//                   }}
//                   endIcon={<ArrowDropDownIcon />}
//                 >
//                   {menu}
//                 </Button>

//                 {/* Dropdown */}
//                 <AnimatePresence>
//                   {menuOpen === menu && (
//                     <motion.div
//                       initial={{ opacity: 0, y: 10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       exit={{ opacity: 0, y: -10 }}
//                       transition={{ duration: 0.2 }}
//                     >
//                       <Box
//                         sx={{
//                           position: "absolute",
//                           top: "100%",
//                           left: 0,
//                           backgroundColor: "#222",
//                           borderRadius: 2,
//                           boxShadow: "0 6px 12px rgba(0,0,0,0.4)",
//                           zIndex: 100,
//                           p: 1,
//                           minWidth: "220px",
//                         }}
//                       >
//                         {menuItems[menu as keyof typeof menuItems].map((item) => (
//                           <Link key={item.text} href={item.link}>
//                             <Typography
//                               sx={{
//                                 color: "#eee",
//                                 p: 1,
//                                 fontWeight: 500,
//                                 borderRadius: "5px",
//                                 "&:hover": {
//                                   backgroundColor: "#ff0000",
//                                   color: "#fff",
//                                 },
//                                 transition: "all 0.3s ease-in-out",
//                               }}
//                             >
//                               {item.text}
//                             </Typography>
//                           </Link>
//                         ))}
//                       </Box>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </Box>
//             ))}
//           </Box>

//           {/* CTA Button */}
//           <motion.div whileHover={{ scale: 1.05 }}>
//             <Link href="/quote" passHref>
//               <Button
//                 variant="contained"
//                 sx={{
//                   backgroundColor: "#ff0000",
//                   fontWeight: "bold",
//                   fontSize: "16px",
//                   px: 3,
//                   display: { xs: "none", md: "inline-flex" },
//                   '&:hover': {
//                     backgroundColor: "#cc0000",
//                   }
//                 }}
//               >
//                 Get a Quote
//               </Button>
//             </Link>
//           </motion.div>

//           {/* Mobile Menu Icon */}
//           <IconButton onClick={handleDrawerToggle} sx={{ display: { md: "none" }, color: "#fff" }}>
//             <MenuIcon />
//           </IconButton>
//         </Toolbar>
//       </AppBar>

//       {/* Mobile Drawer */}
//       <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
//         <List sx={{ width: 250 }}>
//           {Object.keys(menuItems).map((menu) => (
//             <Box key={menu}>
//               <ListItem disablePadding>
//                 <ListItemButton onClick={handleDrawerToggle}>
//                   <Link href={`/${menu}`} passHref>
//                     <ListItemText primary={menu.toUpperCase()} />
//                   </Link>
//                 </ListItemButton>
//               </ListItem>
//               {menuItems[menu as keyof typeof menuItems].map((item) => (
//                 <ListItem key={item.text} disablePadding sx={{ pl: 4 }}>
//                   <ListItemButton onClick={handleDrawerToggle}>
//                     <Link href={item.link} passHref>
//                       <ListItemText primary={item.text} />
//                     </Link>
//                   </ListItemButton>
//                 </ListItem>
//               ))}
//             </Box>
//           ))}
//         </List>
//       </Drawer>
//     </>
//   );
// };

// export default Navbar;

// components/Navbar.tsx

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
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
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
      { text: "Careers", link: "/careers" },
      { text: "Our Partners", link: "/about/ourpartner" },
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
      <Box sx={{ display: "flex", justifyContent: "flex-end", px: 3, pt: 2 }}>
        {[{ icon: <InstagramIcon />, href: "https://www.instagram.com" },
          { icon: <FacebookIcon />, href: "https://www.facebook.com" },
          { icon: <TwitterIcon />, href: "https://www.twitter.com" }].map(({ icon, href }, i) => (
          <motion.div whileHover={{ scale: 1.4 }} key={i}>
            <IconButton href={href} target="_blank" rel="noopener noreferrer" sx={{ color: "#fff" }}>
              {icon}
            </IconButton>
          </motion.div>
        ))}
      </Box>

      <Toolbar sx={{ justifyContent: "space-between", alignItems: "center", px: 2, flexWrap: "wrap" }}>
        {/* Logo */}
        <Link href="/" passHref>
          <motion.div whileHover={{ scale: 1.05 }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Image src="/images/logo.jpg" alt="Shield Logo" width={220} height={140} />
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
                        <Link key={item.text} href={item.link} passHref>
                          <Typography
                            sx={{
                              color: "#eee",
                              p: 1,
                              fontWeight: 500,
                              borderRadius: "5px",
                              "&:hover": {
                                backgroundColor: "#ff0000",
                                color: "#fff",
                              },
                              transition: "all 0.3s ease-in-out",
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
          <Link href="/quote" passHref>
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

        <IconButton onClick={handleDrawerToggle} sx={{ display: { md: "none" }, color: "#fff" }}>
          <MenuIcon />
        </IconButton>
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
        <List sx={{ width: 250 }}>
          {Object.keys(menuItems).map((menu) => (
            <Box key={menu}>
              <ListItem disablePadding>
                <ListItemButton onClick={handleDrawerToggle}>
                  <Link href={`/${menu}`} passHref>
                    <ListItemText primary={menu.toUpperCase()} />
                  </Link>
                </ListItemButton>
              </ListItem>
              {menuItems[menu as keyof typeof menuItems].map((item) => (
                <ListItem key={item.text} disablePadding sx={{ pl: 4 }}>
                  <ListItemButton onClick={handleDrawerToggle}>
                    <Link href={item.link} passHref>
                      <ListItemText primary={item.text} />
                    </Link>
                  </ListItemButton>
                </ListItem>
              ))}
            </Box>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
