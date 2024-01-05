class Book {
    constructor(title, author, genre, cover, pages, read) {
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.cover = cover;
        this.pages = pages;
        this.read = read;
    }
}

let library = [];

function addToLibrary(book) {
    library.push(book);
}

function displayLibrary() {
    const libraryDiv = document.querySelector('.library');
    libraryDiv.innerHTML = '';

    library.forEach(book => {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book-card');

        const coverImage = document.createElement('img');
        coverImage.src = book.cover;
        coverImage.alt = `Cover of ${book.title}`;
        bookDiv.appendChild(coverImage);

        const bookDetails = document.createElement('div');
        bookDetails.classList.add('book-details');
        bookDetails.innerHTML = `
            <h2>${book.title}</h2>
            <p>${book.author}</p>
            <p>${book.genre}</p>
            <p>${book.pages} pages</p>
            <p>${book.read ? 'Read' : 'Not read'}</p>
            <label>
                <input type="checkbox" class="read-checkbox" ${book.read ? 'checked' : ''} onchange="toggleReadStatus(${book.id})">
                Mark as read
            </label>
        `;
        bookDetails.style.display = 'none';
        bookDiv.appendChild(bookDetails);

        coverImage.addEventListener('click', () => {
            bookDetails.style.display = bookDetails.style.display === 'none' ? 'block' : 'none';
        });

        libraryDiv.appendChild(bookDiv);
    });
}

function toggleReadStatus(bookId) {
    const book = library.find(book => book.id === bookId);
    if (book) {
        book.read = !book.read;
    }

    displayLibrary();
}

document.querySelector('#book-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const genre = document.querySelector('#genre').value;
    const cover = document.querySelector('#cover').value;
    const pages = document.querySelector('#pages').value;
    const read = document.querySelector('#read').checked;

    const book = new Book(title, author, genre, cover, pages, read);
    addToLibrary(book);

    displayLibrary();

    e.target.reset();
});

displayLibrary();

let book1 = new Book("To Kill a Mockingbird", "Harper Lee", "Fiction", "img/to_kill_a_mockingbird.jpg", 324, false);
addToLibrary(book1);

let book2 = new Book("The Great Gatsby", "F. Scott Fitzgerald", "Fiction", "img/the_great_gatsby.jpg", 180, false);
addToLibrary(book2);

console.log(library);

displayLibrary();