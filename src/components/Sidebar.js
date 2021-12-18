import AccountBoxIcon from "@mui/icons-material/AccountBox";
import DraftsIcon from "@mui/icons-material/Drafts";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar } from "@mui/material";
import { NavLink } from "react-router-dom";

const drawerWidth = 225;

function Sidebar() {
  return (
    <>
      <Drawer
        anchor="left"
        variant="permanent"
        PaperProps={{ elevation: 3 }}
        sx={{ width: drawerWidth, [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" } }}
      >
        <Toolbar />
        <List>
          <ListItem key="Dashboard" component={NavLink} to="/dashboard">
            <ListItemIcon aria-label="Dashboard">
              <HomeIcon sx={{ mr: 2 }} />
              <ListItemText primary="Dashboard" />
            </ListItemIcon>
          </ListItem>

          <ListItem key="Shop" component={NavLink} to="/shop">
            <ListItemIcon aria-label="Shop">
              <ShoppingCartIcon sx={{ mr: 2 }} />
              <ListItemText primary="Shop" />
            </ListItemIcon>
          </ListItem>

          <ListItem key="Profile" component={NavLink} to="/profile">
            <ListItemIcon aria-label="Profile">
              <AccountBoxIcon sx={{ mr: 2 }} />
              <ListItemText primary="Profile" />
            </ListItemIcon>
          </ListItem>

          <ListItem key="Inbox" component={NavLink} to="/inbox">
            <ListItemIcon aria-label="Inbox">
              <DraftsIcon sx={{ mr: 2 }} />
              <ListItemText primary="Inbox" />
            </ListItemIcon>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}

export default Sidebar;
