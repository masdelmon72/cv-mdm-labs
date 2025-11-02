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

      {/* Sezione descrittiva per AdSense e SEO */}
      <Paper elevation={1} sx={{ p: 3, mt: 4, backgroundColor: "#fafafa" }}>
        <Typography variant="h6" gutterBottom>
          Presentazione del Video Curriculum
        </Typography>
        <Typography variant="body2" paragraph>
          In questo video racconto in modo diretto il mio percorso professionale, illustrando le esperienze lavorative più importanti,
          le competenze tecniche maturate e la mia visione personale sul ruolo dell’innovazione nel mondo IT.
        </Typography>
        <Typography variant="body2" paragraph>
          Il video è pensato per offrire ai recruiter e ai responsabili HR una panoramica immediata e autentica sul mio profilo, andando
          oltre il semplice curriculum testuale. Rappresenta anche un esempio concreto di comunicazione digitale efficace.
        </Typography>
        <Typography variant="body2">
          Grazie per la visione! Per maggiori informazioni puoi esplorare le altre sezioni del sito o contattarmi direttamente dai
          collegamenti disponibili nel profilo.
        </Typography>
      </Paper>
    </Box>
  );
}
