import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const WhySection = () => {
  return (
    <Box
      sx={{
        py: 8,
        background: 'linear-gradient(180deg, #112240 0%, #0A1929 100%)',
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h3" align="center" gutterBottom>
          Why MyReserve?
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Paper
                sx={{
                  p: 4,
                  height: '100%',
                  background: 'rgba(17, 34, 64, 0.8)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <Typography variant="h5" gutterBottom>
                  For Users
                </Typography>
                <Typography variant="body1">
                  Affordable shopping meets sustainability. Join thousands of eco-conscious shoppers who are saving money while making a positive impact.
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Paper
                sx={{
                  p: 4,
                  height: '100%',
                  background: 'rgba(17, 34, 64, 0.8)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <Typography variant="h5" gutterBottom>
                  For Businesses
                </Typography>
                <Typography variant="body1">
                  Inventory turnover meets environmental impact. Transform your near-expiry stock into profit while reducing food waste.
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
        <Box sx={{ mt: 8 }}>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={4}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                <Paper
                  sx={{
                    p: 4,
                    textAlign: 'center',
                    background: 'rgba(17, 34, 64, 0.8)',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  <Typography variant="h4" color="primary" gutterBottom>
                    30%
                  </Typography>
                  <Typography variant="body1">
                    of food goes to waste — together, we change that.
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={4}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Paper
                  sx={{
                    p: 4,
                    textAlign: 'center',
                    background: 'rgba(17, 34, 64, 0.8)',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  <Typography variant="h4" color="primary" gutterBottom>
                    50%
                  </Typography>
                  <Typography variant="body1">
                    average savings for early shoppers
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default WhySection; 