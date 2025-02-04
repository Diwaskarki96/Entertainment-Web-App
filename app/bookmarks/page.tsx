import { Box, Typography } from "@mui/material";
import React from "react";
import data from "../../data/data.json";
import ContainContainer from "@/components/ContainContainer";
import ContentCard from "@/components/ContentCard";
const Bookmarks = () => {
  const bookmarks = data.filter((item) => item.isBookmarked === true);
  const bookmarkedMovies = bookmarks.filter(
    (bookmark) => bookmark.category === "Movie"
  );
  const bookmarkedShows = bookmarks.filter(
    (bookmark) => bookmark.category === "Tv Series"
  );
  return (
    <Box>
      <Typography variant="h1">Bookmarked Movies</Typography>
      <ContainContainer>
        {bookmarkedMovies.map((movie) => {
          return <ContentCard {...movie} key={movie.title} />;
        })}
      </ContainContainer>
      <Typography variant="h1">Bookmarked Shows</Typography>
      <ContainContainer>
        {bookmarkedShows.map((show) => {
          return <ContentCard {...show} key={show.title} />;
        })}
      </ContainContainer>
    </Box>
  );
};

export default Bookmarks;
