import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Stack,
  Avatar,
  TextField,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Badge,
  IconButton
} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

export default function Chat() {
  const { user, users } = useContext(AuthContext);
  const navigate = useNavigate();
  const [selectedUser, setSelectedUser] = useState(null);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  // Mock messages data
  const mockMessages = {
    "1": [
      { id: 1, sender: "1", text: "Hey there!", timestamp: "10:30 AM" },
      { id: 2, sender: user?.id, text: "Hi! How are you?", timestamp: "10:32 AM" },
    ],
    "2": [
      { id: 1, sender: "2", text: "Hello!", timestamp: "9:15 AM" },
      { id: 2, sender: user?.id, text: "Hi! What's up?", timestamp: "9:20 AM" },
    ]
  };

  const handleUserClick = (userId) => {
    const userToSelect = users?.find(u => u.id === userId);
    if (userToSelect) {
      setSelectedUser(userToSelect);
      setMessages(mockMessages[userId] || []);
    }
  };

  const handleSendMessage = () => {
    if (message.trim() && selectedUser && user?.id) {
      const newMessage = {
        id: messages.length + 1,
        sender: user.id,
        text: message,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages([...messages, newMessage]);
      setMessage("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  // Filter out the current user from the users list
  const otherUsers = users?.filter(u => u.id !== user?.id) || [];

  return (
    <Box sx={{
      maxWidth: "1200px",
      mx: "auto",
      p: { xs: 2, sm: 3 },
      minHeight: "100vh",
    }}>
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        align="center"
        sx={{ fontWeight: "bold", color: "#1976d2", mb: 4 }}
      >
        Chat
      </Typography>

      <Box sx={{ 
        display: 'flex', 
        height: '70vh',
        boxShadow: 3,
        borderRadius: 2,
        overflow: 'hidden'
      }}>
        {/* Users List */}
        <Box sx={{
          width: '30%',
          borderRight: '1px solid #e0e0e0',
          bgcolor: '#f5f5f5',
          overflowY: 'auto'
        }}>
          <Typography variant="h6" sx={{
            p: 2,
            bgcolor: '#1976d2',
            color: 'white',
            fontWeight: 'bold'
          }}>
            Contacts
          </Typography>
          
          {otherUsers.length > 0 ? (
            <List sx={{ p: 0 }}>
              {otherUsers.map((contact) => (
                <ListItem 
                  key={contact.id}
                  button 
                  onClick={() => handleUserClick(contact.id)}
                  sx={{
                    bgcolor: selectedUser?.id === contact.id ? '#e3f2fd' : 'inherit',
                    '&:hover': { bgcolor: '#eeeeee' }
                  }}
                >
                  <ListItemAvatar>
                    <Badge
                      overlap="circular"
                      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                      variant="dot"
                      color="success"
                    >
                      <Avatar alt={contact.username}>
                        {contact.username?.charAt(0).toUpperCase()}
                      </Avatar>
                    </Badge>
                  </ListItemAvatar>
                  <ListItemText 
                    primary={contact.username} 
                    secondary={contact.isOnline ? "Online" : "Offline"} 
                    secondaryTypographyProps={{
                      color: contact.isOnline ? "success.main" : "text.secondary"
                    }}
                  />
                </ListItem>
              ))}
            </List>
          ) : (
            <Box sx={{ p: 2, textAlign: 'center' }}>
              <Typography color="textSecondary">No other users available</Typography>
            </Box>
          )}
        </Box>
        
        {/* Chat Area */}
        <Box sx={{
          width: '70%',
          display: 'flex',
          flexDirection: 'column',
          bgcolor: 'white'
        }}>
          {selectedUser ? (
            <>
              <Box sx={{
                p: 2,
                borderBottom: '1px solid #e0e0e0',
                display: 'flex',
                alignItems: 'center',
                bgcolor: '#f5f5f5'
              }}>
                <Avatar sx={{ mr: 2 }}>
                  {selectedUser.username?.charAt(0).toUpperCase()}
                </Avatar>
                <Typography variant="h6" fontWeight="bold">
                  {selectedUser.username}
                </Typography>
              </Box>
              
              <Box sx={{
                flex: 1,
                p: 2,
                overflowY: 'auto',
                bgcolor: '#fafafa'
              }}>
                {messages.map((msg) => (
                  <Box key={msg.id} sx={{
                    display: 'flex',
                    justifyContent: msg.sender === user?.id ? 'flex-end' : 'flex-start',
                    mb: 2
                  }}>
                    <Box sx={{
                      maxWidth: '70%',
                      p: 1.5,
                      borderRadius: msg.sender === user?.id 
                        ? '18px 18px 0 18px' 
                        : '18px 18px 18px 0',
                      bgcolor: msg.sender === user?.id ? '#1976d2' : '#e0e0e0',
                      color: msg.sender === user?.id ? 'white' : 'black'
                    }}>
                      <Typography variant="body1">{msg.text}</Typography>
                      <Typography variant="caption" sx={{
                        display: 'block',
                        textAlign: 'right',
                        color: msg.sender === user?.id ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.5)'
                      }}>
                        {msg.timestamp}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
              
              <Box sx={{
                p: 2,
                borderTop: '1px solid #e0e0e0',
                display: 'flex',
                alignItems: 'center',
                bgcolor: 'white'
              }}>
                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder="Type a message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  sx={{ mr: 1 }}
                />
                <IconButton 
                  color="primary" 
                  onClick={handleSendMessage}
                  disabled={!message.trim()}
                >
                  <SendIcon />
                </IconButton>
              </Box>
            </>
          ) : (
            <Box sx={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              bgcolor: '#fafafa'
            }}>
              <Typography variant="h6" color="textSecondary">
                {otherUsers.length > 0 ? 'Select a user to start chatting' : 'No users available to chat'}
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
}