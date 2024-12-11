import express from 'express';
import { ReviewController } from './Review.controller';

const router = express.Router();

// Create a new review
router.post('/', ReviewController.createReview);

// Get all reviews for a product
router.get('/product/:productId', ReviewController.getReviewsByProduct);

// Get a single review by ID
router.get('/:reviewId', ReviewController.getReviewById);

// Delete a review
router.delete('/:reviewId', ReviewController.deleteReview);

// Fetch all reviews in the system
router.get('/', ReviewController.getAllReviews);

export const ReviewRoutes = router;
