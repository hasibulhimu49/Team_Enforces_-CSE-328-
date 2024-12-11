import { z } from "zod";

// Address Validation Schema
const addressSchema = z.object({
  street: z.string().min(1, { message: "Street is required" }),
  city: z.string().min(1, { message: "City is required" }),
  state: z.string().min(1, { message: "State is required" }),
  zip: z.string().min(1, { message: "ZIP code is required" }),
});

// Validation Schema for Create Customer
const CreateCustomerValidationSchema = z.object({

  body: z.object({
    password: z.string().max(20),

    customer: z.object({
      name: z.string().min(1, { message: "Name is required" }),
      phone: z.number({ invalid_type_error: "Phone must be a number" }),
      address: addressSchema, // Use the nested address schema
      email: z
        .string()
        .email({ message: "Invalid email address" })
        .min(1, { message: "Email is required" }),
      image: z.string().url({ message: "Image must be a valid URL" }).optional(),
    })
  })

});



// Validation Schema for Update Customer
const updateCustomerValidationSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }).optional(),
  phone: z.number({ invalid_type_error: "Phone must be a number" }).optional(),
  address: addressSchema.partial(), // Make nested address schema fields optional
  email: z
    .string()
    .email({ message: "Invalid email address" })
    .min(1, { message: "Email is required" })
    .optional(),
  image: z.string().url({ message: "Image must be a valid URL" }).optional(),
});

export  const customerValidations = {
  CreateCustomerValidationSchema,
  updateCustomerValidationSchema
}