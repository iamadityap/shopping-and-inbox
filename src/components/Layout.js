import { Box, Grid, Toolbar } from "@mui/material";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Sidebar from "./Sidebar";

function Layout() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {/* App Navigation bar... */}
        <Grid item>
          <NavBar />
        </Grid>

        <Grid container spacing={2}>
          {/* Sidebar Drawer Menu */}
          <Grid item>
            <Sidebar />
          </Grid>

          {/* main content */}
          <Grid item>
            <Toolbar />

            <Box sx={{ width: "100%", height: "100%", mx: "auto", p: 2 }}>
              <Outlet />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Layout;
