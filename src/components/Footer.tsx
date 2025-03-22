// import React from "react";
// import { Container, Grid, Typography, IconButton, Box, Divider } from "@mui/material";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import Image from "next/image";
// import Link from "next/link";

// const Footer = () => {
//   return (
//     <Box component="footer" sx={{ backgroundColor: "#111", color: "#fff", py: 6, mt: "auto" }}>
//       <Container maxWidth="lg">
//         <Grid container spacing={5} justifyContent="space-between" alignItems="flex-start">
//           {/* Left Section - Company Info */}
//           <Grid item xs={12} md={3} sx={{ textAlign: { xs: "center", md: "left" } }}>
//             <Image src="/images/logo.jpg" alt="Shield Security Logo" width={120} height={120} />
//             <Typography variant="h6" sx={{ fontWeight: "bold", mt: 2 }}>Shield Security</Typography>
//             <Typography variant="body2" sx={{ mt: 1, color: "#bdbdbd", maxWidth: "280px" }}>
//               Leading provider of security services, ensuring safety and protection across industries.
//             </Typography>
//           </Grid>

//           {/* Middle Section - Navigation Links */}
//           <Grid item xs={12} md={3} sx={{ textAlign: { xs: "center", md: "left" } }}>
//             <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>Want to Know More?</Typography>
//             <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
//               {[
//                 { text: "Our Blog", link: "/blog" },
//                 { text: "About Us", link: "/about" },
//                 { text: "Social Impact", link: "/social-impact" },
//                 { text: "Media", link: "/media" },
//                 { text: "Privacy Policy", link: "/privacy" },
//                 { text: "FAQ", link: "/faq" },
//               ].map((item) => (
//                 <Link key={item.text} href={item.link} passHref>
//                   <Typography
//                     variant="body2"
//                     sx={{ cursor: "pointer", color: "#bdbdbd", "&:hover": { color: "#fff" } }}
//                   >
//                     {item.text}
//                   </Typography>
//                 </Link>
//               ))}
//             </Box>
//           </Grid>

//           {/* Careers Section */}
//           <Grid item xs={12} md={3} sx={{ textAlign: { xs: "center", md: "left" } }}>
//             <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>Join Our Team</Typography>
//             <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
//               {[
//                 { text: "Careers", link: "/careers" },
//                 { text: "Apply Now", link: "/apply" },
//               ].map((item) => (
//                 <Link key={item.text} href={item.link} passHref>
//                   <Typography
//                     variant="body2"
//                     sx={{ cursor: "pointer", color: "#bdbdbd", "&:hover": { color: "#fff" } }}
//                   >
//                     {item.text}
//                   </Typography>
//                 </Link>
//               ))}
//             </Box>
//           </Grid>




//           {/* Contact Us Section */}
//           <Grid item xs={12} md={3} sx={{ textAlign: { xs: "center", md: "left" } }}>
//             <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>Contact Us</Typography>
//             <Typography variant="body2" sx={{ color: "#bdbdbd" }}>📞 1-800-889-7096</Typography>
//             <Typography variant="body2" sx={{ color: "#bdbdbd", mt: 1 }}>Request a Quote</Typography>

//             {/* Social Media Icons */}
//             <Box sx={{ mt: 2, display: "flex", justifyContent: { xs: "center", md: "left" }, gap: 1.5 }}>
//               {[
//                 { icon: <FacebookIcon />, link: "#" },
//                 { icon: <LinkedInIcon />, link: "#" },
//                 { icon: <InstagramIcon />, link: "#" },
//                 { icon: <TwitterIcon />, link: "#" }
//               ].map((item, index) => (
//                 <IconButton key={index} sx={{ color: "#bdbdbd", "&:hover": { color: "#fff" } }}>
//                   {item.icon}
//                 </IconButton>
//               ))}
//             </Box>
//           </Grid>
//         </Grid>

        


//         {/* Divider Line */}
//         <Divider sx={{ backgroundColor: "#333", my: 4 }} />

//         {/* Copyright Section */}
//         <Typography variant="body2" sx={{ textAlign: "center", color: "#bdbdbd" }}>
//           &copy; {new Date().getFullYear()} Shield Security. All Rights Reserved.
//         </Typography>
//       </Container>
//     </Box>
//   );
// };

// export default Footer;
import React from "react";
import { Container, Grid, Typography, IconButton, Box, Divider } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <Box component="footer" sx={{ backgroundColor: "#111", color: "#fff", py: 8, mt: "auto" }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} justifyContent="space-between" alignItems="flex-start">
          
          {/* Left Section - Company Info */}
          <Grid item xs={12} md={3} sx={{ textAlign: { xs: "center", md: "left" } }}>
            <Image src="/images/logo.jpg" alt="Shield Security Logo" width={140} height={140} />
            <Typography variant="h6" sx={{ fontWeight: "bold", mt: 2 }}>Shield Security</Typography>
            <Typography variant="body2" sx={{ mt: 2, color: "#bdbdbd", maxWidth: "300px", lineHeight: 1.6 }}>
              Providing high-quality security services with professionalism and commitment to safety.
            </Typography>
          </Grid>

          {/* Middle Section - Quick Links */}
          <Grid item xs={12} md={3} sx={{ textAlign: { xs: "center", md: "left" } }}>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 3 }}>Want to Know More?</Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              {[
                { text: "Our Blog", link: "/blog" },
                { text: "About Us", link: "/about" },
                { text: "Media", link: "/media" },
                { text: "Privacy Policy", link: "/privacy" },
                { text: "FAQ", link: "/faq" },
              ].map((item) => (
                <Link key={item.text} href={item.link} passHref>
                  <Typography
                    variant="body2"
                    sx={{ cursor: "pointer", color: "#bdbdbd", "&:hover": { color: "#fff" }, transition: "0.3s" }}
                  >
                    {item.text}
                  </Typography>
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Careers Section */}
          <Grid item xs={12} md={3} sx={{ textAlign: { xs: "center", md: "left" } }}>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 3 }}>Join Our Team</Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              {[
                { text: "Careers", link: "/careers" },
                { text: "Apply Now", link: "/apply" },
              ].map((item) => (
                <Link key={item.text} href={item.link} passHref>
                  <Typography
                    variant="body2"
                    sx={{ cursor: "pointer", color: "#bdbdbd", "&:hover": { color: "#fff" }, transition: "0.3s" }}
                  >
                    {item.text}
                  </Typography>
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Contact Section */}
          <Grid item xs={12} md={3} sx={{ textAlign: { xs: "center", md: "left" } }}>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 3 }}>Contact Us</Typography>
            <Typography variant="body2" sx={{ color: "#bdbdbd", mb: 1 }}>📞 1-435-654-3453</Typography>
            <Typography variant="body2" sx={{ color: "#bdbdbd", mb: 1 }}>📧 info@shieldsecurity.com</Typography>
            <Typography variant="body2" sx={{ color: "#bdbdbd", fontWeight: "bold", mt: 2 }}>
              Request a Quote
            </Typography>

            {/* Social Media Icons */}
            <Box sx={{ mt: 3, display: "flex", justifyContent: { xs: "center", md: "left" }, gap: 2 }}>
              {[
                { icon: <FacebookIcon />, link: "#" },
                { icon: <LinkedInIcon />, link: "#" },
                { icon: <InstagramIcon />, link: "#" },
                { icon: <TwitterIcon />, link: "#" }
              ].map((item, index) => (
                <IconButton key={index} sx={{ color: "#bdbdbd", "&:hover": { color: "#fff" }, transition: "0.3s" }}>
                  {item.icon}
                </IconButton>
              ))}
            </Box>
          </Grid>
        </Grid>

        {/* 24/7 Support Section */}
        <Box sx={{ textAlign: "center", mt: 6, py: 4, backgroundColor: "#222", borderRadius: "10px" }}>
          <Typography variant="h6" sx={{ fontWeight: "bold", color: "#fff", mb: 1 }}>
            24/7 Control Centre (For Existing Clients)
          </Typography>
          <Typography variant="body2" sx={{ color: "#bdbdbd", fontSize: "18px" }}>📞 123-234-5678</Typography>
        </Box>

        {/* Divider Line */}
        <Divider sx={{ backgroundColor: "#333", my: 5 }} />

        {/* Copyright Section */}
        <Typography variant="body2" sx={{ textAlign: "center", color: "#bdbdbd", fontSize: "14px" }}>
          &copy; {new Date().getFullYear()} Shield Security. All Rights Reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
