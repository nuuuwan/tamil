import { useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";
import LoadingView from "../atoms/LoadingView";
import ChoicesView from "./ChoicesView";

export default function MetadataView({
  metadata,
  wrongChoices = [],
  onAnswerSelect,
  onNext,
  nRightAnswers = 0,
  totalQuestions = 0,
}) {
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
          height: "100vh",
          top: 0,
          left: 0,
          right: 0,
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          paddingBottom: "100px",
        }}
      >
        <img
          src={metadata.picturePath}
          alt={metadata.taWord}
          style={{ width: "100%", marginBottom: "1em" }}
        />

        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "1em",
          }}
        >
          <Typography variant="caption" sx={{ margin: "1em" }}>
            {nRightAnswers}/{totalQuestions}
          </Typography>
          <ChoicesView
            metadata={metadata}
            wrongChoices={wrongChoices}
            onAnswerSelect={onAnswerSelect}
            onNext={onNext}
          />
        </Box>
      </Box>
    </Box>
  );
}
