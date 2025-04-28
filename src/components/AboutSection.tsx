import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
} from '@mui/material';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <Box
      id="about"
      sx={{
        py: 8,
        background: 'linear-gradient(180deg, #112240 0%, #0A1929 100%)',
        minHeight: '100vh',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          align="center"
          sx={{ mb: 6 }}
        >
          About MyReserve
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  height: '100%',
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <Typography variant="h5" gutterBottom>
                  Our Mission
                </Typography>
                <Typography color="text.secondary">
                MyReserve was founded to fight food waste while helping businesses maximize revenue and shoppers save money.
                We create a sustainable marketplace where everyone benefits — businesses, customers, and the planet.
                </Typography>
              </Paper>
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
                  height: '100%',
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <Typography variant="h5" gutterBottom>
                  How It Works
                </Typography>
                <Typography color="text.secondary">
                Businesses list discounted items that are nearing expiration.
                Shoppers browse, reserve online, and pick up at the store.

                It's simple: Save Food. Save Money. Save the Planet.
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutSection; 