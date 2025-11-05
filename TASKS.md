# 🎯 E-Commerce Project - Development Tasks

Complete these tasks to enhance the e-commerce platform. Each task has a difficulty level and point value.

## 📊 Points System

**Total Points in File: 285 points**

### ⚠️ IMPORTANT: Task Limits

**You can only claim a MAXIMUM of 145 points by solving:**
- ✅ **3 Easy Tasks** (10 points each) = 30 points max
- ✅ **4 Medium Tasks** (15 points each) = 60 points max  
- ✅ **3 Hard Tasks** (25 points each) = 75 points max

**Total Claimable: 145 points**

### 🎁 Bonus Opportunity
**Solving Critical Issues (Tasks 0-3) may unlock bonus task slots!** 🔓  
(This could allow you to attempt more tasks per difficulty level - but this is not confirmed yet)

The remaining tasks beyond your limits are **optional** - complete them for additional learning and portfolio value, but they won't count toward your score.

---

## 🚨 CRITICAL FIXES & IMPROVEMENTS (High Priority)

### 0. 🔐 Fix Authentication State Management & Navigation
**Points: +15** | **Difficulty: Medium** | **Priority: CRITICAL** ⚠️

**Description:**  
Currently, the app has no authentication state management. Users stay logged in but the navbar doesn't reflect this. Add proper auth state handling.

**Current Issues:**
- Navbar always shows "Sign Up" and "Log In" even when user is logged in
- No logout button
- No user name/profile display when authenticated
- No protected routes (anyone can access Add Product page)
- Login doesn't redirect to home page after success
- No way to know current user's role

**Requirements:**
- Create `AuthContext.js` for global auth state management
- Add `useAuth` hook to access current user info (name, email, role, isAuthenticated)
- Update navbar to show:
  - When NOT logged in: Home | Sign Up | Log In
  - When logged in: Home | Add Product (Retailer only) | Cart | [Username] | Log Out
- Add logout functionality that clears cookies and redirects to login
- Protect routes: `/products` (Retailer only), `/cart` (authenticated users)
- Store user info from JWT token in auth context
- Redirect to home page after successful login
- Persist auth state across page refreshes

**Acceptance Criteria:**
- Navbar changes based on authentication state
- Logout button works and clears authentication
- Protected routes redirect unauthorized users
- User role determines which navbar items appear
- Login redirects to home page after success
- Auth state persists on page refresh

---

### 1. 🔧 Separate Google Sign-In for Login vs Sign Up
**Points: +15** | **Difficulty: Medium** | **Priority: HIGH** ⚠️

**Description:**  
Currently, Google OAuth only appears on the Sign Up page. Add it to the Login page and handle both scenarios properly.

**Current Issues:**
- Google Sign-In button only on Sign Up page
- Login page has no Google OAuth option
- User experience is inconsistent

**Requirements:**
- Add Google OAuth button to Login page (copy from SignUp.js)
- Both pages should use the same `/oauth` endpoint
- Backend already handles both new and existing users correctly
- Ensure consistent styling between both pages
- Add "New to our platform?" link on Login → Sign Up
- Add "Already have an account?" link on Sign Up → Login (already exists)

**Acceptance Criteria:**
- Google Sign-In appears on both Login and Sign Up pages
- OAuth works correctly from both pages
- Backend creates account for new users, logs in existing users
- Consistent UI/UX across both auth pages

---

---

### 2. ⚠️ Improve Error Handling & User Feedback
**Points: +15** | **Difficulty: Medium** | **Priority: HIGH** ⚠️

**Description:**  
Current error messages are generic and inconsistent. Many components have broken alert code or poor error handling.

**Current Issues:**
- ProductForm.js: Uses `alert.length` but alert is an object (will crash)
- Cart.js: Uses `alert.length` but alert is an object (will crash)
- Login.js: Always shows "Success" even if login fails
- Generic error messages like "An error occurred"
- No validation feedback before submission
- No loading states during API calls

**Requirements:**
- Fix ProductForm.js alert code (change from array to object)
- Fix Cart.js alert code (change from array to object)
- Fix Login.js to properly handle error responses from backend
- Add specific validation messages for each field
- Show loading spinner during API calls
- Implement toast notifications instead of modal alerts (better UX)
- Add field-level validation with red borders for invalid inputs
- Show success messages with green styling, errors with red
- Add retry mechanism for failed network requests
- Handle 401 (unauthorized), 403 (forbidden), 404 (not found) specifically

**Acceptance Criteria:**
- All components use correct alert format
- Login shows actual error/success from server
- Validation errors appear before submission
- Loading states prevent double submissions
- Error messages are specific and actionable
- Toast notifications work consistently

---

### 3. 🎨 Improve UI/UX Design & Consistency
**Points: +15** | **Difficulty: Medium** | **Priority: HIGH** ⚠️

**Description:**  
Current UI is basic and inconsistent. Improve styling, layout, responsiveness, and overall user experience.

**Current Issues:**
- Inconsistent styling across pages
- No responsive design (breaks on mobile)
- Forms are not visually appealing
- No hover states or transitions
- Product cards have minimal styling
- Cart page layout is cluttered
- No empty state illustrations

**Requirements:**
- Create consistent design system using Tailwind CSS
- Add responsive layout (mobile, tablet, desktop)
- Improve form styling with proper labels, spacing, focus states
- Add hover effects and smooth transitions
- Redesign product cards with better image sizing, shadows, and spacing
- Add empty state illustrations (empty cart, no products, no search results)
- Improve button styles (primary, secondary, danger)
- Add icons using a library (Heroicons, Lucide, or Font Awesome)
- Create a color palette and use consistent colors
- Add proper spacing and typography hierarchy
- Make navbar sticky with better styling
- Add loading skeletons instead of blank screens

**Acceptance Criteria:**
- All pages are responsive (320px to 1920px)
- Consistent styling across all components
- Smooth transitions and hover effects
- Empty states display helpful messages
- Forms are intuitive and visually appealing
- Color palette is consistent throughout

---

## 📝 EASY TASKS (10 points each)

### 4. ⚙️ Add .gitignore File
**Points: +10** | **Difficulty: Easy** | **Priority: HIGH** ⚠️

**Description:**  
Create a proper `.gitignore` file to prevent sensitive files and dependencies from being committed to the repository.

**Requirements:**
- Add `.env` to prevent environment variables from being committed
- Ignore `node_modules/` directories
- Ignore build files and logs
- Ignore OS-specific files (`.DS_Store`, `Thumbs.db`)
- Ignore uploaded images in `backend/handlers/images/` (NOTE: Keep the directory itself but ignore uploaded files)

**Acceptance Criteria:**
- `.gitignore` file exists at project root
- Contains all necessary patterns for Node.js/React projects
- Environment files are protected
- Uploaded product images are not committed to Git

---

### 5. 📱 Add Loading Spinner Component
**Points: +10** | **Difficulty: Easy**

**Description:**  
Create a reusable loading spinner component to show during API calls and data fetching operations.

**Requirements:**
- Create `Loading.js` component in `frontend/src/Components/`
- Use CSS or Tailwind to create an animated spinner
- Make it reusable with props for size and color
- Add loading states to at least 2 existing components (ProductList, Cart)

**Acceptance Criteria:**
- Spinner displays during fetch operations
- Component is properly styled and centered
- Works across different pages

---

### 6. 🎨 Create Footer Component
**Points: +10** | **Difficulty: Easy**

**Description:**  
Add a professional footer to the application with useful links and information.

**Requirements:**
- Create `Footer.js` component in `frontend/src/Components/`
- Include copyright information
- Add social media links (GitHub, LinkedIn, Twitter)
- Add quick links (Home, Products, Cart)
- Use Tailwind CSS for styling
- Make it responsive

**Acceptance Criteria:**
- Footer appears on all pages
- Links are functional
- Responsive design works on mobile and desktop

---

### 7. 🛒 Add "Buy Now" Functionality
**Points: +10** | **Difficulty: Easy**

**Description:**  
The "Buy Now" button in Cart.js exists but does nothing. Implement basic buy functionality.

**Current Issues:**
- "Buy Now" button has no onClick handler
- No purchase confirmation
- No order tracking

**Requirements:**
- Add onClick handler to "Buy Now" button
- Show confirmation dialog before purchase
- Clear purchased items from cart after successful purchase
- Show success message with order details
- Optional: Generate a simple order ID and display it
- Optional: Send confirmation email (reuse mail handler)

**Acceptance Criteria:**
- Buy Now button works and confirms purchase
- Purchased items removed from cart
- Success message displays order confirmation
- User can see what they purchased

---

### 8. 📋 Add Form Validation Feedback
**Points: +10** | **Difficulty: Easy**

**Description:**  
Add real-time validation feedback to all forms with visual indicators.

**Requirements:**
- Add red border to invalid fields
- Add green checkmark to valid fields
- Show inline error messages below each field
- Validate as user types (debounced)
- Disable submit button until form is valid
- Add password strength indicator

**Acceptance Criteria:**
- Visual feedback appears in real-time
- Error messages are specific to each field
- Submit button state reflects form validity
- Password strength indicator shows weak/medium/strong

---

### 9. 🔍 Add Search Bar to Navbar
**Points: +10** | **Difficulty: Easy**

**Description:**  
Move search functionality to navbar for better accessibility.

**Current Issues:**
- Search component exists but not easily accessible
- Users have to navigate to search page

**Requirements:**
- Add search input to navbar
- Make it collapsible on mobile
- Redirect to search results on submit
- Add search icon button
- Preserve search query in URL

**Acceptance Criteria:**
- Search bar appears in navbar
- Responsive on all devices
- Submitting search redirects to results page
- Search query persists in URL and input field

---

### 10. � Add Email Verification
**Points: +10** | **Difficulty: Easy**

**Description:**  
Implement email verification for new signups using the existing mail handler.

**Requirements:**
- Generate verification token on signup
- Send verification email with link
- Add `/verify-email/:token` route
- Update user schema to include `emailVerified` field
- Prevent unverified users from certain actions (optional)
- Resend verification email option

**Acceptance Criteria:**
- Verification emails sent on signup
- Clicking link verifies email
- User schema tracks verification status
- Verified users can access all features

---

### 11. 💰 Display Total Cart Price
**Points: +10** | **Difficulty: Easy**

**Description:**  
Add a cart summary showing total price, item count, and subtotals.

**Requirements:**
- Calculate and display total price of all cart items
- Show item count in cart
- Display subtotal for each item (price × quantity)
- Add quantity selector for each item
- Show savings if applicable
- Add "Proceed to Checkout" button

**Acceptance Criteria:**
- Total price calculates correctly
- Item count displays in navbar cart icon
- Quantity can be adjusted per item
- Checkout button is prominent

---

## �🔨 MEDIUM TASKS (15 points each)

### 12. 🔍 Implement Advanced Search Filters
**Points: +15** | **Difficulty: Medium**

**Description:**  
Enhance the search functionality with filters for price range, category, and sorting options.

**Requirements:**
- Add price range filter (min/max inputs)
- Add category/tag filter (dropdown or checkboxes)
- Add sort options (price: low-to-high, high-to-low, newest)
- Update `searchProducts` handler to support new filters
- Add filter UI to Search component
- Persist filters in SearchContext

**Acceptance Criteria:**
- All filters work correctly
- Multiple filters can be applied simultaneously
- Results update in real-time
- Clear filters button works

---

### 13. 🛡️ Add Input Validation & Error Handling
**Points: +15** | **Difficulty: Medium**

**Description:**  
Implement comprehensive client-side and server-side validation with better error messages.

**Requirements:**
- Add real-time validation to all form inputs
- Show specific error messages for each field
- Implement password strength indicator
- Add email format validation
- Improve error handling in all API routes
- Create custom error response format
- Handle network errors gracefully

**Acceptance Criteria:**
- All forms validate before submission
- Error messages are user-friendly and specific
- Server returns consistent error format
- Network errors are caught and displayed

---

### 14. 📊 Create User Dashboard
**Points: +15** | **Difficulty: Medium**

**Description:**  
Build a user dashboard showing order history, profile information, and account settings.

**Requirements:**
- Create `Dashboard.js` component
- Add route `/dashboard` in App.js
- Display user name, email, and role
- Show recent orders/purchases (you'll need to add purchase schema)
- Add "Edit Profile" functionality
- Protected route (requires login)
- Different views for Retailer vs Consumer

**Acceptance Criteria:**
- Dashboard displays user information
- Protected route redirects unauthorized users
- Different content shown based on user role
- Profile editing works correctly

---

### 15. ⭐ Implement Product Rating System
**Points: +15** | **Difficulty: Medium**

**Description:**  
Add a 5-star rating system to products alongside the existing review system.

**Requirements:**
- Update product schema to include ratings
- Create star rating input component
- Display average rating on product cards
- Show rating distribution (5★: x%, 4★: y%, etc.)
- Users can only rate once per product
- Update `saveComment` to include rating
- Calculate and display average rating

**Acceptance Criteria:**
- Users can submit ratings with reviews
- Average rating displays correctly
- Rating distribution shows in product details
- Prevents duplicate ratings from same user

---

### 16. � Implement Password Reset Functionality
**Points: +15** | **Difficulty: Medium**

**Description:**  
Add "Forgot Password" feature with email-based password reset.

**Requirements:**
- Add "Forgot Password?" link on login page
- Create password reset request form (email input)
- Generate secure reset token (expire after 1 hour)
- Send reset email with link to reset page
- Create password reset page with token verification
- Update password in database after verification
- Add rate limiting to prevent abuse

**Acceptance Criteria:**
- Reset emails are sent successfully
- Token expires after set time
- Password is updated securely
- User can log in with new password
- Proper error messages for invalid/expired tokens

---

### 17. 📸 Add Image Preview & Validation
**Points: +15** | **Difficulty: Medium**

**Description:**  
Improve product image upload with preview and better validation.

**Current Issues:**
- No preview before upload
- Only shows error after submission
- File size error message is generic

**Requirements:**
- Show image preview after selection
- Display image dimensions
- Show file size before upload
- Validate file type client-side
- Show progress bar during upload
- Add "Change Image" button to replace selected image
- Show helpful error messages (e.g., "Image must be under 5MB")
- Add drag-and-drop support for image upload

**Acceptance Criteria:**
- Image preview displays after selection
- File validation happens before submission
- Error messages are user-friendly
- Users can change image before uploading
- Drag-and-drop works correctly

---

### 18. 🛍️ Add Product Categories & Tags
**Points: +15** | **Difficulty: Medium**

**Description:**  
Add category/tag system to organize products better.

**Requirements:**
- Update product schema to include categories and tags
- Add category dropdown to ProductForm
- Add tag input (comma-separated or chip UI)
- Show categories in navbar dropdown
- Filter products by category
- Display tags on product cards
- Add category-based navigation
- Implement tag-based search

**Acceptance Criteria:**
- Products can have categories and tags
- Categories appear in navigation
- Filtering by category works
- Tags are searchable and clickable
- UI is intuitive

---

### 19. 💬 Improve Review System
**Points: +15** | **Difficulty: Medium**

**Description:**  
Enhance the existing review system with better UI and features.

**Requirements:**
- Display reviews on product detail page
- Add "Write a Review" button
- Show reviewer name and date
- Add helpful/not helpful buttons
- Sort reviews (most recent, most helpful)
- Prevent multiple reviews from same user
- Add character limit for reviews
- Show review count on product cards

**Acceptance Criteria:**
- Reviews display properly on product pages
- Users can write and submit reviews
- One review per product per user
- Sorting works correctly
- Review UI is clean and readable

---

### 20. 📱 Add Toast Notifications
**Points: +15** | **Difficulty: Medium**

**Description:**  
Replace modal alerts with toast notifications for better UX.

**Requirements:**
- Create Toast component using Tailwind
- Support different types (success, error, warning, info)
- Auto-dismiss after 3-5 seconds
- Add close button
- Stack multiple toasts
- Animate in/out smoothly
- Position in top-right corner
- Replace all Alert components with Toast

**Acceptance Criteria:**
- Toasts appear/disappear smoothly
- Multiple toasts stack properly
- Different types have different colors
- Auto-dismiss works
- All alerts converted to toasts

---

## �🚀 HARD TASKS (25 points each)

### 21. 💳 Implement Order & Payment System
**Points: +25** | **Difficulty: Hard**

**Description:**  
Create a complete order management system with payment integration (mock or Stripe).

**Requirements:**
- Create `orders` schema with order details (orderId, userId, products, total, status, timestamp)
- Implement checkout flow (Cart → Checkout → Order Confirmation)
- Add order summary page showing itemized bill
- Create `placeOrder` handler in backend
- Integrate payment gateway (Stripe test mode or mock payment)
- Send order confirmation email using existing mail handler
- Add order history to user dashboard (see Task 6)
- Update product inventory/stock after purchase
- Generate unique order IDs (UUID or timestamp-based)
- Clear cart after successful order

**Acceptance Criteria:**
- Complete checkout flow works end-to-end
- Orders are saved to database with all details
- Confirmation emails are sent successfully
- Order history is accessible in dashboard
- Payment processing works (test mode or mock)
- Cart is cleared after order placement
- Proper error handling for failed payments

---

### 22. 🔐 Implement OAuth with Multiple Providers
**Points: +25** | **Difficulty: Hard**

**Description:**  
Extend the authentication system to support multiple OAuth providers (Google, GitHub, Facebook).

**Requirements:**
- Add GitHub OAuth integration
- Add Facebook OAuth integration (or Twitter/Microsoft)
- Update `oauth` handler to support multiple providers
- Add provider selection UI on login page
- Handle account linking (same email from different providers)
- Update user schema to store OAuth provider info
- Add profile picture from OAuth provider
- Implement account merge/link functionality

**Acceptance Criteria:**
- Users can sign in with Google, GitHub, and one other provider
- Account linking works for same email
- Profile pictures display correctly
- All OAuth providers work seamlessly

---

### 23. 📧 Build Customer Support Ticket System
**Points: +25** | **Difficulty: Hard**

**Description:**  
Create a complete support ticket system for customer inquiries and issue tracking.

**Requirements:**
- Create `tickets` schema (subject, description, status, priority, user, timestamp)
- Create `Support.js` component with ticket creation form
- Create admin panel to view and respond to tickets
- Implement ticket status (Open, In Progress, Resolved, Closed)
- Add priority levels (Low, Medium, High, Urgent)
- Email notifications for ticket updates
- File attachment support for tickets
- Ticket comment/reply system
- Search and filter tickets by status/priority
- Role-based access (users see their tickets, admins see all)

**Acceptance Criteria:**
- Users can create support tickets
- Admins can view and respond to all tickets
- Email notifications work for ticket updates
- Status and priority can be updated
- File attachments can be uploaded
- Reply system works bidirectionally

---

### 24. 🏪 Implement Retailer Product Management Dashboard
**Points: +25** | **Difficulty: Hard**

**Description:**  
Create a complete dashboard for retailers to manage their products.

**Requirements:**
- Create `RetailerDashboard.js` component
- Show all products created by current retailer
- Add edit product functionality (name, price, description, image)
- Add delete product functionality with confirmation
- Show product statistics (views, cart adds, purchases)
- Add bulk actions (delete multiple, change status)
- Implement product status (draft, published, out of stock)
- Add inventory management (stock quantity tracking)
- Show sales analytics per product
- Add product search and filtering in dashboard
- Create product preview before publishing
- Add image gallery support (multiple images per product)

**Acceptance Criteria:**
- Retailers can only see and edit their own products
- Edit functionality updates products correctly
- Delete functionality works with confirmation
- Statistics display accurately
- Bulk actions work correctly
- Inventory tracking updates on purchases

---

## 📋 Bonus Challenge Tasks (Optional)

**Note:** These tasks are **OPTIONAL** and do **NOT** count toward your 145-point limit. Complete them for learning, experience, and portfolio enhancement only.

### 25. 🌙 Dark Mode Toggle
Add dark mode support with theme persistence.

### 26. 📱 Progressive Web App (PWA)
Convert the application to a PWA with offline support.

### 27. 🔔 Real-time Notifications
Implement WebSocket-based notifications for new products, order updates.

### 28. 📈 Admin Analytics Dashboard
Create analytics page showing sales, user statistics, popular products.

### 29. 🌍 Multi-language Support
Add i18n support for English, Spanish, and French.

### 30. 🎯 Product Recommendations
Implement "You may also like" recommendations using basic algorithms.

### 31. 📦 Order Tracking System
Add shipment tracking with status updates (Processing, Shipped, Delivered).

### 32. ⚡ Performance Optimization
Implement lazy loading, code splitting, image optimization, and caching.

### 33. 🔐 Two-Factor Authentication (2FA)
Add optional 2FA using email or authenticator app.

### 34. 💾 Wishlist Functionality
Allow users to save products to a wishlist for later.

---

## 🎓 Learning Resources

- **MongoDB:** https://www.mongodb.com/docs/
- **Express.js:** https://expressjs.com/
- **React:** https://react.dev/
- **Node.js:** https://nodejs.org/docs/
- **JWT:** https://jwt.io/introduction
- **Stripe API:** https://stripe.com/docs/api
- **OAuth 2.0:** https://oauth.net/2/
- **Tailwind CSS:** https://tailwindcss.com/docs

---

## ✅ Submission Guidelines

**Remember: You can only submit 3 Easy + 4 Medium + 3 Hard tasks for points (145 points total).**

### How to Submit:

1. **Choose your tasks wisely** - Select tasks that best demonstrate your skills
2. Create a new branch for each task (e.g., `feature/task-4-gitignore`)
3. Commit your changes with clear messages (e.g., `feat: Add .gitignore file (Task 4)`)
4. Test thoroughly before marking as complete
5. Document any new environment variables in `.env.example`
6. Update README.md if you add new features or functionality
7. Submit a pull request for review with task number in title

### Recommended Strategy:

- **Start with Critical Issues (Tasks 0-3)** - These may unlock bonus slots ⚠️
- **Pick tasks that align with your strengths** - Frontend? Backend? Full-stack?
- **Balance difficulty** - Don't pick all hard tasks; mix them up
- **Consider task dependencies** - Some tasks build on others
- **Extra tasks are for learning** - Complete more than 10 tasks if you want, but only 10 count

### Task Selection Tips:

✅ **Priority 1:** Critical fixes (Tasks 0-3) - Fix broken functionality  
✅ **Priority 2:** Easy wins (Tasks 4-11) - Quick points, foundational features  
✅ **Priority 3:** Medium complexity (Tasks 12-20) - Show solid skills  
✅ **Priority 4:** Hard challenges (Tasks 21-24) - Demonstrate expertise  
✅ **Priority 5:** Bonus tasks (Tasks 25-34) - Portfolio boosters (no points)

**Good luck and happy coding! 🚀**
