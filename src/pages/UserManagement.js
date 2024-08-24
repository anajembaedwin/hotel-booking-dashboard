import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, IconButton, Paper, Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography, Avatar, Box, Card, CardContent, CardMedia } from '@mui/material';
import { Edit, Delete, CameraAlt } from '@mui/icons-material';

const UserManagement = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', username: 'johndoe', password: 'password123', role: 'Admin', picture: '/path/to/avatar1.jpg' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', username: 'janesmith', password: 'password123', role: 'Manager', picture: '/path/to/avatar2.jpg' },
    // Add more user data here...
  ]);

  const [openEdit, setOpenEdit] = useState(false);
  const [selectedUser, setSelectedUser] = useState(users[0]); // Default to the first user or set to null if you prefer an empty state

  const handleEditClick = (user) => {
    setSelectedUser(user);
    setOpenEdit(true);
  };

  const handleDeleteClick = (userId) => {
    setUsers(users.filter((user) => user.id !== userId));
    if (selectedUser && selectedUser.id === userId) {
      setSelectedUser(users[0] || null); // Default to the first user or null if no users left
    }
  };

  const handleSave = () => {
    setUsers(users.map((user) => (user.id === selectedUser.id ? selectedUser : user)));
    setOpenEdit(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedUser({ ...selectedUser, [name]: value });
  };

  const handlePictureUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedUser({ ...selectedUser, picture: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRowClick = (user) => {
    setSelectedUser(user);
  };

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>User Management</Typography>

      {/* User Profile Section */}
      <Card style={{ marginBottom: '20px' }}>
        <CardContent>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Avatar
              src={selectedUser?.picture || '/path/to/default-avatar.jpg'}
              alt={selectedUser?.name || 'Default Avatar'}
              style={{ width: 100, height: 100, marginBottom: '10px' }}
            />
            <input
              type="file"
              accept="image/*"
              style={{ display: 'none' }}
              id="profile-picture-upload"
              onChange={handlePictureUpload}
            />
            <label htmlFor="profile-picture-upload">
              <IconButton component="span">
                <CameraAlt color="primary" />
              </IconButton>
            </label>
            <Typography variant="h6">{selectedUser?.name || 'No User Selected'}</Typography>
            <Box display="flex" flexDirection="column" alignItems="center" marginTop={1}>
              <Typography variant="body1"><strong>Email:</strong> {selectedUser?.email || 'N/A'}</Typography>
              <Typography variant="body1"><strong>Username:</strong> {selectedUser?.username || 'N/A'}</Typography>
              <Typography variant="body1"><strong>Role:</strong> {selectedUser?.role || 'N/A'}</Typography>
              <Button 
                variant="contained" 
                color="primary" 
                onClick={() => handleEditClick(selectedUser)}
                style={{ marginTop: '10px', backgroundColor: '#4E3827', color: '#e4e2dd' }}
                >
                Edit Profile
              </Button>
            </Box>
          </Box>
        </CardContent>
      </Card>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper style={{ padding: '20px' }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Username</TableCell>
                  <TableCell>Role</TableCell>
                  <TableCell align="right">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((user) => (
                  <TableRow
                    key={user.id}
                    onClick={() => handleRowClick(user)}
                    style={{ cursor: 'pointer', '&:hover': { backgroundColor: '#f5f5f5' } }}
                  >
                    <TableCell>{user.id}</TableCell>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.username}</TableCell>
                    <TableCell>{user.role}</TableCell>
                    <TableCell align="right">
                      <IconButton onClick={() => handleEditClick(user)} color="primary">
                        <Edit />
                      </IconButton>
                      <IconButton onClick={() => handleDeleteClick(user.id)} color="secondary">
                        <Delete />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </Grid>
      </Grid>

      {/* Edit User Dialog */}
      <Dialog open={openEdit} onClose={() => setOpenEdit(false)}>
        <DialogTitle>Edit User</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            label="Name"
            name="name"
            value={selectedUser?.name || ''}
            onChange={handleInputChange}
            fullWidth
          />
          <TextField
            margin="dense"
            label="Email"
            name="email"
            value={selectedUser?.email || ''}
            onChange={handleInputChange}
            fullWidth
          />
          <TextField
            margin="dense"
            label="Username"
            name="username"
            value={selectedUser?.username || ''}
            onChange={handleInputChange}
            fullWidth
          />
          <TextField
            margin="dense"
            label="Password"
            name="password"
            value={selectedUser?.password || ''}
            onChange={handleInputChange}
            fullWidth
            type="password"
          />
          <TextField
            margin="dense"
            label="Role"
            name="role"
            value={selectedUser?.role || ''}
            onChange={handleInputChange}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenEdit(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default UserManagement;
