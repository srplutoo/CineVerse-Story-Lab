// TOGGLE MENU
function toggleMenu() {
    document.getElementById('menu').classList.toggle('active');
}

// SEARCH FUNCTION
function searchContent() {
    let query = document.getElementById("searchBar").value.toLowerCase();
    let pages = {
        "cinematography": "pages/cinematography.html",
        "scriptwriting": "pages/scriptwriting.html",
        "direction": "pages/direction.html",
        "editing": "pages/editing.html",
        "movies": "pages/movies.html"
    };

    for (let key in pages) {
        if (key.includes(query)) {
            window.location.href = pages[key];
            return;
        }
    }
    alert("No match found!");
}

// BLOG FUNCTIONALITY
let blogs = [
    { title: "The Art of Cinematography", content: "A deep dive into lighting and camera work." },
    { title: "Scriptwriting Tips", content: "How to craft compelling stories." }
];

function displayBlogs() {
    let blogContainer = document.getElementById("blog-container");
    blogContainer.innerHTML = "";
    blogs.forEach((blog, index) => {
        let post = document.createElement("div");
        post.classList.add("blog-post");
        post.innerHTML = `<h3>${blog.title}</h3><p>${blog.content}</p>`;
        blogContainer.appendChild(post);
    });
}

function addNewBlog() {
    let title = prompt("Enter blog title:");
    let content = prompt("Enter blog content:");
    if (title && content) {
        blogs.push({ title, content });
        displayBlogs();
    }
}

window.onload = displayBlogs;
