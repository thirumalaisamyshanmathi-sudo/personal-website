// MATHI OS Login Password
const PASSWORD = "Sabarishanmathi";

// Login Function
function login() {

    const passwordInput =
        document.getElementById("password").value;

    const error =
        document.getElementById("error");

    if (passwordInput === PASSWORD) {

        document.getElementById("loginScreen")
            .style.display = "none";

        document.getElementById("app")
            .classList.remove("hidden");

        localStorage.setItem("mathi_os_login", "true");

    } else {

        error.innerText =
            "Wrong Password ❌";

    }

}

// Auto Login
window.onload = () => {

    if (
        localStorage.getItem("mathi_os_login")
        === "true"
    ) {

        document.getElementById("loginScreen")
            .style.display = "none";

        document.getElementById("app")
            .classList.remove("hidden");

    }

};

// Send Message
function sendMessage() {

    const input =
        document.getElementById("userInput");

    const chatArea =
        document.getElementById("chatArea");

    const message =
        input.value.trim();

    if (message === "") return;

    // User Message
    const userDiv =
        document.createElement("div");

    userDiv.className =
        "message user";

    userDiv.innerText =
        message;

    chatArea.appendChild(userDiv);

    // Scroll Down
    chatArea.scrollTop =
        chatArea.scrollHeight;

    // Fake AI Reply
    setTimeout(() => {

        const botDiv =
            document.createElement("div");

        botDiv.className =
            "message bot";

        botDiv.innerText =
            getReply(message);

        chatArea.appendChild(botDiv);

        chatArea.scrollTop =
            chatArea.scrollHeight;

    }, 700);

    input.value = "";

}

// Enter Key Support
document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Enter") {

            sendMessage();

        }

    }
);

// Simple Replies
function getReply(text) {

    const msg =
        text.toLowerCase();

    if (
        msg.includes("hi") ||
        msg.includes("hello")
    ) {
        return "Hello Shanmathi 👋💜";
    }

    if (
        msg.includes("love")
    ) {
        return "Love is beautiful 💜";
    }

    if (
        msg.includes("sabarish")
    ) {
        return "Sabarish ❤️ Shanmathi";
    }

    if (
        msg.includes("project")
    ) {
        return "Your AI/ML project is important 🚀";
    }

    if (
        msg.includes("college")
    ) {
        return "Hope your college day is going well 🎓";
    }

    return "I'm MATHI OS 💜. Advanced AI features can be added later.";

}

// Logout Function
function logout() {

    localStorage.removeItem(
        "mathi_os_login"
    );

    location.reload();

}
