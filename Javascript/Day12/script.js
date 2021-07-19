class toDo {
    constructor(information) {
        this.information = information;
    }
}
class UI {

    //displayInformation
    static displayInformation() {
        const info = Store.getNotes();
        info.forEach((data) => UI.addInfo(data));

    }

    //add info
    static addInfo(todo) {
        const list = document.querySelector('#book-list');
        const row = document.createElement('tr');
        row.innerHTML = `
              <td>#</td>
              <td>${todo.information}</td>
              <td><a href="#" class="edit">Edit</a></td>
              <td><a href="#" class="update">Update</a></td>
              <td><a href="#" class="delete">Delete</a></td>
            `;
        list.appendChild(row);

    }

    //Update note
    static updateNote(el) {
        if (el.classList.contains('update')) {
            console.log("HIII")
            window.location.reload();
        }
    }

    //delete info
    static deleteInfo(el) {
        if (el.classList.contains('delete')) {
            let confirm_delete = confirm("Are you sure you want to delete");
            if (confirm_delete === true) {
                el.parentElement.parentElement.remove();
                UI.showAlert("Note Deleted", "red")
            }
        }
    }

    //clear fields
    static clearFields() {
        document.querySelector('input').value = '';
    }

    //show alert
    static showAlert(message, bg) {
        alert = document.querySelector('.alert');
        let style = alert.style;
        style.background = `${bg}`;
        style.border = '2px solid yellow';
        alert.innerHTML = ` ${message}.`;
        setTimeout(() => (style.background = "none", style.border = "none", alert.innerHTML = ""), 1000);
    }
}


class Store {
    //Get notes
    static getNotes() {
        let notes;
        if (localStorage.getItem('notes') === null) {
            notes = [];
        } else {
            notes = JSON.parse(localStorage.getItem('notes'));
        }
        return notes;
    }

    //Add Note in local storage
    static addNote(todo) {
        const notes = Store.getNotes();
        if (notes.push(todo)) {
            UI.showAlert("Note Added", "green");
        }

        localStorage.setItem("notes", JSON.stringify(notes))
    }

    //Remove Note from local storage
    static removeNote(information) {
        const notes = Store.getNotes();
        notes.forEach((note, index) => {
            if (note.information === information) {
                notes.splice(index, 1);
            }
        });
        localStorage.setItem('notes', JSON.stringify(notes));
    }
    static editNote(information) {
        let input = document.querySelector('input');
        const notes = Store.getNotes();
        notes.forEach((note, index) => {
            if (note.information === information) {
                input.value = information;
                // note.information = input.value;
            }
        });
        localStorage.setItem('notes', JSON.stringify(notes));
    }

    static updateNote(information) {
        let input = document.querySelector('input');
        const notes = Store.getNotes();

        notes.forEach((note, index) => {
            if (note.information === information) {
                note.information = input.value;
            }
        });
        localStorage.setItem('notes', JSON.stringify(notes));
    }
}

document.addEventListener('DOMContentLoaded', UI.displayInformation);

//Print function run while submit button is clicked
const print = (event) => {
    event.preventDefault();
    //validation
    const input = document.querySelector('input').value;
    if (input == '') {
        UI.showAlert("Please enter data first!!!!!!", "yellow")
    } else {
        let todo = new toDo(input);
        Store.addNote(todo);
        UI.addInfo(todo);
        UI.clearFields();

        //  console.log(todo)
    }
}
let Button = document.querySelector('.button');
Button.addEventListener('click', print);

document.querySelector('#book-list').addEventListener('click', (e) => {
    // edit note from UI
    Store.editNote(e.target.parentElement.previousElementSibling.textContent);
    // edit book from Local storage
});

document.querySelector('#book-list').addEventListener('click', (e) => {
    // update note from UI
    UI.updateNote(e.target);
    Store.updateNote(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
    // Update book from Local storage
});


document.querySelector('#book-list').addEventListener('click', (e) => {
    // Remove note from UI
    UI.deleteInfo(e.target);
    Store.removeNote(e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent);
    // Remove book from Local storage
});