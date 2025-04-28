import React from 'react';
import {
  Box,
  Container,
  Typography,
  Link,
  Grid,
  IconButton,
} from '@mui/material';
import { motion } from 'framer-motion';
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
} from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        background: 'linear-gradient(180deg, #112240 0%, #0A1929 100%)',
        color: 'text.secondary',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" color="primary.main" gutterBottom>
              MyReserve
            </Typography>
            <Typography variant="body2">
              Join us in our mission to reduce food waste and make sustainable shopping accessible to everyone.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Box component="nav">
              <Link href="/about" color="inherit" display="block" sx={{ mb: 1 }}>
                About
              </Link>
              <Link href="/contact" color="inherit" display="block" sx={{ mb: 1 }}>
                Contact Us
              </Link>
              <Link href="/privacy" color="inherit" display="block" sx={{ mb: 1 }}>
                Privacy Policy
              </Link>
              <Link href="/terms" color="inherit" display="block">
                Terms & Conditions
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Connect With Us
            </Typography>
            <Box>
              <IconButton color="inherit" aria-label="Facebook">
                <Facebook />
              </IconButton>
              <IconButton color="inherit" aria-label="Twitter">
                <Twitter />
              </IconButton>
              <IconButton color="inherit" aria-label="Instagram">
                <Instagram />
              </IconButton>
              <IconButton color="inherit" aria-label="LinkedIn">
                <LinkedIn />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Typography variant="body2">
            © {new Date().getFullYear()} MyReserve. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 