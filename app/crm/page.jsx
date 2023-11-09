import React from "react";
import MainPages from "../components/MainPages";
import { Box, Divider, Typography } from "@mui/material";
import CrmMenu from "./CrmMenu";

const CrmPage = () => {
  return (
    <MainPages>
      <Typography variant="h4" gutterBottom>
        CRM
      </Typography>
      <Divider />
      <CrmMenu />
    </MainPages>
  );
};

export default CrmPage;
