import React from "react";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MetadataView from "../moles/MetadataView";
import CustomBottomNavigator from "../moles/CustomBottomNavigator";

export default function WordPage({ metadata }) {
  const navigate = useNavigate();

  const handleRefresh = () => {
    navigate("/");
  };

  return (
    <Box sx={{ paddingBottom: "56px" }}>
      <MetadataView metadata={metadata} />
      <CustomBottomNavigator onRefresh={handleRefresh} />
    </Box>
  );
}
