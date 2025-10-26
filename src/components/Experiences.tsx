import React, { useState, useEffect } from "react";
import { Box, Typography, Card, CardHeader, CardContent, CircularProgress, Alert, Chip, Badge } from "@mui/material";
import { Experience } from "../types";

export default function Experiences() {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/masdelmon/api-cv/experiences")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setExperiences(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading experiences:", err);
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "400px",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <CircularProgress size={60} />
        <Typography variant="h6">
          Loading
          <span className="loader__dot">.</span>
          <span className="loader__dot">.</span>
          <span className="loader__dot">.</span>
        </Typography>
      </Box>
    );
  }

  if (error) {
    return (
      <Alert severity="error" sx={{ mt: 2 }}>
        An error occurred while loading the experiences!
      </Alert>
    );
  }

  return (
    <Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}>
        <Chip label="Work experiences" color="primary" sx={{ fontSize: "1rem", py: 2.5, px: 1 }} />
        <Badge badgeContent={experiences.length} color="info" max={999}>
          <Box sx={{ width: 20, height: 20 }} />
        </Badge>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {experiences.map((experience, index) => (
          <Card key={index} elevation={3}>
            <CardHeader
              title={`Dal: ${experience.dal} Al: ${experience.al}`}
              sx={{ bgcolor: "primary.light", color: "white" }}
            />
            <CardContent>
              <Typography variant="h6" gutterBottom>
                <strong>Ruolo:</strong> {experience.occupation}
              </Typography>
              <Typography variant="h6" gutterBottom>
                <strong>Società:</strong> {experience.employer}
              </Typography>
              <Typography variant="h6" gutterBottom>
                <strong>Attività:</strong>
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {experience.activities}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
