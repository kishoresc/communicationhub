import { Container, Typography, TextField, MenuItem, Grid } from "@mui/material";
import { useState } from "react";
import { motion } from "framer-motion";
import EventCard from "../component/EventCard";
import EventForm from "../component/EventForm";

export default function Events() {
  const [events, setEvents] = useState([]);
  const [filter, setFilter] = useState("");

  const addEvent = (event) => setEvents([...events, event]);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.5 }}
    >
      <Container sx={{ mt: 5 }}>
        <Typography variant="h4" gutterBottom>📅 Events</Typography>

        <TextField
          select
          label="Filter by Category"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          sx={{ mb: 3, width: "200px" }}
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value="Religious">Religious</MenuItem>
          <MenuItem value="Social">Social</MenuItem>
          <MenuItem value="Charity">Charity</MenuItem>
        </TextField>

        <Grid container spacing={2}>
          {events
            .filter(event => !filter || event.category === filter)
            .map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Grid item xs={12} sm={6} md={4}>
                  <EventCard event={event} />
                </Grid>
              </motion.div>
            ))}
        </Grid>

        <EventForm addEvent={addEvent} />
      </Container>
    </motion.div>
  );
}
