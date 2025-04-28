import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="sticky" elevation={0} sx={{ backgroundColor: 'transparent' }}>
      <Container maxWidth="lg">
        <Toolbar>
          <Typography
            variant="h6"
            component={Link}
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
            <Button
              component={Link}
              to="/about"
              sx={{ color: 'text.primary' }}
            >
              About
            </Button>
            <Button
              component={Link}
              to="/faqs"
              sx={{ color: 'text.primary' }}
            >
              FAQs
            </Button>
            <Button
              component={Link}
              to="/contact"
              sx={{ color: 'text.primary' }}
            >
              Contact
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar; 