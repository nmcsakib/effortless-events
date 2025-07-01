# 🎉 Event Management Web Application | Efforless Events

A full-featured Event Management Platform built using the MERN Stack (MongoDB, Express.js, React.js, Node.js). This application allows users to add, browse, and manage events, featuring custom authentication, search/filter functionality, and a user-friendly interface.

## 🌐 Live Demo

🔗 **Live Site:** [https://efforless-events.vercel.app](https://efforless-events.vercel.app)  
🔗 **Server API:** [https://efforless-events-server.vercel.app](https://efforless-events-server.vercel.app)

---

## 📦 Tech Stack

**Frontend:**
- React.js (v19+)
- React Router DOM (v7)
- Tailwind CSS
- DaisyUI
- React Icons
- React Toastify
- Framer Motion

**Backend:**
- Node.js
- Express.js
- MongoDB
- Custom-built authentication (no third-party auth libraries)

---

## 🚀 Features

### 🔒 Authentication
- Custom registration & login (name, email, password, photoURL)
- Protected/private routes (Events, Add Event, My Event)
- Error handling with user-friendly messages

### 🖥️ Navbar
- Logo + Site Name
- Links: Home, Events, Add Event, My Event
- Sign In / Profile dropdown with logout option

### 🏠 Home Page
- Custom-designed landing page

### 📅 Events (Private Route)
- Lists all events sorted by most recent date/time
- Search events by title
- Filter events by:
  - Today
  - Current Week
  - Last Week
  - Current Month
  - Last Month
- Join event (only once per user)
- Card layout for each event (title, name, date/time, location, description, attendee count)

### ➕ Add Event (Private Route)
- Add event form with:
  - Title, Name, Date/Time, Location, Description
  - Default AttendeeCount: 0
- Saves event to MongoDB

### 📂 My Events (Private Route)
- Shows events created by the user
- Update and Delete options (update form/modal, delete confirmation)

---

## 🛠️ Installation

Follow these steps to run the project locally:

### Prerequisites:
- [Node.js](https://nodejs.org/)
- [Yarn](https://classic.yarnpkg.com/en/docs/install/)
- MongoDB running locally or on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

---

### 📁 Clone the Repo

```bash
git clone https://github.com/nmcsakib/effortless-events.git
cd effortless-events
