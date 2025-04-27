import mongoose from 'mongoose';

const businessWaitlistSchema = new mongoose.Schema({
  businessName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  location: {
    type: String,
    required: true,
    trim: true
  },
  businessType: {
    type: String,
    required: true,
    enum: ['Grocery', 'Bakery', 'Restaurant', 'Other'],
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export const BusinessWaitlist = mongoose.model('BusinessWaitlist', businessWaitlistSchema); 