// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';
import { type SchemaContext } from "astro:content";

// 2. Define a `type` and `schema` for each collection
const blogCollection = defineCollection({
  type: 'content', // v2.5.0 and later
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    image: z.string().optional(),
  }),
});

const projects = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
        title: z.string(),
        description: z.string(),
        cover: image().refine((img) => img.width >= 1080, {
          message: "Cover image must be at least 1080 pixels wide!",
        }),
        seoCover: image().refine((img) => img.width >= 1080, {
          message: "Cover image must be at least 1080 pixels wide!",
        }),
        accentColor: z.string(),
        isFeatured: z.boolean(),
    })
})

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  'blog': blogCollection,
  'projects': projects,
};