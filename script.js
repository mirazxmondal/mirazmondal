// JavaScript for FAQ section
document.addEventListener("DOMContentLoaded", function () {
  const questions = document.querySelectorAll(".question");

  questions.forEach((question) => {
    question.addEventListener("click", function () {
      const answer = this.nextElementSibling;
      answer.classList.toggle("show");
    });
  });
});

// JavaScript for dark mode toggle
const darkModeToggle = document.getElementById("dark-mode-toggle");
const mainContainer = document.querySelector(".main");

darkModeToggle.addEventListener("click", () => {
  mainContainer.classList.toggle("dark-mode");

  // Toggle button text between "Light Mode" and "Dark Mode"
  if (darkModeToggle.textContent === "Light") {
    darkModeToggle.textContent = "Dark";
  } else {
    darkModeToggle.textContent = "Light";
  }
});
