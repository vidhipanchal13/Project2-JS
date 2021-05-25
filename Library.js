//Constructor
function Book(name1, author, type) {
  this.name1 = name1;
  this.author = author;
  this.type = type;
}

// Display Constructor
function Display() {
    
}

//Add methods to display prototype
Display.prototype.add = function (book) {
  console.log("Adding to UI");
  tableBody = document.getElementById("tableBody");
  let uiString = `  <tr>
                        <td>${book.name1}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                    </tr>`;

  tableBody.innerHTML += uiString;
};

//Implement the clear function
Display.prototype.Clear = function () {
  let libraryForm = document.getElementById("libraryForm");
  libraryForm.reset();
};

//Implement the validate function
Display.prototype.validate = function (book) {
  if (book.name1.length < 2 || book.author.length < 2) {
    return false;
  } else {
    return true;
  }
};

//Display show function
Display.prototype.show = function (type, displayMessage) {
  let message = document.getElementById("message");
  message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                            <strong>Message : </strong>  ${displayMessage}
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                       </div>`;

  setTimeout(function () {
    message.innerHTML = "";
  }, 2000);
};

//Add Submit event listener to form libraryForm
let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener("submit", libraryFormSubmit);

function libraryFormSubmit(e) {
  console.log("you have submitted library form");
  let name1 = document.getElementById("bookName").value;
  let author = document.getElementById("author").value;

  // grab the fiction programming and cooking
  let fiction = document.getElementById("fiction");
  let programming = document.getElementById("programming");
  let cooking = document.getElementById("cooking");
  let type;

  if (fiction.checked) {
    type = fiction.value;
  } else if (programming.checked) {
    type = programming.value;
  } else if (cooking.checked) {
    type = cooking.value;
  }

  let book = new Book(name1, author, type);
  console.log(book);

  let display = new Display();

  if (display.validate(book)) {
    display.add(book);
    display.Clear();
    display.show("success", "Your book hase been successfully added");
  } else {
    //Show error to the user
    display.show("danger", "You can not add this book");
  }
  display.Clear();
  e.preventDefault();
}
