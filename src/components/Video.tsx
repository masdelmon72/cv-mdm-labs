import React from "react";
import { Box, Typography, Paper, Chip } from "@mui/material";

export default function Video() {
  return (
    <Box>
      <Chip label="videoCV" color="primary" sx={{ mb: 3, fontSize: "1rem", py: 2.5, px: 1 }} />

      <Paper elevation={3} sx={{ p: 2 }}>
        <Box
          sx={{
            position: "relative",
            paddingBottom: "56.25%", // 16:9 aspect ratio
            height: 0,
            overflow: "hidden",
          }}
        >
          <iframe
            src="https://www.youtube.com/embed/2kuumg2s1SM?rel=0"
            title="Video CV"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          />
        </Box>
      </Paper>
    </Box>
  );
}
