import { useState, useMemo, useEffect } from "react";
import { Box, Button } from "@mui/material";

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
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
          gap: "10px",
          width: "100%",
        }}
      >
        {choices.map((choice) => {
          const isSelected = selectedAnswer === choice.taWord;
          const isCorrect = choice.taWord === metadata.taWord;
          const showResult = hasAnswered;

          let backgroundColor = "white";
          if (showResult) {
            if (isCorrect) {
              backgroundColor = "#4caf50";
            } else if (isSelected && !isCorrect) {
              backgroundColor = "#f44336";
            }
          }

          return (
            <Button
              key={choice.taWord}
              variant="contained"
              onClick={() => handleChoiceClick(choice)}
              disabled={hasAnswered}
              sx={{
                backgroundColor,
                color:
                  showResult && (isCorrect || isSelected) ? "white" : "black",
                "&:hover": {
                  backgroundColor: showResult ? backgroundColor : "#e0e0e0",
                },
                "&.Mui-disabled": {
                  backgroundColor,
                  color:
                    showResult && (isCorrect || isSelected) ? "white" : "black",
                },
                fontSize: "0.9em",
                padding: "10px 15px",
                minHeight: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {choice.taWord}
            </Button>
          );
        })}
      </Box>
      {hasAnswered && (
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
      )}
    </Box>
  );
}
