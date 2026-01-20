import { useState, useMemo, useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import TamilTextView from "../atoms/TamilTextView";

export default function ChoicesView({
  metadata,
  wrongChoices = [],
  onAnswerSelect,
  onNext,
}) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [hasAnswered, setHasAnswered] = useState(false);

  const choices = useMemo(() => {
    if (!metadata || wrongChoices.length === 0) return [];

    const allChoices = [metadata, ...wrongChoices];
    return allChoices.sort(() => 0.5 - Math.random());
  }, [metadata, wrongChoices]);

  useEffect(() => {
    setSelectedAnswer(null);
    setHasAnswered(false);
  }, [metadata]);

  const handleChoiceClick = (choice) => {
    if (hasAnswered) return;

    setSelectedAnswer(choice.taWord);
    setHasAnswered(true);
    const isCorrect = choice.taWord === metadata.taWord;
    if (onAnswerSelect) {
      onAnswerSelect(isCorrect);
    }
  };

  const isCorrectAnswer = selectedAnswer === metadata.taWord;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        width: "90%",
        maxWidth: "400px",
        alignItems: "center",
      }}
    >
      {!hasAnswered ? (
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
            gap: "10px",
            width: "100%",
          }}
        >
          {choices.map((choice) => {
            return (
              <Button
                key={choice.taWord}
                variant="contained"
                onClick={() => handleChoiceClick(choice)}
                sx={{
                  backgroundColor: "white",
                  color: "black",
                  "&:hover": {
                    backgroundColor: "#e0e0e0",
                  },
                  fontSize: "0.9em",
                  padding: "10px 15px",
                  minHeight: "50px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  whiteSpace: "normal",
                  overflow: "visible",
                }}
              >
                <TamilTextView text={choice.taWord} />
              </Button>
            );
          })}
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            {isCorrectAnswer ? (
              <CheckCircleIcon
                sx={{ fontSize: "2.5em", color: "#4caf50" }}
              />
            ) : (
              <CancelIcon sx={{ fontSize: "2.5em", color: "#f44336" }} />
            )}
            <Typography
              variant="h5"
              sx={{
                color: isCorrectAnswer ? "#4caf50" : "#f44336",
                fontWeight: "bold",
                fontSize: "1.5em",
              }}
            >
              {isCorrectAnswer ? "சரி!" : "தவறு!"}
            </Typography>
          </Box>

          {!isCorrectAnswer && (
            <Box sx={{ textAlign: "center" }}>
              <Typography variant="caption" sx={{ fontSize: "0.9em" }}>
                சரியான விடை:
              </Typography>
              <Box
                sx={{
                  fontSize: "1.5em",
                  fontWeight: "600",
                  marginTop: "10px",
                }}
              >
                <TamilTextView text={metadata.taWord} />
              </Box>
            </Box>
          )}

          <Button
            variant="contained"
            color="primary"
            onClick={onNext}
            sx={{
              fontSize: "1.2em",
              padding: "15px 40px",
              marginTop: "10px",
            }}
          >
            அடுத்தது
          </Button>
        </Box>
      )}
    </Box>
  );
}
