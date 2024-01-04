class Book {
    constructor(title, author, genre, cover, pages, read) { // Add the 'read' parameter to the constructor
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
    libraryDiv.innerHTML = ''; // Clear the library div

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
        `;
        bookDetails.style.display = 'none'; // Hide the book details initially
        bookDiv.appendChild(bookDetails);

        // Show the book details when the cover image is clicked
        coverImage.addEventListener('click', () => {
            bookDetails.style.display = bookDetails.style.display === 'none' ? 'block' : 'none';
        });

        libraryDiv.appendChild(bookDiv);
    });
}
document.querySelector('#book-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the form from submitting normally

    // Get the book details from the form
    // Get the book details from the form
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const genre = document.querySelector('#genre').value;
    const cover = document.querySelector('#cover').value;
    const pages = document.querySelector('#pages').value;
    const read = document.querySelector('#read').checked;
    // Create a new book and add it to the library
    const book = new Book(title, author, genre, cover, pages, read);
    addToLibrary(book);

    // Display the updated library
    displayLibrary();

    // Clear the form
    e.target.reset();
});

// display the library
displayLibrary();

let book1 = new Book("To Kill a Mockingbird", "Harper Lee", "Fiction", "img/to_kill_a_mockingbird.jpg", 324, false);
addToLibrary(book1);

console.log(library);

// display the library
displayLibrary();