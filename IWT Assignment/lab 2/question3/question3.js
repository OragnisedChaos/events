// Define global variables
let groceryItems = [];
let totalPrice = 0;
// Define function to add item to list
function addItem() {
  let itemInput = document.getElementById("item");
  let priceInput = document.getElementById("price");
  if (itemInput.value && priceInput.value) {
    // Add item to list
    let item = itemInput.value;
    let price = parseFloat(priceInput.value);
    groceryItems.push({ item: item, price: price });
    // Update total price
    totalPrice += price;
    document.getElementById("totalPrice").textContent =
      totalPrice.toFixed(2);
    // Clear input fields
    itemInput.value = "";
    priceInput.value = "";
    // Render table rows
    renderTableRows();
  } else {
    alert("Please enter both item and price.");
  }
}
// Define function to delete item from list
function deleteItem(index) {
  // Subtract item price from total price
  totalPrice -= groceryItems[index].price;
  document.getElementById("totalPrice").textContent =
    totalPrice.toFixed(2);
  // Remove item from list
  groceryItems.splice(index, 1);
  // Render table rows
  renderTableRows();
}
// Define function to render table rows
function renderTableRows() {
  let tbody = document.querySelector("#groceryList tbody");
  // Clear existing table rows
  tbody.innerHTML = "";
  // Render new table rows
  groceryItems.forEach(function (item, index) {
    let row = tbody.insertRow(-1);
    let itemCell = row.insertCell(0);
    let priceCell = row.insertCell(1);
    let deleteCell = row.insertCell(2);
    itemCell.textContent = item.item;
    priceCell.textContent = item.price.toFixed(2);
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function () {
      deleteItem(index);
    };
    deleteCell.appendChild(deleteButton);
  });
}
