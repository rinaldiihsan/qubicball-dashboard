import { z } from 'zod';

export const userSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  username: z.string().min(3, 'Username must be at least 3 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(1, 'Phone is required'),
  website: z.string().url('Invalid website URL').or(z.string().length(0)),
  address: z.object({
    street: z.string().min(1, 'Street is required'),
    suite: z.string().min(1, 'Suite is required'),
    city: z.string().min(1, 'City is required'),
    zipcode: z.string().min(1, 'Zipcode is required'),
  }),
  company: z.object({
    name: z.string().min(1, 'Company name is required'),
    catchPhrase: z.string().optional(),
    bs: z.string().optional(),
  }),
});

export type UserFormData = z.infer<typeof userSchema>;
