import BookClass from './class.js';

export default class Library {
  constructor() {
    this.bookAddition = document.getElementById('book-addition');
    this.titleInput = document.getElementById('title');
    this.authorInput = document.getElementById('author');
    this.addBtn = document.getElementById('form-btn');
    this.booksData = [];
  }

  removeListBook(book) {
    const newData = this.booksData.filter((element) => element !== book);
    this.booksData = newData;
  }

  booksGetLocal() {
    const localBook = JSON.parse(localStorage.getItem('books'));
    this.booksData = localBook;
  }

  booksSetLocal() {
    localStorage.setItem('books', JSON.stringify(this.booksData));
  }

  removeBook(removeBtn, book) {
    removeBtn.addEventListener('click', () => {
      removeBtn.parentElement.remove();
      this.removeListBook(book);
      this.setBooksLocal();
    });
  }

  createElement(book) {
    const div = document.createElement('div');
    const bookTitle = document.createElement('p');
    const bookAuthor = document.createElement('p');
    const by = document.createElement('p');
    const removeBtn = document.createElement('button');

    this.bookAddition.append(div);
    div.append(bookTitle, by, bookAuthor, removeBtn);

    removeBtn.classList.add('remove-btn');
    removeBtn.textContent = 'Remove';
    bookTitle.textContent = book.title;
    bookAuthor.textContent = book.author;
    by.textContent = 'by';
    this.removeBook(removeBtn, book);
  }

  addBook() {
    this.addBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (
        (this.titleInput.value === '' || this, this.authorInput.value === '')
      ) {
        return;
      }
      const book = new BookClass(this.titleInput.value, this.authorInput.value);
      this.booksData.push(book);
      this.createElement(book);
      this.setBooksLocal();
      this.titleInput.value = '';
      this.authorInput.value = '';
    });
  }

  display() {
    window.addEventListener('load', (e) => {
      if (localStorage.getItem('books') === null) {
        e.preventDefault();
      } else {
        this.booksGetLocal();
        this.booksData.forEach((book) => {
          this.createElement(book);
        });
      }
    });
  }
}
