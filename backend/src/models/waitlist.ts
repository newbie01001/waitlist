import mongoose from 'mongoose';

const userWaitlistSchema = new mongoose.Schema({
  name: {
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
  joinedAt: {
    type: Date,
    default: Date.now
  }
});

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
    trim: true
  },
  joinedAt: {
    type: Date,
    default: Date.now
  }
});

export const UserWaitlist = mongoose.model('UserWaitlist', userWaitlistSchema);
export const BusinessWaitlist = mongoose.model('BusinessWaitlist', businessWaitlistSchema); 