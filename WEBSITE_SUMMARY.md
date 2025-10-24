# Amzélle - Elegant Clothing & Jewellery E-commerce Website

## 🎉 Project Overview
A pixel-perfect, elegant e-commerce website for premium clothing and jewellery, inspired by the original Shopiverse design but enhanced with modern aesthetics and professional polish.

## ✨ Features Implemented

### Frontend-Only Version (Current State)
All data is **MOCKED** using localStorage for browser-based functionality.

### Pages & Functionality

#### 1. **Home Page** (`/`)
- Full-screen hero section with "Outfit Your Grind" tagline
- Featured product collection (4 products)
- Trust badges section (24/7 Support, Multiple Payment Options, etc.)
- "Why Amzélle" section with brand values
- Category showcase (Clothing & Jewellery)
- Smooth scroll animations and hover effects

#### 2. **Shop Page** (`/shop`)
- Complete product catalog (12 products: 6 clothing + 6 jewellery)
- Advanced filtering system:
  - Category filter (All, Clothing, Jewellery)
  - Price range slider
  - Sort options (Featured, Price Low-High, Price High-Low, Name)
- Search functionality via navbar
- Responsive product grid with hover effects

#### 3. **Product Detail Page** (`/product/:id`)
- Large product image display
- Product information (name, price, description, category)
- Size selection buttons
- Color selection buttons
- "Add to Cart" functionality with validation
- Stock status indicator
- "You May Also Like" related products section

#### 4. **Shopping Cart** (`/cart`)
- Cart items display with product images
- Quantity controls (+/- buttons)
- Remove item functionality
- Order summary with subtotal and total
- "Clear Cart" option
- "Proceed to Checkout" button (placeholder)
- "Continue Shopping" navigation
- Empty cart state with call-to-action

#### 5. **Contact Page** (`/contact`)
- Contact form (Name, Email, Message)
- Contact information cards:
  - Email address
  - Phone number
  - Physical address
  - Business hours
- Form submission with toast notifications

#### 6. **About Page** (`/about`)
- Brand story section
- Core values showcase (Quality First, Global Reach, Customer Love, Trust & Security)
- Statistics section (50+ Countries, 10k+ Customers, 24/7 Support)
- Professional imagery and elegant typography

## 🎨 Design Features

### Visual Design
- **Dark Theme**: Elegant black background throughout
- **Typography**: 
  - Serif font (Lora) for headings
  - Sans-serif font (Inter) for body text
- **Color Scheme**: Black, white, grays with subtle gradients
- **Animations**: Fade-in, slide-up, and hover effects
- **Responsive**: Mobile-first design with breakpoints

### UI Components (Shadcn)
- Cards with hover effects
- Buttons with smooth transitions
- Toast notifications for user feedback
- Custom scrollbar styling
- Focus states for accessibility

### Navigation
- Fixed navbar with transparent backdrop
- Brand logo centered
- Search functionality
- Shopping cart with item count badge
- Mobile-responsive menu

### User Experience
- Smooth scroll behavior
- Loading states and animations
- Form validation with user feedback
- LocalStorage for cart persistence
- Intuitive product filtering and sorting

## 📦 Product Catalog

### Clothing Items (6)
1. Premium Cotton Tee - $45.00
2. Classic Polo Shirt - $65.00
3. Designer Casual Shirt - $85.00
4. Essential Crewneck - $55.00
5. Luxury Hoodie - $95.00
6. Minimalist Tee - $40.00

### Jewellery Items (6)
1. Gold Hoop Earrings - $120.00
2. Statement Necklace Set - $180.00
3. Diamond Stud Earrings - $250.00
4. Luxury Pendant - $195.00
5. Elegant Ring Collection - $145.00
6. Pearl Drop Earrings - $165.00

## 🛠 Technical Stack

### Frontend
- **React 19** - UI framework
- **React Router v7** - Client-side routing
- **Tailwind CSS** - Utility-first styling
- **Shadcn UI** - Pre-built components
- **Lucide React** - Icon library
- **Context API** - State management (CartContext)

### Data Management
- Mock data in `/src/mockData.js`
- LocalStorage for cart persistence
- Context API for global cart state

## 📂 File Structure

```
/app/frontend/src/
├── components/
│   ├── Navbar.js          # Navigation bar with search and cart
│   ├── Footer.js          # Footer with newsletter signup
│   └── ui/                # Shadcn components
├── pages/
│   ├── Home.js            # Landing page
│   ├── Shop.js            # Product catalog with filters
│   ├── ProductDetail.js   # Individual product page
│   ├── Cart.js            # Shopping cart
│   ├── Contact.js         # Contact form and info
│   └── About.js           # About page
├── context/
│   └── CartContext.js     # Global cart state management
├── mockData.js            # Mock product and feature data
├── App.js                 # Main app component with routing
├── App.css                # Custom styles and animations
└── index.css              # Tailwind and global styles
```

## 🚀 Current Status

### ✅ Completed
- [x] Frontend-only implementation with mock data
- [x] All pages designed and functional
- [x] Shopping cart with localStorage persistence
- [x] Product filtering and search
- [x] Responsive design
- [x] Toast notifications
- [x] Smooth animations and transitions
- [x] Mobile menu

### ⚠️ Mocked Features
- Product data (stored in mockData.js)
- Shopping cart (uses localStorage)
- Newsletter signup (shows toast notification)
- Contact form submission (shows toast notification)
- Checkout process (placeholder button)

## 🔜 Next Steps (Backend Integration)

When you're ready to add full backend functionality:

1. **Backend Development**
   - MongoDB models for products, users, orders
   - FastAPI endpoints for CRUD operations
   - User authentication system
   - Order processing logic
   - Payment integration (Stripe/PayPal)

2. **Frontend-Backend Integration**
   - Replace mock data with API calls
   - Implement real authentication
   - Connect cart to backend
   - Process real orders
   - Email notifications

## 🎯 Key Highlights

1. **Elegant Design**: Professional, minimalist aesthetic matching luxury brand standards
2. **Smooth Interactions**: Micro-animations and hover effects throughout
3. **Functional Shopping Cart**: Full cart management with localStorage persistence
4. **Advanced Filtering**: Category, price, and search filtering on shop page
5. **Responsive**: Works seamlessly on mobile, tablet, and desktop
6. **User Feedback**: Toast notifications for all user actions
7. **Product Variety**: Both clothing and jewellery collections

## 📝 Notes

- All product images are high-quality Unsplash photos
- The design follows modern e-commerce best practices
- Dark theme provides elegant, premium feel
- Ready for backend integration when needed
- All interactive elements work correctly (buttons, forms, navigation, cart)

---

**Website is live and ready for your review!**
Visit the pages to explore all features:
- Home: http://localhost:3000/
- Shop: http://localhost:3000/shop
- Product Details: Click any product
- Cart: Add items and click cart icon
- Contact: http://localhost:3000/contact
- About: http://localhost:3000/about
