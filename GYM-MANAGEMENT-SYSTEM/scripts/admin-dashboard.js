document.addEventListener("DOMContentLoaded", function(){
    const currentUser = JSON.parse(localStorage.getItem("currentuser"));
    const userList = document.getElementById("user-list");
    const userDisplay = document.getElementById("admin-user");
    const logoutBtn = document.getElementById("logout-Btn");

    //Protect route
    if (!currentUser || currentUser.role !== "admin") {
        alert("Unautherized Access!")
        window.location.href = "index.html";
        return;
    }

    //Show LoggedIn user
    userDisplay.textContent = `Logged In as: ${currentUser.username}`;

    //fetch User
    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.length === 0) {
        userList.innerHTML = "<li>No users Registered</li>";
    }else{
        users.forEach(user => {
            const li = document.createElement("li");
            li.textContent = `${user.username} - Role: ${user.role}`;
            userList.appendChild(li);
        });
    }

    //logout 
    logoutBtn.addEventListener("click", () =>{
        localStorage.removeItem("currentuser");
        window.location.href = "index.html";
    })
});