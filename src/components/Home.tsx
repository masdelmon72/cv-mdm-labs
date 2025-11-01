import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import AdBanner from "./AdBanner";

export default function Home() {
  return (
    <Box>
      <Paper elevation={3} sx={{ p: 4, mt: 2 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          myCv on air!
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          Benvenuto nel mio CV online
        </Typography>
        <Typography variant="body1" paragraph>
          Naviga tra le diverse sezioni per conoscere il mio profilo professionale, le mie esperienze lavorative e
          guarda il mio video CV. Troverai anche una Dashboard per visualizzare graficamente varie analitiche.
        </Typography>
      </Paper>
    </Box>
  );
}

