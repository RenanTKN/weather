import React from "react";

import { Box, Grid, Paper } from "@mui/material";

import Form from "./components/Form";
import WeatherDisplay from "./components/WeatherDisplay";
import { WeatherResponse } from "./services/types";

const App = () => {
  const [weather, setWeather] = React.useState<WeatherResponse>();

  return (
    <Box
      height="100vh"
      width="100vw"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      ml={-0.5}
      sx={{ position: "absolute" }}
    >
      <Grid container justifyContent="center" spacing={2} maxWidth={800}>
        <Grid item xs={11}>
          <Paper>
            <Form setWeather={setWeather} />
          </Paper>
        </Grid>
        {!!weather ? (
          <Grid item xs={11}>
            <WeatherDisplay weather={weather} />
          </Grid>
        ) : null}
      </Grid>
    </Box>
  );
};

export default App;
