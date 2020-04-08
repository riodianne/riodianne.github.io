const header = document.querySelector("header");
const herobanner = document.querySelector(".herobanner");

const herobannerOptions = {
  rootMargin: "-200px 0px 0px 0px"
};

const herobannerObserver = new IntersectionObserver(function(
  entries,
  herobannerObserver
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      header.classList.add("active");
    } else {
      header.classList.remove("active");
    }
  });
},
herobannerOptions);

herobannerObserver.observe(herobanner);
