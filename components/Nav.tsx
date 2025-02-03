import { Box } from "@mui/material";
import React from "react";
import MovieCreationIcon from "@mui/icons-material/MovieCreation";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import TheatersIcon from "@mui/icons-material/Theaters";
import WindowIcon from "@mui/icons-material/Window";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Link from "next/link";
const Nav = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#161D2F",
        width: "5vw",
        height: "90vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: "1rem",
      }}
    >
      <Link href="/">
        <MovieCreationIcon fontSize="large" sx={{ color: "red" }} />
      </Link>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "3rem",
        }}
      >
        <Link href="/">
          <WindowIcon fontSize="large" sx={{ color: "grey" }} />
        </Link>
        <Link href="/movies">
          <TheatersIcon fontSize="large" sx={{ color: "grey" }} />
        </Link>
        <Link href="/tv">
          <LiveTvIcon fontSize="large" sx={{ color: "grey" }} />
        </Link>
        <Link href="/bookmarks">
          <BookmarkIcon fontSize="large" sx={{ color: "grey" }} />
        </Link>
      </Box>
      <AccountCircleIcon fontSize="large" sx={{ color: "grey" }} />
    </Box>
  );
};

export default Nav;
