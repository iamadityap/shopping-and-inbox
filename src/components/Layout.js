import { Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Sidebar from "./Sidebar";

function Layout() {
  return (
    <>
      {/* App Navigation bar... */}
      <NavBar />

      <Toolbar />
      <Box sx={{ width: "100%", height: "100%" }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 8fr",
            gridTemplateRows: "auto",
            gridTemplateAreas: `"sidebar main main main main"`,
          }}
        >
          <Box className="sidebar-container" sx={{ gridArea: "sidebar" }}>
            <Sidebar />
          </Box>

          <Box className="main-container" sx={{ gridArea: "main" }}>
            <Outlet />
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Layout;
