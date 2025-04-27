import mongoose, { Document } from 'mongoose';

export interface IWaitlistUser extends Document {
  name: string;
  email: string;
  location: string;
  createdAt: Date;
}

const waitlistUserSchema = new mongoose.Schema<IWaitlistUser>({
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

export const WaitlistUser = mongoose.model<IWaitlistUser>('WaitlistUser', waitlistUserSchema); 