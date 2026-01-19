import React from "react";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function CustomBottomNavigator({ onNext }) {
  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0, height: 64 }}
      elevation={3}
    >
      <BottomNavigation showLabels>
        <BottomNavigationAction
          icon={<ArrowForwardIosIcon color="primary" />}
          onClick={onNext}
        />
      </BottomNavigation>
    </Paper>
  );
}
