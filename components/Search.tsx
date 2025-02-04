import { Box, TextField } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
const Search = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "90vw",
      }}
    >
      <SearchIcon fontSize="large" sx={{ color: "grey" }} />
      <TextField
        placeholder="Search for movies or tv series."
        sx={{ width: "85vw" }}
      />
    </Box>
  );
};

export default Search;
