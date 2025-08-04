# e-spaxe - Fashion E-Commerce Website

## Overview
**e-spaxe** is a dynamic, responsive, and interactive web application for browsing and purchasing fashion products (clothing, accessories), built for the ProDev FE school project using Next.js (Pages Router). It features a modern UI with filtering, sorting, pagination, and purchase functionality, adhering to WCAG 2.1 accessibility standards.

## Features
- **Product Catalog**: Displays fashion products in a responsive grid using `Card` component, fetched via API.
- **Filtering & Sorting**: Filter by categories (e.g., Necklaces, Earrings) and sort by price using `FilterBar` and `SortBar`.
- **Pagination**: Navigate products with `Pagination` component (infinite scrolling to be added).
- **Responsive Design**: Adapts to desktop, tablet, and mobile with Tailwind CSS.
- **Accessibility**: Complies with WCAG 2.1 (ARIA labels, keyboard navigation).
- **Purchase Flow**: Basic checkout via `Button` component.
- **Navbar & Hero**: Custom navigation and hero section for a fashion-forward aesthetic.

## Technologies
- **Next.js (Pages Router)**: Dynamic, server-rendered web app.
- **TypeScript**: Type-safe code.
- **Redux Toolkit**: State management.
- **Tailwind CSS**: Responsive styling.
- **Axios**: API requests.
- **Lucide-React**: Icons for navigation.

## Setup
1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd e-spaxe