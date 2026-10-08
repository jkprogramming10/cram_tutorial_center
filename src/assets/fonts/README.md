# Fonts for generated images

`fredoka-latin-600-normal.woff` and `fredoka-latin-700-normal.woff` are static instances of
**Fredoka** (© The Fredoka Project Authors), licensed under the
[SIL Open Font License 1.1](https://openfontlicense.org). Source: `@fontsource/fredoka@5.3.0`.

They are only used by `src/app/opengraph-image.tsx` (the social-sharing preview), because
`next/og` needs a TTF/OTF/WOFF file. The website itself loads Fredoka through `next/font/google`.
