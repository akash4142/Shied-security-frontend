// import React from "react";
// import {
//   Grid,
//   Typography,
//   Card,
//   CardActionArea,
//   CardMedia,
//   Box,
// } from "@mui/material";
// import { styled } from "@mui/system";
// import Link from "next/link";
// import { motion } from "framer-motion";

// // ✅ Location Data
// const locationsData = [
//   { name: "Calgary", img: "/images/calgary.jpg", link: "/locations/calgary" },
//   { name: "Banff", img: "/images/banff.jpg", link: "/locations/banff" },
//   { name: "Canmore", img: "/images/canmore.jpg", link: "/locations/canmore" },
//   { name: "Cochrane", img: "/images/cochrane.jpg", link: "/locations/cochrane" },
//   { name: "Exshaw", img: "/images/exshaw.jpg", link: "/locations/exshaw" },
// ];

// // ✅ Styled Components (same as services)
// const StyledCard = styled(motion(Card))({
//   position: "relative",
//   overflow: "hidden",
//   borderRadius: "0px",
//   height: "500px",
//   width: "100%",
//   boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
//   cursor: "pointer",
//   transition: "transform 0.4s ease",
//   "&:hover": {
//     transform: "scale(1.02)",
//   },
//   "&:hover .overlay": {
//     backdropFilter: "blur(2px)",
//     backgroundColor: "rgba(0, 0, 0, 0.3)",
//   },
// });

// const CardOverlay = styled("div")({
//   position: "absolute",
//   bottom: 0,
//   width: "100%",
//   height: "100%",
//   backgroundColor: "rgba(0, 0, 0, 0.4)",
//   //backdropFilter: "blur(1.5px)",
//   display: "flex",
//   alignItems: "flex-end",
//   justifyContent: "center",
//   paddingBottom: "30px",
//   transition: "all 0.3s ease-in-out",
//   zIndex: 2,
// });

// const LocationText = styled(Typography)({
//   color: "#fff",
//   fontSize: "1.4rem",
//   fontWeight: 700,
//   fontFamily: "'Poppins', sans-serif",
//   textTransform: "uppercase",
//   letterSpacing: "1px",
//   backgroundColor: "rgba(0, 0, 0, 0.5)",
//   padding: "10px 20px",
//   borderRadius: "30px",
// });

// const SectionTitle = styled(Typography)({
//   fontSize: "2.8rem",
//   fontWeight: 700,
//   letterSpacing: "1px",
//   textAlign: "center",
//   color: "#111",
//   fontFamily: "'Poppins', sans-serif",
//   marginBottom: "30px",
// });

// const SubHeading = styled(Typography)({
//   fontSize: "1.2rem",
//   fontWeight: 400,
//   maxWidth: "900px",
//   margin: "40px auto",
//   textAlign: "center",
//   color: "#333",
//   lineHeight: 1.7,
//   fontFamily: "'Poppins', sans-serif",
// });

// // ✅ Page Component
// const LocationsPage = () => {
//   return (
//     <Box sx={{ backgroundColor: "#ffffff" }}>
//       {/* ✅ Hero Section */}
//       <Box
//         sx={{
//           position: "relative",
//           height: "100vh",
//           backgroundImage: "url(/images/canmore.jpg)",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundAttachment: "fixed",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           textAlign: "center",
//           px: 2,
//           zIndex: 1,
//         }}
//       >
//         {/* Gradient overlay */}
//         <Box
//           sx={{
//             position: "absolute",
//             top: 0,
//             left: 0,
//             width: "100%",
//             height: "100%",
//             background: "linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.6))",
//             zIndex: 2,
//           }}
//         />
//         {/* Hero Text */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9, y: 30 }}
//           animate={{ opacity: 1, scale: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           style={{ zIndex: 3 }}
//         >
//           <Typography
//             variant="h2"
//             sx={{
//               color: "#fff",
//               fontWeight: 800,
//               fontSize: { xs: "2rem", md: "4rem" },
//               letterSpacing: "2px",
//               textTransform: "uppercase",
//               textShadow: "4px 4px 12px rgba(0,0,0,0.8)",
//               mb: 2,
//               fontFamily: "'Bebas Neue', 'Poppins', sans-serif",
//             }}
//           >
//             Our Locations
//           </Typography>
//           <Typography
//             variant="h6"
//             sx={{
//               color: "#eee",
//               maxWidth: "700px",
//               mx: "auto",
//               fontWeight: 300,
//               fontSize: { xs: "1rem", md: "1.2rem" },
//               textShadow: "1px 1px 6px rgba(0,0,0,0.6)",
//               fontFamily: "'Poppins', sans-serif",
//             }}
//           >
//             Serving Western Canada’s communities with excellence and presence.
//           </Typography>
//         </motion.div>
//       </Box>

//       {/* ✅ Section Title */}
//       <Box sx={{ py: 10, px: { xs: 2, sm: 4, md: 8 }, textAlign: "center" }}>
//         <SectionTitle>Locations We Serve</SectionTitle>
//         <SubHeading>
//           Explore our security presence in key areas across Alberta and British Columbia. Click a location to learn more about our local services.
//         </SubHeading>
//       </Box>

//       {/* ✅ Location Cards */}
//       <Box sx={{ px: { xs: 2, sm: 4, md: 6 }, pb: 12 }}>
//         <Grid container spacing={4}>
//           {locationsData.map((location, index) => (
//             <Grid item xs={12} sm={6} md={4} key={index}>
//               <Link href={location.link} passHref>
//                 <StyledCard
//                   whileInView={{ opacity: 1, y: 0 }}
//                   initial={{ opacity: 0, y: 40 }}
//                   transition={{ duration: 0.6, delay: index * 0.1 }}
//                 >
//                   <CardActionArea sx={{ height: "100%", position: "relative" }}>
//                     <CardMedia
//                       component="img"
//                       image={location.img}
//                       alt={location.name}
//                       className="image"
//                       sx={{
//                         height: "100%",
//                         width: "100%",
//                         objectFit: "cover",
//                         transition: "all 0.4s ease-in-out",
//                       }}
//                     />
//                     <CardOverlay className="overlay">
//                       <LocationText>{location.name}</LocationText>
//                     </CardOverlay>
//                   </CardActionArea>
//                 </StyledCard>
//               </Link>
//             </Grid>
//           ))}
//         </Grid>
//       </Box>
//     </Box>
//   );
// };

// export default LocationsPage;
import React from "react";
import {
  Grid,
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  Box,
} from "@mui/material";
import { styled } from "@mui/system";
import Link from "next/link";
import { motion } from "framer-motion";

// 🔹 Location Data
const locationsData = [
  { name: "Calgary", img: "/images/calgary.jpg", link: "/locations/calgary" },
  { name: "Banff", img: "/images/banff.jpg", link: "/locations/banff" },
  { name: "Canmore", img: "/images/canmore.jpg", link: "/locations/canmore" },
  { name: "Cochrane", img: "/images/cochrane.jpg", link: "/locations/cochrane" },
  { name: "Exshaw", img: "/images/exshaw.jpg", link: "/locations/exshaw" },
];

// 🔹 Card Styling
const StyledCard = styled(motion(Card))({
  position: "relative",
  overflow: "hidden",
  borderRadius: "16px",
  height: "460px",
  width: "100%",
  boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
  cursor: "pointer",
  "&:hover .image": {
    transform: "scale(1.1)",
  },
  "&:hover .overlay": {
    background: "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.2))",
  },
});

const CardOverlay = styled("div")({
  position: "absolute",
  bottom: 0,
  width: "100%",
  height: "100%",
  background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)",
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "center",
  paddingBottom: "30px",
  transition: "all 0.4s ease",
  zIndex: 2,
});

const LocationText = styled(Typography)({
  color: "#fff",
  fontSize: "1.2rem",
  fontWeight: 600,
  letterSpacing: "1px",
  backdropFilter: "blur(6px)",
  background: "rgba(255,255,255,0.1)",
  padding: "10px 22px",
  borderRadius: "50px",
  border: "1px solid rgba(255,255,255,0.2)",
});

// 🔹 Titles
const SectionTitle = styled(Typography)({
  fontSize: "2.8rem",
  fontWeight: 800,
  textAlign: "center",
  color: "#111",
  fontFamily: "'Poppins', sans-serif",
});

const SubHeading = styled(Typography)({
  fontSize: "1.15rem",
  maxWidth: "750px",
  margin: "20px auto 0",
  textAlign: "center",
  color: "#555",
  lineHeight: 1.7,
});

// 🔹 Page Component
const LocationsPage = () => {
  return (
    <Box sx={{ backgroundColor: "#fff" }}>
      
      {/* 🔥 HERO (UNCHANGED HEIGHT) */}
      <Box
        sx={{
          position: "relative",
          height: "100vh",
          backgroundImage: "url(/images/canmore.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        {/* Overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.7))",
          }}
        />

        {/* Hero Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ zIndex: 2 }}
        >
          <Typography
            variant="h2"
            sx={{
              color: "#fff",
              fontWeight: 900,
              fontSize: { xs: "2.2rem", md: "4.2rem" },
              letterSpacing: "3px",
              textTransform: "uppercase",
              mb: 2,
            }}
          >
            Our Locations
          </Typography>

          <Typography
            sx={{
              color: "#ddd",
              maxWidth: "650px",
              mx: "auto",
              fontSize: { xs: "1rem", md: "1.2rem" },
            }}
          >
            Serving Western Canada with professionalism, reliability, and trust.
          </Typography>
        </motion.div>
      </Box>

      {/* 🔹 Section Intro */}
      <Box sx={{ py: 10, px: 3 }}>
        <SectionTitle>Locations We Serve</SectionTitle>
        <SubHeading>
          Discover our presence across Alberta. Each location is backed by
          trained professionals delivering top-tier security services.
        </SubHeading>
      </Box>

      {/* 🔹 Cards */}
      <Box sx={{ px: { xs: 2, md: 6 }, pb: 12 }}>
        <Grid container spacing={4}>
          {locationsData.map((location, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Link href={location.link} passHref>
                <StyledCard
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <CardActionArea sx={{ height: "100%" }}>
                    <CardMedia
                      component="img"
                      image={location.img}
                      alt={location.name}
                      className="image"
                      sx={{
                        height: "100%",
                        width: "100%",
                        objectFit: "cover",
                        transition: "transform 0.6s ease",
                      }}
                    />

                    <CardOverlay className="overlay">
                      <LocationText>{location.name}</LocationText>
                    </CardOverlay>
                  </CardActionArea>
                </StyledCard>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default LocationsPage;