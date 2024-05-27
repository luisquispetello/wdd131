const primaryNav = document.querySelector(".primary-nav");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
  const visibility = primaryNav.getAttribute("data-visible");

  if (visibility === "false") {
    primaryNav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else if (visibility === "true") {
    primaryNav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
});

/////

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
  },
  {
    templeName: "Madrid Spain",
    location: "Madrid, Spain",
    dedicated: "1999, March, 19",
    area: 6000,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/madrid-spain/400x250/madrid-spain-mormon-temple-954942-wallpaper.jpg",
  },
  {
    templeName: "Arequipa Peru",
    location: "Arequipa, Peru",
    dedicated: "15 December 2019",
    area: 60644,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/arequipa-peru/400x250/4-48661c257177c19a0f39a3991b1a7e7aa0338487.jpeg",
  },
  {
    templeName: "Lima Peru Los Olivos Temple",
    location: "Lima, Peru",
    dedicated: "14 January 2024",
    area: 17000,
    imageUrl:
      "https://www.churchofjesuschrist.org/imgs/3f3327a93b9f11eeb2f0eeeeac1e45f6554046d6/full/320%2C/0/default",
  },
];

/////

const container = document.querySelector(".auto-grid");

/* async displayTemples Function */
const displayTemples = (temples) => {
  temples.forEach((temple) => {
    const article = document.createElement("article");
    const h3 = document.createElement("h3");
    const img = document.createElement("img");
    const figcaption1 = document.createElement("figcaption");
    const figcaption2 = document.createElement("figcaption");
    const figcaption3 = document.createElement("figcaption");

    h3.textContent = temple.templeName;
    img.src = temple.imageUrl;
    img.alt = temple.location;
    img.setAttribute = ("loading", "lazy");
    figcaption1.textContent = `Location: ${temple.location}`;
    figcaption2.textContent = `Dedicated: ${temple.dedicated}`;
    figcaption3.textContent = `Size: ${temple.area}`;

    article.appendChild(h3);
    article.appendChild(img);
    article.appendChild(figcaption1);
    article.appendChild(figcaption2);
    article.appendChild(figcaption3);

    container.appendChild(article);
  });
};


const reset = () => {
  container.innerHTML = ''
};

/* filterTemples Function */
const filterTemples = (filter) => {
  reset()
  let filteredTemples;

  switch (filter) {
    case "old":
      filteredTemples = temples.filter(
        (temple) => new Date(temple.dedicated) < new Date(1900, 0, 1)
      );
      break;
    case "new":
      filteredTemples = temples.filter(
        (temple) => new Date(temple.dedicated) > new Date(2000, 0, 1)
      );
      break;
    case "large":
      filteredTemples = temples.filter((temple) => temple.area > 90000);
      break;
    case "small":
      filteredTemples = temples.filter((temple) => temple.area < 10000);
      break;
    default:
      filteredTemples = temples;
  }

  displayTemples(filteredTemples);
};

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", (event) => {
      const filter = event.target.getAttribute("data-filter");
      filterTemples(filter);
  });
});

displayTemples(temples);
