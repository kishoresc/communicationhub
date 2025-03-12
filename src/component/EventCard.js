import { Card, CardContent, Typography } from "@mui/material";
import { motion } from "framer-motion";

export default function EventCard({ event }) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Card
        sx={{
          borderRadius: "15px",
          background: "rgba(255, 255, 255, 0.1)",
          boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
          padding: "20px",
          transition: "0.3s",
        }}
      >
        <CardContent>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            {event.title}
          </Typography>
          <Typography color="textSecondary">{event.date}</Typography>
          <Typography color="textSecondary">{event.location}</Typography>
          <Typography variant="body2">{event.description}</Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
}
