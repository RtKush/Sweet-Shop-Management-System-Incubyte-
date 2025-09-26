import React, { useState } from 'react';
import { usePurchaseSweetMutation } from '../slices/productsApiSlice';
import { Button, Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addCurrency } from '../utils/addCurrency';
import { addToCart } from '../slices/cartSlice';
import Rating from './Rating';
import { toast } from 'react-toastify';
const Product = ({ product }) => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [purchaseSweet, { isLoading: isPurchasing }] = usePurchaseSweetMutation();

  const addToCartHandler = () => {
    dispatch(addToCart({ ...product, qty }));
    toast.success('Added to cart!');
  };

  const handlePurchase = async () => {
    try {
      await purchaseSweet({ productId: product._id }).unwrap();
      toast.success('Purchase successful!');
    } catch (err) {
      toast.error(err?.data?.message || 'Purchase failed');
    }
  };

  return (
    <Card className='my-3 p-3 rounded text-center'>
      <Link
        to={`/product/${product._id}`}
        style={{ textDecoration: 'none' }}
        className='text-dark'
      >
        <Card.Img
          variant='top'
          src={product.image}
          style={{ height: '200px', objectFit: 'contain' }}
        />
        <Card.Body>
          <Card.Title as='div' className='product-title'>
            <strong>{product.name}</strong>
          </Card.Title>

          <Card.Text as='div' className='mb-3'>
            <Rating
              value={product.rating}
              text={`(${product.numReviews} reviews)`}
            />
          </Card.Text>
          <Card.Text as='h3'>{addCurrency(product.price)}</Card.Text>
        </Card.Body>
      </Link>
      <Button
        variant='warning'
        type='button'
        disabled={product.countInStock === 0}
        onClick={addToCartHandler}
      >
        Add To Cart
      </Button>
      <Button
        variant='primary'
        type='button'
        disabled={product.countInStock === 0 || isPurchasing}
        onClick={handlePurchase}
        className='mt-2'
      >
        {isPurchasing ? 'Purchasing...' : 'Purchase'}
      </Button>
    </Card>
  );
};

export default Product;
