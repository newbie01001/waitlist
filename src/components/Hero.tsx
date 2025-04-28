import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(180deg, #0A1929 0%, #112240 100%)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 50% 50%, rgba(0, 240, 255, 0.1) 0%, transparent 70%)',
          zIndex: 0,
        },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            gap: 4,
            position: 'relative',
            zIndex: 1,
          }}
        >
          <Box sx={{ flex: 1 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="h1"
                sx={{
                  mb: 3,
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  lineHeight: 1.2,
                  background: 'linear-gradient(90deg, #FFFFFF 0%, #00F0FF 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Save Food. Save Money. Join the Movement.
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  mb: 4,
                  color: 'text.secondary',
                  maxWidth: '600px',
                }}
              >
                Get early access to MyReserve and be among the first to transform the way you shop — or sell.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => document.getElementById('shopper-section')?.scrollIntoView({ behavior: 'smooth' })}
                  sx={{
                    background: 'linear-gradient(90deg, #00F0FF 0%, #00BFFF 100%)',
                    '&:hover': {
                      background: 'linear-gradient(90deg, #00BFFF 0%, #00F0FF 100%)',
                      boxShadow: '0 0 20px rgba(0, 240, 255, 0.5)',
                    },
                  }}
                >
                  I'm a Shopper
                </Button>
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => document.getElementById('business-section')?.scrollIntoView({ behavior: 'smooth' })}
                  sx={{
                    background: 'linear-gradient(90deg, #00F0FF 0%, #00BFFF 100%)',
                    '&:hover': {
                      background: 'linear-gradient(90deg, #00BFFF 0%, #00F0FF 100%)',
                      boxShadow: '0 0 20px rgba(0, 240, 255, 0.5)',
                    },
                  }}
                >
                  I'm a Business
                </Button>
              </Box>
            </motion.div>
          </Box>
          <Box sx={{ flex: 1, display: { xs: 'none', md: 'block' } }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Box
                component="img"
                src="/hero-illustration.svg"
                alt="MyReserve App Preview"
                sx={{
                  width: '100%',
                  maxWidth: 600,
                  height: 'auto',
                  filter: 'drop-shadow(0 0 20px rgba(0, 240, 255, 0.3))',
                }}
              />
            </motion.div>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero; 