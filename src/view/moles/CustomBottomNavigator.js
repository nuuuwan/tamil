import React from "react";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import PlayAudioButton from "../atoms/PlayAudioButton";

export default function CustomBottomNavigator({ onRefresh, soundPath }) {
  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation showLabels>
        <PlayAudioButton soundPath={soundPath} />
        <BottomNavigationAction icon={<RefreshIcon />} onClick={onRefresh} />
      </BottomNavigation>
    </Paper>
  );
}
