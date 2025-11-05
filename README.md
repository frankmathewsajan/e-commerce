# 🛒 E-Commerce Web App

A full-stack e-commerce platform built with the MERN stack.  
It supports role-based access control, image uploads, and dynamic product management for retailers and consumers.

## 🔐 User Roles

- **Retailer**
  - Upload products with images
  - View and purchase other products
  
- **Consumer**
  - Browse products
  - Add to cart and buy items

## 🌟 Key Features

### Authentication
- JWT-based User Authentication
- Google OAuth 2.0 Integration
- Role-Based Access Control (RBAC)

### Product Management
- Image Uploads using Multer (5MB limit, JPEG/PNG)
- Product Listings with Dynamic Rendering
- Search Functionality
- Product Reviews & Comments

### Shopping Experience
- Cart Functionality with Add/Remove/View
- Purchase Flow
- Email Notifications

## 🛠️ Tech Stack

| Area      | Technology           |
|------------|----------------------|
| Frontend   | React.js             |
| Backend    | Node.js, Express.js  |
| Database   | MongoDB              |

## Package Manager Support

This project supports multiple package managers:
- npm (`package-lock.json`)
- yarn (`yarn.lock`)
- pnpm (`lock.yaml`)

## 💻 Getting Started

**1. Clone the repository** 
   ```Bash
   git clone "https://github.com/frankmathewsajan/e-commerce.git"
cd ./e-commerce
```

**2. Install dependencies**
- **using npm**
```Bash
npm install
cd frontend
npm install
cd ..
cd backend
npm install
cd ..
```
*OR*
- **using yarn**
```Bash
yarn install
cd frontend
yarn install
cd ..
cd backend
yarn install
cd ..
```
*OR*
- **using pnpm**
```Bash
pnpm install
cd frontend
pnpm install
cd ..
cd backend
pnpm install
cd ..
```

**3. Setup environment variables**

⚠️ **Important:** This project requires **TWO separate `.env` files**!

```Bash
# Copy backend environment template
copy backend\.env.example backend\.env
# OR on Linux/Mac: cp backend/.env.example backend/.env

# Copy frontend environment template  
copy frontend\.env.example frontend\.env
# OR on Linux/Mac: cp frontend/.env.example frontend/.env
```

Then fill in your actual values in both files. See [`SETUP_GUIDE.md`](./SETUP_GUIDE.md) for detailed instructions.

**Required Variables:**
- **Backend** (`backend/.env`): MONGO_URI, JWT_SECRET, EMAIL, APP_PASSWORD, NAME, CLIENT_ID, REACT_APP_FRONTEND_URL, REACT_APP_BACKEND_URL
- **Frontend** (`frontend/.env`): REACT_APP_BACKEND_URL, REACT_APP_GOOGLE_CLIENT_ID

📖 **For detailed setup instructions with step-by-step guides for MongoDB, Google OAuth, Gmail App Password, and more, see [SETUP_GUIDE.md](./SETUP_GUIDE.md)**

**4. Run both servers**
```Bash
pnpm run start
```
*OR*
```Bash
npm run start
```
*OR*
```Bash
yarn run start
```

This will start:
- Backend server on `http://localhost:5000`
- Frontend React app on `http://localhost:3000`

## ✅ Current Features

- ✅ OAuth with Google (Implemented)
- ✅ JWT-based Authentication
- ✅ Image Upload with 5MB limit
- ✅ Email Notifications
- ✅ Role-Based Access Control
- ✅ Shopping Cart System
- ✅ Product Search & Reviews

## 🚧 Upcoming Features

- Customer Support Ticket System
- Static About and Contact Pages
- Order History Dashboard
- Payment Gateway Integration

## 📄 License

This project is licensed under the [MIT License](./LICENSE).

> If you liked this project, then please don't forget to give this repository a star. Your 1 star means a lot for me.

## 👨‍💻 Author

**Original Author**
(_modhahrutav@gmail.com_)

**Cloned and restructured by**
(_Frank Mathew Sajan_) @frankmathewsajan
(_Shagnik Sarkar_) @SHAGNIK007

WiOS Club VIT-AP


## 🤝 Contributions

Feel free to fork, submit PRs, or open an issue. Let's build something cool together!
