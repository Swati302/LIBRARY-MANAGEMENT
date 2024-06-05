document.getElementById('userIcon').addEventListener('click', function() {
    document.getElementById('loginContainer').style.display = 'block';
    document.getElementById('userLoginSection').style.display = 'block';
    document.getElementById('adminLoginSection').style.display = 'none';
});

document.getElementById('adminIcon').addEventListener('click', function() {
    document.getElementById('loginContainer').style.display = 'block';
    document.getElementById('adminLoginSection').style.display = 'block';
    document.getElementById('userLoginSection').style.display = 'none';
});

document.getElementById('userLoginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('userEmail').value;
    const password = document.getElementById('userPassword').value;

    // Example validation
    if (validateEmail(email)) {
        window.location.href = 'user_home.html';
    } else {
        alert('Invalid email or password for user login.');
    }
});

document.getElementById('adminLoginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('adminEmail').value;
    const password = document.getElementById('adminPassword').value;

    // Example validation
    if (validateEmail(email)) {
        window.location.href = 'admin_home.html';
    } else {
        alert('Invalid email or password for admin login.');
    }
});

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}
// script.js

// Function to highlight clicked icon
function highlightIcon(id) {
    // Remove highlight from all icons
    var icons = document.querySelectorAll('nav ul li a i');
    icons.forEach(function(icon) {
        icon.classList.remove('nav-highlight');
    });

    // Highlight clicked icon
    document.getElementById(id).querySelector('i').classList.add('nav-highlight');
}
// Sample database of books
let books = [
    { title: "Book1", author: "Author1", publicationYear: 2000, isbn: "ISBN1", available: true },
    { title: "Book2", author: "Author2", publicationYear: 2010, isbn: "ISBN2", available: false },
    { title: "Book3", author: "Author3", publicationYear: 2020, isbn: "ISBN3", available: true }
];

// Function to search for a book
function searchBook() {
    let searchCriteria = document.getElementById("searchInput").value.toLowerCase();
    let bookDetails = document.getElementById("bookDetails");
    let feedback = document.getElementById("feedback");

    // Reset book details and feedback
    bookDetails.style.display = "none";
    feedback.textContent = "";

    // Find the book in the database
    let foundBook = books.find(book => {
        return book.title.toLowerCase() === searchCriteria ||
            book.author.toLowerCase() === searchCriteria ||
            book.isbn.toLowerCase() === searchCriteria;
    });

    if (foundBook) {
        // Populate input fields with book details
        document.getElementById("newTitle").value = foundBook.title;
        document.getElementById("newAuthor").value = foundBook.author;
        document.getElementById("newYear").value = foundBook.publicationYear;
        document.getElementById("newISBN").value = foundBook.isbn;
        document.getElementById("availability").checked = foundBook.available;

        // Display book details section
        bookDetails.style.display = "block";
    } else {
        // Book not found
        feedback.textContent = "Book not found.";
    }
}

// Function to update book information
function updateBook() {
    let newTitle = document.getElementById("newTitle").value;
    let newAuthor = document.getElementById("newAuthor").value;
    let newYear = document.getElementById("newYear").value;
    let newISBN = document.getElementById("newISBN").value;
    let availability = document.getElementById("availability").checked;

    
    document.getElementById("feedback").textContent = "Book information updated successfully!";
}
