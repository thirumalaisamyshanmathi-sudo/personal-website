
const PASSWORD = "Sabarishanmathi";

// Boot screen
window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("bootScreen").classList.add("hidden");
        document.getElementById("loginScreen").classList.remove("hidden");
    }, 1500);

    setInterval(updateClock, 1000);
    updateClock();
});

function login() {
    const input = document.getElementById("password").value;
    const error = document.getElementById("error");

    if (input === PASSWORD) {
        document.getElementById("loginScreen").classList.add("hidden");
        document.getElementById("desktop").classList.remove("hidden");
        localStorage.setItem("mathi_os_login", "true");
    } else {
        error.textContent = "Wrong Password ❌";
    }
}

if (localStorage.getItem("mathi_os_login") === "true") {
    window.addEventListener("load", () => {
        document.getElementById("bootScreen").classList.add("hidden");
        document.getElementById("loginScreen").classList.add("hidden");
        document.getElementById("desktop").classList.remove("hidden");
    });
}

function updateClock() {
    const c = document.getElementById("clock");
    if (!c) return;

    const d = new Date();
    c.textContent = d.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
    });
}

function openWindow(name) {
    alert(name + " app will be added in the next version 🚀");
}
