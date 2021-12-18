import { Grid } from "@mui/material";

function Profile() {
  return (
    <Grid sx={{ minWidth: "100%" }} container spacing={2}>
      <Grid item>
        <Grid container direction="column">
          <Grid item>User Profile Pic</Grid>
          <Grid item>Upload Image Btn</Grid>
        </Grid>
      </Grid>

      <Grid item>
        <Grid container direction="column">
          <Grid item>Form item Full Name</Grid>
          <Grid item>Form item Email Address</Grid>
          <Grid item>Form item Description</Grid>
          <Grid item>Form item Save Btn</Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Profile;
