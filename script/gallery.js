document.getElementById('toggle-theme').addEventListener('click', () => {
    document.body.toggleAttribute('data-theme', 'dark');
});

function viewArt(id) {
    window.location.href = `art.html?id=${id}`;
}
