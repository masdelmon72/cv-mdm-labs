import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Tabs,
  Tab,
  Box,
  CssBaseline,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import WorkIcon from "@mui/icons-material/Work";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import DashboardIcon from "@mui/icons-material/Dashboard";

import Home from "./components/Home";
import PersonalInfo from "./components/PersonalInfo";
import Experiences from "./components/Experiences";
import Video from "./components/Video";
import Dashboard from "./components/Dashboard";

import ReactGA from "react-ga4"; // ✅ Import GA4

// ID di misurazione GA4 (es: G-XXXXXXXXXX)
const GA_MEASUREMENT_ID = process.env.REACT_APP_GA_MEASUREMENT_ID as string;

// 🎨 Tema Material UI
const theme = createTheme({
  palette: {
    primary: { main: "#1976d2" },
    secondary: { main: "#dc004e" },
  },
});

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  );
}

export default function App() {
  const [currentTab, setCurrentTab] = useState(0);

  // ✅ 1. Inizializzazione Google Analytics una sola volta
  useEffect(() => {
    if (GA_MEASUREMENT_ID) {
      ReactGA.initialize(GA_MEASUREMENT_ID);
      ReactGA.send("pageview"); // Prima pageview
      console.log("✅ Google Analytics inizializzato:", GA_MEASUREMENT_ID);
    } else {
      console.warn("⚠️ GA_MEASUREMENT_ID non impostato in .env");
    }
  }, []);

  // ✅ 2. Traccia cambio tab come evento + pageview
  useEffect(() => {
    const tabName = ["Home", "PersonalInfo", "Experiences", "Dashboard", "Video"][currentTab];

    ReactGA.send({
      hitType: "pageview",
      page: `/${tabName}`,
      title: tabName,
    });

    ReactGA.event({
      category: "Navigation",
      action: "Tab Changed",
      label: tabName,
    });

    console.log(`📊 Navigazione tracciata: ${tabName}`);
  }, [currentTab]);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setCurrentTab(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              myCv on air!
            </Typography>
          </Toolbar>
          <Tabs
            value={currentTab}
            onChange={handleTabChange}
            textColor="inherit"
            indicatorColor="secondary"
            variant="fullWidth"
            sx={{ bgcolor: "primary.dark" }}
          >
            <Tab icon={<HomeIcon />} label="Home" />
            <Tab icon={<PersonIcon />} label="Personal Info" />
            <Tab icon={<WorkIcon />} label="Experiences" />
            <Tab icon={<DashboardIcon />} label="Dashboard" />
            <Tab icon={<VideoLibraryIcon />} label="Video CV" />
          </Tabs>
        </AppBar>

        <Container maxWidth="lg">
          <TabPanel value={currentTab} index={0}>
            <Home />
          </TabPanel>
          <TabPanel value={currentTab} index={1}>
            <PersonalInfo />
          </TabPanel>
          <TabPanel value={currentTab} index={2}>
            <Experiences />
          </TabPanel>
          <TabPanel value={currentTab} index={3}>
            <Dashboard />
          </TabPanel>
          <TabPanel value={currentTab} index={4}>
            <Video />
          </TabPanel>

          <Box
            component="footer"
            sx={{
              py: 3,
              px: 2,
              mt: "auto",
              textAlign: "center",
              borderTop: "1px solid #e0e0e0",
            }}
          >
            <Typography variant="body2" color="text.secondary">
              © 2025 - Powered by React & Material-UI. All rights reserved.
            </Typography>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
