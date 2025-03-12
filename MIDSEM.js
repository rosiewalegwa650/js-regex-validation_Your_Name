document.getElementById("validationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let isValid = true;

    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const password = document.getElementById("password").value;

    document.getElementById("nameError").innerText = fullName ? "" : "Full Name is required";
    document.getElementById("emailError").innerText = email ? "" : "Email is required";
    document.getElementById("phoneError").innerText = phone ? "" : "Phone Number is required";
    document.getElementById("passwordError").innerText = password ? "" : "Password is required";

    if (!fullName || !email || !phone || !password) {
        isValid = false;
    }

    if (isValid) {
        document.getElementById("successMessage").innerText = "Form submitted successfully!";
    }
});
