import { Box, Typography } from "@mui/material";
import React from "react";
import data from "../data/data.json";
import ContentCard from "./ContentCard";
import ContainContainer from "./ContainContainer";
const Recommended = () => {
  return (
    <Box>
      <Typography variant="h1">Recommended for you</Typography>
      <ContainContainer>
        {data.map((item) => {
          return <ContentCard {...item} key={item.title} />;
        })}
      </ContainContainer>
    </Box>
  );
};

export default Recommended;
