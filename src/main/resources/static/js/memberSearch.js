document.getElementById('searchInput').addEventListener('input', function(event) {
    const query = event.target.value.toLowerCase();
    const rows = document.querySelectorAll('#userTableBody tr');

    rows.forEach(function(row) {
        const username = row.querySelector('td:nth-child(2)').textContent.toLowerCase();
        const fullName = row.querySelector('td:nth-child(3)').textContent.toLowerCase();
        const email = row.querySelector('td:nth-child(4)').textContent.toLowerCase();

        if (username.includes(query) || fullName.includes(query) || email.includes(query)) {
            row.style.display = 'table-row';  // Hiển thị dòng nếu tìm thấy
        } else {
            row.style.display = 'none';  // Ẩn dòng nếu không tìm thấy
        }
    });
});