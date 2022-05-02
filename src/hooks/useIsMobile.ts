import { useMediaQuery } from "@mui/material";

import theme from "../theme";

const useIsMobile = () => useMediaQuery(theme.breakpoints.down("sm"));

export default useIsMobile;
