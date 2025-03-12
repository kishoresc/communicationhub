import { Container, Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
    >
      <Container sx={{ textAlign: "center", mt: 5 }}>
        <Typography variant="h3" gutterBottom>
          🌍 Connecting People Across Faiths & Interests
        </Typography>
        <Typography variant="h6" gutterBottom>
          Discover, connect, and participate in meaningful community events.
        </Typography>
        <Box mt={3}>
          <motion.div whileHover={{ scale: 1.1 }}>
            <Button
              variant="contained"
              sx={{
                background: "linear-gradient(135deg, #ff9a8b, #5390d9)",
                color: "white",
                padding: "12px 20px",
                fontSize: "18px",
              }}
              onClick={() => navigate("/events")}
            >
              🚀 Explore Events
            </Button>
          </motion.div>
        </Box>
      </Container>
    </motion.div>
  );
}
