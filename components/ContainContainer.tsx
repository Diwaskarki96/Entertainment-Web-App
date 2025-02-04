import { Box } from "@mui/material";
import React from "react";
interface Props {
  children: React.ReactNode;
}
const ContainContainer = ({ children }: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      {children}
    </Box>
  );
};

export default ContainContainer;
