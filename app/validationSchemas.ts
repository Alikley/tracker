import { z } from "zod";

export const schema = z.object({
  title: z.string().min(1, "Tiltle is required").max(255),
  decription: z.string().min(1, "Decription is required").max(65535),
});
export const pathcIssueSchema = z.object({
  title: z.string().min(1, "Tiltle is required").max(255).optional(),
  decription: z.string().min(1, "Decription is required").max(65535).optional(),
  assignedToUserId: z
    .string()
    .min(1, "AssignedToUserId is required.")
    .max(255)
    .optional()
    .nullable(),
});
