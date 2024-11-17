"use strict";

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const [
    firstNameInput,
    lastNameInput,
    emailInput,
    phonePart1,
    phonePart2,
    phonePart3,
    subjectSelect,
    messageTextarea,
  ] = document.querySelectorAll("input, select, textarea");

  const formData = {
    name: `${firstNameInput.value} ${lastNameInput.value}`,
    email: emailInput.value,
    phone: `${phonePart1.value}${phonePart2.value}${phonePart3.value}`,
    subject: subjectSelect.value,
    message: messageTextarea.value.replace(/\s{2,}/g, " ").trim(),
  };

  console.log(formData);
  form.reset();
});
