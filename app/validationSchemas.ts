import { z } from "zod";


export const schema = z.object({
  title: z.string().min(1, "Tiltle is required").max(255),
  decription: z.string().min(1, "Decription is required"),
});
