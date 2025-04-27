import { Request, Response } from 'express';
import { WaitlistUser, IWaitlistUser } from '../models/WaitlistUser';
import { WaitlistBusiness, IWaitlistBusiness } from '../models/WaitlistBusiness';
import nodemailer from 'nodemailer';

// Email transporter configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false
  },
  secure: true,
  port: 465,
  host: 'smtp.gmail.com'
});

// Send confirmation email
const sendConfirmationEmail = async (email: string, type: 'user' | 'business') => {
  const subject = type === 'user' 
    ? 'Welcome to MyReserve - Early Access Confirmation'
    : 'Welcome to MyReserve for Businesses - Early Access Confirmation';

  const text = type === 'user'
    ? 'Thank you for joining the MyReserve waitlist! We\'ll notify you when we launch in your area.'
    : 'Thank you for joining the MyReserve Business waitlist! We\'ll be in touch soon with more information.';

  try {
    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: email,
      subject,
      text,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.response);
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};

export const addUserToWaitlist = async (req: Request, res: Response) => {
  try {
    const { name, email, location } = req.body;

    // Validate required fields
    if (!name || !email || !location) {
      return res.status(400).json({
        success: false,
        message: 'Please provide all required fields: name, email, and location'
      });
    }

    // Check if email already exists
    const existingUser = await WaitlistUser.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: 'This email is already registered in the waitlist'
      });
    }

    // Create new waitlist entry
    const newUser = await WaitlistUser.create({
      name,
      email,
      location
    });

    // Send confirmation email
    try {
      await sendConfirmationEmail(email, 'user');
    } catch (emailError) {
      console.error('Error sending confirmation email:', emailError);
      // Continue with the response even if email fails
    }

    return res.status(201).json({
      success: true,
      message: 'Successfully added to waitlist',
      data: newUser
    });
  } catch (error) {
    console.error('Error adding user to waitlist:', error);
    return res.status(500).json({
      success: false,
      message: 'An error occurred while adding to waitlist'
    });
  }
};

export const addBusinessToWaitlist = async (req: Request, res: Response) => {
  try {
    const { businessName, email, location, businessType } = req.body;

    // Validate required fields
    if (!businessName || !email || !location || !businessType) {
      return res.status(400).json({
        success: false,
        message: 'Please provide all required fields: businessName, email, location, and businessType'
      });
    }

    // Check if email already exists
    const existingBusiness = await WaitlistBusiness.findOne({ email });
    if (existingBusiness) {
      return res.status(400).json({
        success: false,
        message: 'This email is already registered in the waitlist'
      });
    }

    // Create new waitlist entry
    const newBusiness = await WaitlistBusiness.create({
      businessName,
      email,
      location,
      businessType
    });

    // Send confirmation email
    try {
      await sendConfirmationEmail(email, 'business');
    } catch (emailError) {
      console.error('Error sending confirmation email:', emailError);
      // Continue with the response even if email fails
    }

    return res.status(201).json({
      success: true,
      message: 'Successfully added to waitlist',
      data: newBusiness
    });
  } catch (error) {
    console.error('Error adding business to waitlist:', error);
    return res.status(500).json({
      success: false,
      message: 'An error occurred while adding to waitlist'
    });
  }
}; 