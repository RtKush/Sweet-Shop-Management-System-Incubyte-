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



ScreenShots.

<img width="1865" height="831" alt="Screenshot 2025-09-27 150306" src="https://github.com/user-attachments/assets/29c924a8-57bc-4651-b6da-642bb4456ddc" />
<img width="1901" height="849" alt="Screenshot 2025-09-27 150321" src="https://github.com/user-attachments/assets/b5a8b994-b51a-4702-b61b-40e57275c32b" />
<img width="1885" height="852" alt="Screenshot 2025-09-27 150328" src="https://github.com/user-attachments/assets/79a3e2c1-f1ae-40f7-8d1f-ff4984ccb3a4" />
<img width="1863" height="845" alt="Screenshot 2025-09-27 150351" src="https://github.com/user-attachments/assets/ffdde8ea-18d7-41a0-8557-b679932679d6" />
<img width="1844" height="861" alt="Screenshot 2025-09-27 150315" src="https://github.com/user-attachments/assets/49eb90d1-248a-4703-80ed-8b34db60f635" />


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



