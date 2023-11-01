import React from "react";
import Navbar from "./Navbar";
import { Box, Container } from "@mui/material";

const MainPages = ({ children }) => {
  return (
    <Container maxWidth="xl">
      <Navbar />
      <Box sx={{
        mt: 9,
        pt: 2,
        height: '5000px'
      }}>
        {children}
      </Box>
    </Container>
  );
};

export default MainPages;
