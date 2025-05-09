# Cards Manager App

## Table of Contents

<details>
  <summary>Click to expand</summary>
  - 📜 Project Description <br>
  - ⚙️ Technologies Used <br>
  - 🎮 Demo <br>
  - 🔨 Installation <br>
  - 🚀 Usage <br>
  - 📝 Credits <br>
  - 📞 Contact <br>
</details>
---

## Project Description 📜

This **Cards Manager Application** is built to demonstrate mastery of JavaScript DOM manipulation, event handling, and working with arrays. The app displays product cards dynamically using data from an existing `products.js` file and allows users to manage (add, delete, search) these cards directly from the browser interface.

### Key Features:

- Dynamically render cards from an array of product objects.
- Add a new card using a modal input form.
- Delete existing cards, which also updates the underlying array.
- Search cards by title using a dedicated search input and button.
- Keep card IDs consistent after deletion to avoid duplication issues.
- All card rendering is handled by a reusable `renderCard()` function.

This exercise focuses on **JavaScript fundamentals** like loops, DOM manipulation, modals, forms, arrays, and event listeners.

---

## Technologies Used ⚙️

- ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
- ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
- ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
- ![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=flat-square&logo=bootstrap&logoColor=white)
- ![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white)
- ![LocalStorage](https://img.shields.io/badge/LocalStorage-323330?style=flat-square&logo=Google%20Chrome&logoColor=white)

---

## Demo 🎮

You can try out the Age Calculator by visiting the live demo link below:

- [Live Demo](https://cards-manager-app-makedonkat.netlify.app/)

---

## Installation 🔨

To run these exercises locally, follow these steps:

### Steps to Install

1. Clone the repository:
   ```bash
   git clone https://github.com/makedonkatochevska/cards_manager_app.git .
   ```
2. Open the index.html file into the browser of choice.

---

## Usage 🚀

### Managing Cards in the Application

#### 1. Display Initial Cards

- On page load, the app loops through the `products` array from `products.js`.
- For each item, it dynamically renders a card into the `div` with `id="list"` using the `renderCard()` function.

#### 2. Add a New Card

- Click the **"+"** button to open the Bootstrap modal form.
- Fill out all input fields (title, description, etc.).
- Click the **"Add"** button:
  - The new card is added to the DOM inside `#list`.
  - Input values are cleared.
  - An object is created and pushed into the `products` array with a new ID based on `products.length`.

#### 3. Delete a Card

- Click the **"Delete"** button on any card.
- The card is removed from the HTML and also from the `products` array.
- After deletion, the app reindexes all card IDs to prevent ID conflicts when adding new cards.

#### 4. Search Cards

- Enter a title in the search input field and click the **"Search"** button.
- Cards that match the title will be displayed; all others will be hidden.

#### 5. Reuse the Render Function

- The same `renderCard()` function is used throughout:
  - When displaying the initial cards
  - After adding a new card
  - After deleting a card
  - When rendering filtered search results

---

## Credits 📝

This project was created as part of a JavaScript DOM and logic practice challenge. The starter files were provided with predefined product data, and the core logic was built using vanilla JavaScript, Bootstrap for modals, and DOM-based events.

---

## Contact 📞

📫 You can reach me through email at [makedonkatochevska@gmail.com](mailto:makedonkatochevska@gmail.com) or follow me on:

- [LinkedIn](https://www.linkedin.com/in/makedonka-tochevska)
- [GitHub](https://github.com/makedonkatochevska)
