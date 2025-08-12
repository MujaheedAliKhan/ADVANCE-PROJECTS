# 🏅 Sports Buddy

**Sports Buddy** is a simple, responsive web-based application where users can register/login, join sports events, and admins can add or delete events. It is built using **HTML, CSS, and JavaScript**, with data stored locally using **LocalStorage**.

---

## 📌 Features

### 🔐 Authentication
- Role-based system: **Admin** or **User**
- Login & Register with input validation
- Redirects to respective dashboards based on role

### 🧑‍💻 User Dashboard
- View available sports events
- Join events (with duplicate join prevention)
- View list of joined events
- Logout option

### 🛠️ Admin Dashboard
- Add new events (with name and date)
- View and delete existing events
- Logout option

### 📋 Logging System
- Tracks login, logout, registration, and event actions
- Logs saved in browser’s `localStorage`

---

## 🧑‍🎨 UI & Styling Highlights

- Clean and modern UI with **Poppins** font
- **Fully responsive layout**:
  - Uses CSS units like `min()` and `max()` for flexible padding
  - Styled for mobile view (`max-width: 425px`)
- Beautiful color gradients and button animations
- Separate layouts for Login, Register, User, Member, and Admin

---

## 🗂️ Project Structure

```
sports-buddy/
│
├── index.html                 # Login Page
├── register.html              # Registration Page
├── user-dashboard.html        # User Dashboard
├── admin-dashboard.html       # Admin Dashboard
├── member-dashboard.html      # Member Dashboard (if applicable)
│
├── style.css                  # Styling for all pages
│
├── scripts/
│   ├── auth.js                # Handles login and register logic
│   ├── user-dashboard.js      # User-specific actions
│   ├── admin-dashboard.js     # Admin-specific actions
│   └── loggers.js             # Action logger utility
│
└── README.md                  # Project documentation
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/MujaheedAliKhan/ADVANCE-PROJECTS.git
cd SPORTS-BUDDY-PROJECT
```

### 2. Open in Browser

Simply open `index.html` in any modern web browser to use the application.

---

## 💾 Technologies Used

- **HTML5** – Page structure
- **CSS3** – Responsive styling and layout
- **JavaScript** – Dynamic interactivity
- **LocalStorage** – Client-side data storage

---

## Live Demo
--This is a link of [SPORTS-BUDDY-PROJECT](https://mujaheedalikhan.github.io/ADVANCE-PROJECTS/SPORTS-BUDDY-PROJECT/index.html)

---

## ✅ Usage Instructions

### 🧍 Register
1. Visit `register.html`
2. Enter your details and select your role (`user` or `admin`)
3. Click **Register**

### 🔐 Login
1. Visit `index.html`
2. Enter your registered credentials
3. You’ll be redirected to the correct dashboard

### 🧑‍💻 As a User
- View available sports events
- Join events (duplicates prevented)
- See your joined events
- Logout securely

### 👨‍💼 As an Admin
- Add new events (name & date required)
- View all existing events
- Delete events
- Logout securely

---

## 📦 LocalStorage Usage Explained

### **Used for:**
1. **Users**:  
   - All registered users are stored in `localStorage` under the key `users`.  
   - Example:  
     ```json
     [
       {"username": "Ali", "password": "123", "role": "admin"},
       {"username": "User1", "password": "abc", "role": "user"}
     ]
     ```

2. **Session Handling** (via `currentUser`):  
   - When a user logs in, their info is saved in `localStorage` as `currentUser` to keep track of the session.  
   - Example:  
     ```json
     { "username": "Ali", "role": "admin" }
     ```

3. **Events**:  
   - Admin-added events are stored under `sportsEvents`.  
   - Example:  
     ```json
     [{ "name": "Cricket Match", "date": "2025-08-10" }]
     ```

4. **User Joined Events**:  
   - Saved under `userJoins` in the format:  
     ```json
     {
       "User1": [{ "name": "Cricket Match", "date": "2025-08-10" }]
     }
     ```

5. **Logs**:  
   - All major actions (login, logout, join, add, delete) are saved in `logs`.

---

## 💡 Future Improvements

- Backend integration with database
- Profile system with images
- Search, sort & filter events
- Dark mode toggle
- Real-time updates via WebSocket or Firebase

---

## 🧑‍💻 Author

**Mujaheed Ali Khan**  
Frontend Developer | JavaScript Enthusiast  

---

## 🏁 License

This project is for learning and personal use only. No commercial license provided.
