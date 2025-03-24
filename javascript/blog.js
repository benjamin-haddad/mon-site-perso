function filterPosts() {
    const selectedCategory = document.getElementById('category-filter').value;
    const articles = document.querySelectorAll('.article');

    articles.forEach(article => {
        const articleCategory = article.getAttribute('data-category');

        if (selectedCategory === 'all' || selectedCategory === articleCategory) {
            article.style.display = 'block';
        } else {
            article.style.display = 'none';
        }
    });
}
