import AccountBoxIcon from "@mui/icons-material/AccountBox";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CallMissedOutgoingIcon from "@mui/icons-material/CallMissedOutgoing";
import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { AppBar, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function NavBar({ onOpen }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const isProfileMenuOpen = Boolean(anchorEl);

  function handleProfileMenuOpen(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleProfileMenuClose() {
    setAnchorEl(null);
  }

  return (
    <>
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={onOpen}>
            <MenuIcon aria-label="Menu" />
          </IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Shopping
          </Typography>

          <IconButton aria-label="Locale" color="inherit">
            <LanguageIcon />
          </IconButton>

          <IconButton aria-label="Notifications" color="inherit">
            <NotificationsIcon />
          </IconButton>

          <IconButton aria-label="Profile" color="inherit" onClick={handleProfileMenuOpen}>
            <AccountCircleIcon />
          </IconButton>

          <Menu id="account-menu" anchorEl={anchorEl} open={isProfileMenuOpen} onClose={handleProfileMenuClose}>
            <MenuItem component={NavLink} to="/profile" onClick={handleProfileMenuClose}>
              <AccountBoxIcon aria-label="Profile" sx={{ mr: 2 }} />
              Profile
            </MenuItem>

            <MenuItem onClick={handleProfileMenuClose}>
              <CallMissedOutgoingIcon aria-label="Log out" sx={{ mr: 2 }} />
              Log out
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default NavBar;
