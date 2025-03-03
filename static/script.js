const button = document.getElementById('change-bg');

button.addEventListener('click', () => {
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#F1C40F', '#8E44AD'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});

// Обработчики событий для других кнопок
document.getElementById('register').addEventListener('click', () => {
    alert('Регистрация еще не реализована.');
});

document.getElementById('show-map').addEventListener('click', () => {
    alert('Показ карты еще не реализован.');
});

document.getElementById('view-history').addEventListener('click', () => {
    alert('Просмотр истории покупок еще не реализован.');
});

document.getElementById('view-shoes').addEventListener('click', () => {
    alert('Просмотр обуви еще не реализован.');
});

