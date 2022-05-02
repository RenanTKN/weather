import { Icon } from "@iconify/react";
import { Grid } from "@mui/material";

import { Weathers } from "../../services/types";

const weatherIcon: { [key in Weathers]: string } = {
  Thunderstorm: "wi-thunderstorm",
  Drizzle: "wi-sleet",
  Rain: "wi-storm-showers",
  Snow: "wi-snow",
  Atmosphere: "wi-fog",
  Clear: "wi-day-sunny",
  Clouds: "wi-day-fog",
};

interface HeaderProps {
  icon: Weathers;
}

const Header = ({ icon }: HeaderProps) => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      height="100%"
    >
      <Grid item>
        <Icon
          icon={weatherIcon[icon]}
          style={{ fontSize: 90, marginTop: -5 }}
        />
      </Grid>
    </Grid>
  );
};

export default Header;
