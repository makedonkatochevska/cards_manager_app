const cardList = document.getElementById("list");
const addBtn = document.getElementById("add-product");
const imgInput = document.getElementById("img");
const titleInput = document.getElementById("title");
const descriptionInput = document.getElementById("desc");
const searchInput = document.querySelector(".form-control.search-input");
const searchBtn = document.querySelector(".btn.btn-success.search-btn");

//function to display cards
function displayCards(array) {
  cardList.innerHTML = "";

  array.forEach((card) => {
    renderCards(card);
  });
}

//function to render cards
function renderCards(card) {
  //col container
  const col = document.createElement("div");
  col.id = card.id;
  col.classList.add("col-4", "mb-5");

  //link
  const link = document.createElement("a");
  link.href = "https://google.com";
  link.classList.add("link", "d-flex", "flex-column");

  //img
  const img = document.createElement("img");
  img.classList.add("img-fluid");
  img.src = card.img;

  //content container
  const contentContainer = document.createElement("div");
  contentContainer.classList.add(
    "item-content",
    "p-3",
    "d-flex",
    "flex-column",
    "flex-grow-1"
  );

  //title
  const title = document.createElement("h2");
  title.classList.add("title");
  title.textContent = card.title;

  //paragraph
  const paragraph = document.createElement("p");
  paragraph.classList.add("paragraph");
  paragraph.textContent = card.desc;

  //button
  const btn = document.createElement("button");
  btn.classList.add(
    "btn",
    "btn-danger",
    "del-btn",
    "mt-auto",
    "align-self-end"
  );
  btn.textContent = "Delete";
  btn.dataset.delete = "delete";

  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    e.preventDefault();
    deleteCard(card);
  });

  //append
  contentContainer.append(title, paragraph, btn);
  link.append(img, contentContainer);
  col.append(link);
  cardList.append(col);
}

//function to add new card
function addNewCard() {
  if (
    !imgInput.value.trim() ||
    !titleInput.value.trim() ||
    !descriptionInput.value.trim()
  ) {
    alert("Please enter valid data!");
    return;
  }

  newCard = {
    id: products.length,
    img: imgInput.value.trim(),
    title: titleInput.value.trim(),
    desc: descriptionInput.value.trim(),
  };

  products.push(newCard);
  console.log("new card:", newCard);
  console.log("updated list", products);

  imgInput.value = "";
  titleInput.value = "";
  descriptionInput.value = "";

  displayCards(products);
  $("#myModal").modal("hide");
}

//function to delete card
function deleteCard(card) {
  products = products.filter((product) => product.id !== card.id);

  displayCards(products);

  //update cards ids
  products.forEach((product, index) => {
    product.id = index;
  });

  console.log(products);
}

//search filter function
function searchFilter(searchTerm) {
  const filteredArray = products.filter((product) => {
    return product.title
      .toLocaleLowerCase()
      .includes(searchTerm.toLocaleLowerCase());
  });

  console.log(filteredArray);

  displayCards(filteredArray);
}

//--------EVENTS--------
displayCards(products);

addBtn.addEventListener("click", () => {
  addNewCard();
});

searchBtn.addEventListener("click", () => {
  searchFilter(searchInput.value);
});

searchInput.addEventListener("keyup", () => {
  if (searchInput.value.trim().length === 0) {
    displayCards(products);
  }
});
