import { z } from "zod";

// Zod Schema for address

// Zod Schema for user
 const userValidationSchema = z.object({
  //id: z.string(), // UUID for unique identification
  
  password: z.string().min(6, "Password must be at least 6 characters."),
 
  passwordChangeAt: z.date().optional(),
  
  createdAt: z.date().optional(), // Automatically handled by MongoDB
  updatedAt: z.date().optional(), // Automatically handled by MongoDB
});


export const customerValidation ={
  userValidationSchema
}

// Example usage for validating a user
// const exampleUser = {
//   id: "550e8400-e29b-41d4-a716-446655440000",
//   name: "John Doe",
//   email: "johndoe@example.com",
//   password: "password123",
//   phone: "1234567890",
//   address: {
//     street: "123 Main St",
//     city: "Anytown",
//     state: "CA",
//     zip: "90210",
//   },
//   role: "customer",
//   status: "in-progress",
// };

// try {
//   userSchema.parse(exampleUser);
//   console.log("Validation passed!");
// } catch (error) {
//   console.error("Validation failed:", error.errors);
// }
