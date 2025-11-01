import React, { useState, useEffect } from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CircularProgress,
  Box,
  Divider,
} from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
  Cell,
} from "recharts";

interface Experience {
  id: number;
  dal?: string;
  al?: string;
  occupation?: string;
  employer?: string;
  activities?: string;
}

interface CompanyData {
  company: string;
  years: number;
  role: string;
}

interface RoleData {
  role: string;
  months: number;
}

interface MyChartData {
  name: string;
  value: number;
}

const COLORS = [
  "#1976d2",
  "#dc004e",
  "#ff9800",
  "#4caf50",
  "#9c27b0",
  "#00bcd4",
  "#e91e63",
];

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [companyData, setCompanyData] = useState<CompanyData[]>([]);
  const [rolesData, setRolesData] = useState<RoleData[]>([]);
  const [technologiesData, setTechnologiesData] = useState<MyChartData[]>([]);
  const [logger, setLogger] = useState<string[]>([]);

  useEffect(() => {
    fetchExperiences();
  }, []);

  const log = (message: string) => {
    console.log(`[Dashboard] ${message}`);
    setLogger((prev) => [
      `[${new Date().toLocaleTimeString()}] ${message}`,
      ...prev.slice(0, 7), // mostra solo gli ultimi 8 log
    ]);
  };

  const fetchExperiences = async () => {
    try {
      log("📡 Caricamento dati dal backend...");
      const response = await fetch(
        "https://my-json-server.typicode.com/masdelmon/api-cv/experiences"
      );
      const data = await response.json();

      let experiences: Experience[] = [];

      if (Array.isArray(data)) {
        experiences = data;
      } else if (data.experiences) {
        experiences = data.experiences;
      } else {
        console.error("Struttura dati non riconosciuta:", data);
        setLoading(false);
        return;
      }

      log(`✅ ${experiences.length} esperienze caricate.`);
      processExperiencesData(experiences);
      setLoading(false);
    } catch (error) {
      console.error("Errore nel caricamento:", error);
      log("❌ Errore durante il caricamento dei dati.");
      setLoading(false);
    }
  };

  const calculateMonthsBetweenDates = (
    dateStart: string,
    dateEnd: string
  ): number => {
    const parseDate = (dateStr: string): Date | null => {
      if (!dateStr || dateStr.trim() === "") return null;
      const parts = dateStr.split("/");
      if (parts.length !== 3) return null;

      const day = parseInt(parts[0]);
      const month = parseInt(parts[1]) - 1;
      const year = parseInt(parts[2]);
      if (isNaN(day) || isNaN(month) || isNaN(year)) return null;

      return new Date(year, month, day);
    };

    const startDate = parseDate(dateStart);
    const endDate =
      dateEnd.toLowerCase() === "presente" ? new Date() : parseDate(dateEnd);

    if (!startDate || !endDate) return 0;

    const months =
      (endDate.getFullYear() - startDate.getFullYear()) * 12 +
      (endDate.getMonth() - startDate.getMonth());

    return Math.max(months, 0);
  };

  const normalizeRole = (role: string): string => {
    const r = role.toLowerCase();
    if (r.includes("developer") || r.includes("sviluppatore")) return "Developer";
    if (r.includes("lead") || r.includes("responsabile")) return "Team Leader";
    if (r.includes("architect") || r.includes("architetto")) return "Architect";
    if (r.includes("consultant") || r.includes("consulente")) return "Consultant";
    if (r.includes("analyst") || r.includes("analista")) return "Analyst";
    return role;
  };

  const extractTechnologiesFromDescription = (description: string): string[] => {
    const commonTechs = [
      "Java",
      "Spring",
      "React",
      "Angular",
      "Node.js",
      "Docker",
      "Kubernetes",
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "Redis",
      "AWS",
      "Azure",
      "Git",
      "TypeScript",
      "JavaScript",
      "Python",
      "C#",
      ".NET",
      "REST",
      "GraphQL",
      "Microservices",
      "Jenkins",
      "CI/CD",
    ];

    return commonTechs.filter((tech) =>
      description.toLowerCase().includes(tech.toLowerCase())
    );
  };

  const processExperiencesData = (experiences: Experience[]) => {
    const companyMap = new Map<string, { months: number; role: string }>();

    experiences.forEach((exp) => {
      const company = exp.employer || "Unknown";
      const role = exp.occupation || "Developer";
      const months = calculateMonthsBetweenDates(exp.dal || "", exp.al || "Presente");

      if (companyMap.has(company)) {
        const existing = companyMap.get(company)!;
        companyMap.set(company, {
          months: existing.months + months,
          role,
        });
      } else {
        companyMap.set(company, { months, role });
      }
    });

    const companies: CompanyData[] = Array.from(companyMap.entries()).map(
      ([company, data]) => ({
        company,
        years: parseFloat((data.months / 12).toFixed(1)),
        role: data.role,
      })
    );
    setCompanyData(companies);
    log(`🏢 Aziende distinte trovate: ${companies.length}`);

    const roleMap = new Map<string, number>();
    experiences.forEach((exp) => {
      const role = normalizeRole(exp.occupation || "Developer");
      const months = calculateMonthsBetweenDates(exp.dal || "", exp.al || "Presente");
      roleMap.set(role, (roleMap.get(role) || 0) + months);
    });

    const roles: RoleData[] = Array.from(roleMap.entries()).map(([role, months]) => ({
      role,
      months,
    }));
    setRolesData(roles);
    log(`👔 Ruoli distinti trovati: ${roles.length}`);

    const techMap = new Map<string, number>();
    experiences.forEach((exp) => {
      const activities = exp.activities || "";
      extractTechnologiesFromDescription(activities).forEach((tech) => {
        techMap.set(tech, (techMap.get(tech) || 0) + 1);
      });
    });

    const total = Array.from(techMap.values()).reduce((a, b) => a + b, 0);
    const techData: MyChartData[] = Array.from(techMap.entries())
      .map(([tech, count]) => ({
        name: tech,
        value: Math.round((count / total) * 100),
      }))
      .sort((a, b) => b.value - a.value)
      .slice(0, 10);
    setTechnologiesData(techData);
    log(`🧩 Tecnologie individuate: ${techData.length}`);
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="400px">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Grid container spacing={4} sx={{ mt: 1 }}>
      {/* Anni di Esperienza per Azienda */}
      <Grid item xs={12} md={6}>
        <Card sx={{ boxShadow: 3, borderRadius: 3 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom color="primary">
              Anni di Esperienza per Azienda
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={companyData} margin={{ bottom: 60 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="company" angle={-55} textAnchor="end" interval={0} height={120} tick={{ fontSize: 12 }} />
                <YAxis />
                <Tooltip />
                <Bar dataKey="years" fill="#1976d2" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </Grid>

      {/* Tecnologie Utilizzate (%) */}
      <Grid item xs={12} md={6}>
        <Card sx={{ boxShadow: 3, borderRadius: 3 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom color="primary">
              Tecnologie Utilizzate (%)
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                layout="vertical"
                data={technologiesData}
                margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" domain={[0, 100]} />
                <YAxis dataKey="name" type="category" width={100} />
                <Tooltip />
                <Bar dataKey="value" name="Percentuale">
                  {technologiesData.map((_, i) => (
                    <Cell key={i} fill={COLORS[i % COLORS.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </Grid>

      {/* Ruoli Ricoperti */}
      <Grid item xs={12}>
        <Card sx={{ boxShadow: 3, borderRadius: 3 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom color="primary">
              Ruoli Ricoperti (mesi di esperienza)
            </Typography>
            <ResponsiveContainer width="100%" height={350}>
              <RadarChart data={rolesData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="role" />
                <PolarRadiusAxis />
                <Radar
                  name="Ruoli"
                  dataKey="months"
                  stroke="#1976d2"
                  fill="#1976d2"
                  fillOpacity={0.6}
                />
                <Legend />
              </RadarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
