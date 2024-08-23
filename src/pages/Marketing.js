// src/pages/Marketing.js
import React, { useState } from 'react';
import { Grid, Paper, Typography, Button, TextField, MenuItem, Select, FormControl, InputLabel } from '@mui/material';

const Marketing = () => {
  const [selectedTemplate, setSelectedTemplate] = useState('');
  const [customMessage, setCustomMessage] = useState('');
  const [recipients, setRecipients] = useState('');
  const [templateContent, setTemplateContent] = useState('');

  const templates = [
    { id: 1, name: 'Holiday Promotion', content: '<p>Happy Holidays! Enjoy a special discount...</p>' },
    { id: 2, name: 'Loyalty Program', content: '<p>Thank you for being a loyal customer. Here is a reward...</p>' },
    { id: 3, name: 'New Year Offer', content: '<p>Start the new year with exclusive offers...</p>' },
    // Add more templates here...
  ];

  const handleTemplateChange = (event) => {
    const template = templates.find(t => t.name === event.target.value);
    setSelectedTemplate(template.name);
    setTemplateContent(template.content);
  };

  const handleSendEmail = () => {
    // Logic for sending the email goes here.
    // This would typically involve making an API call to your backend.
    console.log('Sending email to:', recipients);
    console.log('Using template:', selectedTemplate);
    console.log('With custom message:', customMessage);
  };

  const customColor = '#4E3827';

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>Email Campaign Overview</Typography>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Paper style={{ padding: '20px', textAlign: 'center' }}>
            <Typography variant="h6">Total Campaigns</Typography>
            <Typography variant="h4">15</Typography>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper style={{ padding: '20px', textAlign: 'center' }}>
            <Typography variant="h6">Open Rate</Typography>
            <Typography variant="h4">45%</Typography>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper style={{ padding: '20px', textAlign: 'center' }}>
            <Typography variant="h6">Click-Through Rate</Typography>
            <Typography variant="h4">10%</Typography>
          </Paper>
        </Grid>
      </Grid>

      <Typography variant="h4" style={{ marginTop: '40px', marginBottom: '20px' }}>Send Email Campaign</Typography>
      <Paper style={{ padding: '20px' }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <FormControl fullWidth variant="outlined">
              <InputLabel>Select Template</InputLabel>
              <Select
                value={selectedTemplate}
                onChange={handleTemplateChange}
                label="Select Template"
              >
                {templates.map((template) => (
                  <MenuItem key={template.id} value={template.name}>
                    {template.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          {selectedTemplate && (
            <Grid item xs={12}>
              <Typography variant="h6">Template Preview:</Typography>
              <div
                style={{
                  padding: '10px',
                  backgroundColor: '#f5f5f5',
                  borderRadius: '5px',
                  marginBottom: '20px',
                }}
                dangerouslySetInnerHTML={{ __html: templateContent }}
              />
            </Grid>
          )}

          <Grid item xs={12}>
            <TextField
              label="Custom Message"
              multiline
              rows={4}
              variant="outlined"
              fullWidth
              value={customMessage}
              onChange={(e) => setCustomMessage(e.target.value)}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Recipients (comma-separated emails)"
              variant="outlined"
              fullWidth
              value={recipients}
              onChange={(e) => setRecipients(e.target.value)}
            />
          </Grid>

          <Grid item xs={12} style={{ textAlign: 'right' }}>
            {/* <Button variant="contained" color="primary" onClick={handleSendEmail}> */}
            <Button
            variant="contained"
            style={{ backgroundColor: customColor, color: '#fff' }} // Custom button color
            onClick={handleSendEmail}
            >
              Send Campaign
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Marketing;
