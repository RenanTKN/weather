import { styled, TextField as MuiTextField } from "@mui/material";

const TextField = styled(MuiTextField)({
  "& *": { border: "none !important" },
  borderRadius: 10,
  boxShadow: "inset 5px 5px 5px #cbced1, inset -5px -5px 5px #ffffff",
});

export default TextField;
