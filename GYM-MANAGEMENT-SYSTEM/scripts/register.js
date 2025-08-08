document.addEventListener("DOMContentLoaded", function () {
  const registerForm = document.getElementById("reg-form");
  const message = document.getElementById("message");

  registerForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const role = document.getElementById("role").value;

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const exists = users.some(u => u.username === username || u.password === password);

    if (exists) {
      message.textContent = alert("User already exists with this username or password");
      return;
    }

    const newUser = { username, password, role };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    logAction(`New user registered: ${username} (${role})`, username);

    alert("Registration successful! Redirecting to login...");
    window.location.href = "index.html";
  });

  function logAction(message, username) {
    const logs = JSON.parse(localStorage.getItem("logs")) || [];
    logs.push({ message, user: username, time: new Date().toLocaleString() });
    localStorage.setItem("logs", JSON.stringify(logs));
  }
});
