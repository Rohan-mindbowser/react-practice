import { Box, Grid } from "@mui/material";
import React from "react";

const Mui = () => {
  return (
    <Box>
      <Grid container spacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item sx={{ backgroundColor: "red" }} xs={12} sm={6} md={8}>
          <p>xs=6 md=8</p>
        </Grid>
        <Grid item sx={{ backgroundColor: "blue" }} xs={12} sm={6} md={4}>
          <p>xs=6 md=4</p>
        </Grid>
        <Grid item sx={{ backgroundColor: "yellow" }} xs={6} md={4}>
          <p>xs=6 md=4</p>
        </Grid>
        <Grid item sx={{ backgroundColor: "purple" }} xs={6} md={8}>
          <p>xs=6 md=8</p>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Mui;
