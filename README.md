# Food-App-Project

## Description

The Food-App-Project is a Node.js/Express backend application designed to manage users, restaurants, foods, categories, and orders for a food delivery platform.  
It uses MongoDB as a database (via Mongoose), and the codebase is structured around RESTful APIs with authentication and authorization middleware.

## Main Features

- **User Management:** Registration, login, profile updates, password management, and user roles (client, admin, vendor, driver).
- **Restaurant Management:** Add, view, get by ID, and delete restaurants.
- **Food Management:** Add, update, delete, and view food items; fetch foods by restaurant; place orders.
- **Order Management:** Place orders and update order status (admin only).
- **Category Management:** Organize foods into categories.
- **Authentication & Authorization:** Middleware for role-based access control, including admin-only routes.
- **Database:** MongoDB (connection managed in `config/db.js`).

## Project Structure Overview

- `models/`: Contains Mongoose schema models for User, Order, Category, etc.
- `controllers/`: Business logic for handling API requests for users, restaurants, food, and test routes.
- `routes/`: Express routers for users, restaurants, food, and test endpoints.
- `middlewares/`: Custom authentication and admin-check middleware.
- `config/db.js`: MongoDB connection setup.

## Example Endpoints

- `/api/users/`: User-related actions (get, update, reset password, delete).
- `/api/restaurants/`: Create, get all, get by ID, delete restaurants.
- `/api/foods/`: CRUD for food items, place orders, update order status.
- `/api/categories/`: Manage food categories.

## Technologies Used

- Node.js
- Express.js
- MongoDB & Mongoose
- bcryptjs (for password hashing)
- colors (console formatting)
- JWT (implied for authentication, though not shown in above code)

## How to Run

1. Clone the repository.
2. Install dependencies with `npm install`.
3. Set up a `.env` file with your MongoDB connection string (`MONGO_URL`).
4. Start the server with `node app.js` or `npm start`.

## Note

- This summary is based on a partial code analysis. For a full list of features and files, see the [repository on GitHub](https://github.com/SanjanShiv/Food-App-Project) directly.
- Contributions and suggestions are welcome!
