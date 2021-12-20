import ArchiveIcon from "@mui/icons-material/Archive";
import DeleteIcon from "@mui/icons-material/Delete";
import EmailIcon from "@mui/icons-material/Email";
import FlagIcon from "@mui/icons-material/Flag";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Mail from "../../components/Mail";
import SearchInput from "../../components/SearchInput";
import { fetchData } from "../../utils/api-client";

function Inbox() {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    fetchData("messages")
      .then((response) => setEmails(response))
      .catch((error) => console.error(error));
    return () => {
      setEmails([]);
    };
  }, []);

  function handleNewMessage(event) {
    console.log(`perform new message action`);
  }

  function handleMessageSelect(event, messageId) {
    const message = emails.map((item) => {
      if (item.messageId === messageId) item.isSelected = !item.isSelected;
      return item;
    });

    setEmails(message);
  }

  function handleMessageFlag(event, messageId) {
    const message = emails.map((item) => {
      if (item.messageId === messageId) item.isFlagged = !item.isFlagged;
      return item;
    });

    setEmails(message);
  }

  function handleMessageDelete(event, messageId) {
    const message = emails.map((item) => {
      if (item.messageId === messageId) item.isDeleted = !item.isDeleted;
      return item;
    });

    setEmails(message);
  }

  function handleGroupFlagAction(event) {
    const message = emails.map((item) => {
      if (item.isSelected) item.isFlagged = !item.isFlagged;
      return item;
    });

    setEmails(message);
  }

  function handleGroupDeleteAction(event) {
    const message = emails.map((item) => {
      if (item.isSelected) item.isDeleted = !item.isDeleted;
      return item;
    });

    setEmails(message);
  }

  function handleGroupArchiveAction(event) {}

  return (
    <Box sx={{ p: 2 }}>
      <Grid container direction="row" justifyContent="center" alignItems="center" wrap="nowrap">
        <Grid item>
          <Button variant="contained" color="secondary" endIcon={<EmailIcon sx={{ ml: 2, p: 0.5 }} />} onClick={(event) => handleNewMessage(event)}>
            New Message
          </Button>
        </Grid>

        <Grid item>
          <SearchInput />
        </Grid>

        <Grid item>
          <Button
            variant="text"
            sx={{ color: "black", mr: 2 }}
            endIcon={<DeleteIcon sx={{ p: 0.5 }} />}
            onClick={(event) => handleGroupDeleteAction(event)}
          >
            Delete
          </Button>

          <Button
            variant="text"
            sx={{ color: "black", mr: 2 }}
            endIcon={<FlagIcon sx={{ p: 0.5 }} />}
            onClick={(event) => handleGroupFlagAction(event)}
          >
            Flag
          </Button>

          <Button
            variant="text"
            sx={{ color: "black", mr: 2 }}
            endIcon={<ArchiveIcon sx={{ p: 0.5 }} />}
            onClick={(event) => handleGroupArchiveAction(event)}
          >
            Archive
          </Button>
        </Grid>
      </Grid>

      <Grid container direction="column" sx={{ mt: 2 }}>
        {emails.length > 0 ? (
          emails
            .filter((message) => !message.isDeleted)
            .map((message) => (
              <Mail
                key={message.messageId}
                message={message}
                onSelect={(event, message) => handleMessageSelect(event, message)}
                onFlag={(event, message) => handleMessageFlag(event, message)}
                onDelete={(event, message) => handleMessageDelete(event, message)}
              />
            ))
        ) : (
          <Typography sx={{ textAlign: "center", p: 1, fontWeight: "medium" }}>Your Inbox is empty.</Typography>
        )}
      </Grid>
    </Box>
  );
}

export default Inbox;
