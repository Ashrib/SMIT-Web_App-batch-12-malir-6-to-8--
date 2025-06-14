import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext.jsx";
import Cookies from "js-cookie";
import {
  Box,
  Grid,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  CircularProgress,
  Alert,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Dashboard() {
  const { user } = useContext(AuthContext);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const token = Cookies.get("token");
        if (!token) {
          setError("No token found. Please log in again.");
          navigate("/signin");
          return;
        }

        const response = await axios.get("http://localhost:4000/users", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUsers(response.data.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching users:", err);
        setError(err.response?.data?.message || "Failed to fetch users");
        setLoading(false);
      }
    };

    fetchUsers();
  }, [navigate]);

  return (
    <Box
      sx={{
        maxWidth: "1200px",
        mx: "auto",
        p: { xs: 2, sm: 3 },
        minHeight: "100vh",
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        align="center"
        sx={{ fontWeight: "bold", color: "#1976d2", mb: 2 }}
      >
        Dashboard
      </Typography>
      <Typography
        variant="subtitle1"
        gutterBottom
        align="center"
        sx={{ color: "#555", mb: 4 }}
      >
        {user ? `Welcome, ${user.username}!` : "Loading user..."}
      </Typography>

      {loading && (
        <Box sx={{ display: "flex", justifyContent: "center", my: 4 }}>
          <CircularProgress color="primary" />
        </Box>
      )}

      {error && (
        <Alert severity="error" sx={{ mb: 3, maxWidth: "600px", mx: "auto" }}>
          {error}
        </Alert>
      )}

      {!loading && !error && users.length === 0 && (
        <Typography variant="body1" align="center" sx={{ color: "#555" }}>
          No users found.
        </Typography>
      )}

      <Grid container spacing={4} justifyContent="center">
        {users.map((user) => (
          <Grid key={user._id}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                borderRadius: "12px",
                bgcolor: "#fff",
                transition: "transform 0.2s, box-shadow 0.2s",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
                },
              }}
            >
              <CardContent
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  p: 3,
                }}
              >
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ fontWeight: "medium", color: "#333", mb: 1 }}
                >
                  {user.username}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "#666", mb: 2, fontStyle: "italic" }}
                >
                  {user.email}
                </Typography>
                <Typography variant="body2" sx={{ color: "#666", mb: 1 }}>
                  Age: {user.age}
                </Typography>
                <Typography variant="body2" sx={{ color: "#666", mb: 1 }}>
                  Marks: {user.marks.join(", ") || "No marks available"}
                </Typography>
                <Typography variant="body2" sx={{ color: "#666", mb: 1 }}>
                  Total Marks: {user.total || "N/A"}
                </Typography>
                <Typography variant="body2" sx={{ color: "#666", mb: 1 }}>
                  Orders: {user.orders.length}
                </Typography>
                <Typography variant="body2" sx={{ color: "#666" }}>
                  Joined: {new Date(user.createdAt).toLocaleDateString()}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "center", p: 2, bgcolor: "#fafafa" }}>
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  sx={{ mr: 1, px: 3, borderRadius: "8px" }}
                >
                  Edit
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  size="small"
                  sx={{ px: 3, borderRadius: "8px" }}
                >
                  Delete
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}