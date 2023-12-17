const scrollto = (section) => {
    document.querySelector(`#${section}`).scrollIntoView({
        behavior: 'smooth'
    });
}

document.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 0) {
    header.classList.add("scrolled");
    console.log("scrolled added");
  } else {
    header.classList.remove("scrolled");
    console.log("scrolled removed");
  }
});
