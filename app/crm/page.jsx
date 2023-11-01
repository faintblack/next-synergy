import React from "react";
import MainPages from "../components/MainPages";
import { Box, Divider, Typography } from "@mui/material";
import CrmTabs from "../components/crm/CrmTabs";

const CrmPage = () => {
  return (
    <MainPages>
      <Typography variant="h4" gutterBottom>
        CRM
      </Typography>
      <Divider />
      <CrmTabs />
    </MainPages>
  );
};

export default CrmPage;
