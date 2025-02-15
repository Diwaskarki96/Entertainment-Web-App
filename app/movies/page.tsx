import { Box, Typography } from "@mui/material";
import React from "react";
import data from "../../data/data.json";
import ContainContainer from "@/components/ContainContainer";
import ContentCard from "@/components/ContentCard";
const movies = () => {
  const movies = data.filter((item) => item.category === "Movie");
  return (
    <Box>
      <Typography variant="h1">Movies</Typography>
      <ContainContainer>
        {movies.map((movie) => {
          return <ContentCard {...movie} key={movie.title} />;
        })}
      </ContainContainer>
    </Box>
  );
};

export default movies;
