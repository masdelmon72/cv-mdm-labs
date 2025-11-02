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

      {/* Sezione descrittiva per AdSense e SEO */}
      <Paper elevation={1} sx={{ p: 3, mt: 4, backgroundColor: "#fafafa" }}>
        <Typography variant="h6" gutterBottom>
          Chi sono
        </Typography>
        <Typography variant="body2" paragraph>
          Sono un professionista appassionato di tecnologia, sviluppo software e architetture IT moderne. Questo sito è stato creato per
          offrire una panoramica interattiva del mio percorso professionale, mettendo in luce esperienze, progetti e competenze tecniche.
        </Typography>
        <Typography variant="body2" paragraph>
          L'obiettivo di questa piattaforma è condividere in modo trasparente la mia evoluzione professionale, la mia passione per la
          programmazione e l'attenzione all'innovazione. Il sito integra componenti React, dashboard dinamiche e visualizzazioni di dati.
        </Typography>
        <Typography variant="body2">
          Se sei un recruiter o un'azienda interessata, visita anche la sezione del <strong>Video CV</strong> per una presentazione diretta del mio profilo.
        </Typography>
      </Paper>
    </Box>
  );
}
