import { Avatar, Box, Button, FormControl, Grid, InputLabel, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { fetchData } from "../../utils/api-client";

function Profile() {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    fetchData("user")
      .then((response) => setUserInfo(response))
      .catch((error) => console.error(error));
    return () => {
      setUserInfo([]);
    };
  }, []);

  function handleUploadImage() {}

  function handleFormSave(event) {}

  return (
    <Box sx={{ p: 2 }}>
      <Grid container direction="row" alignItems="start" justifyContent="space-around" flexWrap="nowrap">
        <Grid item lg={3} container direction="column" alignItems="center" justifyContent="center" sx={{ p: 2 }}>
          <Avatar alt="Profile avatar placeholder" src="assets/avatar_icon.png" sx={{ width: 180, height: 180 }} />
          <Button variant="contained" color="secondary" onClick={(event) => handleUploadImage()} sx={{ mt: 1 }}>
            Upload Image
          </Button>
        </Grid>

        <Grid item lg={9} sx={{ p: 2 }}>
          <Box
            component="form"
            sx={(theme) => ({
              ...theme.typography.body,
              display: "grid",
              gridTemplateColumns: { sm: "1fr" },
              gap: 1,
              [theme.breakpoints.down("md")]: {
                maxWidth: "200px",
              },
              [theme.breakpoints.up("md")]: {
                maxWidth: "400px",
              },
              [theme.breakpoints.up("lg")]: {
                maxWidth: "400px",
              },
            })}
          >
            <FormControl variant="outlined">
              <InputLabel shrink htmlFor="fullname">
                Full Name
              </InputLabel>
              <TextField
                id="fullname"
                value={userInfo?.usernameFull?.fullName || ""}
                placeholder="Full Name"
                variant="outlined"
                autoComplete="off"
                sx={{ my: 2 }}
              />
            </FormControl>

            <FormControl variant="outlined" sx={{ mt: 2 }}>
              <InputLabel shrink htmlFor="useremail">
                Email Address
              </InputLabel>
              <TextField
                id="useremail"
                value={userInfo?.emailAddress || ""}
                placeholder="example@domain.com"
                variant="outlined"
                autoComplete="off"
                sx={{ my: 2 }}
              />
            </FormControl>

            <FormControl variant="outlined" sx={{ mt: 2 }}>
              <InputLabel shrink htmlFor="description">
                Description
              </InputLabel>
              <TextField
                id="description"
                value={userInfo?.description}
                multiline={true}
                rows={4}
                placeholder="Description"
                variant="outlined"
                autoComplete="off"
                sx={(theme) => ({
                  ...theme.typography.body,
                  my: 2,
                  [theme.breakpoints.down("md")]: {
                    minWidth: "200px",
                  },
                  [theme.breakpoints.up("md")]: {
                    minWidth: "500px",
                  },
                  [theme.breakpoints.up("lg")]: {
                    minWidth: "700px",
                  },
                })}
              />
            </FormControl>

            <FormControl variant="outlined" sx={{ mt: 2 }}>
              <Button variant="contained" color="secondary" onClick={(event) => handleFormSave(event)} sx={{ mr: 1, maxWidth: "180px" }}>
                Save
              </Button>
            </FormControl>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Profile;
