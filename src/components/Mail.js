import ArchiveIcon from "@mui/icons-material/Archive";
import DeleteIcon from "@mui/icons-material/Delete";
import FlagIcon from "@mui/icons-material/Flag";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Button, Checkbox, Divider, Grid, ListItemIcon, ListItemText, Menu, MenuItem, Typography } from "@mui/material";
import { useState } from "react";

function Mail({ message, onSelect, onFlag, onDelete }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const isActionsMenuOpen = Boolean(anchorEl);
  const { isSelected, isFlagged } = message;

  function handleActionsMenuOpen(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleActionsMenuClose(event) {
    setAnchorEl(null);
  }

  function handleMessageSelect(event, message) {
    onSelect(event, message.messageId);
    if (anchorEl) {
      setAnchorEl(null);
    }
  }

  function handleFlagAction(event, message) {
    onFlag(event, message.messageId);
    if (anchorEl) {
      setAnchorEl(null);
    }
  }

  function handleDeleteAction(event) {
    onDelete(event, message.messageId);
    if (anchorEl) {
      setAnchorEl(null);
    }
  }

  function handleArchiveAction(event) {
    if (anchorEl) {
      setAnchorEl(null);
    }
  }

  return (
    <>
      <Grid container alignItems="center" justifyContent="flex-start" wrap="nowrap" sx={{ backgroundColor: isSelected ? "#e5e5e5" : "transparent" }}>
        <Grid item lg={3} container direction="row" alignItems="center" wrap="nowrap">
          <Checkbox color="secondary" checked={isSelected} onClick={(event) => handleMessageSelect(event.target.checked, message)} />

          <Button
            variant="text"
            sx={{ minWidth: "initial", color: "black", p: 0 }}
            endIcon={isFlagged ? <FlagIcon /> : <FlagOutlinedIcon />}
            onClick={(event) => handleFlagAction(event, message)}
          ></Button>

          <Typography variant="body1" noWrap={true} sx={{ fontWeight: "bold", ml: 2 }}>
            {message.subject}
          </Typography>
        </Grid>

        <Grid item lg={6}>
          <Typography variant="body2" noWrap={true} sx={{ fontWeight: "medium", color: "#919191", ml: 4 }}>
            {message.textBody}
          </Typography>
        </Grid>

        <Grid item lg={3} container direction="row" alignItems="center" justifyContent="end" wrap="nowrap">
          <Typography variant="body2" noWrap={true} sx={{ fontWeight: "medium", color: "#919191", ml: 2 }}>
            {message.messageReceivedDate}
          </Typography>

          <Button variant="text" sx={{ minWidth: "initial", color: "black" }} endIcon={<MoreVertIcon />} onClick={handleActionsMenuOpen}></Button>
        </Grid>
      </Grid>

      <Divider variant="middle" />

      <Menu id="mail-actions-menu" anchorEl={anchorEl} open={isActionsMenuOpen} onClose={handleActionsMenuClose}>
        <MenuItem onClick={(event) => handleDeleteAction(event)} sx={{ px: 2 }}>
          <ListItemIcon>
            <DeleteIcon sx={{ mr: 2 }} />
          </ListItemIcon>
          <ListItemText>Delete</ListItemText>
        </MenuItem>

        <MenuItem onClick={(event) => handleFlagAction(event, message)} sx={{ px: 2 }}>
          <ListItemIcon>
            <FlagIcon sx={{ mr: 2 }} />
          </ListItemIcon>
          <ListItemText>Flag</ListItemText>
        </MenuItem>

        <MenuItem onClick={(event) => handleArchiveAction(event)} sx={{ px: 2 }}>
          <ListItemIcon>
            <ArchiveIcon sx={{ mr: 2 }} />
          </ListItemIcon>
          <ListItemText>Archive</ListItemText>
        </MenuItem>
      </Menu>
    </>
  );
}

export default Mail;
