import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          CommunionHub
        </Typography>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/events">Events</Button>
      </Toolbar>
    </AppBar>
  );
}
