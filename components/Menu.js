// This is the data we will be using, study it but don't change anything, yet.

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  <div class="menu">
    <ul>
      {each menu item as an <li>}
    </ul>
  </div>

  The 'menuMaker' takes an array of menu items as its only argument.

  Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array.
  Add those items to the <ul>

  Step 3: Still inside your function, select from the DOM the menu button (the element with a class of 'menu-button').

  Step 4: Add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on div.menu (your div with a 'menu' class).

  Step 5: Don't forget to return your div.menu.

  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.
*/

const menuMaker = function(newMenu) {

  // creating div and adding its class 
  const menu = document.createElement("div");
  menu.classList.add("menu");

  // creating ul and appending it to div
  const itemsList = document.createElement("ul");
  menu.appendChild(itemsList);

  // creating il and appending them to ul (depending on elements in array)
  newMenu.forEach(element => {
    const newItem = document.createElement("li");
    newItem.textContent = element;
    itemsList.appendChild(newItem);
  })

  // callback function for menu button
  function toggleMenu(event) {
    menu.classList.toggle("menu--open");
  }

  // grabbing menu image / button and adding callback to it
  const menuButton = document.querySelector(".menu-button");
  menuButton.addEventListener("click", toggleMenu)

  // returning the menu div
  return menu;

}

// creating a menu list using given array
const menuNew = menuMaker(menuItems);
console.log(menuNew);

// grabbing header element and appending menu to it
const pageHeader = document.querySelector(".header");
console.log(pageHeader);

pageHeader.appendChild(menuNew);
