# David Koller — Leadership Portfolio

A premium, one-page leadership portfolio built with React, TypeScript, Vite, Tailwind CSS and Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL shown by Vite (usually `http://localhost:5173`).

Production check:

```bash
npm run build
npm run preview
```

## Where to edit content

The site intentionally separates copy and structured data from rendering components.

- `src/content/en.ts` — all English section copy
- `src/content/cs.ts` — native Czech portfolio copy
- `src/data/caseStudies.ts` — case-study cards and Shoptet Pay detail
- `src/data/skills.ts` — leadership capability groups
- `src/data/links.ts` — CV, email and LinkedIn links
- `src/types/content.ts` — shared content structure and types

Hero wording is edited in the `hero` object inside `src/content/en.ts` and
`src/content/cs.ts`. The headline scale is primarily breakpoint-driven in
`src/styles/globals.css`; Czech only receives a small max-width adjustment.
Avoid manual `<br>` line breaks. After a major rewrite, check both languages at
1440, 1024, 768 and 390 pixels.

Components in `src/components/` should only control layout, interaction and presentation.

## Update one section safely

To rewrite only the hero, edit the `hero` object in `src/content/en.ts`. To update one case, edit only the matching object in `src/data/caseStudies.ts`. Keeping changes inside the relevant object avoids unintended changes elsewhere.

## Add or complete Czech

1. Open `src/content/cs.ts`.
2. Replace the mirrored English values section by section.
3. Add Czech versions of cases and skills to `src/data/caseStudies.ts` and `src/data/skills.ts`.
4. Keep the same object keys so no component changes are required.

## Add proof links or screenshots

Proof items are already modeled in the Shoptet Pay case. When approved assets are ready:

1. Add URLs and metadata to the `proof` array in `src/data/caseStudies.ts`.
2. Add portfolio-level public outputs in `src/data/evidence.ts`.
3. Create an `src/assets/evidence/` directory only for approved local screenshots.
4. Use only material explicitly approved for publication.

Each proof item supports these types:

- `primary-public` — strongest public proof; rendered as a clickable card
- `secondary-public` — supporting public proof; rendered as a clickable card
- `internal-safe` — non-public description only; never rendered as a link
- `todo` — optional draft state for unpublished material; do not expose it in production

Use `url: "#"` until a real public URL is approved. Never add internal documents,
private dashboards, customer data, confidential numbers or links requiring
company authentication. Describe the existence and role of internal work instead
of exposing the asset itself.

Example:

```ts
{
  title: "Approved public article",
  type: "secondary-public",
  label: "Public article",
  url: "#",
  description: "A concise description of what this evidence demonstrates.",
}
```

## Visual-system rules

- Core colors are defined once as RGB tokens in `src/styles/globals.css` and
  exposed through Tailwind in `tailwind.config.js`.
- Strong lime is reserved for highlights, active controls, strategic emphasis
  and the closing section. Avoid pale green fills on major cards.
- Text-heavy cards use visible boundaries, balanced padding, left-aligned copy
  and content-driven height.
- Profile-card hover only previews the border state. Detail text is controlled
  exclusively by click/tap, and the plus rotation follows the expanded state.
- Foundation cards map in order to four static orbit rings:
  Measure, Understand, Differentiate and Orchestrate. Do not reorder one side
  without updating the other.
- Keep English and Czech object keys identical. Avoid manual line breaks in
  translated headlines; responsive type and max-width rules should control wrap.

## Update links

Update links in `src/data/links.ts`:

```ts
export const links = {
  cv: "/files/david-koller-cv.pdf",
  email: "mailto:david.koller.ppc@gmail.com",
  linkedin: "https://www.linkedin.com/in/koller-david/",
};
```

The shared EN/CZ CV PDF is stored at:

`public/files/david-koller-cv.pdf`

## Deploy to Vercel

1. Push the project to `https://github.com/davidkoller-stack/david-koller-portfolio.git`.
2. In Vercel, choose **Add New → Project** and import that repository.
3. Keep the detected framework as **Vite**.
4. Use `pnpm run build` as the build command and `dist` as the output directory.
5. Deploy. No environment variables are required.

## Safe future Codex prompts

- “Rewrite only the English Hero copy in `src/content/en.ts`. Do not change layout or other sections.”
- “Update only the Shoptet Pay impact bullets with these approved facts. Keep all other cases untouched.”
- “Translate the Profile and Operating System sections into Czech in `src/content/cs.ts` only.”
- “Add one approved proof link to Shoptet Pay without changing the case-study design.”
- “Update only the Shoptet Balíky case-study content.”
- “Create the Evidence Gallery from the approved assets in this folder. Do not modify existing sections.”

## Notes

- EN is the default language.
- EN and CZ use independent, editable content and data.
- Download CV uses `public/files/david-koller-cv.pdf`.
- Selected public evidence is rendered below the Skills section.
