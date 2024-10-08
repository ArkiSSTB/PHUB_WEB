function showSection(sectionId) {
    // Получаем все карточки
    const cards = document.querySelectorAll('.card');
    
    // Скрываем все карточки
    cards.forEach(card => {
        card.style.display = 'none';
    });

    // Показываем только карточки с указанным id
    const selectedCards = document.querySelectorAll(`.card[id="${sectionId}"]`);
    selectedCards.forEach(card => {
        card.style.display = 'block';
    });
}

function showAll() {
    // Получаем все карточки
    const cards = document.querySelectorAll('.card');

    // Показываем все карточки
    cards.forEach(card => {
        card.style.display = 'block';
    });
}
