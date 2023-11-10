"use client";

import Link from "next/link";
import { Box, Button, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter()

  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", height: "400px" }}>
        <Box>
          <Typography
            variant="subtitle2"
            color="#175CD3"
            fontWeight="600"
            gutterBottom
          >
            404 Error
          </Typography>
          <Typography variant="h2" gutterBottom>
            We can’t find that page
          </Typography>
          <Typography variant="body1" gutterBottom>
            Sorry, the page you are looking for doesn't exist or has been moved.
          </Typography>
          <Box sx={{ mt: 2, mb: 2, display: "flex", gap: "10px" }}>
            <Button
              variant="outlined"
              color="info"
              // className="text-[#000000] bg-[#EFF8FF]"
              startIcon={<ArrowBackIcon />}
              style={{ textTransform: "capitalize" }}
              onClick={() => router.back()}
            >
              Go back
            </Button>
            <Link href="/">
              <Button
                variant="contained"
                style={{ textTransform: "capitalize" }}
              >
                Take Me Home
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </>
  );
}
