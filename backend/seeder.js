import mongoose from 'mongoose';
import users from './data/users.js';
import products from './data/products.js';
import User from './models/userModel.js';
import Product from './models/productModel.js';
import Order from './models/orderModel.js';
import connectDB from './config/db.js';
import colors from 'colors';
import 'dotenv/config';

connectDB();





if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
