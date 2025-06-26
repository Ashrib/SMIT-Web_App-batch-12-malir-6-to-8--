import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext.jsx";
import {
  Box,
  Typography,
  Avatar,
  TextField,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  IconButton,
  Divider,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

export default function Chat() {
  const { user, users } = useContext(AuthContext);
  const [selectedUser, setSelectedUser] = useState(null);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState({}); // { userId: [msg, ...] }

  // Handle user click
  const handleUserClick = (u) => {
    setSelectedUser(u);
    // Optionally, fetch messages from backend here
  };

  // Handle send message
  const handleSendMessage = async () => {
    if (!message.trim() || !selectedUser) return;
    const msgObj = {
      to: selectedUser._id,
      from: user._id,
      text: message,
    };
    try {
      // Send to backend
      await fetch("http://localhost:4000/sendMessage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(msgObj),
      });
      // Add to local messages
      setMessages((prev) => ({
        ...prev,
        [selectedUser._id]: [
          ...(prev[selectedUser._id] || []),
          { ...msgObj, self: true, createdAt: new Date().toLocaleTimeString() },
        ],
      }));
      setMessage("");
    } catch (e) {
      alert("Failed to send message");
    }
  };

  // Handle Enter key
  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSendMessage();
  };

  // Filter out self from users
  const otherUsers = (users || []).filter((u) => u._id !== user?._id);

  return (
    <Box
      sx={{
        display: "flex",
        height: "80vh",
        maxWidth: 900,
        mx: "auto",
        mt: 5,
        boxShadow: 3,
        borderRadius: 2,
        overflow: "hidden",
        bgcolor: "#fff",
      }}
    >
      {/* Left: Users List */}
      <Box sx={{ width: "32%", borderRight: "1px solid #eee", bgcolor: "#f7f7f7" }}>
        <Typography variant="h6" sx={{ p: 2, fontWeight: "bold" }}>
          Users
        </Typography>
        <Divider />
        <List>
          {otherUsers.length === 0 && (
            <Typography sx={{ p: 2 }} color="text.secondary">
              No users found
            </Typography>
          )}
          {otherUsers.map((u) => (
            <ListItem
              button
              key={u._id}
              selected={selectedUser?._id === u._id}
              onClick={() => handleUserClick(u)}
              sx={{
                bgcolor: selectedUser?._id === u._id ? "#e3f2fd" : "inherit",
                "&:hover": { bgcolor: "#e0e0e0" },
              }}
            >
              <ListItemAvatar>
                <Avatar>{u.username?.[0]?.toUpperCase()}</Avatar>
              </ListItemAvatar>
              <ListItemText primary={u.username} />
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Right: Chat Area */}
      <Box sx={{ width: "68%", display: "flex", flexDirection: "column" }}>
        {!selectedUser ? (
          <Box
            sx={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              bgcolor: "#fafafa",
            }}
          >
            <Typography variant="h5" color="text.secondary">
              let's chat
            </Typography>
          </Box>
        ) : (
          <>
            <Box
              sx={{
                p: 2,
                borderBottom: "1px solid #eee",
                display: "flex",
                alignItems: "center",
                bgcolor: "#f5f5f5",
              }}
            >
              <Avatar sx={{ mr: 2 }}>
                {selectedUser.username?.[0]?.toUpperCase()}
              </Avatar>
              <Typography variant="h6">{selectedUser.username}</Typography>
            </Box>
            <Box
              sx={{
                flex: 1,
                p: 2,
                overflowY: "auto",
                bgcolor: "#fafafa",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {(messages[selectedUser._id] || []).length === 0 ? (
                <Typography color="text.secondary" align="center" sx={{ mt: 4 }}>
                  No messages yet.
                </Typography>
              ) : (
                (messages[selectedUser._id] || []).map((msg, idx) => (
                  <Box
                    key={idx}
                    sx={{
                      display: "flex",
                      justifyContent: msg.self ? "flex-end" : "flex-start",
                      mb: 1.5,
                    }}
                  >
                    <Box
                      sx={{
                        maxWidth: "70%",
                        p: 1.2,
                        borderRadius: msg.self
                          ? "18px 18px 0 18px"
                          : "18px 18px 18px 0",
                        bgcolor: msg.self ? "#1976d2" : "#e0e0e0",
                        color: msg.self ? "white" : "black",
                      }}
                    >
                      <Typography variant="body1">{msg.text}</Typography>
                      <Typography
                        variant="caption"
                        sx={{
                          display: "block",
                          textAlign: "right",
                          color: msg.self
                            ? "rgba(255,255,255,0.7)"
                            : "rgba(0,0,0,0.5)",
                        }}
                      >
                        {msg.createdAt || ""}
                      </Typography>
                    </Box>
                  </Box>
                ))
              )}
            </Box>
            <Box
              sx={{
                p: 2,
                borderTop: "1px solid #eee",
                display: "flex",
                alignItems: "center",
                bgcolor: "white",
              }}
            >
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Type a message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyDown}
                sx={{ mr: 1 }}
                disabled={!selectedUser}
              />
              <IconButton
                color="primary"
                onClick={handleSendMessage}
                disabled={!message.trim() || !selectedUser}
              >
                <SendIcon />
              </IconButton>
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
}