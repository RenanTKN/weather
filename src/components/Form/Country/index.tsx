import Box from "@mui/material/Box";
import { Autocomplete } from "@mui/material";

import countries from "./list";
import TextField from "../TextField";

interface CountryProps {
  onChange: (country: string) => void;
}

const Country = ({ onChange }: CountryProps) => (
  <Autocomplete
    options={countries}
    autoHighlight
    size="small"
    getOptionLabel={({ label }) => label}
    onChange={(_, value) => {
      const country = value?.label!;
      onChange(country);
    }}
    renderOption={(props, { code, label }) => (
      <Box
        component="li"
        sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
        {...props}
      >
        <img
          loading="lazy"
          width="20"
          src={`https://flagcdn.com/w20/${code.toLowerCase()}.png`}
          srcSet={`https://flagcdn.com/w40/${code.toLowerCase()}.png 2x`}
          alt={label}
        />
        {label}
      </Box>
    )}
    renderInput={(params) => (
      <TextField
        {...params}
        label="Country"
        autoComplete="off"
        inputProps={{
          ...params.inputProps,
          autoComplete: "new-password",
        }}
        fullWidth
        required
      />
    )}
  />
);

export default Country;
