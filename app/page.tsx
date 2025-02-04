import Recommended from "@/components/Recommended";
import Trending from "@/components/Trending";
import { Box } from "@mui/material";
import React from "react";

const page = () => {
  return (
    <Box
      sx={{ display: "flex", alignContent: "center", flexDirection: "column" }}
    >
      <Trending />
      <Recommended />
    </Box>
  );
};

export default page;
