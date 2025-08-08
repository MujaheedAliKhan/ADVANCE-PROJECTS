document.addEventListener("DOMContentLoaded", function () {
    const LoginForm = document.getElementById("loginform");
    const RegisterForm = document.getElementById("registerform");

    //Login Handler
    if (LoginForm) {
        LoginForm.addEventListener("submit", function(e) {
        e.preventDefault();
        
        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value;   

        let users = JSON.parse(localStorage.getItem("users")) || [];

        const matchedUsers = users.find(user => user.username === username && user.password === password);

        if (!matchedUsers) {
            alert("Invalid username or password");
            logAction('Login Failed for username' + username);
            console.log(logAction);
            return;
        }

        localStorage.setItem("currentUser", JSON.stringify(matchedUsers));
        logAction("Login Successfull: " + matchedUsers.username);

    //Redirect Based on Role

        if (matchedUsers.role === "admin") {
            window.location.href = "admin-dashboard.html";
        }else{
            window.location.href = "user-dashboard.html";
        }
    })
    }

    //Register Handler

    if (RegisterForm) {
        RegisterForm.addEventListener("submit", function(e) {
            e.preventDefault();

            const username = document.getElementById("username").value.trim();
            const password = document.getElementById("password").value;
            const role = document.getElementById("role").value;

            let users = JSON.parse(localStorage.getItem("users")) || [];

            if (users.find(user => user.username === username)) {
                alert("User Already Exists");
                return;
            }
            users.push({username, password, role});
            localStorage.setItem("users", JSON.stringify(users));
            logAction("User Registered: " + username + "as" + role);

            alert("Registration Successful !");
            window.location.href = "index.html";
        })  
    }
})