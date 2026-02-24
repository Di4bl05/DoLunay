# Dolunay Online Store

Welcome to the Dolunay online store project! This project is built using Next.js and is designed to provide a seamless shopping experience with multiple themed sections for different products. Below are the key features and setup instructions for the project.

## Features

- **Themed Sections**: 
  - Products available for ordering from **Temu**, **Shein**, and **Amazon**.
  - A section for users to **request unavailable products**.
  - An **admin area** for managing daily products and orders.

- **Design**: The application incorporates a color palette of pink, white, black, and gold to create an appealing and modern aesthetic.

- **SEO Optimization**: The project is optimized for search engines to enhance visibility and reach.

## Project Structure

The project is organized as follows:

```
dolunay-store
├── src
│   ├── app
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   ├── (store)
│   │   │   ├── temu
│   │   │   │   └── page.tsx
│   │   │   ├── shein
│   │   │   │   └── page.tsx
│   │   │   ├── amazon
│   │   │   │   └── page.tsx
│   │   │   ├── productos
│   │   │   │   └── [id]
│   │   │   │       └── page.tsx
│   │   │   └── solicitar
│   │   │       └── page.tsx
│   │   ├── admin
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx
│   │   │   ├── productos
│   │   │   │   └── page.tsx
│   │   │   └── pedidos
│   │   │       └── page.tsx
│   │   └── api
│   │       ├── productos
│   │       │   └── route.ts
│   │       ├── pedidos
│   │       │   └── route.ts
│   │       └── solicitudes
│   │           └── route.ts
│   ├── components
│   │   ├── layout
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Navbar.tsx
│   │   ├── products
│   │   │   ├── ProductCard.tsx
│   │   │   ├── ProductGrid.tsx
│   │   │   └── ProductDetails.tsx
│   │   ├── forms
│   │   │   ├── OrderForm.tsx
│   │   │   └── RequestForm.tsx
│   │   └── ui
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       └── Modal.tsx
│   ├── lib
│   │   ├── db.ts
│   │   ├── utils.ts
│   │   └── constants.ts
│   ├── types
│   │   └── index.ts
│   └── styles
│       └── theme.ts
├── public
│   ├── images
│   │   └── logo.svg
│   └── favicon.ico
├── package.json
├── pnpm-lock.yaml
├── next.config.js
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.js
├── .eslintrc.json
├── .env.local.example
└── README.md
```

## Getting Started

To get started with the Dolunay project, follow these steps:

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd dolunay-store
   ```

2. **Install dependencies**:
   ```
   pnpm install
   ```

3. **Run the development server**:
   ```
   pnpm dev
   ```

4. **Open your browser** and navigate to `http://localhost:3000` to view the application.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

---

Thank you for checking out the Dolunay online store project! We hope you enjoy building and using this application.