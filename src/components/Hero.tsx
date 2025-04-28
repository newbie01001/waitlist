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
          {/* Text Section */}
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
                Rescue Food. Save Money. Join the MyReserve Movement.
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  mb: 4,
                  color: 'text.secondary',
                  maxWidth: '600px',
                }}
              >
                Find discounted groceries nearing expiry from local stores — or list your soon-to-expire inventory and reduce waste.
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

          {/* Dashboard Mockup Section */}
          <Box sx={{ flex: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Box
                sx={{
                  backgroundColor: '#0B0F1A',
                  borderRadius: '30px',
                  p: 2,
                  width: 280,
                  height: 550,
                  border: '4px solid #00F0FF',
                  boxShadow: '0 0 30px rgba(0, 240, 255, 0.3)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  overflow: 'hidden',
                  position: 'relative',
                }}
              >
                {/* Top Bar */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: 'gray', mb: 2 }}>
                  <span>9:41</span>
                  <Box sx={{ display: 'flex', gap: 0.5 }}>
                    <Box sx={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: 'green' }} />
                    <Box sx={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: 'yellow' }} />
                    <Box sx={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: 'red' }} />
                  </Box>
                </Box>

                {/* Dashboard Content */}
                <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Box sx={{ textAlign: 'center', mb: 2 }}>
                    <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold' }}>MyReserve</Typography>
                    <Typography sx={{ fontSize: '12px', color: 'gray' }}>Dashboard</Typography>
                  </Box>

                  {/* Card: Savings */}
                  <Box sx={{ backgroundColor: '#141A29', borderRadius: 4, p: 2 }}>
                    <Typography sx={{ color: 'gray', fontSize: '14px' }}>This Month's Savings</Typography>
                    <Typography sx={{ color: '#00F0FF', fontSize: '24px', fontWeight: 'bold' }}>₦8,200</Typography>
                    <Typography sx={{ color: 'gray', fontSize: '12px' }}>4 reservations made</Typography>
                  </Box>

                  {/* Card: CO2 Saved */}
                  <Box sx={{ backgroundColor: '#141A29', borderRadius: 4, p: 2 }}>
                    <Typography sx={{ color: 'gray', fontSize: '14px' }}>CO₂ Saved</Typography>
                    <Typography sx={{ color: '#00FFAB', fontSize: '24px', fontWeight: 'bold' }}>12.5kg</Typography>
                    <Typography sx={{ color: 'gray', fontSize: '12px' }}>Helping the planet 🌍</Typography>
                  </Box>

                  {/* Card: Reservations */}
                  <Box sx={{ backgroundColor: '#141A29', borderRadius: 4, p: 2 }}>
                    <Typography sx={{ color: 'gray', fontSize: '14px' }}>Active Reservations</Typography>
                    <Typography sx={{ color: '#FFD700', fontSize: '24px', fontWeight: 'bold' }}>2 Items</Typography>
                    <Typography sx={{ color: 'gray', fontSize: '12px' }}>Pickup before 5 PM</Typography>
                  </Box>
                </Box>

                {/* Bottom Nav */}
                <Box sx={{ display: 'flex', justifyContent: 'space-around', mt: 2, color: 'gray', fontSize: '12px' }}>
                  <Box sx={{ textAlign: 'center' }}>
                    <div>🏠</div>
                    <div>Home</div>
                  </Box>
                  <Box sx={{ textAlign: 'center' }}>
                    <div>💾</div>
                    <div>Saved</div>
                  </Box>
                  <Box sx={{ textAlign: 'center' }}>
                    <div>☰</div>
                    <div>Menu</div>
                  </Box>
                </Box>
              </Box>
            </motion.div>
          </Box>

        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
