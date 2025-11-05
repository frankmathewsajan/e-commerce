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

⚠️ **IMPORTANT:** This project requires **TWO separate `.env` files** - one for backend and one for frontend!

#### Backend Environment Setup

**Copy the backend example file:**
```bash
# Windows PowerShell
copy backend\.env.example backend\.env

# Linux/Mac
cp backend/.env.example backend/.env
```

**Edit `backend/.env` with your values:**

| Variable | Description | Where to Get It |
|----------|-------------|-----------------|
| `MONGO_URI` | MongoDB connection string | [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) or `mongodb://localhost:27017/ecommerce` |
| `JWT_SECRET` | Secret key for JWT tokens | Generate: `node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"` |
| `EMAIL` | Gmail address for sending emails | Your Gmail account |
| `APP_PASSWORD` | Gmail app password | [Google App Passwords](https://myaccount.google.com/apppasswords) (16 chars, no spaces) |
| `NAME` | Sender name for emails | Any name (e.g., "E-Commerce Team") |
| `CLIENT_ID` | Google OAuth Client ID | [Google Cloud Console](https://console.cloud.google.com/) |
| `REACT_APP_FRONTEND_URL` | Frontend URL for CORS | `http://localhost:3000` (development) |
| `REACT_APP_BACKEND_URL` | Backend URL (for image paths) | `http://localhost:5000` (development) |

#### Frontend Environment Setup

**Copy the frontend example file:**
```bash
# Windows PowerShell
copy frontend\.env.example frontend\.env

# Linux/Mac
cp frontend/.env.example frontend/.env
```

**Edit `frontend/.env` with your values:**

| Variable | Description | Where to Get It |
|----------|-------------|-----------------|
| `REACT_APP_BACKEND_URL` | Backend API URL | `http://localhost:5000` (must match backend) |
| `REACT_APP_GOOGLE_CLIENT_ID` | Google OAuth Client ID | **Same as `CLIENT_ID` in backend** |

⚠️ **Critical Notes:**
- React requires all environment variables to start with `REACT_APP_`
- `REACT_APP_GOOGLE_CLIENT_ID` (frontend) must match `CLIENT_ID` (backend)
- Both `.env` files must exist in their respective directories
- Never commit `.env` files to Git!

### 3. Detailed Setup Instructions

#### MongoDB Setup
1. **Option A - Local MongoDB (Quick Setup):**
   - Download MongoDB Community Edition from [MongoDB Downloads](https://www.mongodb.com/try/download/community)
   - Install and start MongoDB service
   - Use connection string: `mongodb://localhost:27017/ecommerce`
   - Set this in `backend/.env`: `MONGO_URI=mongodb://localhost:27017/ecommerce`

2. **Option B - MongoDB Atlas (Cloud - Recommended):**
   - Create account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)
   - Create a new cluster (free tier M0 available)
   - Click "Connect" → "Connect your application"
   - Copy connection string and replace `<password>` with your database user password
   - Set this in `backend/.env`: `MONGO_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/ecommerce`

#### Google OAuth Setup
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project (or select existing)
3. Enable Google+ API:
   - Navigate to "APIs & Services" → "Library"
   - Search for "Google+ API" and enable it
4. Create OAuth credentials:
   - Go to "APIs & Services" → "Credentials"
   - Click "Create Credentials" → "OAuth client ID"
   - Configure consent screen if prompted (use "External" for testing)
   - Choose "Web application"
5. Configure authorized origins and redirects:
   - **Authorized JavaScript origins:**
     - `http://localhost:3000`
     - `http://localhost:5000`
   - **Authorized redirect URIs:**
     - `http://localhost:3000`
     - `http://localhost:3000/auth/google/callback`
6. Copy the **Client ID** (looks like: `123456789-abc...xyz.apps.googleusercontent.com`)
7. Add to BOTH `.env` files:
   - `backend/.env`: `CLIENT_ID=your-client-id-here`
   - `frontend/.env`: `REACT_APP_GOOGLE_CLIENT_ID=your-client-id-here`

⚠️ **Important:** The Client ID must be the SAME in both files!

#### Gmail App Password Setup
1. Enable 2-Step Verification:
   - Go to [Google Account Security](https://myaccount.google.com/security)
   - Enable 2-Step Verification
2. Generate App Password:
   - Go to [App Passwords](https://myaccount.google.com/apppasswords)
   - Select "Mail" as the app
   - Select your device
   - Click "Generate"
   - Copy the 16-character password (it shows with spaces like: `abcd efgh ijkl mnop`)
3. Add to `backend/.env` **without spaces**:
   - `APP_PASSWORD=abcdefghijklmnop` (remove all spaces)
   - `EMAIL=your_email@gmail.com`
   - `NAME=E-Commerce Team`

#### Generate JWT Secret
Run this command in your terminal:
```bash
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```
Copy the output and add to `backend/.env`:
```
JWT_SECRET=paste_the_generated_string_here
```

### 4. Verify Your Configuration

Before running the app, verify both `.env` files exist and are properly configured:

**Check backend/.env:**
```bash
# Should contain these variables:
MONGO_URI=mongodb://localhost:27017/ecommerce
JWT_SECRET=your_generated_secret_here
EMAIL=your_email@gmail.com
APP_PASSWORD=your_app_password_no_spaces
NAME=E-Commerce Team
CLIENT_ID=your_google_client_id.apps.googleusercontent.com
REACT_APP_FRONTEND_URL=http://localhost:3000
REACT_APP_BACKEND_URL=http://localhost:5000
```

**Check frontend/.env:**
```bash
# Should contain these variables:
REACT_APP_BACKEND_URL=http://localhost:5000
REACT_APP_GOOGLE_CLIENT_ID=your_google_client_id.apps.googleusercontent.com
```

⚠️ **Common Mistakes to Avoid:**
- ❌ CLIENT_ID in backend doesn't match REACT_APP_GOOGLE_CLIENT_ID in frontend
- ❌ APP_PASSWORD contains spaces
- ❌ Using regular Gmail password instead of App Password
- ❌ Missing REACT_APP_ prefix in frontend variables
- ❌ Wrong file locations (make sure .env files are in backend/ and frontend/ directories)

### 5. Run the Application
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
│   ├── .env                # ← Backend environment variables (create this!)
│   ├── .env.example        # ← Backend env template
│   ├── server.js           # Main server file
│   ├── connect.js          # MongoDB connection (now uses MONGO_URI)
│   ├── handlers/           # Route handlers
│   │   ├── auth.js         # Authentication (uses CLIENT_ID, fixed OAuth)
│   │   ├── jwts.js         # JWT tokens (uses JWT_SECRET)
│   │   ├── mail.js         # Email sending (uses EMAIL, APP_PASSWORD, NAME)
│   │   ├── addProduct.js   # Product creation (validates file upload)
│   │   ├── listProducts.js # Product listing
│   │   ├── showProduct.js  # Product details
│   │   ├── searchProducts.js # Search functionality
│   │   ├── addToCart.js    # Cart management
│   │   ├── showCart.js     # View cart
│   │   ├── deleteCart.js   # Remove from cart
│   │   ├── saveComment.js  # Add reviews
│   │   ├── showReview.js   # View reviews
│   │   ├── checkRole.js    # Role-based auth
│   │   ├── upload.js       # File upload (Multer, 5MB limit)
│   │   └── images/         # Uploaded product images (auto-created)
│   └── schemas/            # Mongoose schemas
│       ├── users.js        # User model
│       ├── products.js     # Product model
│       ├── cart.js         # Cart model
│       └── reviews.js      # Review model
├── frontend/
│   ├── .env                # ← Frontend environment variables (create this!)
│   ├── .env.example        # ← Frontend env template
│   ├── public/
│   │   └── index.html
│   └── src/
│       ├── App.js          # Main app component
│       ├── index.js        # React entry point
│       ├── AlertContext.js # Alert state management
│       ├── SearchContext.js # Search state management
│       └── Components/
│           ├── SignUp.js        # Registration (uses REACT_APP_BACKEND_URL, REACT_APP_GOOGLE_CLIENT_ID)
│           ├── Login.js         # Login (uses REACT_APP_BACKEND_URL)
│           ├── ProductForm.js   # Add product (uses REACT_APP_BACKEND_URL)
│           ├── ProductList.js   # Browse products (uses REACT_APP_BACKEND_URL)
│           ├── ProductInfo.js   # Product details (uses REACT_APP_BACKEND_URL)
│           ├── Cart.js          # Shopping cart (uses REACT_APP_BACKEND_URL)
│           ├── Search.js        # Search component (uses REACT_APP_BACKEND_URL)
│           ├── Results.js       # Search results (uses REACT_APP_BACKEND_URL)
│           ├── Alert.js         # Alert component
│           └── AlertWrapper.js  # Alert wrapper
├── .env.example        # Root reference file (explains the setup)
├── TASKS.md           # Development tasks (145 points)
├── package.json       # Root dependencies
├── README.md          # Project documentation
└── SETUP_GUIDE.md     # This file
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
- Helmet.js for HTTP headers (COOP and CORP disabled for CORS)
- XSS protection
- NoSQL injection prevention
- Rate limiting (configurable)
- CORS configuration with credentials support
- Cookie-based JWT storage
- Image upload validation (JPEG, PNG only, 5MB limit)

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
**Problem:** `MongooseError: Failed to connect to MongoDB`

**Solutions:**
- ✅ Ensure MongoDB is running locally (`mongod` service)
- ✅ Check `MONGO_URI` in `backend/.env` is correct
- ✅ For Atlas: Verify IP whitelist (add 0.0.0.0/0 for development)
- ✅ For Atlas: Ensure password in connection string has no special characters (or is URL-encoded)
- ✅ Check network firewall rules

### Email Not Sending
**Problem:** Emails not being sent after signup

**Solutions:**
- ✅ Confirm you're using Gmail **App Password**, not regular password
- ✅ Check 2-Step Verification is enabled on Google Account
- ✅ Verify `EMAIL` and `APP_PASSWORD` in `backend/.env`
- ✅ Ensure `APP_PASSWORD` has **no spaces** (remove spaces from generated password)
- ✅ Check `NAME` variable is set in `backend/.env`

### Google OAuth Not Working
**Problem:** Google login button doesn't work or shows errors

**Solutions:**
- ✅ Verify `CLIENT_ID` in `backend/.env` matches `REACT_APP_GOOGLE_CLIENT_ID` in `frontend/.env`
- ✅ Check authorized JavaScript origins includes `http://localhost:3000`
- ✅ Verify authorized redirect URIs includes `http://localhost:3000`
- ✅ Ensure OAuth consent screen is properly configured
- ✅ Confirm Google+ API is enabled in Google Cloud Console
- ✅ Make sure you're using the **Client ID**, not Client Secret
- ✅ Clear browser cache and cookies

### CORS Errors
**Problem:** `Access-Control-Allow-Origin` errors in browser console

**Solutions:**
- ✅ Check `REACT_APP_FRONTEND_URL` in `backend/.env` is `http://localhost:3000`
- ✅ Ensure frontend is running on port 3000
- ✅ Verify backend CORS configuration in `server.js`
- ✅ Make sure both servers are running

### API Connection Failed
**Problem:** Frontend can't connect to backend

**Solutions:**
- ✅ Verify backend is running on port 5000
- ✅ Check `REACT_APP_BACKEND_URL` in `frontend/.env` is `http://localhost:5000`
- ✅ Ensure no typos in the URL
- ✅ Confirm backend server started without errors
- ✅ Check firewall isn't blocking ports

### Port Already in Use
**Problem:** `Error: listen EADDRINUSE: address already in use :::5000`

**Solutions:**
- ✅ Kill process using the port:
  ```bash
  # Windows PowerShell
  netstat -ano | findstr :5000
  taskkill /PID <PID> /F
  
  # Linux/Mac
  lsof -i :5000
  kill -9 <PID>
  ```
- ✅ Or change port in `backend/server.js` (update `app.listen(5000, ...)`)

### Image Upload Errors
**Problem:** `MulterError: File too large` or `Image is required`

**Solutions:**
- ✅ Check file size is under 5MB limit
- ✅ Ensure file format is JPEG or PNG
- ✅ Verify `backend/handlers/images/` directory exists (auto-created on setup)
- ✅ Check that image file is selected before submitting form
- ✅ To increase limit, edit `backend/handlers/upload.js` (change `fileSize` value)

### React Environment Variables Not Loading
**Problem:** `process.env.REACT_APP_BACKEND_URL` is undefined

**Solutions:**
- ✅ Ensure `.env` file is in `frontend/` directory (not root)
- ✅ Verify all frontend variables start with `REACT_APP_`
- ✅ **Restart the React development server** after changing `.env` (REQUIRED!)
- ✅ Check for typos in variable names
- ✅ Ensure no quotes around values in `.env` file

### JWT Token Errors
**Problem:** `Invalid token` or authentication errors

**Solutions:**
- ✅ Check `JWT_SECRET` in `backend/.env` is at least 32 characters
- ✅ Clear browser cookies
- ✅ Verify `JWT_SECRET` hasn't changed (invalidates existing tokens)
- ✅ Make sure JWT_SECRET has no special characters that need escaping

## 📚 Additional Resources

- [MongoDB Documentation](https://www.mongodb.com/docs/)
- [Express.js Guide](https://expressjs.com/)
- [React Documentation](https://react.dev/)
- [JWT.io](https://jwt.io/)
- [Tailwind CSS](https://tailwindcss.com/)

## 📋 Quick Reference

### Environment Variables Summary

**Backend (.env location: `backend/.env`)**
```bash
MONGO_URI=mongodb://localhost:27017/ecommerce
JWT_SECRET=<64-char-random-string>
EMAIL=your_email@gmail.com
APP_PASSWORD=<16-char-no-spaces>
NAME=E-Commerce Team
CLIENT_ID=<google-client-id>.apps.googleusercontent.com
REACT_APP_FRONTEND_URL=http://localhost:3000
REACT_APP_BACKEND_URL=http://localhost:5000
```

**Frontend (.env location: `frontend/.env`)**
```bash
REACT_APP_BACKEND_URL=http://localhost:5000
REACT_APP_GOOGLE_CLIENT_ID=<same-as-CLIENT_ID-in-backend>
```

### Quick Commands

```bash
# Setup environment files
copy backend\.env.example backend\.env
copy frontend\.env.example frontend\.env

# Install all dependencies
pnpm install
cd frontend && pnpm install
cd ../backend && pnpm install

# Generate JWT secret
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"

# Start both servers (from root)
cd ..
pnpm run start

# Or start individually
cd backend
pnpm start  # Backend on port 5000

cd frontend
pnpm start  # Frontend on port 3000

# Kill process on port (Windows)
netstat -ano | findstr :5000
taskkill /PID <PID> /F
```

### Checklist Before Running

- [ ] MongoDB installed and running (or Atlas cluster created)
- [ ] `backend/.env` file created and all 8 variables filled
- [ ] `frontend/.env` file created and both variables filled
- [ ] Google OAuth Client ID created and configured with correct origins
- [ ] Gmail App Password generated (with 2-Step Verification enabled)
- [ ] JWT_SECRET generated (min 32 characters)
- [ ] CLIENT_ID matches REACT_APP_GOOGLE_CLIENT_ID exactly
- [ ] All dependencies installed (pnpm install in root, frontend, and backend)
- [ ] Ports 3000 and 5000 are available
- [ ] `backend/handlers/images/` directory exists (auto-created)

## 🤝 Contributing

See `CONTRIBUTING.md` for contribution guidelines.

## 📄 License

This project is licensed under the MIT License - see `LICENSE` file.
---

**Happy Coding! 🚀**
