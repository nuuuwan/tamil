import React, { useState, useEffect, useCallback } from "react";
import { Box } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import Metadata from "../../nonview/core/Metadata";
import MetadataView from "../moles/MetadataView";
import CustomBottomNavigator from "../moles/CustomBottomNavigator";

export default function HomePage() {
  const { taWord } = useParams();
  const navigate = useNavigate();
  const [metadata, setMetadata] = useState(null);

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
        setMetadata(foundMetadata);
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

  return (
    <Box>
      <MetadataView metadata={metadata} />
      <CustomBottomNavigator
        onNext={handleOnNext}
        soundPath={metadata?.soundPath}
      />
    </Box>
  );
}
