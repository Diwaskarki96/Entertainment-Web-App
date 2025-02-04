import { Box, Typography } from "@mui/material";
import React from "react";
import data from "../../data/data.json";
import ContainContainer from "@/components/ContainContainer";
import ContentCard from "@/components/ContentCard";
const Tv = () => {
  const tvSeries = data.filter((item) => item.category === "Tv Series");
  return (
    <Box>
      <Typography variant="h1">Movies</Typography>
      <ContainContainer>
        {tvSeries.map((tvSerie) => {
          return <ContentCard {...tvSerie} key={tvSerie.title} />;
        })}
      </ContainContainer>
    </Box>
  );
};

export default Tv;
