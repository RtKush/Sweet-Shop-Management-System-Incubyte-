## Sweet Shop Management System

### Objective
Design, build, and test a full-stack Sweet Shop Management System. This project demonstrates skills in API development, database management, frontend implementation, testing, and modern workflows with AI-assisted coding.

---

### Core Requirements

#### Backend API
- Node.js + Express.js
- PostgreSQL (ORM: Prisma/TypeORM/Sequelize)
- JWT-based authentication (User/Admin)
- Endpoints:
  - `POST /api/auth/register` – Register
  - `POST /api/auth/login` – Login
  - `POST /api/sweets` – Add sweet (Admin)
  - `GET /api/sweets` – List sweets
  - `GET /api/sweets/search` – Search sweets
  - `PUT /api/sweets/:id` – Update sweet (Admin)
  - `DELETE /api/sweets/:id` – Delete sweet (Admin)
  - `POST /api/sweets/:id/purchase` – Purchase sweet
  - `POST /api/sweets/:id/restock` – Restock sweet (Admin)
- Sweet model: ID, name, category, price, quantity

#### Frontend Application
- React.js (Vite), TypeScript, Tailwind CSS / Material UI
- Features:
  - Registration & login forms
  - Dashboard/homepage for sweets
  - Search & filter sweets
  - Purchase button (disabled if out of stock)
  - Admin panel for add/update/delete sweets
- Responsive, modern UI


---

### Setup Instructions

#### Backend
```sh
cd backend
npm install
npm run dev
```
Set up `.env` in `/backend`:
```
DATABASE_URL=postgresql://user:password@localhost:5432/sweetshop
JWT_SECRET=your_secret_key
PORT=5000
```
Run migrations (if using Prisma/TypeORM):
```sh
npx prisma migrate dev
```
Run tests:
```sh
npm run test
```

#### Frontend
```sh
cd frontend
npm install
npm run dev
```
Set up `.env` in `/frontend`:
```
VITE_API_URL=http://localhost:5000/api
```

---

### Testing
- Backend: Jest + Supertest
```sh
cd backend
npm run test
```

---

### My AI Usage
- **GitHub Copilot:** Generated boilerplate code (controllers, services)
- **ChatGPT:** Brainstormed endpoints, README writing, debugging tests
- **Gemini:** API documentation suggestions

**Reflection:**
AI improved productivity and reduced boilerplate time. All AI-generated code was reviewed, tested, and refactored to maintain quality and follow TDD principles.

---

**Note:** Plagiarism is strictly forbidden. AI assistance is encouraged, but all code must be your own work, augmented by modern tools.

ScreenShots.

<img width="1344" height="679" alt="Gemini_Generated_Image_jr8drhjr8drhjr8d" src="https://github.com/user-attachments/assets/7db330ba-908b-4962-8b95-292e0ab590f2" />
<img width="1344" height="677" alt="Gemini_Generated_Image_ks4gmsks4gmsks4g" src="https://github.com/user-attachments/assets/007be3ca-76f7-4a33-9fe4-788150191bce" />
<img width="1344" height="672" alt="Gemini_Generated_Image_a56quwa56quwa56q" src="https://github.com/user-attachments/assets/484d93ec-8934-454a-9cee-4a61b63b63d4" />
<img width="1344" height="679" alt="Gemini_Generated_Image_mfesstmfesstmfes" src="https://github.com/user-attachments/assets/693f7b54-0d42-4db4-acdd-e2a2a6f242e3" />
<img width="1344" height="672" alt="Gemini_Generated_Image_7go6yv7go6yv7go6" src="https://github.com/user-attachments/assets/ff39ca68-f21a-4e8b-8ea2-e70642e0e595" />
<img width="1408" height="656" alt="Gemini_Generated_Image_hm6s0hhm6s0hhm6s" src="https://github.com/user-attachments/assets/3dd3c38b-f0e0-47e4-b81e-f4ff6b5d12cd" />

