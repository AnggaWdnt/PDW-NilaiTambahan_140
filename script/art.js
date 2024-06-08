document.getElementById('toggle-theme').addEventListener('click', () => {
    document.body.toggleAttribute('data-theme', 'dark');
});

document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const artId = params.get('id');

    const cars = {
        '1': {
            title: 'Nissan Skyline',
            description: 'Nissan Skyline adalah mobil sport terkenal dengan mesin turbo dan desain yang menarik.',
            image: './assets/skyline.jpg'
        },
        '2': {
            title: 'BMW',
            description: 'BMW adalah simbol kemewahan dan performa tinggi dengan desain yang elegan.',
            image: './assets/mobilputih.jpg'
        },
        '3': {
            title: 'Mitsubishi Lancer',
            description: 'Mitsubishi Lancer terkenal dengan performanya yang tangguh dan desain yang agresif.',
            image: './assets/Mitsubishi Lancer Evolution.jpg'
        },
        '4': {
            title: 'Mercedes Benz',
            description: 'Toyota GT86 menawarkan kombinasi sempurna antara kenyamanan dan performa.',
            image: './assets/Toyota GT86.jpeg'
        }
    };

    if (cars[artId]) {
        document.getElementById('art-title').textContent = cars[artId].title;
        document.getElementById('art-description').textContent = cars[artId].description;
        document.getElementById('art-image').src = cars[artId].image;
    } else {
        document.getElementById('art-title').textContent = 'Mobil Tidak Ditemukan';
        document.getElementById('art-description').textContent = '';
        document.getElementById('art-image').src = '';
    }
});
