# La Coupe des Cons 2026

World Cup sweepstakes site for 12 players. Static site, no database, deploys to GitHub Pages.

## Setup

1. Create a GitHub repo (e.g. `coupe-des-cons`)
2. Upload all files
3. Settings → Pages → Deploy from branch → main → / (root)
4. Live at `https://yourusername.github.io/coupe-des-cons`

## The only file you need to edit: `draw-data.js`

### Running the draw (each day)

Set `revealed: true` and fill `assignments[]` for that tier.
Player order is always: **Atom, Ruby, Liv, Rio, Gemma, Lucy, KB, Brett, KP, Greg, Cyndi, Fred**

```js
4: {
  revealed: true,
  assignments: ["Ghana","New Zealand","Haiti","Qatar","Iraq","Uzbekistan","Cape Verde","Saudi Arabia","Jordan","Bosnia & Herz.","Curaçao","South Africa"]
}
```

### Updating the seed
```js
const DRAW_SEED = {
  seed: "abc123xyz...",
  timestamp: "2026-06-05 09:00:00 UTC"
};
```

## After the tournament

Just come back to Claude with:
- Final FIFA rankings for all 48 teams
- Match results (wins/draws/losses) for all 48 teams

Claude will calculate both prize winners instantly.

## Tiers (FIFA rankings, April 1st 2026)

| Tier | Teams |
|------|-------|
| 1 | France, Spain, Argentina, England, Portugal, Brazil, Morocco, Netherlands, Belgium, Germany, Croatia, Colombia |
| 2 | Senegal, Mexico, USA, Uruguay, Japan, Switzerland, Iran, Türkiye, Austria, Ecuador, South Korea, Australia |
| 3 | Algeria, Egypt, Canada, Norway, Panama, Ivory Coast, Sweden, Paraguay, Czechia, Scotland, DR Congo, Tunisia |
| 4 | Uzbekistan, Qatar, Iraq, South Africa, Saudi Arabia, Jordan, Bosnia & Herz., Cape Verde, Ghana, Haiti, Curaçao, New Zealand |
