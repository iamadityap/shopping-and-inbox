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
    fetchData("url")
      .then((response) => setEmails(response))
      .catch((error) => console.error(error));
  });

  function handleMessageSelect(event) {
    console.log(event);
  }

  function handleNewMessage(event) {
    console.log(`perform new message action`);
  }

  function handleDeleteAction(event) {
    console.log(`perform group delete action on selected e-mail list`);
  }

  function handleFlagAction(event) {
    console.log(`perform group flag action on selected e-mail list`);
  }

  function handleArchiveAction(event) {
    console.log(`perform group archive action on selected e-mail list`);
  }

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
            onClick={(event) => handleDeleteAction(event)}
          >
            Delete
          </Button>

          <Button variant="text" sx={{ color: "black", mr: 2 }} endIcon={<FlagIcon sx={{ p: 0.5 }} />} onClick={(event) => handleFlagAction(event)}>
            Flag
          </Button>

          <Button
            variant="text"
            sx={{ color: "black", mr: 2 }}
            endIcon={<ArchiveIcon sx={{ p: 0.5 }} />}
            onClick={(event) => handleArchiveAction(event)}
          >
            Archive
          </Button>
        </Grid>
      </Grid>

      <Grid container direction="column" sx={{ mt: 2 }}>
        {emails.length > 0 ? (
          emails.map((message) => <Mail message={message} isSelected={true} isFlagged={true} onSelect={(event) => handleMessageSelect(event)} />)
        ) : (
          <Typography sx={{ textAlign: "center", p: 1, fontWeight: "medium" }}>Your Inbox is empty.</Typography>
        )}
      </Grid>
    </Box>
  );
}

export default Inbox;
