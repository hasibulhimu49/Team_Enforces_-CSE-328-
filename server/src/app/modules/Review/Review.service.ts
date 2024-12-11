import { IReview } from "./Review.interface";
import { Review } from "./Review.model";


// Create a new review
const createReview = async (reviewData: IReview) => {
  const review = await Review.create(reviewData);
  return review;
};

// Get all reviews for a specific product
const getReviewsByProduct = async (productId: string) => {
  const reviews = await Review.find({ product: productId }).populate('user', 'name').populate('product', 'name');
  return reviews;
};

// Get a review by ID
const getReviewById = async (reviewId: string) => {
  const review = await Review.findById(reviewId).populate('user', 'name').populate('product', 'name');
  return review;
};

// Delete a review
const deleteReview = async (reviewId: string) => {
  const result = await Review.findByIdAndDelete(reviewId);
  return result;
};

// Get all reviews in the database
const getAllReviews = async () => {
    const reviews = await Review.find({})
      .populate('user', 'name') // Populate user details (e.g., name)
      .populate('product', 'name'); // Populate product details (e.g., name)
    return reviews;
  };
  
  export const ReviewService = {
    createReview,
    getReviewsByProduct,
    getReviewById,
    deleteReview,
    getAllReviews, 
  };