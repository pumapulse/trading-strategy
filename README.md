# TradexStrategies - Trading Strategy Platform

Professional trading strategy platform with React + Vite frontend and Express + JavaScript backend.

## 🚀 Quick Start (For Team Members)

**1. Install Dependencies**
```bash
npm run install:all
```

**2. Setup Environment Variables**
```bash
# Copy example files
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env

# Edit backend/.env with your Supabase credentials
```

**3. Start the Application**
```bash
# Terminal 1 - Start Backend
npm start

# Terminal 2 - Start Frontend
npm run start:frontend
```

---

## Requirements

- **Node.js**: Version 16.0.0 or higher (any version 16+)
- **npm**: Comes with Node.js
- **Supabase Account**: For database (free tier available)

## Project Structure

```
.
├── frontend/          # React + Vite + Shadcn UI
├── backend/           # Express + JavaScript + Supabase
├── package.json       # Root scripts for convenience
└── README.md          # This file
```

## Available Commands

From root directory:
- `npm start` - Start backend server
- `npm run start:frontend` - Start frontend dev server
- `npm run install:all` - Install all dependencies
- `npm run build` - Build frontend for production

## Tech Stack

**Frontend:**
- React 18
- Vite
- Shadcn UI
- TailwindCSS
- React Router
- TanStack Query

**Backend:**
- Express.js
- JavaScript (ES Modules)
- JWT Authentication
- Supabase (PostgreSQL)
- Bcrypt
- Zod validation

