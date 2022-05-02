import { Grid, Paper, Typography } from "@mui/material";
import { styled } from "@mui/system";
import useIsMobile from "../../hooks/useIsMobile";

import { WeatherResponse } from "../../services/types";
import Extra from "./Extra";
import Header from "./Header";
import Temperature from "./Temperature";

const Card = styled(Paper)({
  borderRadius: 20,
  padding: 16,

  "&>*": {
    color: "#1a1a1a",
    fontWeight: "bold",
  },
});

interface WeatherDisplayProps {
  weather: WeatherResponse;
}

const WeatherDisplay = ({ weather }: WeatherDisplayProps) => {
  const { main, name, wind } = weather;
  const header = weather.weather[0];
  const icon = header.main;
  const { description } = header;
  const isMobile = useIsMobile();

  return (
    <Card>
      <Typography variant="h5" gutterBottom sx={{ fontWeight: 800 }}>
        {name},{" "}
        <Typography variant="h6" component="span" sx={{ fontWeight: 400 }}>
          {description}
        </Typography>
      </Typography>
      <Grid container justifyContent="space-between" alignItems="stretch">
        <Grid item xs={5} sm={2}>
          <Header icon={icon} />
        </Grid>
        <Grid item xs={7} sm={3}>
          <Temperature main={main} />
        </Grid>
        <Grid item xs={12} sm={6} mt={isMobile ? 2 : 0}>
          <Extra main={main} wind={wind} />
        </Grid>
      </Grid>
    </Card>
  );
};

export default WeatherDisplay;
