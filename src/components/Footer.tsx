
// import React from "react";
// import {
//   Container,
//   Grid,
//   Typography,
//   IconButton,
//   Box,
//   Divider,
// } from "@mui/material";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import ShieldIcon from "@mui/icons-material/Shield";
// import Image from "next/image";
// import Link from "next/link";
// import { motion } from "framer-motion";

// const pages = [
//   { name: "Our Blog", link: "/blog" },
//   { name: "About Us", link: "/about" },
//   { name: "Media", link: "/media" },
//   { name: "Privacy Policy", link: "/privacypolicy" },
//   { name: "FAQ", link: "/faq" },
// ];

// const Footer = () => {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       transition={{ delay: 0.2, duration: 1.5, ease: "easeInOut" }}
//       viewport={{ once: true }}
//     >
//       <Box
//         component="footer"
//         sx={{
//           background: "radial-gradient(circle at top, #0b0b0b 0%, #1c1c1c 100%)",
//           backgroundImage: "url('/images/noise.png')",
//           backgroundBlendMode: "overlay",
//           color: "#eee",
//           pt: 10,
//           pb: 6,
//           px: 2,
//           mt: "auto",
//           fontFamily: "'Poppins', sans-serif",
//           overflow: "hidden",
//         }}
//       >
//         <Container maxWidth="xl">
//           <Grid container spacing={6} direction={{ xs: "column", md: "row" }}>
//             {/* Logo & About */}
//             <Grid item xs={12} md={3} sx={{ mb: { xs: 4, md: 0 }, textAlign: "center" }}>
//               <motion.div whileHover={{ scale: 1.05 }}>
//                 <Box>
//                   <Box
//                     sx={{
//                       display: "inline-block",
//                       position: "relative",
//                       width: 100,
//                       height: 100,
//                       mx: "auto",
//                       borderRadius: "50%",
//                       background: "rgba(255,255,255,0.05)",
//                       backdropFilter: "blur(8px)",
//                       border: "1px solid rgba(255,255,255,0.1)",
//                       overflow: "hidden",
//                       boxShadow: "0 0 15px rgba(255,77,77,0.3)",
//                     }}
//                   >
//                     <Image src="/images/logo.jpg" alt="Shield Logo" width={100} height={100} />
//                   </Box>

//                   <Typography
//                     variant="h6"
//                     sx={{
//                       mt: 2,
//                       fontWeight: 900,
//                       fontSize: "20px",
//                       letterSpacing: "1px",
//                       textShadow: "0 0 10px rgba(255,77,77,0.5)",
//                     }}
//                   >
//                     Shield Secure Security
//                   </Typography>
//                   <Typography
//                     variant="body2"
//                     sx={{ color: "#aaa", mt: 1, lineHeight: 1.7 }}
//                   >
//                     Premium security services in Alberta’s most trusted locations — committed to safety and professionalism.
//                   </Typography>
//                 </Box>
//               </motion.div>
//             </Grid>

//             {/* Discover More */}
//             <Grid item xs={12} md={3} sx={{ mb: { xs: 4, md: 0 } }}>
//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.2, duration: 0.8 }}
//                 viewport={{ once: true }}
//               >
//                 <Typography
//                   variant="h6"
//                   sx={{
//                     fontWeight: 900,
//                     fontSize: "20px",
//                     letterSpacing: "1px",
//                     mb: 2,
//                     textShadow: "0 0 10px rgba(255,77,77,0.5)",
//                     textAlign: { xs: "center", md: "left" },
//                   }}
//                 >
//                   Discover More
//                 </Typography>
//                 {pages.map((page) => (
//                   <Link key={page.name} href={page.link} passHref legacyBehavior>
//                     <Typography
//                       component="span"
//                       variant="body2"
//                       sx={{
//                         display: "block",
//                         my: 0.8,
//                         color: "#bbb",
//                         cursor: "pointer",
//                         textAlign: { xs: "center", md: "left" },
//                         "&:hover": {
//                           color: "#ff4d4d",
//                           textDecoration: "underline",
//                           textUnderlineOffset: "5px",
//                           textDecorationThickness: "2px",
//                           transition: "all 0.3s",
//                         },
//                       }}
//                     >
//                       {page.name}
//                     </Typography>
//                   </Link>
//                 ))}
//               </motion.div>
//             </Grid>

//             {/* Careers */}
//             <Grid item xs={12} md={3} sx={{ mb: { xs: 4, md: 0 } }}>
//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.4, duration: 0.8 }}
//                 viewport={{ once: true }}
//               >
//                 <Typography
//                   variant="h6"
//                   sx={{
//                     fontWeight: 900,
//                     fontSize: "20px",
//                     letterSpacing: "1px",
//                     mb: 2,
//                     textShadow: "0 0 10px rgba(255,77,77,0.5)",
//                     textAlign: { xs: "center", md: "left" },
//                   }}
//                 >
//                   Careers
//                 </Typography>
//                 {["Careers", "Apply Now"].map((text) => (
//                   <Link key={text} href={`/${text.toLowerCase().replace(/\s+/g, "-")}`} passHref legacyBehavior>
//                     <Typography
//                       component="span"
//                       variant="body2"
//                       sx={{
//                         display: "block",
//                         my: 0.8,
//                         color: "#bbb",
//                         textAlign: { xs: "center", md: "left" },
//                         cursor: "pointer",
//                         "&:hover": {
//                           color: "#ff4d4d",
//                           textDecoration: "underline",
//                           textUnderlineOffset: "5px",
//                           textDecorationThickness: "2px",
//                           transition: "all 0.3s",
//                         },
//                       }}
//                     >
//                       {text}
//                     </Typography>
//                   </Link>
//                 ))}
//               </motion.div>
//             </Grid>

//             {/* Contact */}
//             <Grid item xs={12} md={3}>
//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.6, duration: 0.8 }}
//                 viewport={{ once: true }}
//               >
//                 <Typography
//                   variant="h6"
//                   sx={{
//                     fontWeight: 900,
//                     fontSize: "20px",
//                     letterSpacing: "1px",
//                     mb: 2,
//                     textShadow: "0 0 10px rgba(255,77,77,0.5)",
//                     textAlign: { xs: "center", md: "left" },
//                   }}
//                 >
//                   Contact Us
//                 </Typography>
//                 <Typography variant="body2" sx={{ color: "#bbb", textAlign: { xs: "center", md: "left" } }}>
//                   📞 403-953-1998
//                 </Typography>
//                 <Typography variant="body2" sx={{ color: "#bbb", mb: 1, textAlign: { xs: "center", md: "left" } }}>
//                   📧 shieldsecure82@gmail.com
//                 </Typography>
//                 <Typography variant="body2" sx={{ color: "#bbb", mt: 1, textAlign: { xs: "center", md: "left" } }}>
//                   🏢 Head Office: Canmore, AB
//                 </Typography>

//                 <Link href="/quote" passHref legacyBehavior>
//                   <Typography
//                     component="span"
//                     sx={{
//                       fontWeight: "bold",
//                       color: "#ff4d4d",
//                       mt: 2,
//                       cursor: "pointer",
//                       display: "inline-flex",
//                       alignItems: "center",
//                       gap: 1,
//                       textAlign: { xs: "center", md: "left" },
//                       "&:hover .arrow": {
//                         transform: "translateX(5px)",
//                         transition: "transform 0.3s",
//                       },
//                     }}
//                   >
//                     <span className="arrow">➤</span> Request a Quote
//                   </Typography>
//                 </Link>

//                 {/* Social Media Icons */}
//                 <Box sx={{ mt: 3, display: "flex", justifyContent: "center", gap: 2, flexWrap: "wrap" }}>
//                   {[InstagramIcon, FacebookIcon, LinkedInIcon, TwitterIcon].map((Icon, idx) => (
//                     <motion.div key={idx} whileHover={{ scale: 1.2 }}>
//                       <IconButton
//                         component="span"
//                         sx={{
//                           width: 44,
//                           height: 44,
//                           color: "#ccc",
//                           background: "#1f1f1f",
//                           boxShadow: "0 4px 10px rgba(255,77,77,0.4)",
//                           "&:hover": {
//                             background: "#ff4d4d",
//                             color: "#fff",
//                           },
//                           transition: "all 0.3s",
//                         }}
//                       >
//                         <Icon />
//                       </IconButton>
//                     </motion.div>
//                   ))}
//                 </Box>

//                 {/* Map */}
//                 <Box
//                   sx={{
//                     position: "relative",
//                     mt: 3,
//                     borderRadius: 3,
//                     overflow: "hidden",
//                     boxShadow: "0 4px 20px rgba(255,77,77,0.4)",
//                     border: "1px solid rgba(255,77,77,0.2)",
//                     height: { xs: 150, md: 200 },
//                   }}
//                 >
//                   <iframe
//                     title="Shield HQ - Canmore"
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2501.2264642449775!2d-115.3591012232796!3d51.08929467174853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5370cae8ea4b4011%3A0x6b547d316ebd8d6c!2sCanmore%2C%20AB!5e0!3m2!1sen!2sca!4v1713366048080!5m2!1sen!2sca"
//                     width="100%"
//                     height="100%"
//                     style={{ border: 0 }}
//                     loading="lazy"
//                     allowFullScreen
//                   />
//                   <Box
//                     sx={{
//                       position: "absolute",
//                       top: 0,
//                       left: 0,
//                       width: "100%",
//                       height: "100%",
//                       background: "rgba(0,0,0,0.15)",
//                     }}
//                   />
//                 </Box>
//               </motion.div>
//             </Grid>
//           </Grid>

//           {/* Footer Bottom */}
//           <Divider
//             sx={{
//               my: 5,
//               height: "2px",
//               border: "none",
//               background: "linear-gradient(90deg, transparent, #ff4d4d, transparent)",
//               animation: "pulseLine 3s infinite ease-in-out",
//             }}
//           />
//           <Typography
//             variant="body2"
//             sx={{
//               textAlign: "center",
//               color: "#888",
//               fontSize: "13px",
//               letterSpacing: "0.5px",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               gap: 1,
//             }}
//           >
//             <ShieldIcon fontSize="small" /> {new Date().getFullYear()} Shield Security. All rights reserved.
//           </Typography>
//         </Container>
//       </Box>

//       {/* Divider Animation */}
//       <style jsx global>{`
//         @keyframes pulseLine {
//           0%, 100% { opacity: 0.5; }
//           50% { opacity: 1; }
//         }
//       `}</style>
//     </motion.div>
//   );
// };

// export default Footer;
import React from "react";
import { useTheme, useMediaQuery } from "@mui/material";
import MobileFooter from "./MobileFooter";
import DesktopFooter from "./DesktopFooter";

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // md ~ 900px

  return isMobile ? <MobileFooter /> : <DesktopFooter />;
};

export default Footer;
