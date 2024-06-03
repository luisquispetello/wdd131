document.addEventListener("DOMContentLoaded", () => {
  const quoteAPI = "https://api.quotable.io/random";

  // Function to fetch a random quote from the API
  const fetchRandomQuote = async () => {
    try {
      const response = await fetch(quoteAPI);
      return await response.json();
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  };

  // Function to generate and display a new quote on the Home page
  const displayNewQuote = async () => {
    const data = await fetchRandomQuote();
    if (data) {
      document.getElementById("quote").textContent = data.content;
      document.getElementById("author").textContent = data.author;
    }
  };

  // Function to load and display multiple quotes on the All Quotes page
  const displayMultipleQuotes = async () => {
    const quotesGrid = document.querySelector(".quotes-grid");
    quotesGrid.innerHTML = "";

    for (let i = 0; i < 9; i++) {
      const data = await fetchRandomQuote();
      if (data) {
        const quoteCard = document.createElement("div");
        quoteCard.classList.add("quote-card");
        quoteCard.innerHTML = `
                  <p class="font-family-slab">${data.content}</p>
                  <p><em>${data.author}</em></p>
              `;
        quotesGrid.appendChild(quoteCard);
      }
    }
  };

  // Function to handle form submission on the Contact page
  const handleFormSubmission = (event) => {
    event.preventDefault();
    event.target.reset();
  };

  // Function to check if the user is on the All Quotes page
  const isAllQuotesPage = () => document.querySelector(".quotes-grid") !== null;

  // Adding event listeners to buttons and form
  const addEventListeners = () => {
    const newQuoteButton = document.getElementById("new-quote");
    const loadQuotesButton = document.getElementById("load-quotes");
    const quoteForm = document.getElementById("quote-form");

    if (newQuoteButton)
      newQuoteButton.addEventListener("click", displayNewQuote);
    if (loadQuotesButton)
      loadQuotesButton.addEventListener("click", displayMultipleQuotes);
    if (quoteForm) quoteForm.addEventListener("submit", handleFormSubmission);

    // Generate initial quote on Home page load
    if (document.getElementById("quote")) {
      displayNewQuote();
    }

    // Generate initial quotes on All Quotes page load
    if (isAllQuotesPage()) {
      displayMultipleQuotes();
    }
  };

  // Initialize event listeners
  addEventListeners();
});

// Menu
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
