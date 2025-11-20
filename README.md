# Assignment Tracker

<div align="center">
  <img src="https://img.shields.io/badge/Next.js-14+-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js"/>
  <img src="https://img.shields.io/badge/React-18+-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React"/>
  <img src="https://img.shields.io/badge/TailwindCSS-3+-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind"/>
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License"/>
</div>

<br/>

<p align="center">
  <strong>A modern, intuitive web application designed to help students track assignments, quizzes, and tests with intelligent deadline prioritization.</strong>
</p>

<div align="center">
  <img src="https://img.shields.io/badge/status-in%20development-yellow?style=flat-square" alt="Status"/>
  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen?style=flat-square" alt="PRs Welcome"/>
</div>

---

## Overview

Assignment Tracker is a collaborative tool built for students to centralize and manage academic deadlines. It addresses the common problem of scattered assignment information across multiple platforms by providing a single, color-coded dashboard that prioritizes upcoming work.

### The Problem

Students often face challenges with:
- Forgetting about upcoming quizzes and assignments
- Having to check multiple sources (WhatsApp groups, email, teacher portals)
- Missing deadlines due to lack of visibility
- No centralized system for class-wide deadline tracking

### The Solution

A clean, accessible web application that:
- Displays all assignments in one place
- Uses color-coded urgency levels for quick visual scanning
- Allows filtering by course and deadline proximity
- Can be shared with the entire class
- Works seamlessly on mobile and desktop devices

---

## Features

### Core Functionality

**Intelligent Priority System**
- Automatic color-coding based on deadline proximity
- Red zone for assignments due within 0-2 days
- Orange zone for assignments due within 3-7 days
- Green zone for future assignments

**Multi-Level Filtering**
- Filter by urgency level (Urgent, This Week, Later)
- Filter by course
- View all assignments at once

**Assignment Management**
- Add new assignments with course, type, title, and deadline
- Track multiple assignment types (Assignments, Quizzes, Tests, Projects)
- Visual progress indicators for each deadline

**Responsive Design**
- Mobile-first approach
- Works on phones, tablets, and desktops
- Touch-friendly interface

---

## Tech Stack

### Frontend
- **Next.js 14+** - React framework with App Router
- **React 18+** - UI component library
- **Tailwind CSS** - Utility-first styling
- **Lucide React** - Icon system

### Backend (Planned)
- **Supabase** - PostgreSQL database and authentication
- **Vercel** - Deployment platform

---

## Project Structure

```
assignment-tracker/
├── app/
│   ├── layout.js              # Root layout component
│   ├── page.js                # Main dashboard
│   ├── add/
│   │   └── page.js           # Add assignment page
│   └── api/
│       └── assignments/
│           └── route.js      # Assignment CRUD API
├── components/
│   ├── AssignmentCard.js     # Individual assignment display
│   ├── AssignmentList.js     # Assignment collection
│   ├── FilterBar.js          # Filtering controls
│   └── Navbar.js             # Navigation header
├── lib/
│   ├── db.js                 # Database configuration
│   └── utils.js              # Helper functions
├── public/
│   └── assets/               # Static assets
└── README.md
```

---

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager
- Git

### Installation

Clone the repository:
```bash
git clone https://github.com/yourusername/assignment-tracker.git
cd assignment-tracker
```

Install dependencies:
```bash
npm install
```

Run the development server:
```bash
npm run dev
```

Open your browser and navigate to:
```
http://localhost:3000
```

---

## Usage

### Adding an Assignment

1. Click the "Add New" button in the header
2. Fill in the assignment details:
   - Select the course
   - Choose assignment type
   - Enter title and description
   - Set due date and time
3. Submit the form

### Filtering Assignments

**By Urgency:**
- Click "All" to view everything
- Click "Urgent" to see assignments due within 3 days
- Click "This Week" for assignments due within 7 days
- Click "Later" for future assignments

**By Course:**
- Use the course dropdown to filter by specific subject

### Understanding Color Codes

<table>
  <tr>
    <td><strong>Red</strong></td>
    <td>Due today or overdue</td>
  </tr>
  <tr>
    <td><strong>Orange</strong></td>
    <td>Due within 1-3 days</td>
  </tr>
  <tr>
    <td><strong>Yellow</strong></td>
    <td>Due within 4-7 days</td>
  </tr>
  <tr>
    <td><strong>Green</strong></td>
    <td>Due after 7+ days</td>
  </tr>
</table>

---

## Contributing

Contributions are welcome and appreciated. To contribute:

1. Fork the repository
2. Create a feature branch
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes
   ```bash
   git commit -m "Add: your feature description"
   ```
4. Push to your branch
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a Pull Request

### Code Style Guidelines
- Follow existing code formatting
- Use meaningful variable and function names
- Add comments for complex logic
- Test thoroughly before submitting

---

## License

This project is licensed under the MIT License.

---

## Contact

For questions, suggestions, or collaboration:

- **GitHub Issues:** [Open an issue](https://github.com/hasnaindevx/assignment-tracker/issues)
- **Email:** hasnain.mh79@gmail.com

---

<div align="center">
  <sub>MADE WITH ❤️ BY HASNAIN</sub>
</div>