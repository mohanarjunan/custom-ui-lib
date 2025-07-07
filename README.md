
## 🪄 Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🌳 Tree Structure

<!-- FOLDER-STRUCTURE-START -->
```
.
├── README.md
├── doc.txt
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── public
│   ├── file.svg
│   ├── globe.svg
│   ├── images
│   │   ├── error
│   │   │   ├── 404-dark.svg
│   │   │   ├── 404.svg
│   │   │   ├── 500-dark.svg
│   │   │   ├── 500.svg
│   │   │   ├── 503-dark.svg
│   │   │   ├── 503.svg
│   │   │   ├── maintenance-dark.svg
│   │   │   ├── maintenance.svg
│   │   │   ├── success-dark.svg
│   │   │   └── success.svg
│   │   └── shape
│   │       └── grid-01.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── src
│   ├── app
│   │   ├── (dash)
│   │   │   ├── about
│   │   │   │   └── page.tsx
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   ├── favicon.ico
│   │   ├── globals.scss
│   │   ├── layout.tsx
│   │   └── not-found.tsx
│   ├── components
│   │   ├── common
│   │   │   ├── index.tsx
│   │   │   └── private
│   │   │       ├── ComponentCard.tsx
│   │   │       ├── GridShape.tsx
│   │   │       └── PageBreadCrumb.tsx
│   │   └── ui
│   │       ├── alert
│   │       │   ├── index.tsx
│   │       │   └── private
│   │       │       └── Alert.tsx
│   │       └── dropdown
│   │           ├── index.tsx
│   │           ├── private
│   │           │   ├── MultiSelect.tsx
│   │           │   └── SingleSelect.tsx
│   │           └── type
│   │               └── index.tsx
│   ├── context
│   │   └── SidebarContext.tsx
│   ├── hooks
│   │   ├── useGoBack.ts
│   │   └── useModal.ts
│   ├── layout
│   │   ├── AppHeader.tsx
│   │   ├── AppSidebar.tsx
│   │   ├── Backdrop.tsx
│   │   └── DefaultLayout.tsx
│   └── scss
│       ├── _lib.scss
│       ├── _main.scss
│       ├── _scrollbar.scss
│       ├── _select.scss
│       └── _tailwind.scss
├── structure.txt
├── tailwind.config.ts
└── tsconfig.json

22 directories, 54 files
```
<!-- FOLDER-STRUCTURE-END -->
