Sweet Shop Management System - README
🍬 Sweet Shop Management System
A full-stack Sweet Shop Management System built using Test-Driven Development (TDD) principles. 
This project demonstrates skills in API development, database management, frontend design, testing, and modern workflows with AI-assisted coding.
🚀 Features
🔐 Authentication
- User Registration & Login (JWT-based authentication).
- Role-based access: User vs Admin.

🍭 Sweet Management (Protected)
- POST /api/sweets → Add a new sweet (Admin).
- GET /api/sweets → View all sweets.
- GET /api/sweets/search → Search sweets by name, category, or price range.
- PUT /api/sweets/:id → Update sweet details (Admin).
- DELETE /api/sweets/:id → Delete sweet (Admin).

📦 Inventory Management (Protected)
- POST /api/sweets/:id/purchase → Purchase a sweet (decrease quantity).
- POST /api/sweets/:id/restock → Restock sweets (Admin only).

🎨 Frontend Application
- User registration & login forms.
- Dashboard with all sweets.
- Search & filter functionality.
- Purchase button (disabled if stock = 0).
- Admin panel for add/update/delete sweets.
- Responsive, modern UI.
🛠️ Tech Stack
Backend
- Node.js + Express.js (RESTful API)
- TypeScript
- PostgreSQL with ORM (Prisma/TypeORM/Sequelize)
- JWT Authentication
- Jest / Supertest for testing

Frontend
- React.js (Vite or CRA)
- TypeScript
- Axios for API calls
- React Router for navigation
- Tailwind CSS / Material UI for styling

DevOps & Tools
- Docker (optional for DB + API setup)
- GitHub Actions (CI/CD testing pipeline)
- AI Tools (Copilot, ChatGPT, Gemini)
📂 Project Structure
sweet-shop-management-system/
│── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── services/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── tests/
│   └── package.json
│
│── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── services/
│   └── package.json
│
│── docker-compose.yml (optional)
│── README.md
⚙️ Installation & Setup
Backend Setup
cd backend
npm install
npm run dev

Set up .env file in /backend:
DATABASE_URL=postgresql://user:password@localhost:5432/sweetshop
JWT_SECRET=your_secret_key
PORT=5000

Run migrations (if using Prisma/TypeORM):
npx prisma migrate dev

Run tests:
npm run test

Frontend Setup
cd frontend
npm install
npm run dev

Set up .env file in /frontend:
VITE_API_URL=http://localhost:5000/api

🧪 Testing
Backend tests are written with Jest + Supertest.

cd backend
npm run test


🤖 My AI Usage
I believe AI tools are a critical part of modern software development. 
Here’s how I used them in this project:

- GitHub Copilot → Generated boilerplate code (controllers, services).
- ChatGPT → Helped in brainstorming endpoint structures, README writing, debugging tricky test cases.
- Gemini → Used for API documentation suggestions.

Reflection:
AI significantly improved my productivity by reducing time spent on boilerplate and documentation. 
However, I ensured that all AI-generated code was reviewed, tested, and refactored to maintain project quality and follow TDD principles.


