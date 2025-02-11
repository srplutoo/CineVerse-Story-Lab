function searchPosts() {
    let input = document.getElementById("search").value.toLowerCase();
    let articles = document.querySelectorAll(".blog article");

    articles.forEach(article => {
        let title = article.innerText.toLowerCase();
        if (title.includes(input)) {
            article.style.display = "block";
        } else {
            article.style.display = "none";
        }
    });
}
