# Midterm Submission

- **Name:** Muhammad Sulaiman Khalid
- **Roll Number:** FS24-BCS-079
- **Parameters / Values:**
  - N: 79
  - BP: 679 (Calculated as 600 + N = 600 + 79 = 679px)
  - H: 193
  - Accent Color: hsl(193, 70%, 45%)
  - K: 4 (Calculated as (79 mod 5) + 1 = 4)

## Modified Files

- `index.html`
- `homePageStyles.css`
- `product.html`
- `productPageStyles.css`
- `homePage.js`
- `script.js`
- `README.md`

## Task Summaries

### Task 1

Applied custom CSS CSS variables including `--accent-color: hsl(193, 70%, 45%)` and set up mobile-first responsive grid layouts using breakpoint `679px`. Standardized product filter controls using CSS sibling combinators (`~`) and `:not()` selectors to filter products directly via pure CSS without leaving blank grid gaps.

### Task 2

Implemented a mobile-first 2-column layout using `grid-template-areas` for the product page (`product.html` & `productPageStyles.css`). Applied sticky positioning to the product details section at `top: 109px` (calculated as `(79 mod 40) + 70 = 109px`) at viewports $\ge 679\text{px}$.

### Task 3

Enhanced JavaScript interactivity across `homePage.js` and `script.js`. Added price badge highlighting for premium products exceeding threshold price `7,900` (`N * 100`), integrated dynamic client-side title/price searching, price sorting (ascending/descending), and conditional "no products found" display logic.

## AI Tools Used

- ChatGpt
