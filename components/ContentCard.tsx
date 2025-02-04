import { Box, Typography } from "@mui/material";
import React from "react";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import TheatersIcon from "@mui/icons-material/Theaters";
import BookmarkIcon from "@mui/icons-material/Bookmark";
interface Props {
  title: string;
  thumbnail: {
    trending: {
      small: string;
      large: string;
    };
    regular: {
      small: string;
      medium: string;
      large: string;
    };
  };
  year: number;
  category: string;
  rating: string;
  isBookmarked: boolean;
  isTrending: boolean;
}
const ContentCard = ({
  isTrending,
  isBookmarked,
  rating,
  category,
  year,
  thumbnail,
  title,
}: Props) => {
  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url('${thumbnail.regular.large}')`,
          backgroundSize: "100%",
          borderRadius: "1rem",
          height: "15vw",
          width: "15vw",
          margin: "1rem 0 ",
          display: "flex",
          justifyContent: "end",
          padding: "1rem",
        }}
      >
        <Box
          sx={{
            color: "white",
            backgroundColor: "rgba(15,21,30,0.25)",
            padding: "1rem",
            width: "1rem",
            height: "1rem",
            borderRadius: "1.5rem",
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          {isBookmarked ? (
            <BookmarkIcon fontSize="medium" />
          ) : (
            <BookmarkBorderIcon fontSize="medium" />
          )}
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: "1rem",
        }}
      >
        <Typography
          sx={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.5)" }}
        >
          {year}
        </Typography>
        {category === "Movie" ? <TheatersIcon /> : <LiveTvIcon />}
        <Typography
          sx={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.5)" }}
        >
          {category}
        </Typography>
        <Typography
          sx={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.5)" }}
        >
          {rating}
        </Typography>
      </Box>
      <Typography sx={{ fontSize: "0.8125rem", color: "white" }}>
        {title}
      </Typography>
    </Box>
  );
};

export default ContentCard;
