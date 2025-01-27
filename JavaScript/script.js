window.addEventListener("load", () => {
    const preloader = document.querySelector(".preloader");
    setTimeout(() => {
      preloader.style.display = "none";
    }, 2000);
  });
  
  const menuLinks = document.querySelectorAll("header ul li a");
  const sections = document.querySelectorAll("section");
  
  menuLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetSection = document.querySelector(link.getAttribute("href"));
      sections.forEach((section) => section.classList.add("hidden"));
      targetSection.classList.remove("hidden");
      window.scrollTo(0, targetSection.offsetTop);
    });
  });