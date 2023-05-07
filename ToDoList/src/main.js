// THIS FUNCTION CREATES A CLOSE BUTTON AND APPENDS IT TO EACH LIST ITEM

// The getElementsByTagName() method returns a collection of child elements with a given tag name.
const myToDoList = document.getElementsByTagName('LI');

// Defining variable for the loop
let i;

// Loops through the all the elements with the tag 'LI'
for (i = 0; i < myToDoList.length; i += 1) {
  const span = document.createElement('SPAN'); // This creates HTML <span> element
  const txt = document.createTextNode('\u00D7'); // This creates TextNode, U+00D7 = MULTIPLICATION SIGN in the browser
  span.className = 'close'; // Adding class name to the created span elements
  span.appendChild(txt); // This appends the MULTIPLICATION SIGN to the text
  myToDoList[i].appendChild(span); // This appends the text to the list
}

// THIS FUNCTIONS HIDES THE CURRENT LIST ITEM WITH THE CLOSE BUTTON

// The getElementsByClassName() method returns a collection of elements with a specified class names
const close = document.getElementsByClassName('close');

// Defining variable for the loop
let j;

for (j = 0; j < close.length; j += 1) { // Loops through the elements with the class name 'close'
  close[i].onclick = function closeItem() { // Calls the function when close button is clicked
    const div = this.parentElement; // This saves a reference to the parent element of this
    div.style.display = 'none'; // hiding the element with display:none
  };
}

// THIS ADDS A 'CHECKED' SYMBOL WHEN CLICKING ON A LIST ITEM

// The querySelector() method returns the first element that matches 'ul' selector.
const list = document.querySelector('ul');

// This adds click event listener to the first ul element
list.addEventListener('click', (ev) => {
  if (ev.target.tagName === 'LI') { // This check if the tagname of the element is 'Li'
    ev.target.classList.toggle('checked'); // If so change the class name of the element to checked
  }
}, false);

// THIS CREATES A NEW LIST TEM WHEN CLICKED ON THE 'ADD' BUTTON

// eslint-disable-next-line no-unused-vars
function newElement() {
  const li = document.createElement('li'); // This creates a li element when button is clicked
  const inputValue = document.getElementById('myInput').value; // This get the user input
  const t = document.createTextNode(inputValue); // This creates TextNode from the input of the user
  li.appendChild(t); // This appends that text node to the list

  // This checks if the user has typed anything
  if (inputValue === '') {
    // eslint-disable-next-line no-alert
    alert('You must write something!'); // This alerts the user that nothing has been typed in the list
  } else { // If the user typed something in appends the element to the list
    document.getElementById('myUL').appendChild(li);
  }

  // This clear the textfield after a new list item has been created
  document.getElementById('myInput').value = '';

  // This creates HTML <span> element
  const span = document.createElement('SPAN');

  // This creates TextNode, U+00D7 = MULTIPLICATION SIGN in the browser
  const txt = document.createTextNode('\u00D7');

  // This add 'close' class name to the created span element
  span.className = 'close';

  // This appends the span element to the text node
  span.appendChild(txt);

  // This appends the element to list
  li.appendChild(span);

  // This loops through the elements with close class
  for (i = 0; i < close.length; i += 1) {
    close[i].onclick = function newListItem() { // This add a new onclick function to the elements
      const div = this.parentElement; // This saves a reference to the parent element of this
      div.style.display = 'none'; // hiding the element with display:none
    };
  }
}
