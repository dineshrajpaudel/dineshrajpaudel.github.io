//class Define
class AddBook {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}
//UI decleration
function UI() {}
//prototype
UI.prototype.addBook = function(book) {
    const list = document.querySelector('#book-data');
    const row = document.createElement('tr');
    row.innerHTML = `<td>${book.title.value}</td>
                 <td>${book.author.value}</td>
                 <td>${book.isbn.value}</td>
                 <td><a href="">X</a></td>`;
    if (title.value == 0 || author.value == 0 || isbn.value == 0) {
        alert("Please fill up the form ");
    } else {
        list.appendChild(row);
    }
    title.value = "  ";
    author.value = "  ";
    isbn.value = "  ";
}

//add event listeners
const form = document.querySelector('.btn-b');
form.addEventListener('click', handleFormSubmit);

function handleFormSubmit(event) {
    let title = document.querySelector('#title');
    let author = document.querySelector('#author');
    let isbn = document.querySelector('#isbn');
    const book = new AddBook(title, author, isbn);
    event.preventDefault();
    const ui = new UI();
    ui.addBook(book);
}