// script.js
const form = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

const inputs = {
  name: document.getElementById("name"),
  phone: document.getElementById("phone"),
  email: document.getElementById("email"),
  subject: document.getElementById("subject"),
  message: document.getElementById("message")
};

function showError(input, message) {
  input.parentElement.querySelector(".error").textContent = message;
  input.style.borderColor = "#ff5f7a";
}

function clearError(input) {
  input.parentElement.querySelector(".error").textContent = "";
  input.style.borderColor = "transparent";
}

function validEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let isValid = true;

  Object.values(inputs).forEach(clearError);
  successMessage.textContent = "";

  if (inputs.name.value.trim() === "") {
    showError(inputs.name, "من فضلك اكتب الاسم");
    isValid = false;
  }

  if (inputs.phone.value.trim() === "") {
    showError(inputs.phone, "من فضلك اكتب رقم الهاتف");
    isValid = false;
  }

  if (!validEmail(inputs.email.value.trim())) {
    showError(inputs.email, "من فضلك اكتب بريد إلكتروني صحيح");
    isValid = false;
  }

  if (inputs.subject.value.trim() === "") {
    showError(inputs.subject, "من فضلك اكتب الموضوع");
    isValid = false;
  }

  if (inputs.message.value.trim() === "") {
    showError(inputs.message, "من فضلك اكتب الرسالة");
    isValid = false;
  }

  if (isValid) {
    successMessage.textContent = "تم إرسال رسالتك بنجاح";
    form.reset();
  }
});
