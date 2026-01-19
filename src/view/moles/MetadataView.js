import { Box, Typography, Skeleton } from "@mui/material";
import PlayAudioButton from "../atoms/PlayAudioButton";
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
        <Skeleton
          variant="rectangular"
          width="100%"
          height={400}
          sx={{ marginBottom: "20px" }}
        />
      </Box>
      <Box sx={{ marginBottom: "20px" }}>
        <img
          src={metadata.picturePath}
          alt={metadata.taWord}
          style={{
            position: "absolute",
            width: "calc(min(100vw, 640px))",
            height: "auto",
            top: 0,
            left: 0,
            right: 0,
          }}
        />
      </Box>
      <Box sx={{ position: "absolute", bottom: 50, left: 0, right: 0 }}>
        <Box sx={{ marginBottom: "20px" }}>
          <Typography variant="h3" fontWeight="bold" align="center">
            {metadata.taWord}
          </Typography>
        </Box>
        <Box sx={{ marginBottom: "20px" }}>
          <PlayAudioButton soundPath={metadata.soundPath} />
        </Box>
      </Box>
    </Box>
  );
}
