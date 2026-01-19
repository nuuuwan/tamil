import React from "react";
import { BottomNavigation, BottomNavigationAction, Box } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import RefreshIcon from "@mui/icons-material/Refresh";

export default function CustomBottomNavigator({ onNext }) {
  return (
    <Box sx={{ position: "fixed", bottom: 0, left: 0, right: 0, height: 64 }}>
      <BottomNavigation showLabels>
        <BottomNavigationAction
          icon={<RefreshIcon color="secondary" />}
          onClick={() => window.location.reload()}
        />
        <BottomNavigationAction
          icon={<ArrowForwardIosIcon color="primary" />}
          onClick={onNext}
        />
      </BottomNavigation>
    </Box>
  );
}
