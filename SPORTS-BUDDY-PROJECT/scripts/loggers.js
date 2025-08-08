function logAction(message) {
    const logs = JSON.parse(localStorage.getItem("logs")) || [];
    logs.push({message, time: new Date().toLocaleString() });
    localStorage.setItem("logs", JSON.stringify(logs));
    console.log(logs);
}

