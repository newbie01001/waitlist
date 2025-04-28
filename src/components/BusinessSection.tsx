import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  MenuItem,
} from '@mui/material';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import axios from 'axios';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const businessTypes = [
  'Grocery',
  'Bakery',
  'Restaurant',
  'Other',
];

const BusinessSection = () => {
  const [formData, setFormData] = useState({
    businessName: '',
    email: '',
    location: '',
    businessType: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post('/api/waitlist/business', formData);
      toast.success('Successfully added to business waitlist!');
      setFormData({
        businessName: '',
        email: '',
        location: '',
        businessType: '',
      });
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'Failed to add to waitlist');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      id="business-section"
      sx={{
        py: 8,
        background: 'linear-gradient(180deg, #0A1929 0%, #112240 100%)',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Typography variant="h2" gutterBottom>
                Turn near-expiry stock into profit with zero waste.
              </Typography>
              <List>
                {[
                  'List near-expiry products quickly',
                  'Attract eco-conscious customers',
                  'Easy-to-use business dashboard',
                  'Improve your bottom line and reduce waste',
                ].map((text, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <CheckCircleIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                ))}
              </List>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  borderRadius: 4,
                }}
                
              >
                 {/* 🎯 Add Form Title Here */}
    <Typography
      variant="h5"
      component="h3"
      gutterBottom
      align="center"
      sx={{ fontWeight: 'bold', mb: 2 }}
    >
      Join the Business Early Access List
    </Typography>
                <form onSubmit={handleSubmit}>
                  <TextField
                    fullWidth
                    label="Business Name"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    margin="normal"
                    required
                  />
                  <TextField
                    fullWidth
                    label="Business Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    margin="normal"
                    required
                  />
                  <TextField
                    fullWidth
                    label="Location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    margin="normal"
                    required
                  />
                  <TextField
                    fullWidth
                    select
                    label="Business Type"
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleChange}
                    margin="normal"
                    required
                  >
                    {businessTypes.map((type) => (
                      <MenuItem key={type} value={type}>
                        {type}
                      </MenuItem>
                    ))}
                  </TextField>
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    size="large"
                    sx={{ mt: 3 }}
                    disabled={loading}
                  >
                    {loading ? 'Joining...' : 'Join Business Waitlist'}
                  </Button>
                </form>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default BusinessSection; 