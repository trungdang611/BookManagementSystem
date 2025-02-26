
document.getElementById('searchInput').addEventListener('input', function(event) {
    const query = event.target.value.toLowerCase();
    const cards = document.querySelectorAll('#bookCards .bg-white');

    cards.forEach(function(card) {
        const title = card.querySelector('h5').textContent.toLowerCase();
        const author = card.querySelector('p').textContent.toLowerCase();

        if (title.includes(query) || author.includes(query)) {
            card.style.display = 'block';  // Hiển thị card nếu tìm thấy
        } else {
            card.style.display = 'none';  // Ẩn card nếu không tìm thấy
        }
    });
});