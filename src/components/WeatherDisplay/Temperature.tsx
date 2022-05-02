import {
  ArrowDownward as ArrowDownwardIcon,
  ArrowUpward as ArrowUpwardIcon,
} from "@mui/icons-material";
import { Grid, styled, Typography } from "@mui/material";

import { Main } from "../../services/types";

interface TemperatureProps {
  main: Main;
}

const MainTemperature = styled("div")({
  position: "relative",
  fontSize: "2.125rem",

  "& .unit": {
    position: "absolute",
    top: 0,
    left: "100%",
  },
});

const SecondaryTemperature = styled(Typography)({
  "&>svg": {
    paddingTop: 4,
    marginRight: -2,
  },

  "&>sup": {
    position: "absolute",
  },
});

const Temperature = ({ main }: TemperatureProps) => {
  const { feels_like, temp, temp_max, temp_min } = main;

  return (
    <Grid
      container
      direction="column"
      alignItems="space-around"
      maxWidth={150}
      m="auto"
      height="100%"
    >
      <Grid item>
        <Grid container>
          <Grid item sx={{ margin: "auto" }}>
            <MainTemperature>
              <Typography variant="h3">{temp.toFixed(1)}</Typography>
              <Typography variant="h5" className="unit">
                ºC
              </Typography>
            </MainTemperature>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container justifyContent="space-between">
          <Grid item>
            <SecondaryTemperature>
              <ArrowDownwardIcon fontSize="small" />
              {Math.round(temp_min)}
              <sup>°C</sup>
            </SecondaryTemperature>
          </Grid>
          <Grid item>
            <SecondaryTemperature>
              <ArrowUpwardIcon fontSize="small" />
              {Math.round(temp_max)}
              <sup>°C</sup>
            </SecondaryTemperature>
          </Grid>
        </Grid>
      </Grid>
      <Grid item m="auto">
        <Typography variant="body2">
          Feels like: {feels_like.toFixed(1)}
          <sup>°C</sup>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Temperature;
