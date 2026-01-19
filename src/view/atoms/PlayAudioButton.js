import React, { useRef } from "react";
import { IconButton } from "@mui/material";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import { Box } from "@mui/system";

export default function PlayAudioButton({ soundPath }) {
  const audioRef = useRef(null);

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <Box key={soundPath}>
      <audio ref={audioRef}>
        <source src={soundPath} type="audio/mpeg" />
      </audio>
      <IconButton
        color="primary"
        onClick={handlePlay}
        size="large"
        aria-label="play audio"
      >
        <VolumeUpIcon fontSize="large" />
      </IconButton>
    </Box>
  );
}
