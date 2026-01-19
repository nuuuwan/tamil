import React from "react";
import { Box, Typography } from "@mui/material";

export default function MetadataView({ metadata }) {
  if (!metadata) {
    return <Typography align="center">ஏற்றுகிறது...</Typography>;
  }

  return (
    <Box
      sx={{
        maxWidth: "600px",
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      {metadata.picturePath && (
        <Box sx={{ marginBottom: "20px" }}>
          <img
            src={metadata.picturePath}
            alt={metadata.enWord}
            style={{
              maxWidth: "100%",
              height: "auto",
              top: 0,
              left: 0,
              right: 0,
            }}
          />
        </Box>
      )}
      <Box sx={{ marginBottom: "20px" }}>
        <Typography variant="h3" fontWeight="bold" align="center">
          {metadata.taWord}
        </Typography>
      </Box>

      {metadata.soundPath && (
        <Box sx={{ marginBottom: "20px" }}>
          <audio controls>
            <source src={metadata.soundPath} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </Box>
      )}
    </Box>
  );
}
