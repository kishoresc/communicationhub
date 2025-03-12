import { useState } from "react";
import { Button, TextField, MenuItem, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";

export default function EventForm({ addEvent }) {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ title: "", date: "", location: "", category: "", description: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    addEvent(form);
    setForm({ title: "", date: "", location: "", category: "", description: "" });
    setOpen(false);
  };

  return (
    <>
      <Button variant="contained" onClick={() => setOpen(true)}>+ Add Event</Button>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Add a New Event</DialogTitle>
        <DialogContent>
          <TextField label="Title" name="title" value={form.title} onChange={handleChange} fullWidth required sx={{ mb: 2 }} />
          <TextField type="date" name="date" value={form.date} onChange={handleChange} fullWidth required sx={{ mb: 2 }} />
          <TextField label="Location" name="location" value={form.location} onChange={handleChange} fullWidth required sx={{ mb: 2 }} />
          <TextField select label="Category" name="category" value={form.category} onChange={handleChange} fullWidth required sx={{ mb: 2 }}>
            <MenuItem value="Religious">Religious</MenuItem>
            <MenuItem value="Social">Social</MenuItem>
            <MenuItem value="Charity">Charity</MenuItem>
          </TextField>
          <TextField label="Description" name="description" value={form.description} onChange={handleChange} multiline rows={3} fullWidth required sx={{ mb: 2 }} />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={handleSubmit} variant="contained" color="primary">Add Event</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
