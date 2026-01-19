import React from "react";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";

export default function CustomBottomNavigator({ onRefresh }) {
  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation showLabels>
        <BottomNavigationAction
          label="புதிது"
          icon={<RefreshIcon />}
          onClick={onRefresh}
        />
      </BottomNavigation>
    </Paper>
  );
}
