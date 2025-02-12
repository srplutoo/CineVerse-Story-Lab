// ✅ Toggle Mobile Menu
function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.classList.toggle("active");
}

// ✅ Search Functionality
function searchPosts() {
    let input = document.getElementById("search").value.toLowerCase();
    let articles = document.querySelectorAll("article");

    articles.forEach(article => {
        let title = article.querySelector("h3").innerText.toLowerCase();
        let content = article.querySelector("p").innerText.toLowerCase();
        
        if (title.includes(input) || content.includes(input)) {
            article.style.display = "block";
            highlightText(article, input);
        } else {
            article.style.display = "none";
        }
    });
}

// ✅ Highlight Search Results
function highlightText(article, keyword) {
    if (keyword.trim() === "") return;

    let title = article.querySelector("h3");
    let content = article.querySelector("p");

    title.innerHTML = highlightMatch(title.innerText, keyword);
    content.innerHTML = highlightMatch(content.innerText, keyword);
}

// ✅ Helper Function to Wrap Matching Text
function highlightMatch(text, keyword) {
    let regex = new RegExp(`(${keyword})`, "gi");
    return text.replace(regex, `<span class="highlight">$1</span>`);
}
