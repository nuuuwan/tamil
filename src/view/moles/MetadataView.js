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
    <Box key={metadata.taWord}>
      <audio ref={audioRef}>
        <source src={metadata.soundPath} type="audio/mpeg" />
      </audio>
      <Box
        sx={{
          position: "fixed",
          width: "calc(min(100vw, 640px))",
          height: "auto",
          top: 0,
          left: 0,
          right: 0,
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          src={metadata.picturePath}
          alt={metadata.taWord}
          style={{ width: "100%" }}
        />
        <Typography variant="h4">{metadata.taWord}</Typography>
      </Box>
    </Box>
  );
}
