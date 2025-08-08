document.addEventListener("DOMContentLoaded", function(){
    const currentUser = JSON.parse(localStorage.getItem("currentuser"));
    const userDisplay = document.getElementById("member-user");
    const logoutBtn = document.getElementById("logout");

    // Protect Route
    if (!currentUser || currentUser.role !== "member") {
        alert("Unautherized Access");
        window.location.href = "index.html";
        return;
    }

    //Show Logged in user
    userDisplay.textContent = `Logged In as: ${currentUser.username}`;

    logoutBtn.addEventListener("click", ()=>{
        localStorage.removeItem("currentuser");
        window.location.href = "index.html";
    });
});