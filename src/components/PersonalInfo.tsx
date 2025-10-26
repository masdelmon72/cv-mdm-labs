import React from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  Chip,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function PersonalInfo() {
  return (
    <Box>
      <Chip label="Personal Info" color="primary" sx={{ mb: 2, fontSize: "1rem", py: 2.5, px: 1 }} />

      <TableContainer component={Paper} elevation={3}>
        <Table>
          <TableHead>
            <TableRow sx={{ bgcolor: "primary.light" }}>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Photo</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Name</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Address</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Mobile</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Email</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Skype</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <Avatar
                  alt="Massimiliano del Monaco"
                  src="/assets/img/IMG_20180312_141547.jpg"
                  sx={{ width: 80, height: 80 }}
                />
              </TableCell>
              <TableCell>
                <Typography variant="body1" fontWeight="medium">
                  Massimiliano del Monaco
                </Typography>
              </TableCell>
              <TableCell>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <LocationOnIcon fontSize="small" color="action" />
                  <Typography variant="body2">Via Gentile 36 81024 Maddaloni (CE)</Typography>
                </Box>
              </TableCell>
              <TableCell>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <PhoneIcon fontSize="small" color="action" />
                  <Typography variant="body2">(+39) 3927590148</Typography>
                </Box>
              </TableCell>
              <TableCell>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <EmailIcon fontSize="small" color="action" />
                  <Typography variant="body2">masdelmon@gmail.com</Typography>
                </Box>
              </TableCell>
              <TableCell>
                <Typography variant="body2">massimiliano.del.monaco</Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
