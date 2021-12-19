import { Box, Grid, Typography } from "@mui/material";

function Dashboard() {
  return (
    <Box sx={{ width: "100%", height: "100%", p: 2 }}>
      <Grid container>
        <Grid item>
          <Typography variant="h3">Dashboard</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Dashboard;
