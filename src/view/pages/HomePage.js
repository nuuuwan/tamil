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

  const handleRefresh = () => {
    loadMetadata();
  };

  return (
    <Box sx={{ paddingBottom: "56px" }}>
      <MetadataView metadata={metadata} />
      <CustomBottomNavigator onRefresh={handleRefresh} />
    </Box>
  );
}
