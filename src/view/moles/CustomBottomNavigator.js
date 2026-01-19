import React from "react";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import RefreshIcon from "@mui/icons-material/Refresh";

export default function CustomBottomNavigator({ onNext }) {
  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0, height: 64 }}
      elevation={3}
    >
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
    </Paper>
  );
}
