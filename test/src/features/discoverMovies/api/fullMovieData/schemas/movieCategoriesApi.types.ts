import { z } from "zod/v4"

export const movieCategoriesSchema = z.object({
  id: z.number(),
  name: z.string(),
})
export type MovieCategory = z.infer<typeof movieCategoriesSchema>
