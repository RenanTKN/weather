import { Dispatch, SetStateAction } from "react";

import { Button as MuiButton, Grid } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

import { getWeather } from "../../services/api";
import { WeatherResponse } from "../../services/types";
import { Send } from "@mui/icons-material";
import Country from "./Country";
import { styled } from "@mui/system";
import TextField from "./TextField";

const Button = styled(MuiButton)({
  background: "#f2f2f2",
  border: "none",
  transition: ".2s ease-in-out",
  boxShadow:
    "-3px -3px 14px rgba(255, 255, 255, .7), -3px -3px 10px rgba(255, 255, 255, .5), 3px 3px 8px rgba(255, 255, 255, .075), 3px 3px 10px rgba(0, 0, 0, .15)",

  "&:hover": {
    background: "#f2f2f2",
    boxShadow:
      "-2px -2px 3px rgba(255, 255, 255, .6), -2px -2px 4px rgba(255, 255, 255, .4), 2px 2px 2px rgba(255, 255, 255, .05), 2px 2px 4px rgba(0, 0, 0, .1)",
  },
  "&:active": {
    boxShadow:
      "inset -2px -2px 3px rgba(255, 255, 255, .7), inset -2px -2px 4px rgba(255, 255, 255, .5), inset 2px 2px 2px rgba(255, 255, 255, .075), inset 2px 2px 4px rgba(0, 0, 0, .15)",
  },
  "&>*": {
    color: "#515151",
  },
});

interface FormProps {
  setWeather: Dispatch<SetStateAction<WeatherResponse | undefined>>;
}

const inputSchema = Yup.string().required();

const Form = ({ setWeather }: FormProps) => {
  const formik = useFormik({
    initialValues: {
      country: "",
      city: "",
    },
    validationSchema: Yup.object({
      country: inputSchema,
      city: inputSchema,
    }),
    onSubmit: async (values) => {
      getWeather(values).then(({ data }) => {
        setWeather(data);
      });
    },
  });

  const handleChangeCountry = (country: string) => {
    formik.setFieldValue("country", country);
  };

  return (
    <Grid
      container
      alignItems="stretch"
      justifyContent="center"
      component="form"
      onSubmit={formik.handleSubmit}
      spacing={1}
      p={1}
      pt={0}
    >
      <Grid item xs={12} sm={6}>
        <Country onChange={handleChangeCountry} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Grid container>
          <Grid item flex={1}>
            <TextField
              name="city"
              label="City"
              variant="outlined"
              onChange={formik.handleChange}
              fullWidth
              size="small"
              required
              autoComplete="off"
              inputProps={{
                autoComplete: "new-password",
              }}
            />
          </Grid>
          <Grid item>
            <Button
              disableRipple
              type="submit"
              variant="contained"
              sx={{ ml: 1 }}
            >
              <Send />
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Form;
