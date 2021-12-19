import { Box, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function NoMatch() {
  return (
    <Box sx={{ width: "100%", height: "100%", p: 2 }}>
      <Grid container>
        <Grid item>
          <Typography variant="h3">Nothing to see here!</Typography>
          <Typography variant="p" component={Link} to="/dashboard">
            Go to dashboard
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default NoMatch;
