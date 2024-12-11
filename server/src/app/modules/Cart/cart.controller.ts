/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import { CartService } from "./cart.service";

export const CartController = {
  async addToCart(req: Request, res: Response) {
    try {
      const { userId, productId, quantity } = req.body;
      const result = await CartService.addToCart(userId, productId, quantity);
      res.status(200).json({
        success: true,
        message: "Product added to cart successfully!",
        data: result,
      });
    } catch (err: any) {
      res.status(500).json({ success: false, message: err.message });
    }
  },

  async getCartByUser(req: Request, res: Response) {
    try {
      const { userId } = req.params;
      const cart = await CartService.getCartByUser(userId);

      if (!cart) {
        return res.status(404).json({ success: false, message: "Cart not found!" });
      }

      res.status(200).json({
        success: true,
        message: "Cart retrieved successfully!",
        data: cart,
      });
    } catch (err: any) {
      res.status(500).json({ success: false, message: err.message });
    }
  },

  async clearCart(req: Request, res: Response) {
    try {
      const { userId } = req.params;
      await CartService.clearCart(userId);
      res.status(200).json({ success: true, message: "Cart cleared successfully!" });
    } catch (err: any) {
      res.status(500).json({ success: false, message: err.message });
    }
  },
};
