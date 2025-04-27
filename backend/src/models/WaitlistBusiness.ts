import mongoose, { Document } from 'mongoose';

export interface IWaitlistBusiness extends Document {
  name: string;
  email: string;
  businessName: string;
  businessType: string;
  location: string;
  createdAt: Date;
}

const waitlistBusinessSchema = new mongoose.Schema<IWaitlistBusiness>({
  name: {
    type: String,
    required: [true, 'Name is required'],
    minlength: [2, 'Name must be at least 2 characters long']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email']
  },
  businessName: {
    type: String,
    required: [true, 'Business name is required'],
    minlength: [2, 'Business name must be at least 2 characters long']
  },
  businessType: {
    type: String,
    required: [true, 'Business type is required'],
    enum: ['restaurant', 'bar', 'cafe', 'other']
  },
  location: {
    type: String,
    required: [true, 'Location is required'],
    minlength: [2, 'Location must be at least 2 characters long']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export const WaitlistBusiness = mongoose.model<IWaitlistBusiness>('WaitlistBusiness', waitlistBusinessSchema); 