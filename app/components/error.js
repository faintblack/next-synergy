/* eslint-disable react/no-unescaped-entities */
"use client"; // Error components must be Client Components

import { Button, Card, CardContent, Typography } from "@mui/material";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

import ReportProblemIcon from "@mui/icons-material/ReportProblem";

export default function Error({ error, reset }) {
  const pathname = usePathname();

  useEffect(() => {
    // Log the error to an error reporting service
    // console.error(error)
  }, [error]);

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        minWidth: 275,
        height: 400,
        backgroundColor: "#FFE4E8",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ReportProblemIcon sx={{ color: "#C01048", mb: 2 }} />
        <Typography variant="h6" className="text-[#89123E]" gutterBottom>
          Oops! Unable to load clients
        </Typography>
        <Typography variant="subtitle1" className="text-[#89123E]" gutterBottom>
          Something wrong that we didn't anticipate
        </Typography>
        <Button
          variant="contained"
          className="text-[#000000] bg-[#EFF8FF] hover:text-[#FFFFFF]"
          sx={{ textTransform: "none", mt: 1 }}
          onClick={() => (location.href = pathname)}
        >
          Retry
        </Button>
      </CardContent>
    </Card>
  );
}
