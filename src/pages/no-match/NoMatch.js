import { Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function NoMatch() {
  return (
    <Grid container>
      <Grid item>
        <Typography variant="h3">Nothing to see here!</Typography>
        <Typography variant="p" component={Link} to="/dashboard">
          Go to dashboard
        </Typography>
      </Grid>
    </Grid>
  );
}

export default NoMatch;
