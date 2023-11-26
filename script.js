function filterCategory(category) {
    // Mendapatkan semua artikel
    var articles = document.querySelectorAll('.grid article');

    // Menampilkan atau menyembunyikan artikel berdasarkan kategori
    articles.forEach(function (article) {
        if (category === 'all' || article.classList.contains(category)) {
            article.style.display = 'block';
        } else {
            article.style.display = 'none';
        }
    });
}
