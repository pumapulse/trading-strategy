# TradexStrategies - Trading Strategy Platform

Professional trading strategy platform with React + Vite frontend and Express + TypeScript backend.

## Requirements

- **Node.js**: Version 16.0.0 or higher (recommended: 18.x or 20.x)
- **npm**: Version 7.0.0 or higher
- **Supabase Account**: For database and authentication

## Project Structure

```
project/
├── frontend/          # React + Vite + Shadcn UI
├── backend/           # Express + TypeScript + Supabase
└── package.json       # Root scripts
```

## Quick Start

### 1. Check Node Version
```bash
node --version  # Should be 16.0.0 or higher
```

If you're using nvm (Node Version Manager):
```bash
nvm use  # Automatically uses version from .nvmrc
```

### 2. Install Dependencies
```bash
npm run install:all
```

### 3. Setup Backend
```bash
cd backend
# Create .env file with your Supabase credentials
# See backend/.env.example for required variables
```

### 4. Setup Database
Run the SQL script in `backend/database-setup.sql` in your Supabase SQL editor.

### 5. Run Application

**Start Backend:**
```bash
npm start
```
Backend runs on http://localhost:3001

**Start Frontend (in new terminal):**
```bash
npm run dev:frontend
```
Frontend runs on http://localhost:5173

## API Endpoints

- `POST /api/auth/signup` - Create account
- `POST /api/auth/login` - Login  
- `GET /api/auth/profile` - Get user profile

## Tech Stack

**Frontend:**
- React 18
- TypeScript
- Vite
- Shadcn UI
- TailwindCSS
- React Router
- TanStack Query

**Backend:**
- Express
- TypeScript
- JWT Authentication
- Supabase (PostgreSQL)
- Bcrypt
- Zod validation
