let submit = document.querySelector(".submit__input");

submit.addEventListener("click", generateSection);

// Generate section
function generateSection() {
  let passwordInput = document.querySelector(".password__input");

  // Password to lower case
  let password = passwordInput.value.toLowerCase();

  // Sections
  const tjSection = document.querySelector(".tj");
  const karzelkiSection = document.querySelector(".karzelki");
  const wachowiakSection = document.querySelector(".wachowiak");
  const oryginalnySection = document.querySelector(".oryginalny");
  const heinaSection = document.querySelector(".heina");
  const przemyslawSection = document.querySelector(".przemyslaw");
  const szczepanSection = document.querySelector(".szczepan");
  const prokuratorSection = document.querySelector(".prokurator");
  const secretSection = document.querySelector(".secret");
  const summarySection = document.querySelector(".summary");

  // Display section
  if (password === "tj") tjSection.style.display = "flex";
  else if (password === "karzelki") karzelkiSection.style.display = "flex";
  else if (password === "wachowiak") wachowiakSection.style.display = "flex";
  else if (password === "oryginalny") oryginalnySection.style.display = "flex";
  else if (password === "heina") heinaSection.style.display = "flex";
  else if (password === "przemyslaw") przemyslawSection.style.display = "flex";
  else if (password === "szczepan") szczepanSection.style.display = "flex";
  else if (password === "prokurator") prokuratorSection.style.display = "flex";
  else if (password === "łeł ał ju") secretSection.style.display = "flex";
  else alert("Ale we poprawne hasło wpisz");

  if (password !== "łeł ał ju") summarySection.style.display = "flex";
}

export default generateSection;
