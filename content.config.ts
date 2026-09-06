import {defineContentConfig, defineCollection, z} from '@nuxt/content'

const optionalText = z.string().nullable().optional()

export default defineContentConfig({
    collections: {
        format: defineCollection({
            type: 'page',
            source: 'format/**/*.md',
        }),
        apps: defineCollection({
            type: 'page',
            source: {
                include: 'apps/**/*.md',
                exclude: ['apps/_*.md'],
            },
            schema: z.object({
                name: z.string(),
                app_id: z.string(),
                status: z.enum(['adopter', 'research', 'planned', 'inactive']),
                order: z.number(),
                description: z.string(),
                summary: z.string(),
                export: z.boolean(),
                import: z.boolean(),
                export_shape: optionalText,
                website: optionalText,
                apple_store: optionalText,
                google_play: optionalText,
                logo: optionalText,
                repo: optionalText,
                platform: optionalText,
                license: optionalText,
                spec_version: optionalText,
                last_verified: optionalText,
                self_reported: z.boolean().default(true),
                modules: z.array(
                    z.object({
                        key: z.string(),
                        support: z.enum(['full', 'partial', 'none', 'planned']).nullable().optional(),
                        note: optionalText,
                    }),
                ),
                mapping: z
                    .array(
                        z.object({
                            source: z.string(),
                            target: z.string(),
                            note: optionalText,
                        }),
                    )
                    .default([]),

                links: z
                    .array(
                        z.object({
                            label: z.string(),
                            href: z.string(),
                        }),
                    )
                    .default([]),
            }),
        }),
    },
})
