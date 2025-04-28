import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Link as MuiLink,
} from '@mui/material';
import { Link as ScrollLink } from 'react-scroll';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      sx={{
        py: 6,
        background: 'linear-gradient(180deg, #112240 0%, #0A1929 100%)',
        color: 'text.primary',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              MyReserve
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Reducing food waste, one reservation at a time. Join us in creating a sustainable future.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <ScrollLink
                to="about"
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
              >
                <MuiLink
                  component="button"
                  variant="body2"
                  color="text.secondary"
                  sx={{ textAlign: 'left', cursor: 'pointer' }}
                >
                  About
                </MuiLink>
              </ScrollLink>
              <ScrollLink
                to="faqs"
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
              >
                <MuiLink
                  component="button"
                  variant="body2"
                  color="text.secondary"
                  sx={{ textAlign: 'left', cursor: 'pointer' }}
                >
                  FAQs
                </MuiLink>
              </ScrollLink>
              <ScrollLink
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
              >
                <MuiLink
                  component="button"
                  variant="body2"
                  color="text.secondary"
                  sx={{ textAlign: 'left', cursor: 'pointer' }}
                >
                  Contact
                </MuiLink>
              </ScrollLink>
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
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} MyReserve. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 