import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import { motion } from 'framer-motion';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const faqs = [
  {
    question: 'When will MyReserve launch?',
    answer: 'We are planning to launch MyReserve in major cities within the next 3 months. Join our waitlist to be notified when we launch in your area.',
  },
  {
    question: 'Is it free to sign up?',
    answer: 'Yes, signing up for MyReserve is completely free for both shoppers and businesses. We believe in making food waste reduction accessible to everyone.',
  },
  {
    question: 'Which cities will be supported first?',
    answer: 'We will initially launch in Lagos, Abuja, and Port Harcourt, with plans to expand to other major cities based on demand and waitlist signups.',
  },
  {
    question: 'How will businesses list products?',
    answer: 'Businesses will have access to a simple dashboard where they can easily upload product details, set prices, and manage inventory. Our team will provide full support during onboarding.',
  },
];

const FAQSection = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box
      sx={{
        py: 8,
        background: 'linear-gradient(180deg, #0A1929 0%, #112240 100%)',
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h2"
          align="center"
          sx={{ mb: 6 }}
        >
          Frequently Asked Questions
        </Typography>
        <Box>
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Accordion
                expanded={expanded === `panel${index}`}
                onChange={handleChange(`panel${index}`)}
                sx={{
                  mb: 2,
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon color="primary" />}
                  aria-controls={`panel${index}bh-content`}
                  id={`panel${index}bh-header`}
                >
                  <Typography variant="h6">{faq.question}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography color="text.secondary">{faq.answer}</Typography>
                </AccordionDetails>
              </Accordion>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default FAQSection; 