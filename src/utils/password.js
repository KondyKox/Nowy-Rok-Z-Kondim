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
  const summarySection = document.querySelector(".summary");

  // Display section
  switch (password) {
    case "tj":
      tjSection.style.display = "flex";
      summarySection.style.display = "flex";
      break;
    case "karzelki":
      karzelkiSection.style.display = "flex";
      summarySection.style.display = "flex";
      break;
    case "wachowiak":
      wachowiakSection.style.display = "flex";
      summarySection.style.display = "flex";
      const heart = document.querySelector(".friends__wrapper");
      heart.style.display = "none";
      break;
    case "oryginalny":
      oryginalnySection.style.display = "flex";
      summarySection.style.display = "flex";
      break;
    case "heina":
      heinaSection.style.display = "flex";
      summarySection.style.display = "flex";
      break;
    case "przemyslaw":
      przemyslawSection.style.display = "flex";
      summarySection.style.display = "flex";
      break;
    case "szczepan":
      szczepanSection.style.display = "flex";
      summarySection.style.display = "flex";
      break;
    default:
      alert("Ale we poprawne hasło wpisz");
      break;
  }
}

export default generateSection;
