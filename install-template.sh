#!/bin/bash
# Lumière Jewelry Store Template - Component & Page Generator
# This script creates all necessary Astro components and pages

set -e
cd "$(dirname "$0")"

echo "🎨 Creating Lumière Jewelry Store Template Files..."

# Create directories
mkdir -p src/pages/products

echo "📄 Creating BaseLayout..."
cat > src/layouts/BaseLayout.astro << 'LAYOUTEOF'
---
import Header from '@/components/Header.astro';
import Footer from '@/components/Footer.astro';
import '@/styles/global.css';

interface Props {
  title?: string;
  description?: string;
}

const { 
  title = 'Lumière Jewelry - Timeless Elegance',
  description = 'Discover exquisite handcrafted jewelry featuring rings, necklaces, earrings, bracelets, and luxury watches.'
} = Astro.props;
---

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content={description} />
    <title>{title}</title>
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet" />
  </head>
  <body>
    <Header />
    <main><slot /></main>
    <Footer />
  </body>
</html>
LAYOUTEOF

echo "Creating components..."
# Will add more component creation here in subsequent steps

echo "✅ Template files created successfully!"
echo "📦 Run 'npm install' if you haven't already"
echo "🚀 Then run 'npm run dev' to start development"
