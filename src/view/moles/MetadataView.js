import { Box, Typography } from "@mui/material";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
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
  if (!metadata) {
    return <LoadingView />;
  }
  return (
    <Box key={metadata.taWord}>
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
          style={{ width: "calc(min(320px, 100vw))", marginBottom: "1em" }}
        />

        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "3em",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              margin: "1em",
            }}
          >
            <EmojiEventsIcon sx={{ fontSize: "1.2em", color: "#666" }} />
            <Typography variant="caption">
              {nRightAnswers}/{totalQuestions}
            </Typography>
          </Box>
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
