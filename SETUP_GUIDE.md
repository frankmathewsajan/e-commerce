# 🛒 E-Commerce Project Setup Guide

## 📋 Project Overview

This is a full-stack MERN (MongoDB, Express, React, Node.js) e-commerce platform with:
- **JWT-based authentication** with Google OAuth support
- **Role-based access control** (Retailer & Consumer roles)
- **Product management** with image uploads
- **Shopping cart** functionality
- **Review system** for products
- **Email notifications** using Nodemailer

## 🏗️ Tech Stack

### Backend
- **Node.js** with Express.js
- **MongoDB** with Mongoose ODM
- **JWT** for authentication
- **Multer** for file uploads
- **Nodemailer** for emails
- **Google OAuth 2.0** for social login
- **Security:** Helmet, XSS-Clean, Express-Mongo-Sanitize, Rate Limiting

### Frontend
- **React.js** (v19.1.0)
- **React Router** for navigation
- **Tailwind CSS** for styling
- **Google OAuth** integration
- **Context API** for state management

## 🚀 Quick Start

### 1. Clone and Install
```bash
git clone https://github.com/frankmathewsajan/e-commerce.git
cd e-commerce
pnpm install
cd frontend && pnpm install
cd ../backend && pnpm install
```

### 2. Environment Setup

**Copy the example file:**
```bash
cp .env.example .env
```

**Required Environment Variables:**

| Variable | Description | Where to Get It |
|----------|-------------|-----------------|
| `MONGO_URI` | MongoDB connection string | [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) or `mongodb://localhost:27017/ecommerce` |
| `JWT_SECRET` | Secret key for JWT tokens | Generate with: `node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"` |
| `EMAIL` | Gmail address for sending emails | Your Gmail account |
| `APP_PASSWORD` | Gmail app password | [Google App Passwords](https://myaccount.google.com/apppasswords) |
| `NAME` | Sender name for emails | Any name (e.g., "E-Commerce Team") |
| `CLIENT_ID` | Google OAuth Client ID | [Google Cloud Console](https://console.cloud.google.com/) |
| `REACT_APP_BACKEND_URL` | Backend API URL | `http://localhost:5000` (development) |
| `REACT_APP_FRONTEND_URL` | Frontend URL | `http://localhost:3000` (development) |

### 3. Detailed Setup Instructions

#### MongoDB Setup
1. Create account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)
2. Create a new cluster (free tier available)
3. Click "Connect" → "Connect your application"
4. Copy connection string and replace `<password>`

#### Google OAuth Setup
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project
3. Navigate to "APIs & Services" → "Credentials"
4. Click "Create Credentials" → "OAuth client ID"
5. Choose "Web application"
6. Add authorized origins: `http://localhost:3000`
7. Add redirect URIs: `http://localhost:3000`
8. Copy the Client ID

#### Gmail App Password Setup
1. Enable 2-Step Verification on your Google Account
2. Go to [App Passwords](https://myaccount.google.com/apppasswords)
3. Select "Mail" and your device
4. Generate and copy the 16-character password

### 4. Run the Application
```bash
# From project root
pnpm run start
```

This will start:
- Backend server on `http://localhost:5000`
- Frontend React app on `http://localhost:3000`

## 📁 Project Structure

```
e-commerce/
├── backend/
│   ├── server.js           # Main server file
│   ├── connect.js          # MongoDB connection
│   ├── handlers/           # Route handlers
│   │   ├── auth.js         # Authentication logic
│   │   ├── jwts.js         # JWT generation/verification
│   │   ├── mail.js         # Email sending
│   │   ├── addProduct.js   # Product creation
│   │   ├── listProducts.js # Product listing
│   │   ├── showProduct.js  # Product details
│   │   ├── searchProducts.js # Search functionality
│   │   ├── addToCart.js    # Cart management
│   │   ├── showCart.js     # View cart
│   │   ├── deleteCart.js   # Remove from cart
│   │   ├── saveComment.js  # Add reviews
│   │   ├── showReview.js   # View reviews
│   │   ├── checkRole.js    # Role-based auth
│   │   └── upload.js       # File upload (Multer)
│   └── schemas/            # Mongoose schemas
│       ├── users.js        # User model
│       ├── products.js     # Product model
│       ├── cart.js         # Cart model
│       └── reviews.js      # Review model
├── frontend/
│   ├── public/
│   │   └── index.html
│   └── src/
│       ├── App.js          # Main app component
│       ├── index.js        # React entry point
│       ├── AlertContext.js # Alert state management
│       ├── SearchContext.js # Search state management
│       └── Components/
│           ├── SignUp.js        # Registration form
│           ├── Login.js         # Login form
│           ├── ProductForm.js   # Add product (Retailer)
│           ├── ProductList.js   # Browse products
│           ├── ProductInfo.js   # Product details
│           ├── Cart.js          # Shopping cart
│           ├── Search.js        # Search component
│           ├── Results.js       # Search results
│           ├── Alert.js         # Alert component
│           └── AlertWrapper.js  # Alert wrapper
├── .env.example        # Environment variables template
├── TASKS.md           # Development tasks (145 points)
├── package.json       # Root dependencies
└── README.md          # Project documentation
```

## 🔐 User Roles

### Retailer
- Can upload products with images
- Can purchase products from other retailers
- Access to product creation form

### Consumer
- Can browse and search products
- Can add items to cart
- Can purchase products
- Can leave reviews

## 🌟 Key Features

### Authentication
- Email/password signup and login
- Google OAuth integration
- JWT-based session management
- Role-based access control

### Product Management
- Image upload for products
- Product listing with pagination
- Search functionality
- Product details page
- Review and rating system

### Shopping
- Add to cart functionality
- Cart management (view/delete items)
- Purchase flow

### Security
- Helmet.js for HTTP headers
- XSS protection
- NoSQL injection prevention
- Rate limiting (configurable)
- CORS configuration
- Cookie-based JWT storage

## 📝 API Endpoints

### Authentication
- `POST /signup` - Register new user
- `POST /login` - User login
- `POST /oauth` - Google OAuth login

### Products
- `GET /products` - List all products
- `POST /products` - Add product (Retailer only)
- `GET /:id` - Get product details
- `POST /searchProducts` - Search products

### Cart
- `POST /cart` - Add to cart
- `GET /cart` - View cart
- `DELETE /cart` - Remove from cart

### Reviews
- `POST /reviews` - Add review
- `GET /reviews` - Get reviews

## 🎯 Development Tasks

See `TASKS.md` for 10 development tasks:
- **3 Easy tasks** (10 points each) - 30 points
- **4 Medium tasks** (15 points each) - 60 points  
- **3 Hard tasks** (25 points each) - 75 points

**Total: 145 points available**

## 🐛 Troubleshooting

### MongoDB Connection Issues
- Ensure MongoDB is running locally or Atlas cluster is active
- Check firewall rules for Atlas IP whitelist
- Verify connection string format

### Email Not Sending
- Confirm Gmail App Password (not regular password)
- Check 2-Step Verification is enabled
- Verify EMAIL and APP_PASSWORD in .env

### Google OAuth Not Working
- Check CLIENT_ID is correct
- Verify authorized origins and redirect URIs
- Ensure OAuth consent screen is configured

### Port Already in Use
- Backend: Change port in server.js (default: 5000)
- Frontend: Set PORT environment variable for React

## 📚 Additional Resources

- [MongoDB Documentation](https://www.mongodb.com/docs/)
- [Express.js Guide](https://expressjs.com/)
- [React Documentation](https://react.dev/)
- [JWT.io](https://jwt.io/)
- [Tailwind CSS](https://tailwindcss.com/)

## 🤝 Contributing

See `CONTRIBUTING.md` for contribution guidelines.

## 📄 License

This project is licensed under the MIT License - see `LICENSE` file.
---

**Happy Coding! 🚀**
