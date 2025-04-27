import { Request, Response } from 'express';
import { ContactMessage } from '../models/contactMessage';
import { sendEmail } from '../utils/email';

const sanitizeInput = (input: string): string => {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
};

export const submitContactForm = async (req: Request, res: Response) => {
  try {
    const { name, email, subject, message } = req.body;

    // Sanitize all inputs
    const sanitizedData = {
      name: sanitizeInput(name),
      email: sanitizeInput(email),
      subject: sanitizeInput(subject),
      message: sanitizeInput(message),
    };

    // Create new contact message
    const contactMessage = new ContactMessage(sanitizedData);
    await contactMessage.save();

    // Send email notification
    const emailContent = `
      New Contact Message:
      From: ${sanitizedData.name} (${sanitizedData.email})
      Subject: ${sanitizedData.subject}

      Message:
      ${sanitizedData.message}
    `;

    await sendEmail({
      to: process.env.ADMIN_EMAIL || 'support@myreserve.com',
      subject: `New Contact Message: ${sanitizedData.subject}`,
      text: emailContent,
    });

    res.status(200).json({ message: 'Message received successfully!' });
  } catch (error) {
    console.error('Error submitting contact form:', error);
    res.status(500).json({ error: 'Failed to send message. Please try again later.' });
  }
}; 