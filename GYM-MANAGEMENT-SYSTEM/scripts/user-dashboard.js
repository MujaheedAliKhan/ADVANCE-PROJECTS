document.addEventListener("DOMContentLoaded", function(){
    const currentUser = JSON.parse(localStorage.getItem("currentuser"));
    const userDisplay = document.getElementById("user-info");
    const logoutBtn = document.getElementById("logout-Btn");

    //Protect route

    if (!currentUser || currentUser.role !== "user") {
        alert("Unautherized Access");
        window.location.href = "index.html";
        return;
    }

    //Show Logged In User

    userDisplay.textContent = `Logged In as : ${currentUser.username}`;
    console.log(userDisplay);
    //Logout Handler

    logoutBtn.addEventListener("click", ()=>{
        localStorage.removeItem("currentuser");
        window.location.href = 'index.html';
    });

});