# Candidate Management Backend

## 🛠️ Technologies Used

- **Backend**: Node.js, Express
- **Database**: MongoDB
- **API**: RESTful
- **Environment**: dotenv (for .env files)
- **Package Manager**: npm

## 🚀 Quick Start Guide

### 1. What You Need
- Node.js (install from [nodejs.org](https://nodejs.org/))
- MongoDB (install from [mongodb.com](https://www.mongodb.com/))

### 2. Setup Steps

1. **Copy the project**
   ```bash
   git clone https://github.com/your-repo/candidate-management-system.git
   cd candidate-management-system/backend
   ```

2. **Install packages**
   ```bash
   npm install
   ```

3. **Create .env file**
   ```bash
   echo "MONGODB_URI=mongodb://localhost:27017/candidateDB" > .env
   echo "PORT=5000" >> .env
   ```

### 3. Run the Server

For development (auto-restarts when you make changes):
```bash
npm run dev
```

For normal use:
```bash
npm start
```

The server will run at: `http://localhost:5000`

## 📡 API Endpoints

| Method | URL                     | What it does                |
|--------|-------------------------|-----------------------------|
| GET    | /api/candidates         | Get all candidates          |
| POST   | /api/candidates         | Add new candidate           |
| PUT    | /api/candidates/:id     | Update candidate            |
| DELETE | /api/candidates/:id     | Remove candidate            |

### Example API Calls

**Add a candidate:**
```bash
curl -X POST http://localhost:5000/api/candidates \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Alex Johnson",
    "phone": "5551234567",
    "email": "alex@example.com",
    "gender": "Male",
    "experience": "3 Years",
    "skills": ["JavaScript", "Node.js"]
  }'
```

**Get all candidates:**
```bash
curl http://localhost:5000/api/candidates
```

## ❓ Need Help?

**Server won't start?**
- Make sure MongoDB is running
- Check no other app is using port 5000

**Other problems?**
- Delete `node_modules` and run `npm install` again
- Check error messages in terminal

...get started quickly! 🚀
