# CyberPosture Main

This repository contains multiple independent Next.js applications.

## Structure

```text
cyberposture-main/
├── product-1/
└── product-2/
```

Each folder is a standalone Next.js application.

---

## Cloudflare Deployment

Both applications use the same GitHub repository:

```text
GitHub Repository:
cyberposture-main
```

Cloudflare Pages is configured with separate projects.

### Product 1

Repository:

```text
cyberposture-main
```

Root Directory:

```text
product-1
```

### Product 2

Repository:

```text
cyberposture-main
```

Root Directory:

```text
product-2
```

---

## Making Changes

### Update Product 1

1. Edit files inside:

```text
product-1/
```

2. Commit and push:

```bash
git add .
git commit -m "update product-1"
git push origin main
```

3. Cloudflare automatically rebuilds Product 1.

---

### Update Product 2

1. Edit files inside:

```text
product-2/
```

2. Commit and push:

```bash
git add .
git commit -m "update product-2"
git push origin main
```

3. Cloudflare automatically rebuilds Product 2.

---

## Local Development

### Product 1

```bash
cd product-1
pnpm install
pnpm dev
```

### Product 2

```bash
cd product-2
pnpm install
pnpm dev
```

If Product 1 is already running:

```bash
pnpm dev -- --port 3001
```

---

## Notes

* Both products share the same Git repository.
* Each product is deployed independently.
* Cloudflare Pages must point to the correct Root Directory.
* Changes inside one product do not affect the other product.
* Use pnpm for dependency management.
