# Pomodoro Timer Application

A full-stack Pomodoro timer application with Vue.js frontend and Spring Boot backend.

## Project Structure

```
pomodoro/
├── frontend/          # Vue 3 + TypeScript + Vite frontend
├── pomodoro-backend/  # Spring Boot backend
└── .github/           # GitHub Actions CI/CD workflows
```

## Tech Stack

### Frontend
- Vue 3 (Composition API)
- TypeScript
- Vite
- Pinia (State Management)
- Vue Router
- Tailwind CSS

### Backend
- Spring Boot 3.5.7
- Java 21
- PostgreSQL / H2
- JPA/Hibernate
- Maven

## Prerequisites

- Node.js (v20.19.0 or v22.12.0+)
- Java 21
- Maven 3.6+
- PostgreSQL (optional, H2 for development)

## Getting Started

### Frontend Development

```bash
cd frontend
npm install
npm run dev
```

The frontend will be available at `http://localhost:5173`

### Backend Development

```bash
cd pomodoro-backend
./mvnw spring-boot:run
```

The backend API will be available at `http://localhost:8080`

## Build

### Frontend Production Build

```bash
cd frontend
npm run build
npm run preview
```

### Backend Production Build

```bash
cd pomodoro-backend
./mvnw clean package
java -jar target/pomodoro-backend-0.0.1-SNAPSHOT.jar
```

## Scripts

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run type-check` - Run TypeScript type checking
- `npm run preview` - Preview production build

### Backend
- `./mvnw spring-boot:run` - Start development server
- `./mvnw test` - Run tests
- `./mvnw clean package` - Build production JAR

## CI/CD

GitHub Actions workflows are configured for:
- Frontend: Build, test, and type-check
- Backend: Build and test with Maven
- Runs on every push and pull request

## License

MIT
