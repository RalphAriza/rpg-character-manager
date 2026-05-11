# RPG Character Manager

A fullstack application that helps players organize RPG characters, track their stats, and manage assigned items.

---

## Technologies

- React + Vite
- Express.js
- MongoDB Atlas
- Mongoose
- Node.js
- Concurrently

---

## Setup

### 1. Clone the repository

```bash
git clone https://github.com/RalphAriza/rpg-character-manager.git
cd rpg-character-manager
```

### 2. Install dependencies

```bash
npm install
npm install --prefix backend
npm install --prefix frontend
```

### 3. Create `.env` file inside `backend/`

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

### 4. Seed the database

```bash
cd backend
node src/seed.js
```

### 5. Run frontend and backend together

```bash
cd ..
npm run dev
```

---

## Main Features

- Create, read, update, and delete RPG characters
- Search characters by name
- Filter characters by class
- View character relationships with users and items
- Auto-refresh character data every three minutes

---

## API Endpoints

### Characters

```txt
GET    /api/characters
POST   /api/characters
PUT    /api/characters/:id
DELETE /api/characters/:id
```

### Relational Endpoints

```txt
GET /api/characters/:id/items
GET /api/users/:id/characters
```

### Statistics Endpoint

```txt
GET /api/stats/highest-level
```

---

## Database Collections

### Users
Stores player information.

### Characters
Stores RPG character stats and class information.

### Items
Stores equipment assigned to characters.

---
