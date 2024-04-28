const generate = document.querySelector("#generate");
const randomPassword = document.querySelector("#random-password");
const copy = document.querySelector("#copy");
const copied = document.querySelector("#copied");

generate.addEventListener("click", () => {
  const chars =
    "abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let password = "";
  let length = 12;

  while (length > 0) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomIndex, randomIndex + 1);
    length--;
  }

  randomPassword.value = password;
});

const removeClass = () => {
  copied.classList.remove("d-block");
  copied.classList.add("d-none");
};

copy.addEventListener("click", () => {
  randomPassword.select();
  randomPassword.setSelectionRange(0, 9999);
  navigator.clipboard.writeText(randomPassword.value);

  copied.classList.add("d-block");
  copied.classList.remove("d-none");
  if (randomPassword.value) {
    setTimeout(removeClass, 2000);
  }
});
