# Setup Guide - TradexStrategies

## Node.js Version Compatibility

This project is compatible with Node.js versions **16.0.0 and above**.

### Recommended Versions:
- Node.js 18.x (LTS)
- Node.js 20.x (LTS)
- Node.js 21.x or higher

### Version Management

#### Using NVM (Node Version Manager)

**Install NVM:**
- macOS/Linux: https://github.com/nvm-sh/nvm
- Windows: https://github.com/coreybutler/nvm-windows

**Use project Node version:**
```bash
nvm use
```

This will automatically use the version specified in `.nvmrc` (Node 18).

#### Using other version managers:

**fnm (Fast Node Manager):**
```bash
fnm use
```

**asdf:**
```bash
asdf install nodejs
```

**Volta:**
```bash
volta install node@18
```

## Installation Steps

### 1. Clone Repository
```bash
git clone <repository-url>
cd strategy-lab-main
```

### 2. Verify Node Version
```bash
node --version
# Should output v16.x.x or higher
```

### 3. Install Dependencies

**Option A: Install all at once (recommended)**
```bash
npm run install:all
```

**Option B: Install separately**
```bash
# Frontend
cd frontend
npm install

# Backend
cd ../backend
npm install
```

### 4. Configure Backend

Create `backend/.env` file:
```env
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_anon_key
JWT_SECRET=your_jwt_secret_key
PORT=3001
```

### 5. Setup Database

1. Go to your Supabase project
2. Open SQL Editor
3. Run the script from `backend/database-setup.sql`
4. (Optional) Run `backend/seed-all-strategies.js` to populate strategies

### 6. Start Development Servers

**Terminal 1 - Backend:**
```bash
cd backend
npm start
```
Backend runs on http://localhost:3001

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```
Frontend runs on http://localhost:5173

## Troubleshooting

### Node Version Issues

**Error: "The engine 'node' is incompatible"**
```bash
# Update Node.js to version 16 or higher
nvm install 18
nvm use 18
```

**Error: "Cannot find module"**
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Port Already in Use

**Backend (Port 3001):**
```bash
# Find and kill process
lsof -ti:3001 | xargs kill -9  # macOS/Linux
netstat -ano | findstr :3001   # Windows
```

**Frontend (Port 5173):**
```bash
# Find and kill process
lsof -ti:5173 | xargs kill -9  # macOS/Linux
netstat -ano | findstr :5173   # Windows
```

### Database Connection Issues

1. Verify Supabase credentials in `.env`
2. Check if database tables are created
3. Ensure Supabase project is active

## Production Build

### Frontend
```bash
cd frontend
npm run build
npm run preview  # Test production build
```

### Backend
```bash
cd backend
npm run build
node dist/index.js
```

## Environment Variables

### Backend (.env)
```env
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your-anon-key
JWT_SECRET=your-secret-key-min-32-chars
PORT=3001
NODE_ENV=development
```

### Frontend
No environment variables required for development.

## Additional Resources

- [Node.js Downloads](https://nodejs.org/)
- [NVM Installation](https://github.com/nvm-sh/nvm)
- [Supabase Documentation](https://supabase.com/docs)
- [Vite Documentation](https://vitejs.dev/)
- [Express Documentation](https://expressjs.com/)

## Support

For issues or questions:
1. Check this setup guide
2. Review error messages carefully
3. Ensure Node.js version is 16.0.0 or higher
4. Verify all dependencies are installed
5. Check database connection and credentials
