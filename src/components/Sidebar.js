import AccountBoxIcon from "@mui/icons-material/AccountBox";
import DraftsIcon from "@mui/icons-material/Drafts";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Box, Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar } from "@mui/material";
import { NavLink } from "react-router-dom";

const drawerWidth = 225;

function Sidebar() {
  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <Drawer
        anchor="left"
        variant="permanent"
        PaperProps={{ elevation: 3 }}
        sx={{ width: drawerWidth, [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" } }}
      >
        <Toolbar />
        <List>
          <ListItem
            key="Dashboard"
            component={NavLink}
            to="/dashboard"
            sx={{
              color: "black",
            }}
          >
            <ListItemIcon aria-label="Dashboard">
              <HomeIcon sx={{ mr: 2 }} />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>

          <ListItem
            key="Shop"
            component={NavLink}
            to="/shop"
            sx={{
              color: "black",
            }}
          >
            <ListItemIcon aria-label="Shop">
              <ShoppingCartIcon sx={{ mr: 2 }} />
            </ListItemIcon>
            <ListItemText primary="Shop" />
          </ListItem>

          <ListItem
            key="Profile"
            component={NavLink}
            to="/profile"
            sx={{
              color: "black",
            }}
          >
            <ListItemIcon aria-label="Profile">
              <AccountBoxIcon sx={{ mr: 2 }} />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItem>

          <ListItem
            key="Inbox"
            component={NavLink}
            to="/inbox"
            sx={{
              color: "black",
            }}
          >
            <ListItemIcon aria-label="Inbox">
              <DraftsIcon sx={{ mr: 2 }} />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}

export default Sidebar;
