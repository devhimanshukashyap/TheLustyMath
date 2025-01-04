// DOM Elements
const playBtn = document.getElementById("play-btn");
const filterBtn = document.getElementById("filter-btn");
const modal = document.getElementById("filter-modal");
const closeModal = document.getElementById("close-modal");
const enable18Btn = document.getElementById("enable-18");
const disable18Btn = document.getElementById("disable-18");
const cursor = document.querySelector(".cursor");

// Event Listeners
filterBtn.addEventListener("click", () => {
    modal.style.display = "flex";
});

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

enable18Btn.addEventListener("click", () => {
    alert("18+ content enabled!");
    modal.style.display = "none";
});

disable18Btn.addEventListener("click", () => {
    alert("Safe mode enabled!");
    modal.style.display = "none";
});

playBtn.addEventListener("click", () => {
    alert("Welcome to The Lusty Math!");
    window.location.href = "main.html";
});

// Custom Cursor with Trail Effect
document.addEventListener("mousemove", (e) => {
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;
});
