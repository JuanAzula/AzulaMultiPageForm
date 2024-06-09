import { z } from 'zod';


export const RegisterSchema = z.object({
    name: z.string().min(3),
    email: z.string().email(),
    phoneNumber: z.string().min(9).max(11),
    salary: z.string(),
});