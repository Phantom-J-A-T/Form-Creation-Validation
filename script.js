document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("registration-form");
  const feedbackDiv = document.getElementById("form-feedback");
  let isValid = true;
  const messages = []
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    // Simulate a successful form submission
    feedbackDiv.style.display = "block";
    if (!isValid) {
        feedbackDiv.innerHTML = messages.join("<br>");
        feedbackDiv.style.color = "#dc3545"; // Bootstrap danger red
      } else {
        feedbackDiv.textContent = "Registration successful";
        feedbackDiv.style.color = "#28a745";
      }
   
  });
  
  const usernameInput = document.getElementById("username");
    usernameInput.addEventListener("input", () => {
    const feedback = document.getElementById("username-feedback");
    const username = usernameInput.value.trim(); 
    if ((username.length < 3 || username.length > 20)) {
        feedback.textContent = "Username must be between 3 and 20 characters.";
        feedback.style.color = "red";
        isValid = false;
        messages.push("Username must be between 3 and 20 characters.");
    } else {
        feedback.textContent = "";
    }
  });
  const emailInput = document.getElementById("email");
    emailInput.addEventListener("input", () => {
    const feedback = document.getElementById("email-feedback");
    const email = emailInput.value.trim();
    if (!email.includes("@") || !email.includes(".")) {
        feedback.textContent = "Please enter a valid email address.";
        feedback.style.color = "red";
        isValid = false;
        messages.push("Please enter a valid email address.");
    } else {
        feedback.textContent = "";
    }
 });
 const passwordInput = document.getElementById("password");
    passwordInput.addEventListener("input", () => {
        const feedback = document.getElementById("password-feedback");
        const password = passwordInput.value.trim();
        if (password.length < 8 || password.length > 20) {
            feedback.textContent = "Password must be at least 8 characters long.";
            feedback.style.color = "red";
            isValid = false;
            messages.push("Password must be at least 8 characters long.");
        } else {
            feedback.textContent = "";
        }
    });
});