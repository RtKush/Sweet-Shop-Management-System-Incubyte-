import request from 'supertest';
import app from '../app'; // Express app
import mongoose from 'mongoose';
import User from '../models/User';

// Test shuru hone se pehle DB connect karo aur saaf karo
beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI as string);
  await User.deleteMany({});
});

// Test khatam hone ke baad connection band karo
afterAll(async () => {
  await mongoose.connection.close();
});

describe('POST /api/auth/register', () => {
  it('should register a new user successfully', async () => {
    const response = await request(app)
      .post('/api/auth/register')
      .send({ username: 'testuser', password: 'password123' });

    expect(response.status).toBe(201);
    expect(response.body.message).toBe('User created successfully');
  });
});