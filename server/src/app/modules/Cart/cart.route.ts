import express from "express";
import { CartController } from "./cart.controller";

const router = express.Router();

router.post("/add", CartController.addToCart);          // Add to cart
router.get("/:userId", CartController.getCartByUser);   // Get cart by user
router.delete("/:userId", CartController.clearCart);    // Clear cart

export const CartRoutes = router;
