import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import Metadata from "../../nonview/core/Metadata";
import MetadataView from "../moles/MetadataView";
import CustomBottomNavigator from "../moles/CustomBottomNavigator";

export default function HomePage() {
  const { taWord } = useParams();
  const navigate = useNavigate();
  const [metadata, setMetadata] = useState(null);

  async function loadMetadata(taWord) {
    let foundMetadata;
    if (taWord) {
      foundMetadata = await Metadata.fromWord(taWord);
    }
    if (!foundMetadata) {
      foundMetadata = await Metadata.fromRandom();
    }
    if (foundMetadata) {
      setMetadata(foundMetadata);
      if (!taWord) {
        navigate(`/${foundMetadata.taWord}`, { replace: true });
      }
    }
  }

  useEffect(() => {
    loadMetadata(taWord);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [taWord]);

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
