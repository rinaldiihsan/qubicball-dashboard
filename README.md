# QubicBall Dashboard

A modern, responsive dashboard application built with Next.js, TypeScript, and Tailwind CSS. This dashboard provides user management functionality with advanced features like search, sorting, pagination, and JWT-based authentication.

> **Note:** This project was created as a frontend technical assessment test to demonstrate proficiency in modern web development technologies and best practices.

## 🚀 Live Demo

**Website:** [https://qubicball-dashboard.vercel.app/](https://qubicball-dashboard.vercel.app/)

**Repository:** [https://github.com/rinaldiihsan/qubicball-dashboard](https://github.com/rinaldiihsan/qubicball-dashboard)

## 📋 Demo Credentials

```
Username: testuser
Password: testpass
```

## ✨ Features

### Authentication

- 🔐 JWT-based authentication with httpOnly cookies
- 🛡️ Protected routes via Next.js middleware
- 🚪 Secure login/logout functionality
- ⚡ Auto-redirect for authenticated/unauthenticated users

### User Management

- 📊 Interactive user table with real-time data
- 🔍 Advanced search (filter by name, email, username)
- ⬆️⬇️ Multi-column sorting (name, email, company)
- 📄 Pagination (10 users per page)
- 👤 Detailed user profiles
- ✏️ Edit user information with form validation
- 📝 View user posts

### UI/UX

- 🌓 Dark mode support with system preference detection
- 📱 Fully responsive design (mobile, tablet, desktop)
- 🎨 Modern UI with shadcn/ui components
- ⚡ Loading states and skeleton screens
- 🎯 Error handling with user-friendly messages
- 🔄 Smooth transitions and animations

### Performance

- ⚡ Server-Side Rendering (SSR)
- 🚀 Optimized bundle size
- 💾 Data caching and revalidation
- 🎭 React memoization for performance
- 🔄 Debounced search input
- 📦 Code splitting

## 🛠️ Tech Stack

### Core

- **Next.js** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework

### UI Components

- **shadcn/ui** - Reusable component library
- **Radix UI** - Accessible component primitives
- **Lucide React** - Icon library

### Form & Validation

- **React Hook Form** - Performant form handling
- **Zod** - TypeScript-first schema validation
- **@hookform/resolvers** - Form validation resolver

### Authentication

- **jose** - JWT operations (Edge Runtime compatible)
- **httpOnly Cookies** - Secure token storage

### State Management

- **React Hooks** - useState, useMemo, useCallback
- **URL Search Params** - Persistent filter/sort state

### API

- **JSONPlaceholder API** - Mock REST API for users and posts

### Utilities

- **date-fns** - Date formatting
- **clsx & tailwind-merge** - Conditional classes
- **next-themes** - Dark mode management

## 📦 Installation

### Prerequisites

- Node.js 18.x or higher
- npm or yarn or pnpm

### Steps

1. **Clone the repository**

```bash
git clone https://github.com/rinaldiihsan/qubicball-dashboard.git
cd qubicball-dashboard
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Create environment variables**

```bash
cp .env.example .env.local
```

Edit `.env.local` and add:

```env
JWT_SECRET=your-super-secret-key-min-32-characters-long
NODE_ENV=development
```

4. **Run development server**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. **Open browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Environment Variables

| Variable     | Description                                             | Required |
| ------------ | ------------------------------------------------------- | -------- |
| `JWT_SECRET` | Secret key for JWT token generation (min 32 characters) | Yes      |
| `NODE_ENV`   | Environment mode (development/production)               | Yes      |


## 📱 Features Walkthrough

### 1. Authentication Flow

- Navigate to `/login`
- Enter credentials (testuser/testpass)
- JWT token stored in httpOnly cookie
- Redirected to dashboard
- Protected routes checked by middleware

### 2. Dashboard

- View all users in a table
- Search users by name, email, or username
- Sort by name, email, or company (ascending/descending)
- Paginate through results (10 per page)
- Click user row to view details

### 3. User Detail

- View complete user information
- See all posts by the user
- Edit user details via modal form
- Form validation with Zod
- Back to dashboard navigation

### 4. Dark Mode

- Toggle dark/light mode from header
- System preference detection
- Persisted in localStorage

## 🧪 API Endpoints

### Authentication

- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout

### Users

- `GET /api/users/[id]` - Get user by ID with posts

### External API

- JSONPlaceholder API for user and post data

## 🎨 UI Components

Built with **shadcn/ui** components:

- Button
- Input
- Table
- Card
- Form
- Dialog/Modal
- Sheet (Mobile Drawer)
- Dropdown Menu
- Alert
- Skeleton
- Switch

## ⚡ Performance Optimizations

- React.memo for expensive components
- useMemo for computed values
- useCallback for stable function references
- Debounced search (300ms)
- Server-Side Rendering
- Image optimization with Next.js Image
- Code splitting and lazy loading
- Proper caching strategies

## 🔒 Security Features

- JWT authentication with httpOnly cookies
- CSRF protection via SameSite cookies
- Secure cookie flags in production
- Protected routes via middleware
- Input validation with Zod
- XSS prevention

## 📄 License

This project is created for educational and demonstration purposes.

## 👤 Author

**Rinaldi Ihsan**

- GitHub: [@rinaldiihsan](https://github.com/rinaldiihsan)
- Project: [QubicBall Dashboard](https://github.com/rinaldiihsan/qubicball-dashboard)
- Live Demo: [https://qubicball-dashboard.vercel.app/](https://qubicball-dashboard.vercel.app/)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework
- [shadcn/ui](https://ui.shadcn.com/) - UI Component Library
- [Vercel](https://vercel.com/) - Deployment Platform
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/) - Fake REST API

---

**Made with ❤️ using Next.js, TypeScript, and Tailwind CSS**
