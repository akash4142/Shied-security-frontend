
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
