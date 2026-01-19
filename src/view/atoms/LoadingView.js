import React from "react";
import { Box, CircularProgress, Typography } from "@mui/material";

export default function LoadingView() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px",
        gap: "20px",
      }}
    >
      <CircularProgress size={60} />
      <Typography variant="h6" align="center">
        ஏற்றுகிறது...
      </Typography>
    </Box>
  );
}
