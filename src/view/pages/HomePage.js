import React, { useState, useEffect, useCallback } from "react";
import { Box } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import Metadata from "../../nonview/core/Metadata";
import MetadataView from "../moles/MetadataView";

export default function HomePage() {
  const { taWord } = useParams();
  const navigate = useNavigate();
  const [metadata, setMetadata] = useState(null);
  const [wrongChoices, setWrongChoices] = useState([]);
  const [nRightAnswers, setNRightAnswers] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);

  const loadMetadata = useCallback(
    async (word) => {
      let foundMetadata;
      if (word) {
        foundMetadata = await Metadata.fromWord(word);
      }
      if (!foundMetadata) {
        foundMetadata = await Metadata.fromRandom();
      }
      if (foundMetadata) {
        // Get 3 random wrong choices
        const allMetadata = await Metadata.listAll();
        const wrongOptions = allMetadata
          .filter((m) => m.taWord !== foundMetadata.taWord)
          .sort(() => 0.5 - Math.random())
          .slice(0, 3);

        setMetadata(foundMetadata);
        setWrongChoices(wrongOptions);
        if (!word) {
          navigate(`/${foundMetadata.taWord}`, { replace: true });
        }
      }
    },
    [navigate],
  );

  useEffect(() => {
    loadMetadata(taWord);
  }, [loadMetadata, taWord]);

  const handleOnNext = () => {
    loadMetadata();
  };

  const handleAnswerSelect = (isCorrect) => {
    setTotalQuestions((prev) => prev + 1);
    if (isCorrect) {
      setNRightAnswers((prev) => prev + 1);
    }
  };

  return (
    <Box>
      <MetadataView
        metadata={metadata}
        wrongChoices={wrongChoices}
        onAnswerSelect={handleAnswerSelect}
        onNext={handleOnNext}
        nRightAnswers={nRightAnswers}
        totalQuestions={totalQuestions}
      />
    </Box>
  );
}
