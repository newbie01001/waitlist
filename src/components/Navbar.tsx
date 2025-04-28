import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  return (
    <AppBar position="sticky" elevation={0} sx={{ backgroundColor: 'transparent' }}>
      <Container maxWidth="lg">
        <Toolbar>
          <Typography
            variant="h6"
            component={RouterLink}
            to="/"
            sx={{
              flexGrow: 1,
              textDecoration: 'none',
              color: 'primary.main',
              fontWeight: 700,
            }}
          >
            MyReserve
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <ScrollLink
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
            >
              <Button sx={{ color: 'text.primary' }}>
                About
              </Button>
            </ScrollLink>
            <ScrollLink
              to="faqs"
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
            >
              <Button sx={{ color: 'text.primary' }}>
                FAQs
              </Button>
            </ScrollLink>
            <ScrollLink
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
            >
              <Button sx={{ color: 'text.primary' }}>
                Contact
              </Button>
            </ScrollLink>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar; 