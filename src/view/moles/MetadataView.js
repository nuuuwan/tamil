import React, { useState, useEffect } from "react";
import { Box, Typography, Skeleton } from "@mui/material";
import LoadingView from "../atoms/LoadingView";
import PlayAudioButton from "../atoms/PlayAudioButton";

export default function MetadataView({ metadata }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    setImageLoaded(false);
  }, [metadata]);

  console.debug(metadata?.picturePath);

  return (
    <Box
      sx={{
        maxWidth: "600px",
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      {metadata && metadata.picturePath && !imageLoaded && (
        <Box sx={{ marginBottom: "20px" }}>
          <Skeleton
            variant="rectangular"
            width="100%"
            height={400}
            sx={{ marginBottom: "20px" }}
          />
        </Box>
      )}

      {metadata && metadata.picturePath && (
        <Box key={"image" + metadata.taWord} sx={{ marginBottom: "20px" }}>
          <img
            src={metadata.picturePath}
            alt={metadata.enWord}
            style={{
              width: "calc(min(100vw, 640px))",
              height: "auto",
              top: 0,
              left: 0,
              right: 0,
              display: imageLoaded ? "block" : "none",
            }}
            onLoad={() => setImageLoaded(true)}
          />
        </Box>
      )}

      {metadata && metadata.picturePath && imageLoaded && (
        <Box key={"text" + metadata.taWord}>
          <Box sx={{ marginBottom: "20px" }}>
            <Typography variant="h3" fontWeight="bold" align="center">
              {metadata.taWord}
            </Typography>
          </Box>

          {metadata.soundPath && (
            <Box sx={{ marginBottom: "20px" }}>
              <PlayAudioButton soundPath={metadata.soundPath} />
            </Box>
          )}
        </Box>
      )}

      {!imageLoaded && <LoadingView />}
    </Box>
  );
}
