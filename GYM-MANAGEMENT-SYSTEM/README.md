# Gym Management System 💪

A simple Gym Management System built with HTML, CSS, and JavaScript. It supports registration and login for three roles: **Admin**, **Member**, and **User**. Each role has its own protected dashboard with different functionalities. User authentication and session management are handled using `localStorage`.

## 🚀 Features

- 🔒 **Role-based Login System** (Admin / Member / User)
- 📝 **User Registration**
- 👥 **Admin Dashboard** - View all registered users
- 🏋️ **Member Dashboard** - View Gym schedule
- 🧑‍💻 **User Dashboard** - View personal workout plan
- 🚫 **Route Protection**
- 📃 **Activity Logs** saved in localStorage
- ✅ Clean UI with responsive design

---

## 🗂️ Project Structure

```
📁 gym-management-system/
├── index.html                # Login page
├── register.html             # Registration page
├── admin-dashboard.html      # Admin dashboard
├── member-dashboard.html     # Member dashboard
├── user-dashboard.html       # User dashboard
├── style.css                 # Global stylesheet
├── scripts/
│   ├── auth.js               # Login logic & logging
│   ├── register.js           # Register logic & logging
│   ├── admin-dashboard.js    # Admin functionalities
│   ├── member-dashboard.js   # Member functionalities
│   └── user-dashboard.js     # User functionalities
```

---

## 🛠️ Technologies Used

- **HTML5**
- **CSS3**
- **JavaScript (ES6)**
- **localStorage API** (for storing users, sessions, and logs)

---

## 📄 Pages Overview

### 🔐 Login (`index.html`)
- Authenticates users based on stored credentials.
- Redirects users to their respective dashboards.

### 🧾 Register (`register.html`)
- Accepts username, password, and role.
- Prevents duplicate users.
- Stores users in `localStorage`.

### 🧑‍💼 Admin Dashboard (`admin-dashboard.html`)
- Displays a list of all registered users.
- Protected route (only accessible by admins).

### 🧍‍♂️ Member Dashboard (`member-dashboard.html`)
- Shows the gym timing schedule.
- Protected route (only accessible by members).

### 🏃‍♂️ User Dashboard (`user-dashboard.html`)
- Displays a workout plan for the user.
- Protected route (only accessible by users).

---

## 🔐 Route Protection

Each dashboard page checks the `currentuser` stored in `localStorage` and validates the role before allowing access. Unauthorized users are redirected to `index.html`.

---

## 🔄 Logging System

A log entry is created for every:
- Successful login
- New user registration

Example log format stored in `localStorage`:
```json
{
  "message": "User JohnDoe logged in",
  "user": "JohnDoe",
  "time": "8/7/2025, 8:12:34 PM"
}
```

---

### Clone the Repository

```bash
git clone https://github.com/MujaheedAliKhan/ADVANCE-PROJECTS.git
cd GYM-MANAGEMENT-SYSTEM
```

## 🧪 How to Run

1. Clone or download the repository.
2. Open `index.html` in your browser.
3. Register a user (admin/member/user).
4. Login using the registered credentials.
5. Access the respective dashboards.

---

## ❗Important Notes

- This system uses `localStorage`, so all data is cleared if the browser's storage is cleared.
- For real applications, use backend storage and secure password hashing.

---

## 📌 Future Enhancements

- Firebase/Backend integration for secure data storage.
- Password hashing.
- Forgot password feature.
- Enhanced admin controls (delete/edit users).
- Responsive redesign using frameworks (e.g., Bootstrap, Tailwind CSS).

---

## 👨‍💻 Author

**L. Mujaheed Ali Khan**  
*Frontend & Full-Stack Developer in Training*  
Feel free to connect or contribute!

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).
