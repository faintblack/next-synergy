"use client"

import ErrorBoundary from "@/app/components/ErrorBoundary";
import Error from "@/app/components/error";
import React from "react";
import DataProfile from "./dataProfile";
import MainPages from "@/app/components/MainPages";
import { Divider, Typography } from "@mui/material";

const CrmProfileDetail = ({ params }) => {
  return (
    <ErrorBoundary fallback={<Error />}>
      <DataProfile params={params} />
    </ErrorBoundary>
  );
};

export default CrmProfileDetail;
