document.addEventListener("DOMContentLoaded",  function(){
    const LoginForm = document.getElementById("log-form");
    const message = document.getElementById("message");

    LoginForm.addEventListener("submit", function(e) {
       e.preventDefault();
       
       const username = document.getElementById("username").value.trim();
       const password = document.getElementById("password").value;

       const users = JSON.parse(localStorage.getItem("users")) || [];

       const user = users.find(
        u => (u.username === username && u.password === password)
        );

        if (user) {
            localStorage.setItem("currentuser",JSON.stringify(user));
            logAction(`User ${user.username} logged in `, user.username);

            switch (user.role) {
                case "admin":
                    window.location.href = "admin-dashboard.html";
                    break;
                case "member":
                    window.location.href = "member-dashboard.html";
                    break;
                case "user":
                    window.location.href = "user-dashboard.html";      
            }
        }
        else{
            message.textContent = alert("Invalid Username or Password");
        }
    });

    function logAction(message, username) {
        const logs = JSON.parse(localStorage.getItem("logs")) || [];
        logs.push({message, user:username, time: new Date().toLocaleString()});
        localStorage.setItem("logs", JSON.stringify(logs));
    }
});