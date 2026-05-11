# Creator Marketplace

A full-stack creator marketplace platform where creators can sell digital products, build audiences, and interact with buyers through a modern social-commerce ecosystem.

---

## Overview

Creator Marketplace is a production-style full-stack web application inspired by platforms like Gumroad, Fiverr, and Patreon.

The platform allows creators to:

* Create professional profiles
* Upload and sell digital products
* Receive payments securely
* Interact with users socially
* Build a personal creator brand

Users can:

* Browse products
* Purchase creator content
* Follow creators
* Leave reviews and comments
* Interact through realtime features

---

## Tech Stack

### Frontend

* React.js
* Vite
* React Router DOM
* Axios
* Zustand
* Tailwind CSS

### Backend

* Node.js
* Express.js
* Prisma ORM

### Database

* PostgreSQL

### Authentication

* JWT Authentication
* Bcrypt Password Hashing

### Cloud & Storage

* AWS S3 / Cloudinary (planned)

### Payments

* Stripe / Razorpay (planned)

### Realtime Features

* Socket.io (planned)

---

# Features

## Authentication System

* User registration
* Secure login
* Password hashing
* JWT authentication
* Protected routes

## Creator Profiles

* Public creator profiles
* Profile customization
* Avatar uploads
* Social links

## Marketplace

* Product uploads
* Product listings
* Product search & filtering
* Product detail pages

## Social Features

* Likes
* Comments
* Reviews
* Follow system
* Notifications

## Payments

* Secure checkout flow
* Order management
* Purchase history

## Realtime Features

* Live chat
* Instant notifications
* Activity feed

## Admin Dashboard

* User moderation
* Product management
* Platform analytics

---

# Project Structure

```bash
creator-marketplace/
│
├── client/                 # React Frontend
│   ├── src/
│   │   ├── api/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── layouts/
│   │   ├── pages/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── store/
│   │   └── utils/
│
├── server/                 # Express Backend
│   ├── prisma/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── routes/
│   │   └── services/
│
└── README.md
```

---

# Database Architecture

Core tables planned:

* Users
* Profiles
* Products
* Orders
* Reviews
* Followers
* Comments
* Likes
* Notifications
* Messages

---

# Installation

## Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/creator-marketplace.git
```

---

## Frontend Setup

```bash
cd client
npm install
npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

## Backend Setup

```bash
cd server
npm install
npm run dev
```

Backend runs on:

```bash
http://localhost:8000
```

---

## Environment Variables

Create a `.env` file inside `server/`:

```env
DATABASE_URL="postgresql://USERNAME:PASSWORD@localhost:5432/creator_marketplace"
JWT_SECRET="your_secret_key"
```

---

# Current Development Progress

## Completed

* React frontend setup
* Express backend setup
* GitHub integration
* PostgreSQL setup
* Prisma ORM integration

## In Progress

* Authentication APIs
* User profile system
* Product marketplace

## Planned

* Payment gateway integration
* Cloud storage
* Realtime messaging
* Notifications
* Admin dashboard
* Deployment

---

# Development Roadmap

### Phase 1

* Authentication
* Database schema
* Protected routes

### Phase 2

* Creator profiles
* Dashboard system
* File uploads

### Phase 3

* Product marketplace
* Product CRUD operations
* Search & filtering

### Phase 4

* Payments & orders
* Checkout flow
* Purchase access control

### Phase 5

* Social features
* Reviews
* Notifications
* Followers system

### Phase 6

* Realtime chat
* Socket.io integration

### Phase 7

* Deployment
* Performance optimization
* Security improvements

---

# Goals of This Project

This project is being built to:

* Learn full-stack development deeply
* Understand scalable backend architecture
* Practice production-level coding standards
* Explore modern web technologies
* Build a strong portfolio project

---

# Future Improvements

* AI-powered recommendations
* Creator analytics dashboard
* Subscription system
* Video hosting support
* Mobile responsiveness enhancements
* Docker & CI/CD integration
* Redis caching

---

# License

This project is licensed under the MIT License.

---

# Author

Built by Sparsh Dua.
