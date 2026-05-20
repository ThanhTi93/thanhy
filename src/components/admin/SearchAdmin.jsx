import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
} from "@mui/material";
import { IoMdAddCircle } from "react-icons/io";

function SearchAdmin({ handleClickOpen, title, add  }) {
  return (
    <Paper
      elevation={2}
      sx={{
        p: 2,
        borderRadius: 3,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 2,
      }}
    >
      {/* Title */}
      <Typography variant="h6" fontWeight={600}>
        {title}
      </Typography>

      {/* Search */}
      <TextField
        size="small"
        placeholder="Search..."
        variant="outlined"
        sx={{
          width: 250,
          "& .MuiOutlinedInput-root": {
            borderRadius: 2,
          },
        }}
      />

      {/* Button */}
      <Button
        variant="contained"
        color="primary"
        startIcon={<IoMdAddCircle />}
        onClick={handleClickOpen}
        sx={{
          borderRadius: 2,
          textTransform: "none",
          fontWeight: 600,
          px: 2,
        }}
      >
        Add
      </Button>
    </Paper>
  );
}

export default SearchAdmin;