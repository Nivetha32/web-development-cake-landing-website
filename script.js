document.addEventListener('DOMContentLoaded', () => {
    // Filter cake items based on category
    const categoryButtons = document.querySelectorAll('.category-btn');
    const cakeItems = document.querySelectorAll('.cake-item');

    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.textContent.toLowerCase();

            // Remove active class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            // Show/Hide cake items based on selected category
            cakeItems.forEach(item => {
                if (category === 'all' || item.dataset.category === category) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Add hover effect to cake items
    cakeItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.transform = 'scale(1.05)';
            item.style.boxShadow = '0 8px 16px rgba(0,0,0,0.3)';
        });

        item.addEventListener('mouseout', () => {
            item.style.transform = 'scale(1)';
            item.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
        });
    });
});






