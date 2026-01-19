import { Box, Typography } from "@mui/material";
import LoadingView from "../atoms/LoadingView";

export default function MetadataView({ metadata }) {
  if (!metadata) {
    return <LoadingView />;
  }
  return (
    <Box
      key={metadata.taWord}
      sx={{
        maxWidth: "600px",
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <Box sx={{ marginBottom: "20px" }}>
        <img
          src={metadata.picturePath}
          alt={metadata.taWord}
          style={{
            position: "absolute",
            width: "100vw",
            height: "50vh",
            top: 0,
            left: 0,
            right: 0,
          }}
        />
      </Box>
      <Box sx={{ position: "absolute", bottom: "20%", left: 0, right: 0 }}>
        <Box sx={{ marginBottom: "20px" }}>
          <Typography variant="h3" fontWeight="bold" align="center">
            {metadata.taWord}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
