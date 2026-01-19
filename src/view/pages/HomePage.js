import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Metadata from "../../nonview/core/Metadata";
import MetadataView from "../moles/MetadataView";
import CustomBottomNavigator from "../moles/CustomBottomNavigator";

export default function HomePage() {
  const [metadata, setMetadata] = useState(null);

  useEffect(() => {
    loadRandomMetadata();
  }, []);

  async function loadRandomMetadata() {
    const randomMetadata = await Metadata.random();
    setMetadata(randomMetadata);
  }

  const handleRefresh = () => {
    loadRandomMetadata();
  };

  return (
    <Box sx={{ paddingBottom: "56px" }}>
      <MetadataView metadata={metadata} />
      <CustomBottomNavigator onRefresh={handleRefresh} />
    </Box>
  );
}
