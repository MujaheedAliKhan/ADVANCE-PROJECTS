document.addEventListener("DOMContentLoaded", function () {
    const userData = JSON.parse(localStorage.getItem("currentUser"));

    if (!userData) {
        alert("Unautheraized Access");
        window.location.href = "index.html";
    }

    const username = userData.username;
    document.getElementById("user-name").textContent = username;
    document.getElementById("user-role").textContent = userData.role;

    const events = JSON.parse(localStorage.getItem("sportsEvents")) || [
        {name: "Hockey Tournament", date: "2025-08-22" },
        {name: "Cricket Match", date: "2025-09-18" },
    ];

    const userJoins = JSON.parse(localStorage.getItem("userJoins")) || {};
   
    const eventsList =  document.getElementById("events-list");
    const joinedList = document.getElementById("joined-events-list");
    
    events.forEach(event => {
        const li = document.createElement("li");
        li.textContent = `${event.name} - ${event.date}`;

        const joinBtn = document.createElement("button");
        joinBtn.classList = "JoinBtn"
        joinBtn.textContent = "Join";
        joinBtn.addEventListener("click", function () {
            //Prevent Joining the same event twice
            userJoins[username] = userJoins[username] || [];
            const alreadyJoined = userJoins[username].some(
                e => e.name === event.name && e.date === event.date
            );

            if (alreadyJoined) {
                alert("You've joined this event");
                return; 
            }

            userJoins[username].push(event);
            localStorage.setItem("userJoins" , JSON.stringify(userJoins));
            logAction(username + "joined event " + event.name);
            alert("Event Joined");
            renderJoinedEvents();
        })
        li.appendChild(joinBtn);
        eventsList.appendChild(li);
    });

    //Function to render joined events

    function renderJoinedEvents() {
      joinedList.innerHTML = "";
      
      const joinedEvents = userJoins[username] || [];

      if (joinedEvents.length === 0) {
        joinedList.innerHTML = "<li>No events joined Yet!!</li>";
        return;
      }
      
      joinedEvents.forEach (event => {
        const li = document.createElement("li");
        li.textContent = `${event.name} - ${event.date}`;
        joinedList.appendChild(li);
      });
    }

    renderJoinedEvents();

    //Logout Handler
    document.getElementById("logout-btn").addEventListener("click", () =>{
        localStorage.removeItem("currentUser");
        logAction("User Logged Out");
        window.location.href = "index.html";
    })
})