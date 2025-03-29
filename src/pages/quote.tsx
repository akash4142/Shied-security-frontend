// pages/quote.tsx

import React from "react";
import RequestQuote from "@/components/RequestQuote";
import { Box, Container, Typography } from "@mui/material";
import Head from "next/head";

const QuotePage = () => {
  return (
    <>
      <Head>
        <title>Request a Quote | Shield Security</title>
        <meta name="description" content="Request a customized security quote from Shield Security. We offer tailored protection for your unique needs." />
      </Head>

      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage: "url(/images/1.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "50vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Box sx={{ backgroundColor: "rgba(0,0,0,0.6)", p: 4, borderRadius: 2 }}>
          <Typography variant="h3" sx={{ color: "#fff", fontWeight: "bold" }}>
            Request a Quote
          </Typography>
          <Typography variant="h6" sx={{ color: "#ddd", mt: 2 }}>
            Tailored Security Solutions for Your Needs
          </Typography>
        </Box>
      </Box>

      {/* Form Section */}
      <Container sx={{ py: 10 }}>
        <RequestQuote />
      </Container>
    </>
  );
};

export default QuotePage;
