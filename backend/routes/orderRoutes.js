import express from 'express';
import { protect, admin } from '../middleware/authMiddleware.js';
import {
  addOrderItems,
  getMyOrders,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDeliver,
  getOrders
} from '../controllers/orderController.js';
import validateRequest from '../middleware/validator.js';
import { param, check } from 'express-validator';

const router = express.Router();

const validator = {
 
}

router.route('/')
  .post(validator.addOrderItems, validateRequest, protect, addOrderItems)
  .get(protect, admin, getOrders);

router.get('/my-orders', protect, getMyOrders);
router.get('/:id', validator.getOrderById, validateRequest, protect, getOrderById);
router.put('/:id/pay', validator.updateOrderToPaid, validateRequest, protect, updateOrderToPaid);
router.put('/:id/deliver', validator.updateOrderToDeliver, validateRequest, protect, admin, updateOrderToDeliver);

export default router;
