/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { ReviewService } from './Review.service';

const createReview = async (req: Request, res: Response) => {
  try {
    const reviewData = req.body;
    const review = await ReviewService.createReview(reviewData);
    res.status(201).json({ success: true, message: 'Review created successfully', data: review });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const getReviewsByProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const reviews = await ReviewService.getReviewsByProduct(productId);
    res.status(200).json({ success: true, data: reviews });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const getReviewById = async (req: Request, res: Response) => {
  try {
    const { reviewId } = req.params;
    const review = await ReviewService.getReviewById(reviewId);
    if (!review) {
      return res.status(404).json({ success: false, message: 'Review not found' });
    }
    res.status(200).json({ success: true, data: review });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const deleteReview = async (req: Request, res: Response) => {
  try {
    const { reviewId } = req.params;
    const result = await ReviewService.deleteReview(reviewId);
    if (!result) {
      return res.status(404).json({ success: false, message: 'Review not found' });
    }
    res.status(200).json({ success: true, message: 'Review deleted successfully' });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};


const getAllReviews = async (req: Request, res: Response) => {
    try {
      const reviews = await ReviewService.getAllReviews();
      res.status(200).json({ success: true, data: reviews });
    } catch (error: any) {
      res.status(500).json({ success: false, message: error.message });
    }
  };
  
  export const ReviewController = {
    createReview,
    getReviewsByProduct,
    getReviewById,
    deleteReview,
    getAllReviews, // Added endpoint
  };