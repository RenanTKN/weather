import { Grid, styled, Tooltip, Typography } from "@mui/material";

import { Main, Wind } from "../../services/types";
import { Dewpoint, Pressure, Tachometer } from "../../Icons";

const Elevation = styled("div")({
  borderRadius: 20,
  backgroundColor: "#f2f2f2",
  boxShadow: `5px 5px 10px #e3e3e3, -5px -5px 10px #ffffff`,

  width: 85,
  height: 110,
  paddingTop: 15,
  paddingBottom: 10,
  position: "relative",

  "& p": {
    fontWeight: "bold",
    position: "relative",
    marginBottom: 15,
    "& .unit": {
      position: "absolute",
      fontSize: 12,
      top: "calc(100% - 5px)",
      left: 0,
      right: 0,
      marginLeft: "auto",
      marginRight: "auto",
    },
    textAlign: "center",
  },

  "& p:last-child": {
    fontSize: 10,
  },

  "& .icon": {
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    bottom: 10,
    left: 0,
    right: 0,
    marginLeft: "auto",
    marginRight: "auto",
    "& svg": {
      width: 15,
      height: "100%",
    },
  },
});

interface ExtraProps {
  main: Main;
  wind: Wind;
}

const Extra = ({ main, wind }: ExtraProps) => {
  const { humidity } = main;
  const { deg, speed } = wind;

  return (
    <Grid
      container
      justifyContent="space-evenly"
      alignItems="center"
      maxWidth={350}
      margin="auto"
    >
      <Grid item>
        <Tooltip arrow title="Humidity">
          <Elevation>
            <Typography>
              {humidity}
              <span className="unit">%</span>
            </Typography>
            <div className="icon">
              <Dewpoint />
            </div>
          </Elevation>
        </Tooltip>
      </Grid>
      <Grid item>
        <Tooltip arrow title="Wind">
          <Elevation>
            <div>
              <Typography>
                {speed}
                <span className="unit">km/h</span>
              </Typography>
              <Typography>{deg}º</Typography>
            </div>
            <div className="icon">
              <Pressure />
            </div>
          </Elevation>
        </Tooltip>
      </Grid>
      <Grid item>
        <Tooltip arrow title="Pressure">
          <Elevation>
            <Typography>
              {main.pressure}
              <span className="unit">hPa</span>
            </Typography>
            <div className="icon">
              <Tachometer />
            </div>
          </Elevation>
        </Tooltip>
      </Grid>
    </Grid>
  );
};

export default Extra;
