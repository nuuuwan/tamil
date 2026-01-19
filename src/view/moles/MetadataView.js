import { useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";
import LoadingView from "../atoms/LoadingView";

export default function MetadataView({ metadata }) {
  const audioRef = useRef(null);

  useEffect(() => {
    if (metadata?.soundPath && audioRef.current) {
      audioRef.current.play();
    }
  }, [metadata]);

  if (!metadata) {
    return <LoadingView />;
  }
  return (
    <Box
      key={metadata.taWord}
      sx={{
        maxWidth: "600px",
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <audio ref={audioRef}>
        <source src={metadata.soundPath} type="audio/mpeg" />
      </audio>
      <Box sx={{ marginBottom: "20px" }}>
        <img
          src={metadata.picturePath}
          alt={metadata.taWord}
          style={{
            position: "absolute",
            width: "100vw",
            height: "auto",
            top: 0,
            left: 0,
            right: 0,
          }}
        />
      </Box>
      <Box sx={{ position: "absolute", bottom: "20%", left: 0, right: 0 }}>
        <Box sx={{ marginBottom: "20px" }}>
          <Typography variant="h4" align="center">
            {metadata.taWord}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
