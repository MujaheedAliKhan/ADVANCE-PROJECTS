document.addEventListener("DOMContentLoaded", function () {
    const adminData = JSON.parse(localStorage.getItem("currentUser"));

    if (!adminData || adminData.role !== "admin") {
        alert("Unautherized access!");
        window.location.href = "index.html";
        return;
    }

    const adminName = adminData.username;
    document.getElementById("admin-name").textContent = adminName;
    document.getElementById("admin-role").textContent = adminData.role;

    const eventForm = document.getElementById("event-form");
    const eventsList = document.getElementById("events-list");

    let events = JSON.parse(localStorage.getItem("sportsEvents")) || [];

    //Render Existing Events

    function renderEvents() {
        eventsList.innerHTML = "";

        if (events.length === 0) {
            eventsList.innerHTML = "<li>No events Available</li>";
            return;
        }
        
        events.forEach ((event, index) =>{
        const li = document.createElement("li");

        const info = document.createElement("span");
        info.className = "event-info";
        info.textContent = `${event.name} - ${event.date}`;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", function () {
            if (confirm("Are You Sure You Want To Delete This Event?")) {
                events.splice(index,1);
                localStorage.setItem("sportsEvents", JSON.stringify(events));
                logAction(adminName + "deleted event: " + event.name);
                renderEvents();
            }
        });

        li.appendChild(info);
        li.appendChild(deleteBtn);
        eventsList.appendChild(li);
    });
} 
renderEvents();

  //Add New Event

eventForm.addEventListener("submit", function (e) {
   e.preventDefault();
   
   const name = document.getElementById("event-name").value.trim();
   const date = document.getElementById("event-date").value;

   if (!name || !date) {
        alert("Please fill both the fields");
        return;
   }

   const newEvent = {name, date};
   events.push(newEvent);
   localStorage.setItem("sportsEvents", JSON.stringify(events));
   logAction(adminName + "added event: " + name);
   alert("Event Added Successfully");
   eventForm.reset();
   renderEvents();
});
   //Logout Handler

document.getElementById("logout-btn").addEventListener("click", () => {
    localStorage.removeItem("currentUser");
    logAction("Admin Logged Out");
    window.location.href = "index.html";
});

});

