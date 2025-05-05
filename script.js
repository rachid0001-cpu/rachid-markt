// Animation de texte à l'ouverture de la page (machine à écrire avec pause)
window.onload = function () {
  const headerText = document.querySelector("header h1");
  let i = 0;
  const txt = "Bienvenue sur Rachid Markt, découvrez nos meilleures offres !";

  function typeWriter() {
    if (i < txt.length) {
      headerText.innerHTML += txt.charAt(i);
      i++;
      let pause = (i === txt.length) ? 2000 : 100;
      setTimeout(typeWriter, pause);
    }
  }

  typeWriter();

  // Ajoute l'animation des cartes et sections après chargement
  animateVisibleOnScroll();
};

// Animation des cartes et sections au scroll
function animateVisibleOnScroll() {
  window.onscroll = function () {
    const cards = document.querySelectorAll(".card");
    const sections = document.querySelectorAll(".fade-section");

    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        card.classList.add("visible");
      }
    });

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        section.classList.add("visible");
      }
    });
  };
}

// Effet de survol du bouton
document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector("button");

  if (button) {
    button.addEventListener("mouseover", function () {
      this.style.backgroundColor = "#FF4F2F";
      this.style.transform = "scale(1.1)";
      this.style.transition = "all 0.3s ease";
    });

    button.addEventListener("mouseout", function () {
      this.style.backgroundColor = "#FF6F61";
      this.style.transform = "scale(1)";
    });
  }
});
